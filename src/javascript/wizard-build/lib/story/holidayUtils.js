import { isDateInRange } from "./storyUtils.js";

const holidays = {
    // month holidays: 1-last day of month
    // week holidays: 1-7
    // day holidays: 1-2

    easter: {
        type: 'week-holiday',
        start: { month: 3, day: 27 },
        end: { month: 4, day: 4 }
    },
    fourthOfJuly: {
        type: 'week-holiday',
        start: { month: 7, day: 1 },
        end: { month: 7, day: 7 }
    },
    halloween: {
        type: 'month-holiday',
        start: { month: 10, day: 1 },
        end: { month: 10, day: 31 }
    },
    thanksgiving: {
        type: 'month-holiday',
        start: { month: 11, day: 1 },
        end: { month: 11, day: 30 }
    },
    christmas: {
        type: 'month-holiday',
        start: { month: 12, day: 1 },
        end: { month: 12, day: 28 }
    },
    newYears: {
        type: 'day-holiday',
        start: { month: 12, day: 29 },
        end: { month: 1, day: 1 }
    },
};

export function getHolidayName(date) {
    const today = { month: date.getMonth() + 1, day: date.getDate() };

    return Object.keys(holidays).find(key => {
        const holiday = holidays[key];
        return isDateInRange(today, holiday.start, holiday.end);
    }) || null;  // Return null if no match
}