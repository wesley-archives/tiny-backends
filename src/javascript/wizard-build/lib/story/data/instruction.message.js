import chalk from 'chalk';
import { getRandomIndex } from '../storyUtils.js'

const defaultInstructionMessages = [
    (directory) => {
        console.log(`To step into your new kingdom, type ${chalk.cyan(`cd ${directory}`)}.`);
        console.log(`Then, invoke ${chalk.cyan('npm run dev')} to summon the powers of development. ${chalk.gray('(CTRL+C to dispel the magic at any time.)')}`);
    },
    (directory) => {
        console.log(`To enter the enchanted realm, type ${chalk.cyan(`cd ${directory}`)}.`);
        console.log(`Then, call upon ${chalk.cyan('npm run dev')} to bring forth the arcane energies of development. ${chalk.gray('(CTRL+C will end the incantation when needed.)')}`);
    },
    (directory) => {
        console.log(`To take your first steps in the magical land, type ${chalk.cyan(`cd ${directory}`)}.`);
        console.log(`Then, conjure the development server with ${chalk.cyan('npm run dev')}. ${chalk.gray('(You may cancel the spell with CTRL+C.)')}`);
    },
    (directory) => {
        console.log(`To enter your digital fortress, type ${chalk.cyan(`cd ${directory}`)}.`);
        console.log(`Invoke ${chalk.cyan('npm run dev')} to summon the forces of creation. ${chalk.gray('(Use CTRL+C to banish the magic at any time.)')}`);
    },
    (directory) => {
        console.log(`The portal to your code realm opens with ${chalk.cyan(`cd ${directory}`)}.`);
        console.log(`Call forth your powers with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C will break the spell.)')}`);
    }
];

const holidayInstructionMessages = {
    easter: [
        (directory) => {
            console.log(`To resurrect your project, type ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Then, let the magic rise with ${chalk.cyan('npm run dev')}. ${chalk.gray('(Press CTRL+C to end the festivities.)')}`);
        },
        (directory) => {
            console.log(`Spring into action by typing ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Then, watch your code bloom with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C to stop the season of rebirth.)')}`);
        },
        (directory) => {
            console.log(`Hop into your project with ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Bring new life to it with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C will end the egg hunt.)')}`);
        }
    ],
    fourthOfJuly: [
        (directory) => {
            console.log(`Ignite your freedom to code with ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Light the fireworks by running ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C to extinguish the rockets.)')}`);
        },
        (directory) => {
            console.log(`Celebrate your independence by typing ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Unleash the power of your project with ${chalk.cyan('npm run dev')}. ${chalk.gray('(Press CTRL+C to call off the parade.)')}`);
        },
        (directory) => {
            console.log(`Let your code shine like fireworks by typing ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Start the celebration with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C will end the display.)')}`);
        }
    ],
    halloween: [
        (directory) => {
            console.log(`Creep into your codebase by typing ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Summon the spirits with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C to escape the haunted house.)')}`);
        },
        (directory) => {
            console.log(`Time to don your developer costume with ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Cast your spells with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C to put the ghouls back to rest.)')}`);
        },
        (directory) => {
            console.log(`Enter the code crypt by typing ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Bring the monsters to life with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C to return to the mortal realm.)')}`);
        }
    ],
    thanksgiving: [
        (directory) => {
            console.log(`Gather around your code feast by typing ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Give thanks and run ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C to clear the table.)')}`);
        },
        (directory) => {
            console.log(`Prepare your project like a Thanksgiving meal with ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Let it cook with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C will stop the feast.)')}`);
        },
        (directory) => {
            console.log(`It's time to harvest your code by typing ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Share the bounty with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C to end the celebration.)')}`);
        }
    ],
    christmas: [
        (directory) => {
            console.log(`Unwrap your project with ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Watch the magic unfold with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C to end the festivities.)')}`);
        },
        (directory) => {
            console.log(`Deck the halls of your project by typing ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Spread the holiday cheer with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C to turn off the lights.)')}`);
        },
        (directory) => {
            console.log(`The gift of coding awaits! Type ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Deliver the magic with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C to call off Santa’s helpers.)')}`);
        }
    ],
    newYears: [
        (directory) => {
            console.log(`Ring in the new year by typing ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Make a resolution to code with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C will end the celebration.)')}`);
        },
        (directory) => {
            console.log(`Start the year fresh by typing ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Watch your project sparkle with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C will conclude the countdown.)')}`);
        },
        (directory) => {
            console.log(`Time to make some code resolutions! Type ${chalk.cyan(`cd ${directory}`)}.`);
            console.log(`Celebrate with ${chalk.cyan('npm run dev')}. ${chalk.gray('(CTRL+C to stop the clock.)')}`);
        }
    ]
};

export function getRandomInstructionMessage(directory, holiday) {
    if (holiday) {
        if (!holidayInstructionMessages[holiday]) {
            console.log(chalk.red(`⚠️ Oops! No messages found for the holiday: ${holiday}.`));
            return;
        }
        return holidayInstructionMessages[holiday][getRandomIndex(holidayInstructionMessages[holiday].length)](directory);
    }

    return defaultInstructionMessages[getRandomIndex(defaultInstructionMessages.length)](directory);
}
