import { ListBox, KendoListBoxProps } from '../listbox.spec';
import { ListItem } from '../../list';
import { ListBoxNormal } from '../templates/listbox-normal';

const options = ListBox.options;
const states = ListBox.states;
const defaults = {
  ...ListBox.defaultOptions,
  variant: 'single',
};

const variants = [
    {
        name: 'single',
        title: 'Single',
    },
    {
        name: 'multiple',
        title: 'Multiple',
    },
];
const modifiers = [];

export const ListboxDemo = (props: KendoListBoxProps & { variant?: (typeof variants)[number]['name'] }) => {

    const { variant, ...other } = { ...props };

    switch (variant) {
        case 'multiple':
            return (
                <div className='k-d-flex'>
                    <ListBoxNormal {...other} style={{ height: "300px", width: "200px" }}
                        className="k-pr-2" actionsPosition="right"
                        actions={['up', 'down', 'left', 'right', 'to', 'from', 'x']}
                    >
                        <ListItem selected >List item</ListItem>
                        <ListItem>List item</ListItem>
                        <ListItem>List item</ListItem>
                        <ListItem>List item</ListItem>
                        <ListItem>List item</ListItem>
                        <ListItem>List item</ListItem>
                        <ListItem>List item</ListItem>
                    </ListBoxNormal>
                    <ListBoxNormal {...props} style={{ height: "300px", width: "200px" }} actionsPosition="right" actions={['up', 'down', 'x']}>
                        <ListItem>List item</ListItem>
                        <ListItem selected>List item</ListItem>
                    </ListBoxNormal>
                </div>
            );
        case 'single':
        default:
            return (
                <ListBoxNormal {...other} style={{ height: "300px", width: "200px" }}
                    actionsPosition="right"
                    actions={['up', 'down', 'left', 'right', 'to', 'from', 'x']}
                >
                    <ListItem selected >List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                </ListBoxNormal>
            );
    }
}


ListboxDemo.options = options;
ListboxDemo.states = states;
ListboxDemo.variants = variants;
ListboxDemo.defaultOptions = defaults;
ListboxDemo.modifiers = modifiers;
ListboxDemo.className = ListBox.className;

export default ListboxDemo;

