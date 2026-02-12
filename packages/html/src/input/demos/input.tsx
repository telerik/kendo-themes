import { Input, InputOptions, InputState } from '../input.spec';
import { InputInnerInput } from '../input-inner-input';
import { InputPrefix } from '../input-prefix';
import { InputSuffix } from '../input-suffix';
import { InputSeparator } from '../input-separator';
import { InputClearValue } from '../input-clear-value';
import { InputValidationIcon } from '../input-validation-icon';
import { InputLoadingIcon } from '../input-loading-icon';
import { Icon } from '../../icon';
import { TextButton } from '../../button';

const states = Input.states;
const defaults = Input.defaultOptions;
const options = Input.options;
const modifiers = [
  {
    name: 'prefix',
    title: 'Prefix',
  },
  {
    name: 'suffix',
    title: 'Suffix',
  },
  {
    name: 'clear-button',
    title: '`Clear` Button'
  },
  {
    name: 'validation-icon',
    title: 'Validation Icon'
  },
  {
    name: 'separators',
    title: 'Separators'
  }
];

const variants = [];

export const InputDemo = (
  props: InputOptions & InputState & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { modifiers: mods, valid, invalid, loading, disabled, readonly, ...other } = props;

  const showPrefix = mods?.['prefix'];
  const showSuffix = mods?.['suffix'];
  const showClearButton = mods?.['clear-button'];
  const showValidationIcon = mods?.['validation-icon'];
  const showSeparators = mods?.['separators'];

  return (
    <Input
      {...other}
      valid={valid}
      invalid={invalid}
      loading={loading}
      disabled={disabled}
      readonly={readonly}
      style={{ width: 300 }}
    >
      {showPrefix && (
        <>
          <InputPrefix><Icon icon="lock" /></InputPrefix>
          {showSeparators && <InputSeparator />}
        </>
      )}
      <InputInnerInput placeholder="Placeholder" value="Value" />
      {showValidationIcon && (
        <InputValidationIcon
          valid={valid}
          invalid={invalid}
          loading={loading}
          disabled={disabled}
        />
      )}
      <InputLoadingIcon loading={loading} disabled={disabled} />
      {showClearButton && (
        <InputClearValue
          loading={loading}
          disabled={disabled}
          readonly={readonly}
          value="Value"
        />
      )}
      {showSuffix && (
        <>
          {showSeparators && <InputSeparator />}
          <InputSuffix><TextButton size={other.size} fillMode="clear">Send</TextButton></InputSuffix>
        </>
      )}
    </Input>
  );
}

InputDemo.options = options;
InputDemo.states = states;
InputDemo.variants = variants;
InputDemo.defaultOptions = defaults;
InputDemo.modifiers = modifiers;

export default InputDemo;
