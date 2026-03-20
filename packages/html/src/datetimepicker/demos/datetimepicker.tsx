import { DateTimePicker, KendoDateTimePickerProps } from '../datetimepicker.spec';
import { DateTimePickerNormal } from '../templates/datetimepicker-normal';

const options = DateTimePicker.options;
const states = DateTimePicker.states;
const defaults = {
    ...DateTimePicker.defaultOptions,
    variant: 'date',
};

const modifiers = [
    {
        name: 'opened',
        title: 'Opened',
    },
];

const variants = [
    {
        name: 'date',
        title: 'Date',
    },
    {
        name: 'time',
        title: 'Time',
    },
];

export const DatetimepickerDemo = (props: & { variant?: (typeof variants)[number]['name'] } & KendoDateTimePickerProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
}
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

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

    switch (variant) {
        case 'time':
            additionalProps.tab = "time"
            break;
        case 'date':
            additionalProps.tab = "date"
            break;
        default:
            break;
    }

    return (
        <div style={additionalProps.opened ? { height: '415px' } : {}}>
            <DateTimePickerNormal style={{ width: "300px" }} value="16/09/2021 00:00:00 AM" {...other} {...additionalProps} />
        </div>
    );
}


DatetimepickerDemo.options = options;
DatetimepickerDemo.states = states;
DatetimepickerDemo.variants = variants;
DatetimepickerDemo.defaultOptions = defaults;
DatetimepickerDemo.modifiers = modifiers;
DatetimepickerDemo.className = DateTimePicker.className;

export default DatetimepickerDemo;

