import RadioButton, { RadioButtonProps } from '../radio.spec';
import { RadioButtonWithLabelAfter } from '../templates/radio-with-label-after';

const options = RadioButton.options;
const states = RadioButton.states;
const defaults = RadioButton.defaultOptions;

const variants = [];
const modifiers = [];

export const RadioButtonDemo = (props: RadioButtonProps) => (
    <RadioButtonWithLabelAfter id="radio-button-demo-radio-button" name="value" {...props}>Label</RadioButtonWithLabelAfter>
);

RadioButtonDemo.options = options;
RadioButtonDemo.states = states;
RadioButtonDemo.variants = variants;
RadioButtonDemo.defaultOptions = defaults;
RadioButtonDemo.modifiers = modifiers;

export default RadioButtonDemo;

