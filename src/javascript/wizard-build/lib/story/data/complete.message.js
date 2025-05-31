import chalk from 'chalk';
import { getRandomMessage } from '../storyUtils.js'

const defaultCompleteMessages = [
    () => {
        console.log(chalk.cyan(`✨ Quest complete! You now embark on your journey alone.`));
    },
    () => {
        console.log(chalk.magenta(`🧙‍♂️ The ancient scrolls have revealed your success! The stars align in your favor.`));
    },
    () => {
        console.log(chalk.green(`🌌 You have harnessed the arcane energies! Your path ahead sparkles with potential.`));
    },
    () => {
        console.log(chalk.blue(`🔮 The fates have spoken! With your mission fulfilled, new adventures await in the mists of time.`));
    },
    () => {
        console.log(chalk.yellow(`🦄 As the dawn breaks, your quest is complete! The realm rejoices in your newfound power.`));
    },
];

const holidayCompleteMessages = {
    easter: [
        () => {
            console.log(chalk.magenta(`🐰 Hoppy Easter! Your quest has bloomed like spring flowers!`));
        },
        () => {
            console.log(chalk.green(`🥚 The eggs have been found! Celebrate your triumph in this season of rebirth!`));
        },
        () => {
            console.log(chalk.yellow(`🌼 The magic of Easter fills the air! Your journey has brought new life!`));
        },
    ],
    fourthOfJuly: [
        () => {
            console.log(chalk.red(`🎆 Stars and stripes illuminate your path! Your quest is a burst of freedom!`));
        },
        () => {
            console.log(chalk.blue(`🇺🇸 Fireworks of success! You've sparked joy and celebration this Independence Day!`));
        },
        () => {
            console.log(chalk.white(`✨ The spirit of freedom guides your steps! Your journey shines bright in the night!`));
        },
    ],
    halloween: [
        () => {
            console.log(chalk.yellow(`🎃 Boo! Your quest is complete, and the spirits rejoice in your bravery!`));
        },
        () => {
            console.log(chalk.magenta(`👻 Ghosts and ghouls cheer for you! You've conquered the darkness this Halloween!`));
        },
        () => {
            console.log(chalk.black(`🕷️ The witching hour has struck, and you've emerged victorious! Embrace the magic!`));
        },
    ],
    thanksgiving: [
        () => {
            console.log(chalk.brown(`🦃 A feast of gratitude awaits! Your quest has nourished the spirit of thankfulness!`));
        },
        () => {
            console.log(chalk.gold(`🍂 As autumn leaves fall, so do blessings! Your journey is a bountiful harvest!`));
        },
        () => {
            console.log(chalk.orange(`🍽️ The table is set! Your success is the main course of this Thanksgiving!`));
        },
    ],
    christmas: [
        () => {
            console.log(chalk.red(`🎄 Ho ho ho! Your quest has spread joy like twinkling lights on a Christmas tree!`));
        },
        () => {
            console.log(chalk.green(`✨ Christmas magic surrounds you! Your journey has wrapped up in joy and love!`));
        },
        () => {
            console.log(chalk.white(`❄️ A winter wonderland of success! Celebrate the spirit of giving and joy!`));
        },
    ],
    newYears: [
        () => {
            console.log(chalk.blue(`🎉 Cheers to new beginnings! Your quest has laid the foundation for a prosperous year ahead!`));
        },
        () => {
            console.log(chalk.gold(`🥂 Raise a toast! Your journey has sparkled like fireworks in the night sky!`));
        },
        () => {
            console.log(chalk.white(`✨ A fresh start awaits! Your achievements light the way into the new year!`));
        },
    ]
};

export function getRandomCompleteMessage(holiday) {
    getRandomMessage(defaultCompleteMessages, holidayCompleteMessages, holiday);
}
