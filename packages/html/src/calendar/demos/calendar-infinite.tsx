import { CalendarInfinite, KendoCalendarInfiniteProps } from '../calendar-infinite.spec';
import { CalendarInfiniteNormal } from '../templates/calendar-infinite-normal';
import { CalendarInfiniteCentury } from '../templates/calendar-infinite-century';
import { CalendarInfiniteDecade } from '../templates/calendar-infinite-decade';
import { CalendarInfiniteYear } from '../templates/calendar-infinite-year';

const options = CalendarInfinite.options;
const states = CalendarInfinite.states;
const defaults = {
  ...CalendarInfinite.defaultOptions,
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

export const CalendarInfiniteDemo = (
    props: KendoCalendarInfiniteProps & { variant?: (typeof variants)[number]['name'] } & {
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
                <CalendarInfiniteCentury size={other.size} showOtherCentury={showOtherCentury} showCalendarFooter={showCalendarFooter} />
            );
        case 'decade':
            return (
                <CalendarInfiniteDecade size={other.size} showOtherDecade={showOtherDecade} showCalendarFooter={showCalendarFooter} />
            );
        case 'year':
            return (
                <CalendarInfiniteYear size={other.size} showCalendarFooter={showCalendarFooter} />
            );
        case 'month':
        default:
            return (
                <CalendarInfiniteNormal size={other.size} showOtherMonth={showOtherMonth} showCalendarFooter={showCalendarFooter} />
            );
    }
}

CalendarInfiniteDemo.options = options;
CalendarInfiniteDemo.states = states;
CalendarInfiniteDemo.variants = variants;
CalendarInfiniteDemo.defaultOptions = defaults;
CalendarInfiniteDemo.modifiers = modifiers;
CalendarInfiniteDemo.className = CalendarInfinite.className;

export default CalendarInfiniteDemo;

