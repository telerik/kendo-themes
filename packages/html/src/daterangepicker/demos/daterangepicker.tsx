import { DateRangePicker, KendoDateRangePickerProps } from '../daterangepicker.spec';
import { DateRangePickerNormal } from '../templates/daterangepicker-normal';

const options = DateRangePicker.options;
const states = DateRangePicker.states;
const defaults = DateRangePicker.defaultOptions;

const modifiers = [
    {
        name: 'opened',
        title: 'Opened',
    },
];
const variants = [];

export const DaterangepickerDemo = (props: KendoDateRangePickerProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
}
) => {
    const { modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {};

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'opened':
                additionalProps.opened = mods?.[modifier] ? true : false;
                break;
            default:
                break;
        }
    });

    return (
        <div style={additionalProps.opened ? { height: "280px", width: "473px" } : {}}>
            <DateRangePickerNormal valueFirst="month/day/year" valueSecond="month/day/year" style={{ width: "300px" }} {...other} {...additionalProps} />
        </div>
    );
}


DaterangepickerDemo.options = options;
DaterangepickerDemo.states = states;
DaterangepickerDemo.variants = variants;
DaterangepickerDemo.defaultOptions = defaults;
DaterangepickerDemo.modifiers = modifiers;

export default DaterangepickerDemo;

