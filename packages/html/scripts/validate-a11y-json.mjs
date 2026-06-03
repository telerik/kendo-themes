/* eslint-disable no-console */
import { readFileSync } from "fs";
import { glob } from "glob";
import Ajv from "ajv";

const cwd = new URL("..", import.meta.url).pathname;
const schema = JSON.parse(readFileSync(`${cwd}/schema/accessibility.schema.json`, "utf-8"));
const validate = new Ajv().compile(schema);

const files = await glob("src/**/behavior/accessibility.json", { cwd });
let failed = 0;

for (const file of files) {
  const data = JSON.parse(readFileSync(`${cwd}/${file}`, "utf-8"));
  if (!validate(data)) {
    const messages = validate.errors.map((e) => `    ${e.instancePath} ${e.message}`).join("\n");
    console.error(`✗ ${file}:\n${messages}`);
    failed++;
  }
}

if (failed > 0) {
  console.error(`\n${failed} file(s) failed validation.`);
  process.exit(1);
} else {
  console.log(`✓ All ${files.length} accessibility JSON files are valid.`);
}
