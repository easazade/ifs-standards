import { generate } from 'json-schema-faker';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ENTITIES_DIR = 'src/entities';

const schemaDirs = await readdir(ENTITIES_DIR, { withFileTypes: true });
for (const schemaDir of schemaDirs) {
  const schemaName = schemaDir.name;
  const schemaFilePath = join(ENTITIES_DIR, schemaName, `${schemaName}.schema.json`);
  const exampleObjectPath = join(ENTITIES_DIR, schemaName, `examples/${schemaName}.json`);
  console.log(`Generating example for schema: ${schemaFilePath}`);
  const schemaFileContent = await readFile(schemaFilePath);

  const fakeObject = generate(schemaFileContent);

  // Node's writeFile creates the file, but not missing parent folders (like Dart's File.writeAsString without recursive directory creation).
  await mkdir(dirname(exampleObjectPath), { recursive: true });
  await writeFile(exampleObjectPath, JSON.stringify(fakeObject, null, 2));
}
