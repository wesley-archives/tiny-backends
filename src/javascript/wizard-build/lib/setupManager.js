import { PackageManager } from './package/packageManager.js';
import { TemplateManager } from './template/templateManager.js';
import { DependencyManager } from './dependency/dependencyManager.js';
import { GitManager } from './git/gitManager.js';
import { Logger } from './log/logger.js';

export class SetupManager {
    constructor(project) {
        this.project = project;
        this.packageManager = new PackageManager(project);
        this.templateManager = new TemplateManager(project);
        this.dependencyMagager = new DependencyManager(project);
        this.gitManager = new GitManager(project.path);
    }

    async init() {
        try {
            this.packageManager.init();
            this.templateManager.init();
            this.dependencyMagager.init();

            if (this.initGit) {
                this.gitManager.init();
            }

            Logger.success('Project setup complete!');
        } catch (error) {
            Logger.error('⚠️  An error occurred during the setup process.');
            console.error(error);
        }
    }
}
