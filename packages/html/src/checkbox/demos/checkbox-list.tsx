import { CheckboxGroup, KendoCheckboxGroupProps } from '../checkbox-group.spec';
import { CheckboxItem } from '../checkbox-item.spec';
import { nextId } from '../../misc';
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

export const CheckboxListDemo = (props: KendoCheckboxGroupProps & { variant?: (typeof variants)[number]['name'] }) => {
    const { variant, ...other } = props;

    switch (variant) {
        case 'horizontal':
            return (
                <CheckboxGroup layout="horizontal" {...other}>
                    <CheckboxItem>
                        <CheckboxWithLabelAfter id={nextId('cb')} defaultChecked={true}>Label</CheckboxWithLabelAfter>
                    </CheckboxItem>
                    <CheckboxItem>
                        <CheckboxWithLabelAfter id={nextId('cb')}>Label</CheckboxWithLabelAfter>
                    </CheckboxItem>
                    <CheckboxItem>
                        <CheckboxWithLabelAfter id={nextId('cb')}>Label</CheckboxWithLabelAfter>
                    </CheckboxItem>
                </CheckboxGroup>
            );
        case 'vertical':
        default:
            return (
                <CheckboxGroup {...other}>
                    <CheckboxItem>
                        <CheckboxWithLabelAfter id={nextId('cb')} defaultChecked={true}>Label</CheckboxWithLabelAfter>
                    </CheckboxItem>
                    <CheckboxItem>
                        <CheckboxWithLabelAfter id={nextId('cb')}>Label</CheckboxWithLabelAfter>
                    </CheckboxItem>
                    <CheckboxItem>
                        <CheckboxWithLabelAfter id={nextId('cb')}>Label</CheckboxWithLabelAfter>
                    </CheckboxItem>
                </CheckboxGroup>
            );
    }
};


CheckboxListDemo.options = options;
CheckboxListDemo.states = states;
CheckboxListDemo.variants = variants;
CheckboxListDemo.defaultOptions = defaults;
CheckboxListDemo.modifiers = modifiers;

export default CheckboxListDemo;
