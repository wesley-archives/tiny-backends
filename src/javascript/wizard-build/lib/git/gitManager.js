import chalk from 'chalk';
import { executeCommand } from '../utils.js';

export class GitManager {
    constructor(projectPath) {
        this.projectPath = projectPath;
    }

    initGitRepository(projectPath) {
        console.log(chalk.cyan('■  Initializing Git repository...'));
        executeCommand('git init', projectPath, { showOutput: false });
        console.log(chalk.green('✔  Git repository initialized in ' + projectPath));
    }
}
