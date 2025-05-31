import path from 'path';
import { Logger } from '../log/logger.js';
import { readFile, writeFile } from './templateUtils.js';
import {
    baseTemplateLibrary,
    databaseTemplateLibrary,
    frameworkTemplateLibrary,
    lintTemplateLibrary,
    ormTemplateLibrary,
    testTemplateLibrary
} from './data/index.js';

export class TemplateManager {
    constructor(project) {
        this.project = project;
        this.__dirname = path.dirname(new URL(import.meta.url).pathname);
        this.__templateDir = path.join(this.__dirname, '../../templates');
    }

    init() {
        Logger.info('Creating template files...');

        this.createBaseFiles();
        this.project.useTypescript && this.createTsConfigFile();
        this.createFrameworkFiles();
        this.createDatabaseFiles();
        this.createOrmFiles();
        this.createLintFiles();
        this.createTestFiles();

        Logger.success('Template files created!');
    }

    createTemplateFile(templateSrc, templateDest) {
        try {
            const content = readFile(templateSrc);
            if (content === null) {
                throw new Error(`Content for ${templateSrc} could not be read.`);
            }

            const destinationPath = path.join(this.project.path, templateDest);
            writeFile(destinationPath, content);
        } catch (err) {
            Logger.error(`Failed to create ${templateDest} from template.`);
            Logger.log(err);
        }
    }

    createTemplateFilesFromList(templateList) {
        if (!Array.isArray(templateList)) {
            Logger.error('Template list is undefined or not an array.');
            return;
        }

        templateList.forEach(({ src, dest }) => this.createTemplateFile(src, dest));
    }

    createTemplateFilesFromLibrary(library, libraryKey) {
        let templateKey = libraryKey.toLowerCase();

        const templates = this.project.useTypescript ? library[`${templateKey}ts`] || library[templateKey] : library[templateKey];

        if (templates) {
            this.createTemplateFilesFromList(templates);
        } else {
            Logger.warn(`No templates found for ${library}.`);
        }
    }

    createBaseFiles() {
        this.createTemplateFilesFromLibrary(baseTemplateLibrary, 'readme');
        this.createTemplateFilesFromLibrary(baseTemplateLibrary, 'gitignore');
        this.createTemplateFilesFromLibrary(baseTemplateLibrary, 'env');
    }

    createTsConfigFile() {
        this.createTemplateFile('config/tsconfig.json', 'tsconfig.json');
    }

    createFrameworkFiles() {
        this.createTemplateFilesFromLibrary(frameworkTemplateLibrary, this.project.framework);
    }

    createDatabaseFiles() {
        this.createTemplateFilesFromLibrary(databaseTemplateLibrary, this.project.database);
    }

    createOrmFiles() {
        this.createTemplateFilesFromLibrary(ormTemplateLibrary, this.project.orm);
    }

    createLintFiles() {
        this.createTemplateFilesFromLibrary(lintTemplateLibrary, this.project.lint);
    }

    createTestFiles() {
        this.createTemplateFilesFromLibrary(testTemplateLibrary, this.project.test);
    }
}
