import { Form, KendoFormProps } from '../form.spec';
import { Fieldset } from '../fieldset';
import { FormField } from '../form-field';
import { Button } from '../../button';
import { DropdownList } from '../../dropdownlist';
import { RadioButton } from '../../radio';
import { Textbox } from '../../textbox';

const options = Form.options;
const states = Form.states;
const defaults = {
  ...Form.defaultOptions,
  variant: 'vertical',
};

const variants = [
  {
    name: 'horizontal',
    title: 'Horizontal',
  },
  {
    name: 'vertical',
    title: 'Vertical',
  },
];
const modifiers = [];

export const FormDemo = (props: KendoFormProps & { variant?: (typeof variants)[number]['name'] }) => {
  const { variant, size, ...other } = props;

  const children = (
    <Fieldset legend="Form Legend">
      <FormField label="Label" editor={<Textbox size={size} />} />

      <FormField
        label="Label"
        hint="Hint text"
        editor={<DropdownList value="Dropdown List" size={size} />}
      />

      <FormField
        label="City"
        editor={
          <ul className="k-radio-list k-list-horizontal">
            <li className="k-radio-list-item">
              <RadioButton checked={true} size={size} />
              <label className="k-radio-label">Label</label>
            </li>
            <li className="k-radio-list-item">
              <RadioButton size={size} />
              <label className="k-radio-label">Label</label>
            </li>
            <li className="k-radio-list-item">
              <RadioButton size={size} />
              <label className="k-radio-label">Label</label>
            </li>
          </ul>
        }
      ></FormField>
    </Fieldset>
  );

  const buttons = (
    <>
      <Button className="k-form-submit" themeColor="primary" size={size}>
        Submit
      </Button>
      <Button className="k-form-clear" size={size}>
        Clear
      </Button>
    </>
  );

  switch (variant) {
    case 'horizontal':
      return (
        <Form orientation="horizontal" size={size} {...other} formButtons={buttons}>
          {children}
        </Form>
      );
    case 'vertical':
    default:
      return (
        <Form size={size} {...other} formButtons={buttons}>
          {children}
        </Form>
      );
  }
}


FormDemo.options = options;
FormDemo.states = states;
FormDemo.variants = variants;
FormDemo.defaultOptions = defaults;
FormDemo.modifiers = modifiers;
FormDemo.className = Form.className;

export default FormDemo;

