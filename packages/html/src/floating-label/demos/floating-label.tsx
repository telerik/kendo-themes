import { FloatingLabel, KendoFloatingLabelProps } from '../floating-label.spec';
import { TextboxNormal } from '../../textbox';

const options = FloatingLabel.options;
const variants = [];
const states = FloatingLabel.states;
const defaults = FloatingLabel.defaultOptions;
const modifiers = [];

export const FloatingLabelDemo = (props: KendoFloatingLabelProps) => {
  return (
    <FloatingLabel label="Floating Label" empty {...props}>
      <TextboxNormal style={{ width: '300px' }} {...props} />
    </FloatingLabel>
  );
}


FloatingLabelDemo.options = options;
FloatingLabelDemo.states = states;
FloatingLabelDemo.variants = variants;
FloatingLabelDemo.defaultOptions = defaults;
FloatingLabelDemo.modifiers = modifiers;
FloatingLabelDemo.className = FloatingLabel.className;

export default FloatingLabelDemo;

