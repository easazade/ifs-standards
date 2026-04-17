#!/bin/bash
# Sync tokens from tokens.json to all .pen files in design/
# Run this at the start of each session when working with .pen files

JSON_FILE="design/tokens.json"

if [ ! -f "$JSON_FILE" ]; then
  echo "Error: $JSON_FILE not found"
  exit 1
fi

# Find all .pen files
PEN_FILES=$(find design -name "*.pen" -type f)

if [ -z "$PEN_FILES" ]; then
  echo "No .pen files found in design/"
  exit 1
fi

# Read tokens.json
node -e "
const fs = require('fs');
const tokens = JSON.parse(fs.readFileSync('$JSON_FILE', 'utf8')).variables;

// Determine type based on key and value
function getType(key, value) {
  if (key.includes('color')) return 'color';
  if (key.includes('font-family')) return 'string';
  if (key.includes('font-code')) return 'string';
  if (typeof value === 'number') return 'number';
  return 'string';
}

// Build variables object in pen format
const vars = {};
Object.entries(tokens).forEach(([key, value]) => {
  vars[key] = {
    type: getType(key, value),
    value: value
  };
});

// Output as JSON string for bash
console.log(JSON.stringify(vars));
" > /tmp/tokens_vars.json

VARS_JSON=$(cat /tmp/tokens_vars.json)

# Update each .pen file
for pen_file in $PEN_FILES; do
  echo "Syncing tokens to $pen_file"
  
  node -e "
const fs = require('fs');
const penFile = '$pen_file';
const newVars = JSON.parse('$VARS_JSON');

const pen = JSON.parse(fs.readFileSync(penFile, 'utf8'));
pen.variables = newVars;
fs.writeFileSync(penFile, JSON.stringify(pen, null, 2));
console.log('Updated: ' + penFile);
"
done

echo "Done syncing tokens to all .pen files"