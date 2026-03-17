import { RadioGroup, KendoRadioGroupProps } from '../radio-group.spec';
import { RadioItem } from '../radio-item.spec';
import { nextId } from '../../misc';
import { RadioButtonWithLabelAfter } from '../templates/radio-with-label-after';

const options = RadioGroup.options;
const states = RadioGroup.states;
const defaults = {
  ...RadioGroup.defaultOptions,
  variant: 'vertical',
};

const variants = [
    {
        name: 'vertical',
        title: 'Vertical',
    },
    {
        name: 'horizontal',
        title: 'Horizontal',
    },
];
const modifiers = [];

export const RadioGroupDemo = (props: KendoRadioGroupProps & { variant?: (typeof variants)[number]['name'] }) => {
    const { variant, ...other } = props;

    switch (variant) {
        case 'horizontal':
            return (
                <RadioGroup layout="horizontal" {...other}>
                    <RadioItem>
                        <RadioButtonWithLabelAfter id={nextId('rb')} name="value" defaultChecked={true}>Label</RadioButtonWithLabelAfter>
                    </RadioItem>
                    <RadioItem>
                        <RadioButtonWithLabelAfter id={nextId('rb')} name="value">Label</RadioButtonWithLabelAfter>
                    </RadioItem>
                    <RadioItem>
                        <RadioButtonWithLabelAfter id={nextId('rb')} name="value">Label</RadioButtonWithLabelAfter>
                    </RadioItem>
                </RadioGroup>
            );
        case 'vertical':
        default:
            return (
                <RadioGroup {...other}>
                    <RadioItem>
                        <RadioButtonWithLabelAfter id={nextId('rb')} name="value" defaultChecked={true}>Label</RadioButtonWithLabelAfter>
                    </RadioItem>
                    <RadioItem>
                        <RadioButtonWithLabelAfter id={nextId('rb')} name="value">Label</RadioButtonWithLabelAfter>
                    </RadioItem>
                    <RadioItem>
                        <RadioButtonWithLabelAfter id={nextId('rb')} name="value">Label</RadioButtonWithLabelAfter>
                    </RadioItem>
                </RadioGroup>
            );
    }
};


RadioGroupDemo.options = options;
RadioGroupDemo.states = states;
RadioGroupDemo.variants = variants;
RadioGroupDemo.defaultOptions = defaults;
RadioGroupDemo.modifiers = modifiers;
RadioGroupDemo.className = RadioGroup.className;

export default RadioGroupDemo;

