import chalk from 'chalk';
import { executeCommand } from '../utils.js';
import {
    databaseDependencyLibrary,
    frameworkDependencyLibrary,
    lintDependencyLibrary,
    ormDependencyLibrary,
    testDependencyLibrary
} from './data/index.js';

export class DependencyManager {
    constructor(project) {
        this.project = project;
        this.dependenciesList = ['dotenv'];
        this.devDependenciesList = [];

        if (this.project.useTypescript) {
            this.addDevDependencies(['typescript', '@types/node', 'tsx']);
        }
    }

    init() {
        this.getDependencies();
        this.installDependencies();
    }

    addDevDependencies(devDependencies) {
        this.devDependenciesList.push(...devDependencies);
    }

    addDependencies(dependencies) {
        this.dependenciesList.push(...dependencies);
    }

    getDependencies() {
        this.getFrameworkDependencies();
        this.getOrmDependencies();
        this.getDatabaseDependencies();
        this.getLintDependencies();
        this.getTestDependencies();

        return {
            dependenciesList: this.dependenciesList,
            devDependenciesList: this.devDependenciesList,
        };
    }

    installDependencies() {
        console.log(chalk.cyan('■  Installing dependencies...'));

        if (!this.dependenciesList.length && !this.devDependenciesList.length) {
            console.log(chalk.yellow('No dependencies to install.'));
            return;
        }

        this.install(this.dependenciesList);
        this.install(this.devDependenciesList, true);

        console.log(chalk.green('✔  All dependencies installed!'));
    }

    install(deps, isDev = false) {
        const commandPrefix = isDev ? 'npm install -D' : 'npm install';
        const command = `${commandPrefix} ${deps.join(' ')}`;
        executeCommand(command, this.project.path, { showOutput: false });
    }

    getDependenciesFromLibrary(key, library) {
        if (key == 'none') {
            return;
        }

        const libraryKey = this.project.useTypescript && library[`${key}ts`] ? `${key}ts` : key;
        const { dependencies = [], devDependencies = [] } = library[libraryKey] || {};

        if (dependencies.length || devDependencies.length) {
            this.addDependencies(dependencies);
            this.addDevDependencies(devDependencies);
        } else {
            console.warn(chalk.yellow(`⚠️  Unknown entry: "${key}".`));
        }
    }

    getFrameworkDependencies() {
        const frameworkKey = this.project.framework.toLowerCase();
        this.getDependenciesFromLibrary(frameworkKey, frameworkDependencyLibrary);
    }

    getOrmDependencies() {
        const ormKey = this.project.orm.toLowerCase();
        this.getDependenciesFromLibrary(ormKey, ormDependencyLibrary);
    }

    getDatabaseDependencies() {
        const databaseKey = this.project.database.toLowerCase();
        this.getDependenciesFromLibrary(databaseKey, databaseDependencyLibrary);
    }

    getLintDependencies() {
        const lintKey = this.project.lint.toLowerCase();
        this.getDependenciesFromLibrary(lintKey, lintDependencyLibrary);
    }

    getTestDependencies() {
        const testKey = this.project.test.toLowerCase();
        this.getDependenciesFromLibrary(testKey, testDependencyLibrary);
    }
}

