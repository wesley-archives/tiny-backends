import { Logger } from "../log/logger.js";

export function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}

export function getRandomMessage(defaultMessages, holidayMessages, holiday) {
    if (holiday) {
        if (!holidayMessages[holiday]) {
            Logger.error(`Oops! No messages found for the holiday: ${holiday}.`);
            return;
        }
        return holidayMessages[holiday][getRandomIndex(holidayMessages[holiday].length)]();
    }

    return defaultMessages[getRandomIndex(defaultMessages.length)]();
}

export function isDateInRange(today, start, end) {
    if (start.month === end.month) {
        // Same month comparison
        return (today.month === start.month && today.day >= start.day && today.day <= end.day);
    } else if (start.month < end.month) {
        // Holiday spans multiple months (e.g., newYears)
        return (
            (today.month === start.month && today.day >= start.day) ||
            (today.month === end.month && today.day <= end.day) ||
            (today.month > start.month && today.month < end.month)
        );
    } else {
        // Edge case where start.month > end.month (e.g., December to January)
        return (
            (today.month === start.month && today.day >= start.day) ||
            (today.month === end.month && today.day <= end.day) ||
            (today.month > start.month || today.month < end.month)
        );
    }
}
