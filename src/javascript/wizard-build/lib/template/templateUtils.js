import fs from 'fs';
import path from 'path';
import { Logger } from '../log/logger.js';

export function readFile(templateSrc) {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const templatePath = path.join(__dirname, `../../templates/${templateSrc}`);

    if (!fs.existsSync(templatePath)) {
        Logger.error(`Template file not found: ${templatePath}`);
        return null;
    }

    return fs.readFileSync(templatePath, 'utf-8');
}

export function writeFile(destinationPath, content) {
    const dir = path.dirname(destinationPath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(destinationPath, content);
}