import Checkbox, { CheckboxProps } from '../checkbox.spec';
import { CheckboxWithLabelAfter } from '../templates/checkbox-with-label-after';

const options = Checkbox.options;
const states = Checkbox.states;
const defaults = Checkbox.defaultOptions;

const variants = [];
const modifiers = [];

export const CheckboxDemo = (props: CheckboxProps & { variant?: (typeof variants)[number]['name'] }) => (
    <CheckboxWithLabelAfter id="checkbox-demo-checkbox" {...props} defaultChecked={true}>Label</CheckboxWithLabelAfter>
);

CheckboxDemo.options = options;
CheckboxDemo.states = states;
CheckboxDemo.variants = variants;
CheckboxDemo.defaultOptions = defaults;
CheckboxDemo.modifiers = modifiers;

export default CheckboxDemo;

