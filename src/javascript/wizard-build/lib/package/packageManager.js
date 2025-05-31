import fs from 'fs';
import path from 'path';
import { executeCommand } from '../utils.js';
import { Logger } from '../log/logger.js';

export class PackageManager {
    constructor(project) {
        this.project = project;
        this.packageJsonPath = path.join(this.project.path, 'package.json');
    }

    init() {
        this.createNodeProject();
        this.createPackageFile();
    }

    createNodeProject() {
        Logger.info('Initializing Node project...');

        try {
            fs.mkdirSync(this.project.path, { recursive: true });
            executeCommand('npm init -y', this.project.path, { showOutput: false });
        } catch (err) {
            Logger.error('Failed to initialize Node project:', err.message);
        }

        Logger.success('Node project initialized!');
    }

    createPackageFile() {
        Logger.info('Setting up package.json...');

        try {
            const packageJson = this.getPackageJson();
            fs.writeFileSync(this.packageJsonPath, JSON.stringify(packageJson, null, 2));
            Logger.success('package.json set up successfully!');
        } catch (err) {
            Logger.error('Failed to create package.json:', err.message);
        }
    }

    getPackageJson() {
        const packageJson = {
            type: "module",
            description: "Backend project generated with Backend CLI",
            main: `src/${this.project.useTypescript ? 'index.ts' : 'index.js'}`,
            license: "MIT",
            scripts: this.getScripts(),
        };

        return packageJson;
    }

    getScripts() {
        const scripts = {
            start: 'node dist/index.js',
            dev: this.project.useTypescript ? 'tsx watch src/index.ts' : 'node src/index.js',
            build: this.project.useTypescript ? 'tsc' : undefined,
            watch: this.project.useTypescript ? 'tsc -w' : undefined,
        };

        Object.keys(scripts).forEach(key => scripts[key] === undefined && delete scripts[key]);

        this.addLintScripts(scripts);
        this.addTestScripts(scripts);

        return scripts;
    }

    addLintScripts(scripts) {
        const lintOption = this.project.lint.toLowerCase();
        if (lintOption !== 'none') {
            const lintScripts = {
                eslint: {
                    lint: 'npx eslint .',
                    format: 'prettier --write .',
                },
                biome: {
                    lint: 'npx @biomejs/biome lint --write .',
                    format: 'npx @biomejs/biome format --write .',
                },
            };

            Object.assign(scripts, lintScripts[lintOption] || {});
        }
    }

    addTestScripts(scripts) {
        const testOption = this.project.test.toLowerCase();
        if (testOption !== 'none') {
            const testScripts = {
                jest: { test: 'jest' },
                mocha: { test: 'mocha' },
                jasmine: { test: 'npx jasmine' },
                chai: { test: 'chai' },
            };

            Object.assign(scripts, testScripts[testOption] || {});
        }
    }
}
