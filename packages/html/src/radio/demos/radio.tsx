import { RadioGroup, KendoRadioGroupProps } from '../radio-group.spec';
import { RadioItem } from '../radio-item.spec';
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

export const RadioDemo = (props: KendoRadioGroupProps & { variant?: (typeof variants)[number]['name'] }) => {
    const { variant, ...other } = props;

    switch (variant) {
        case 'horizontal':
            return (
                <RadioGroup layout="horizontal" {...other}>
                    <RadioItem>
                        <RadioButtonWithLabelAfter id="first" name="value" defaultChecked={true}>Label</RadioButtonWithLabelAfter>
                    </RadioItem>
                    <RadioItem>
                        <RadioButtonWithLabelAfter id="second" name="value">Label</RadioButtonWithLabelAfter>
                    </RadioItem>
                    <RadioItem>
                        <RadioButtonWithLabelAfter id="third" name="value">Label</RadioButtonWithLabelAfter>
                    </RadioItem>
                </RadioGroup>
            );
        case 'vertical':
        default:
            return (
                <RadioGroup {...other}>
                    <RadioItem>
                        <RadioButtonWithLabelAfter id="first" name="value" defaultChecked={true}>Label</RadioButtonWithLabelAfter>
                    </RadioItem>
                    <RadioItem>
                        <RadioButtonWithLabelAfter id="second" name="value">Label</RadioButtonWithLabelAfter>
                    </RadioItem>
                    <RadioItem>
                        <RadioButtonWithLabelAfter id="third" name="value">Label</RadioButtonWithLabelAfter>
                    </RadioItem>
                </RadioGroup>
            );
    }
}


RadioDemo.options = options;
RadioDemo.states = states;
RadioDemo.variants = variants;
RadioDemo.defaultOptions = defaults;
RadioDemo.modifiers = modifiers;

export default RadioDemo;

