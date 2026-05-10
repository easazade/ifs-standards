import { describe, expect, test } from 'vitest';
import { readFileSync } from 'node:fs';
import { createAjv } from './utils/createAjv.js';

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

describe('protocol.schema.json', () => {
  const ajv = createAjv();

  const schema = readJson('src/entities/protocol/protocol.schema.json');
  const validate = ajv.compile(schema);

  test('valid protocol example passes', () => {
    const data = readJson('src/entities/protocol/examples/valid.example.json');

    const isValid = validate(data);

    expect(validate.errors).toBeNull();
    expect(isValid).toBe(true);
  });

  // test('invalid user example fails', () => {
  //   const data = readJson('entities/user/examples/invalid-user.json');
  //
  //   const isValid = validate(data);
  //
  //   expect(isValid).toBe(false);
  //   expect(validate.errors).not.toBeNull();
  // });
});
