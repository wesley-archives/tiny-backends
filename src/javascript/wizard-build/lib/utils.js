import { execSync } from 'child_process';
import { Logger } from './log/logger.js';

export function executeCommand(command, projectPath, options = { showOutput: true }) {
    try {
        const execOptions = { cwd: projectPath, stdio: options.showOutput ? 'inherit' : 'pipe' };

        if (process.platform === 'win32' || process.platform === 'win64') {
            execOptions.shell = 'cmd.exe';
        } else {
            execOptions.shell = '/bin/sh';
        }

        execSync(command, execOptions);
    } catch (error) {
        Logger.error(error.message);
        process.exit(1);
    }
}
