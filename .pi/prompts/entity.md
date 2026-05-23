---
description: Create an IFS entity schema and documentation
argument-hint: "<entity-name> [entity specification]"
---

Create a new IFS entity named `$1`.

Initial entity specification:

```text
${@:2}
```

## Goal

Create these files:

- `src/entities/<kebab-case-entity-name>/<kebab-case-entity-name>.schema.json`
- `src/entities/<kebab-case-entity-name>/<kebab-case-entity-name>.mdx`

Use the existing entity files in `src/entities/` as style references before creating new files.

## Interaction flow

Do not create files immediately. First interview the user in one batch so `pi-questions-helper` can extract every question and help the user answer them at once.

Important interaction rules:

- In the first assistant response, ask all needed questions together as a numbered list.
- After the numbered questions, stop and wait for the user's next message.
- Do not create files in the first response.
- The next user message may be a `pi-questions-helper` draft such as "Here are my answers to your questions:". Parse those answers.
- If answers are sufficient and the user granted final approval, proceed directly to file creation.
- If required answers are missing or ambiguous, ask only the missing follow-up questions and wait.
- If the user did not grant final approval, present the final property plan and ask for approval before writing files.
- If project rules require a trace footer, include it after the numbered questions.

### Step 1: First response questionnaire

Briefly restate what you understand about the entity from the name and specification, then ask this full numbered questionnaire and wait:

1. Is this meaning correct? If not, what should change?
2. What user-defined properties should this entity include? Reply with one property per line using `name: type - description`, or say `none`.
3. Which of those user-defined properties are required? List names, or say `infer` / `none`.
4. Should I intelligently infer recommended IFS fields, required properties, and possible relations from the entity purpose? Reply `yes` or `no`.
5. Should the schema be strict with `additionalProperties: false`, or flexible with `additionalProperties: true`? Reply `strict` or `flexible`.
6. Do you approve me to create the files immediately after applying your answers and any requested inference? Reply `yes` or `no`.

Accepted property examples:

- `id: string - globally unique entity identifier`
- `createdAt: string(date-time) - creation timestamp`
- `stewardIds: array<string> - stewards responsible for this entity`
- `permissions: array<Permission> - permission entities related to this entity`
- `owner: Member - member entity that owns this entity`
- `status: enum(draft, active, revoked) - lifecycle state`

### Step 2: Parse the answer batch

After the user answers:

1. Parse each property name, type, format/enum/items if present, and description.
2. For any `object`, `array<object>`, PascalCase type, or description suggesting another entity, check `src/entities/` for a matching entity schema before writing files. Match both singular and plural names, e.g. `permissions` -> `permission`, `roles` -> `role`.
3. If the referenced entity exists, use a JSON Schema `$ref` to that entity schema `$id`. If the entity does not exist but the user says to assume it exists or it is clearly planned, use the canonical future `$id`: `https://ifs-standards.org/schemas/v1/entities/<kebab-case-entity-name>.schema.json`.
4. If a property is just arbitrary embedded object data and not an entity relationship, keep it as `type: object` with appropriate `additionalProperties`.
5. If entity-reference intent is ambiguous, ask a concise follow-up before writing files.
6. If the user answered `yes` to inference:
   - Think through the entity in the IFS context.
   - Add likely required fields unless contradicted by the user.
   - Add useful optional fields unless contradicted by the user.
   - Add possible relations to other existing entities under `src/entities/` when useful.
   - Explain inferred fields and relations in the final report.
7. If the user answered `no` to inference:
   - Use only user-provided properties, plus minimal schema metadata.
8. If the user approved immediate creation, create the files.
9. If the user did not approve immediate creation, show the final property plan and ask for approval.

### Step 3: Create files

Only after approval:

1. Create the entity directory using kebab-case.
2. Create the JSON Schema file.
3. Create the MDX documentation file.

## JSON Schema rules

- Use JSON Schema draft 2020-12.
- Set `$schema` to `https://json-schema.org/draft/2020-12/schema`.
- Set `$id` to `https://ifs-standards.org/schemas/v1/entities/<kebab-case-entity-name>.schema.json`.
- Use a human-readable `title` in PascalCase / title case.
- Set `type` to `object`.
- Include `additionalProperties` according to the entity need; default to `true` unless the user asks for a strict schema.
- Convert collected properties into valid JSON Schema `properties`.
- For entity references, prefer absolute `$ref` values matching schema `$id`, not relative file paths. Example: `"$ref": "https://ifs-standards.org/schemas/v1/entities/permission.schema.json"`.
- For `array<EntityName>` or plural entity properties, put the `$ref` inside `items`. Example: `"permissions": { "type": "array", "items": { "$ref": "https://ifs-standards.org/schemas/v1/entities/permission.schema.json" } }`.
- For single entity-object properties, use direct `$ref`. Example: `"owner": { "$ref": "https://ifs-standards.org/schemas/v1/entities/member.schema.json" }`.
- If keeping an embedded object instead of an entity reference, include `type: "object"` and document why it is not a `$ref`.
- Include a `required` array based on user instructions and approved inferred required fields.
- Prefer clear descriptions for every property.

## MDX documentation rules

The MDX file should document:

- Entity name
- Purpose
- IFS context and role
- Properties table
- Required fields
- Relationships to other entities, if any
- Example JSON object

## Output after creation

After writing files, report:

- Created files
- Final properties
- Required fields
- Any inferred fields or relations
