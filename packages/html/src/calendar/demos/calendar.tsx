import { Calendar, KendoCalendarProps } from '../calendar.spec';
import { CalendarNormal } from '../templates/calendar-normal';
import { CalendarCentury } from '../templates/calendar-century';
import { CalendarDecade } from '../templates/calendar-decade';
import { CalendarYear } from '../templates/calendar-year';

const options = Calendar.options;
const states = Calendar.states;
const defaults = {
  ...Calendar.defaultOptions,
  variant: 'month',
};

const variants = [
    {
        name: 'month',
        title: 'Month View',
    },
    {
        name: 'year',
        title: 'Year View',
    },
    {
        name: 'decade',
        title: 'Decade View',
    },
    {
        name: 'century',
        title: 'Century View',
    },
];

const modifiers = [
    {
        name: 'footer',
        title: 'Calendar Footer',
    },
    {
        name: 'other',
        title: 'Show other cells',
    }
];

export const CalendarDemo = (
    props: KendoCalendarProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {
        showCalendarFooter: false
    };

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'other': {
                additionalProps.showOtherMonth = mods?.[modifier] ? true : false;
                additionalProps.showOtherCentury = mods?.[modifier] ? true : false;
                additionalProps.showOtherDecade = mods?.[modifier] ? true : false;
            }
                break;
            case 'footer': {
                additionalProps.showCalendarFooter = mods?.[modifier] ? true : false;
            }
                break;
            default:
                return;
        }
    });

    const { showOtherMonth, showOtherDecade, showOtherCentury, showCalendarFooter } = additionalProps;

    switch (variant) {
        case 'century':
            return (
                <CalendarCentury size={other.size} showOtherCentury={showOtherCentury} showCalendarFooter={showCalendarFooter} />
            );
        case 'decade':
            return (
                <CalendarDecade size={other.size} showOtherDecade={showOtherDecade} showCalendarFooter={showCalendarFooter} />
            );
        case 'year':
            return (
                <CalendarYear calendarTitleText="2021" size={other.size} showCalendarFooter={showCalendarFooter} />
            );
        case 'month':
        default:
            return (
                <CalendarNormal size={other.size} showOtherMonth={showOtherMonth} showCalendarFooter={showCalendarFooter} />
            );
    }
}


CalendarDemo.options = options;
CalendarDemo.states = states;
CalendarDemo.variants = variants;
CalendarDemo.defaultOptions = defaults;
CalendarDemo.modifiers = modifiers;

export default CalendarDemo;

