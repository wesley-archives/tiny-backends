import inquirer from 'inquirer';
import chalk from 'chalk';
import path from 'path';
import { Logger } from '../log/logger.js';

export class PromptManager {
    constructor() {
        this.choices = {};
    }

    async init() {
        Logger.info('Preparing the forge for your new project...');
        console.log('\n');

        await this.getDirectory();
        await this.getLanguage();
        await this.getLint();
        await this.getTest();
        await this.getFramework();
        await this.getDatabase();
        await this.getOrm();
        await this.getInitGit();

        console.log('\n');
        Logger.success('All preparations complete! The quest shall proceed!');

        return {
            directory: this.choices.directory,
            language: this.choices.language,
            lint: this.choices.lint,
            test: this.choices.test,
            framework: this.choices.framework,
            database: this.choices.database,
            orm: this.choices.orm,
            initGit: this.choices.initGit,
            path: path.join(process.cwd(), this.choices.directory),
            useTypescript: this.choices.language.toLowerCase() === 'typescript',
        }
    }

    async getDirectory() {
        const { directory } = await inquirer.prompt({
            type: 'input',
            name: 'directory',
            message: chalk.bold('🏰  ') + `Where shall we forge your new stronghold?`,
            default: './project',
        });
        this.choices.directory = directory;
    }

    async getLanguage() {
        const { language } = await inquirer.prompt({
            type: 'list',
            name: 'language',
            message: chalk.bold('📜  ') + `Choose the language for your spellbook:`,
            choices: ['TypeScript', 'JavaScript'],
        });
        this.choices.language = language;
    }

    async getLint() {
        const { lint } = await inquirer.prompt({
            type: 'list',
            name: 'lint',
            message: chalk.bold('🧹  ') + `Shall we use a linter to keep your code clean?`,
            choices: ['None', 'ESLint', 'Biome'],
        });
        this.choices.lint = lint;
    }

    async getTest() {
        const { test } = await inquirer.prompt({
            type: 'list',
            name: 'test',
            message: chalk.bold('🧪  ') + `Which testing library shall test your spells?`,
            choices: ['None', 'Jest', 'Mocha', 'Jasmine'],
        });
        this.choices.test = test;
    }

    async getFramework() {
        const { framework } = await inquirer.prompt({
            type: 'list',
            name: 'framework',
            message: chalk.bold('🛡️  ') + `Select the framework to guard your backend:`,
            choices: ['None', 'Express', 'Fastify', 'Koa'],
        });
        this.choices.framework = framework;
    }

    async getDatabase() {
        const { database } = await inquirer.prompt({
            type: 'list',
            name: 'database',
            message: chalk.bold('📖  ') + `Which database shall store your treasures?`,
            choices: ['None', 'SQLite', 'MariaDB', 'MySQL', 'PostgreSQL', 'MongoDB'],
        });
        this.choices.database = database;
    }

    async getOrm() {
        const { orm } = await inquirer.prompt({
            type: 'list',
            name: 'orm',
            message: chalk.bold('🔮  ') + `Which ORM shall guide your data?`,
            choices: ['None', 'Sequelize', 'Prisma', 'TypeORM', 'Drizzle'],
        });
        this.choices.orm = orm;
    }

    async getInitGit() {
        const { initGit } = await inquirer.prompt({
            type: 'confirm',
            name: 'initGit',
            message: chalk.bold('🗝️  ') + `Shall we initiate a new Git repository?`,
            default: true,
        });
        this.choices.initGit = initGit;
    }
}
