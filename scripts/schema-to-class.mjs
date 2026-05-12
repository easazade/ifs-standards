import { compileFromFile } from 'json-schema-to-typescript';
import { readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const ENTITIES_DIR = 'src/entities';

let schemas = await readdir(ENTITIES_DIR, { withFileTypes: true });

for (const schemaDir of schemas) {
  const schemaName = schemaDir.name;
  const schemaFilePath = join(ENTITIES_DIR, schemaName, `${schemaName}.schema.json`);
  const interfaceFilePath = join(ENTITIES_DIR, schemaName, `${schemaName}.ts`);
  console.log(schemaFilePath);

  const ts = await compileFromFile(schemaFilePath, {
    bannerComment: '// GENERATED FOR SCENARIO TESTING PURPOSES. DO NOT MODIFY BY HAND',
  });

  await writeFile(interfaceFilePath, ts);
}
