import { CheckboxGroup, KendoCheckboxGroupProps } from '../checkbox-group.spec';
import { CheckboxItem } from '../checkbox-item.spec';
import { CheckboxWithLabelAfter } from '../templates/checkbox-with-label-after';

const options = CheckboxGroup.options;
const states = CheckboxGroup.states;
const defaults = {
  ...CheckboxGroup.defaultOptions,
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

export const CheckboxDemo = (props: KendoCheckboxGroupProps & { variant?: (typeof variants)[number]['name'] }) => {
    const { variant, ...other } = props;

    switch (variant) {
        case 'horizontal':
            return (
                <CheckboxGroup layout="horizontal" {...other}>
                    <CheckboxItem>
                        <CheckboxWithLabelAfter id="first" defaultChecked={true}>Label</CheckboxWithLabelAfter>
                    </CheckboxItem>
                    <CheckboxItem>
                        <CheckboxWithLabelAfter id="second">Label</CheckboxWithLabelAfter>
                    </CheckboxItem>
                    <CheckboxItem>
                        <CheckboxWithLabelAfter id="third">Label</CheckboxWithLabelAfter>
                    </CheckboxItem>
                </CheckboxGroup>
            );
        case 'vertical':
        default:
            return (
                <CheckboxGroup {...other}>
                    <CheckboxItem>
                        <CheckboxWithLabelAfter id="first" defaultChecked={true}>Label</CheckboxWithLabelAfter>
                    </CheckboxItem>
                    <CheckboxItem>
                        <CheckboxWithLabelAfter id="second">Label</CheckboxWithLabelAfter>
                    </CheckboxItem>
                    <CheckboxItem>
                        <CheckboxWithLabelAfter id="third">Label</CheckboxWithLabelAfter>
                    </CheckboxItem>
                </CheckboxGroup>
            );
    }
}


CheckboxDemo.options = options;
CheckboxDemo.states = states;
CheckboxDemo.variants = variants;
CheckboxDemo.defaultOptions = defaults;
CheckboxDemo.modifiers = modifiers;

export default CheckboxDemo;

