#!/usr/bin/env node
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const componentsPath = path.join(__dirname, 'components.json');

const data = JSON.parse(readFileSync(componentsPath, 'utf8'));
const names = Object.keys(data.components || {}).sort((left, right) => left.localeCompare(right));

process.stdout.write(`${JSON.stringify(names, null, 2)}\n`);
