import { createRemoteResolver, generate } from 'json-schema-faker';
import { access, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';

const ENTITIES_DIR = 'src/entities';
const SCHEMA_BASE_PATH = '/schemas/v1/entities/';

const schemaResolutionAttempts = new Map();
const localSchemaById = await indexLocalSchemas(ENTITIES_DIR);
const remoteSchemaResolver = createRemoteResolver();

const schemaDirs = await readdir(ENTITIES_DIR, { withFileTypes: true });
for (const schemaDir of schemaDirs) {
  if (!schemaDir.isDirectory()) {
    continue;
  }

  const schemaName = schemaDir.name;
  const schemaFilePath = join(ENTITIES_DIR, schemaName, `${schemaName}.schema.json`);
  const exampleObjectPath = join(ENTITIES_DIR, schemaName, `examples/${schemaName}.json`);
  console.log(`Generating example for schema: ${schemaFilePath}`);

  try {
    const schemaFileContent = await readFile(schemaFilePath, 'utf8');

    // json-schema-faker needs a parsed schema object, and generate() returns a Promise.
    const schema = JSON.parse(schemaFileContent);
    const fakeObject = await generate(schema, { refResolver: resolveLocalSchemaReferenceFirst });

    // Node's writeFile creates the file, but not missing parent folders (like Dart's File.writeAsString without recursive directory creation).
    await mkdir(dirname(exampleObjectPath), { recursive: true });
    await writeFile(exampleObjectPath, JSON.stringify(fakeObject, null, 2));
  } catch (error) {
    console.error(formatExampleGenerationError(schemaFilePath, error));
    process.exit(1);
  }
}

// Custom resolver mirrors hosted schema URLs to repo files before network fallback.
async function resolveLocalSchemaReferenceFirst(refUrl) {
  const attempts = getResolutionAttempts(refUrl);
  attempts.localPaths = localSchemaCandidates(refUrl);

  for (const localPath of attempts.localPaths) {
    if (await fileExists(localPath)) {
      attempts.usedLocalPath = localPath;
      return JSON.parse(await readFile(localPath, 'utf8'));
    }
  }

  attempts.usedRemote = true;

  try {
    return await remoteSchemaResolver(refUrl);
  } catch (error) {
    if (error && typeof error === 'object') {
      error.source = refUrl;
    }

    throw error;
  }
}

async function indexLocalSchemas(rootDir) {
  const schemaById = new Map();
  const entries = await readdir(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const schemaPath = join(rootDir, entry.name, `${entry.name}.schema.json`);

    try {
      const schema = JSON.parse(await readFile(schemaPath, 'utf8'));

      if (schema.$id) {
        schemaById.set(schema.$id, schemaPath);
      }
    } catch {
      // Skip missing/invalid schema files here; generation step reports actual failures.
    }
  }

  return schemaById;
}

function localSchemaCandidates(refUrl) {
  const candidates = [];
  const refUrlWithoutHash = stripHash(refUrl);
  const indexedPath = localSchemaById.get(refUrlWithoutHash);

  if (indexedPath) {
    candidates.push(indexedPath);
  }

  try {
    const { pathname } = new URL(refUrlWithoutHash);

    if (pathname.startsWith(SCHEMA_BASE_PATH)) {
      const schemaFileName = basename(pathname);
      const schemaName = schemaFileName.replace(/\.schema\.json$/, '');
      candidates.push(join(ENTITIES_DIR, schemaName, schemaFileName));
    }
  } catch {
    // URL parser only runs for HTTP refs; keep guard for clear failure.
  }

  return [...new Set(candidates)];
}

function formatExampleGenerationError(schemaFilePath, error) {
  const refUrl = extractRefUrl(error);
  const attempts = refUrl ? schemaResolutionAttempts.get(refUrl) : undefined;
  const lines = [
    '',
    `Failed to generate valid example from ${schemaFilePath}.`,
    'Resolution behavior: checked local schema files first, then fell back to the remote $ref URL.',
  ];

  if (refUrl) {
    lines.push(`Reference: ${refUrl}`);
  }

  if (attempts) {
    lines.push(
      `Local lookup: ${attempts.usedLocalPath ? `used ${attempts.usedLocalPath}` : `not found (${attempts.localPaths.join(', ') || 'no local candidates'})`}`
    );
  }

  if (attempts?.usedLocalPath) {
    lines.push('Remote lookup: skipped because local schema file was found.');
  } else if (attempts?.usedRemote) {
    lines.push(`Remote lookup: failed${refUrl ? ` (${refUrl})` : ''}.`);
  }

  lines.push(
    `Why failed: ${error?.message || error}`,
    'Fix: add the referenced schema locally, fix the $ref URL/path, or make the remote schema reachable.'
  );

  return lines.join('\n');
}

function extractRefUrl(error) {
  const message = error?.message || '';
  const unresolvedRefMatch = message.match(/Unresolved \$ref: (\S+)/);
  const fetchMatch = message.match(/(?:fetch|schema from) (https?:\/\/\S+)/);

  return error?.source || unresolvedRefMatch?.[1] || fetchMatch?.[1];
}

function getResolutionAttempts(url) {
  if (!schemaResolutionAttempts.has(url)) {
    schemaResolutionAttempts.set(url, { localPaths: [], usedLocalPath: undefined, usedRemote: false });
  }

  return schemaResolutionAttempts.get(url);
}

function stripHash(url) {
  return url.split('#')[0];
}

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
