import chalk from 'chalk';
import { getRandomMessage } from '../storyUtils.js'

const defaultFinalMessages = [
    () => {
        console.log(chalk.cyan(`"May your code flow like a river of magic, and may your errors vanish like shadows at dawn. The realm of development awaits, brave mage! ✨"`));
    },
    () => {
        console.log(chalk.cyan(`"Your journey begins, but fear not—the spirits of the ancient coders watch over you. Write boldly, for your spells are powerful! 💫"`));
    },
    () => {
        console.log(chalk.cyan(`"In the halls of code, you are now a master sorcerer. May your functions be pure and your logic sound. The future is yours! 🧙‍♂️"`));
    },
    () => {
        console.log(chalk.cyan(`"By the fires of creation, your project is born! Venture forth and let your code echo through the ages. The magic is now in your hands! 🔥"`));
    },
    () => {
        console.log(chalk.cyan(`"The stars have aligned, your project is complete. Forge ahead, and let no bug stand in your path. The arcane power of coding is yours! 🌌"`));
    }
];

const holidayFinalMessages = {
    easter: [
        () => {
            console.log(chalk.blue(`"Like a hidden Easter egg, your code holds surprises waiting to be discovered. May each one bring delight and success! 🥚"`));
        },
        () => {
            console.log(chalk.blue(`"Spring is here, and with it, the promise of fresh ideas and clean code. Let your project blossom like a garden in full bloom! 🌸"`));
        },
        () => {
            console.log(chalk.blue(`"Hop along the path of coding mastery, and may you find all the hidden treasures in your project. Happy Easter coding! 🐇"`));
        }
    ],
    fourthOfJuly: [
        () => {
            console.log(chalk.red(`"Let your code sparkle like the fireworks in the sky. Today, you celebrate freedom—freedom from bugs and errors! 🎆"`));
        },
        () => {
            console.log(chalk.red(`"On this day of independence, declare your project complete and let it soar like an eagle into production! 🦅"`));
        },
        () => {
            console.log(chalk.red(`"Light up your code with brilliance and boldness, for today is a day to celebrate your coding victories! 🗽"`));
        }
    ],
    halloween: [
        () => {
            console.log(chalk.magenta(`"As the night grows dark, so too does your code take shape. Beware of spectral bugs that hide in the shadows! 🦇"`));
        },
        () => {
            console.log(chalk.magenta(`"Through the veil of the unknown, your code emerges like a phantom—strong and swift. May your logic be as sharp as a vampire's bite! 🧛‍♂️"`));
        },
        () => {
            console.log(chalk.magenta(`"The spirits of the code whisper in the wind... Listen well, brave coder, for tonight, even ghosts cannot crash your build! 👻"`));
        }
    ],
    thanksgiving: [
        () => {
            console.log(chalk.yellow(`"As we gather around the table of teamwork, let us give thanks for bug-free code and smooth deploys. 🍂"`));
        },
        () => {
            console.log(chalk.yellow(`"This Thanksgiving, your code is the feast—nourishing, bountiful, and ready to be shared with the world. 🦃"`));
        },
        () => {
            console.log(chalk.yellow(`"With gratitude in your heart and clean code in your hands, go forth and build something truly special this season. 🥧"`));
        }
    ],
    christmas: [
        () => {
            console.log(chalk.green(`"The snow falls gently, but your code builds fast. With every keystroke, a little bit of holiday magic fills the screen. 🎄"`));
        },
        () => {
            console.log(chalk.green(`"Like presents under the tree, your functions are perfectly wrapped and ready to bring joy. May your code be as bright as the star on top! 🎁"`));
        },
        () => {
            console.log(chalk.green(`"As the holiday bells ring, your project is complete. Let the magic of the season guide your next great adventure in code. 🎅"`));
        }
    ],
    newYears: [
        () => {
            console.log(chalk.yellow(`"As the new year begins, so too does your journey to coding greatness. May your resolutions be bug-free and your builds swift! 🎇"`));
        },
        () => {
            console.log(chalk.yellow(`"Cheers to a year filled with epic code and boundless creativity! Let the fireworks of innovation light up your projects. 🎉"`));
        },
        () => {
            console.log(chalk.yellow(`"A new year, a new codebase. Begin again with fresh ideas and bold aspirations. The future is yours to build! 🥂"`));
        }
    ]
};

export function getRandomFinalMessage(holiday) {
    getRandomMessage(defaultFinalMessages, holidayFinalMessages, holiday);
}
