import { DatePicker, KendoDatePickerProps } from '../datepicker.spec';
import { DatePickerNormal } from '../templates/datepicker-normal';

const options = DatePicker.options;
const states = DatePicker.states;
const defaults = DatePicker.defaultOptions;

const modifiers = [
    {
        name: 'opened',
        title: 'Opened',
    },
];
const variants = [];

export const DatepickerDemo = (props: KendoDatePickerProps & {
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
        <div style={additionalProps.opened ? { height: '250px' } : {}}>
            <DatePickerNormal style={{ width: "300px" }} value="16/09/2021" {...other} {...additionalProps} />
        </div>
    );
}


DatepickerDemo.options = options;
DatepickerDemo.states = states;
DatepickerDemo.variants = variants;
DatepickerDemo.defaultOptions = defaults;
DatepickerDemo.modifiers = modifiers;
DatepickerDemo.className = DatePicker.className;

export default DatepickerDemo;

