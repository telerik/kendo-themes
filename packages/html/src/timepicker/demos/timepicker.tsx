import { TimePicker, KendoTimePickerProps } from '../timepicker.spec';
import { TimePickerNormal } from '../templates/timepicker-normal';

const options = TimePicker.options;
const states = TimePicker.states;
const defaults = TimePicker.defaultOptions;

const modifiers = [
    {
        name: 'opened',
        title: 'Opened',
    },
];
const variants = [];

export const TimepickerDemo = (props: KendoTimePickerProps & {
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
        <div style={additionalProps.opened ? { height: '378px' } : {}}>
            <TimePickerNormal style={{ width: "300px" }} value="00:00:00 AM" {...other} {...additionalProps} />
        </div>
    );
}


TimepickerDemo.options = options;
TimepickerDemo.states = states;
TimepickerDemo.variants = variants;
TimepickerDemo.defaultOptions = defaults;
TimepickerDemo.modifiers = modifiers;
TimepickerDemo.className = TimePicker.className;

export default TimepickerDemo;

