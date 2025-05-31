import chalk from 'chalk';
import { Logger } from '../log/logger.js';
import { getHolidayName } from './holidayUtils.js';
import {
    getRandomCelebrationMessage,
    getRandomFinalMessage,
    getRandomInstructionMessage,
    getRandomIntroMessage,
    getRandomCompleteMessage
} from './data/index.js';

export class StoryManager {
    constructor() {
        this.holiday = getHolidayName(new Date());
    }

    displayIntro() {
        getRandomIntroMessage(this.holiday);
        console.log('\n');
    }

    displayCelebration() {
        getRandomCelebrationMessage(this.holiday);
        console.log('\n');
    }

    displayInstructions(directory) {
        getRandomInstructionMessage(directory, this.holiday);
        console.log('\n');
    }

    displayGuidance() {
        Logger.log('-'.repeat(30) + ' ⚔️ Setup Complete ⚔️ ' + '-'.repeat(30) + '\n');
        Logger.log(`Should you find yourself in perilous times, summon aid from the Elders at:`);
        Logger.log(chalk.underline.cyan('https://github.com/wesleybertipaglia/wizard-build/') + '\n');
        Logger.log('-'.repeat(80));
        Logger.log('\n');
    }

    displayFinal() {
        getRandomFinalMessage(this.holiday);
        console.log('\n');
    }

    displayQuestComplete(directory) {
        getRandomCompleteMessage(this.holiday);
        Logger.log(chalk.green(`  cd ${directory}`));
        Logger.log(chalk.green(`  npm run dev`) + '\n\n')
    }
}