import chalk from 'chalk';

export class Logger {
    static log(message) {
        console.log(message);
    }

    static error(message) {
        console.error(chalk.red(`✖  ${message}`));
    }

    static warn(message) {
        console.warn(chalk.yellow(`▼  ${message}`));
    }

    static success(message) {
        console.log(chalk.green(`✔  ${message}`));
    }

    static info(message) {
        console.log(chalk.cyan(`■  ${message}`));
    }
}