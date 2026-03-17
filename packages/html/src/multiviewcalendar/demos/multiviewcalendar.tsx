import { MultiViewCalendar, KendoMultiViewCalendarProps } from '../multiviewcalendar.spec';
import { MultiViewCalendarNormal } from '../templates/multiviewcalendar-normal';
import { MultiViewCalendarCentury } from '../templates/multiviewcalendar-century';
import { MultiViewCalendarDecade } from '../templates/multiviewcalendar-decade';
import { MultiViewCalendarYear } from '../templates/multiviewcalendar-year';

const options = MultiViewCalendar.options;
const states = MultiViewCalendar.states;
const defaults = {
  ...MultiViewCalendar.defaultOptions,
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
        name: 'vertical',
        title: 'Vertical Orientation',
    }
];

export const MultiviewcalendarDemo = (
    props: KendoMultiViewCalendarProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {
        showCalendarFooter: false
    };

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'footer': {
                additionalProps.showCalendarFooter = mods?.[modifier] ? true : false;
            }
                break;
            case 'vertical': {
                additionalProps.orientation = mods?.[modifier] ? "vertical" : "horizontal";
                additionalProps.height = mods?.[modifier] ? "inherit" : undefined;
            }
                break;
            default:
                return;
        }
    });

    const { showOtherMonth, showOtherDecade, showOtherCentury, height, ...otherAdditional } = additionalProps;

    switch (variant) {
        case 'century':
            return (
                <MultiViewCalendarCentury style={{ height }} size={other.size} showOtherCentury={showOtherCentury} {...otherAdditional} />
            );
        case 'decade':
            return (
                <MultiViewCalendarDecade style={{ height }} size={other.size} showOtherDecade={showOtherDecade} {...otherAdditional} />
            );
        case 'year':
            return (
                <MultiViewCalendarYear style={{ height }} size={other.size} {...otherAdditional} />
            );
        case 'month':
        default:
            return (
                <MultiViewCalendarNormal style={{ height }} size={other.size} showOtherMonth={showOtherMonth} {...otherAdditional} />
            );
    }
}


MultiviewcalendarDemo.options = options;
MultiviewcalendarDemo.states = states;
MultiviewcalendarDemo.variants = variants;
MultiviewcalendarDemo.defaultOptions = defaults;
MultiviewcalendarDemo.modifiers = modifiers;
MultiviewcalendarDemo.className = MultiViewCalendar.className;

export default MultiviewcalendarDemo;

