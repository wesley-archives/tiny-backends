import chalk from 'chalk';
import figlet from 'figlet';
import { getRandomMessage } from '../storyUtils.js'

const defaultIntroMessages = [
    () => {
        console.log(chalk.blueBright(figlet.textSync('Wizard Build', { horizontalLayout: 'full' })));
        console.log(chalk.cyan(`🧙‍♂️  Ah, young sorcerer, welcome! Your journey to crafting enchanted code begins now...`));
        console.log(chalk.cyan(`Gandalf, the White, and Merlin, the Wise, are watching over you!`));
    },
    () => {
        console.log(chalk.cyanBright(figlet.textSync('Wizard Build', { horizontalLayout: 'full' })));
        console.log(chalk.cyan(`🧙‍♂️  Greetings, apprentice! Your destiny in the realm of code awaits...`));
        console.log(chalk.cyan(`Elminster, the Sage, and Radagast, the Brown, guide your way!`));
    },
    () => {
        console.log(chalk.whiteBright(figlet.textSync('Wizard Build', { horizontalLayout: 'full' })));
        console.log(chalk.cyan(`🧙‍♂️  Hail, traveler! You stand on the brink of coding greatness...`));
        console.log(chalk.cyan(`Morgaine le Fey and Dumbledore, the Great, are at your side!`));
    },
    () => {
        console.log(chalk.greenBright(figlet.textSync('Wizard Build', { horizontalLayout: 'full' })));
        console.log(chalk.cyan(`🧙‍♂️  Welcome, seeker of the arcane! Your path to coding mastery begins here.`));
        console.log(chalk.cyan(`The Archmage Pug and Raistlin Majere watch over your every keystroke!`));
    },
    () => {
        console.log(chalk.magentaBright(figlet.textSync('Wizard Build', { horizontalLayout: 'full' })));
        console.log(chalk.cyan(`🧙‍♂️  Behold, the gateway to digital magic opens before you...`));
        console.log(chalk.cyan(`Circe and Prospero lend their wisdom to your journey ahead!`));
    }
];

const holidayIntroMessages = {
    easter: [
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🥚 Happy Easter! 🥚', { horizontalLayout: 'full' })));
            console.log(chalk.blue(`🌸 The magic of spring is in the air, and your project blossoms with fresh code! 🐰`));
            console.log(chalk.blue(`May your work be as delightful as an Easter egg hunt, filled with hidden treasures! 🌷`));
        },
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🐇 Easter Code Hunt! 🐇', { horizontalLayout: 'full' })));
            console.log(chalk.blue(`🐰 As the Easter Bunny hides eggs, so too does your code hold surprises! May they all be good ones! 🌸`));
            console.log(chalk.blue(`Hop into success with a project that’s blooming like a garden in spring! 🌷`));
        },
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🌷 Spring Into Success! 🌷', { horizontalLayout: 'full' })));
            console.log(chalk.blue(`🥚 Just like finding the perfect Easter egg, you've discovered the joy of clean code! 🌸`));
            console.log(chalk.blue(`May your project grow as strong as the flowers of spring! 🐣`));
        }
    ],
    fourthOfJuly: [
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🎆 Happy 4th of July! 🎆', { horizontalLayout: 'full' })));
            console.log(chalk.red(`🎇 Let your code explode with brilliance, like fireworks lighting up the sky! 🎆`));
            console.log(chalk.red(`May your project be as dazzling and bold as the independence we celebrate today! 🗽`));
        },
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🗽 Code of Independence! 🗽', { horizontalLayout: 'full' })));
            console.log(chalk.red(`🎆 In the land of the free and the home of the brave, your code stands tall and proud! 🎇`));
            console.log(chalk.red(`Celebrate the freedom of creativity with a project that rockets to success! 🗽`));
        },
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🎇 Light Up Your Code! 🎇', { horizontalLayout: 'full' })));
            console.log(chalk.red(`🎆 Just like fireworks, your project will dazzle and captivate all who see it! 🎇`));
            console.log(chalk.red(`This 4th of July, let your code soar like an eagle in the sky! 🦅`));
        }
    ],
    halloween: [
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🎃 Happy Halloween! 🎃', { horizontalLayout: 'full' })));
            console.log(chalk.magenta(`🧙‍♂️ The spirits of the code world stir on this eerie night... Beware of haunted bugs! 🎃`));
            console.log(chalk.magenta(`The crypt of clean code awaits you, brave sorcerer! Proceed with caution, for the ghouls of syntax errors lurk... 👻`));
        },
        () => {
            console.log(chalk.cyanBright(figlet.textSync('👻 Spooky Code Awaits! 👻', { horizontalLayout: 'full' })));
            console.log(chalk.magenta(`🧛‍♂️ Beware, young mage! As you conjure your spells, the shadows grow long...`));
            console.log(chalk.magenta(`Will your code survive the witching hour, or fall prey to the dreaded ghost of failed tests? 💀`));
        },
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🕸️ Happy Haunting! 🕸️', { horizontalLayout: 'full' })));
            console.log(chalk.magenta(`🦇 On this night of fright, may your code be as smooth as a vampire's flight! 🧛‍♂️`));
            console.log(chalk.magenta(`Beware of bugs creeping through the darkness... Only the bravest coders survive this night! 🌕`));
        }
    ],
    thanksgiving: [
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🦃 Happy Thanksgiving! 🦃', { horizontalLayout: 'full' })));
            console.log(chalk.yellow(`🍂 In the spirit of gratitude, may your code be bountiful and your bugs few! 🧡`));
            console.log(chalk.yellow(`Gather ‘round the table of teamwork and feast upon a perfect project! 🥧`));
        },
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🥧 Feast on Code! 🥧', { horizontalLayout: 'full' })));
            console.log(chalk.yellow(`🍁 Like a cornucopia of code, your project is filled with all the right ingredients for success! 🍂`));
            console.log(chalk.yellow(`Remember, a well-documented code is something to be truly thankful for! 🦃`));
        },
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🍂 Giving Thanks for Clean Code! 🍂', { horizontalLayout: 'full' })));
            console.log(chalk.yellow(`🍁 May your code be crisp and your syntax smooth like a Thanksgiving pie! 🥧`));
            console.log(chalk.yellow(`This season, give thanks for well-structured functions and bug-free builds! 🦃`));
        }
    ],
    christmas: [
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🎄 Happy Holidays! 🎄', { horizontalLayout: 'full' })));
            console.log(chalk.green(`🎅 Ho ho ho! The magic of the season has blessed your project! 🎁`));
            console.log(chalk.green(`Santa's elves worked tirelessly to bring you the gift of clean, bug-free code! Time to unwrap your success! 🎁`));
        },
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🎅 Merry Christmas! 🎅', { horizontalLayout: 'full' })));
            console.log(chalk.green(`❄️ As snow falls, so do the lines of perfect code. Let your project shine like the brightest star on the tree! 🌟`));
            console.log(chalk.green(`May your coding journey be filled with holiday cheer and festive features! 🎄`));
        },
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🎁 Holiday Magic Awaits! 🎁', { horizontalLayout: 'full' })));
            console.log(chalk.green(`🎄 With the jingle of code and the sparkle of success, your project is a gift to the digital world! 🎁`));
            console.log(chalk.green(`Season's greetings from the realm of code! May your work bring joy to all who behold it. 🎅`));
        }
    ],
    newYears: [
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🎉 Happy New Year! 🎉', { horizontalLayout: 'full' })));
            console.log(chalk.yellow(`🎇 New year, new code! Let this project shine brighter than the fireworks in the sky! 🎆`));
            console.log(chalk.yellow(`May your coding resolutions come true, and may your builds be swift and error-free! 🎊`));
        },
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🥂 Code Into the New Year! 🥂', { horizontalLayout: 'full' })));
            console.log(chalk.yellow(`🎉 As the clock strikes midnight, a new project emerges, full of promise and potential! 🎇`));
            console.log(chalk.yellow(`Here's to a year of groundbreaking code and joyful development! 🥳`));
        },
        () => {
            console.log(chalk.cyanBright(figlet.textSync('🎆 Cheers to Code! 🎆', { horizontalLayout: 'full' })));
            console.log(chalk.yellow(`🥂 Raise a glass to bug-free builds and fast deploys! The future is bright, and so is your code! 🎇`));
            console.log(chalk.yellow(`Step into the new year with confidence, and let your code lead the way! 🎉`));
        }
    ]
};

export function getRandomIntroMessage(holiday) {
    getRandomMessage(defaultIntroMessages, holidayIntroMessages, holiday);
}
