import { Treeview, KendoTreeviewProps } from '../treeview.spec';
import { TreeviewGroup } from '../treeview-group';
import { TreeviewItem } from '../treeview-item.spec';

const options = Treeview.options;
const states = Treeview.states;
const defaults = Treeview.defaultOptions;
const modifiers = [
  {
    name: 'checkboxes',
    title: 'Show `Checkbox`',
    default: false,
  },
];
const variants = [];

export const TreeviewDemo = (
  props: KendoTreeviewProps & { modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean } }
) => {
  const { modifiers: mods, ...other } = props;

  let additionalProps: any = {};

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'checkboxes': {
        additionalProps.showCheckbox = mods?.[modifier];
      }
    }
  });

  return (
    <Treeview {...other}>
      <TreeviewItem text="Furniture" expanded {...additionalProps}>
        <TreeviewGroup>
          <TreeviewItem text="Tables & Chairs" {...additionalProps} />
          <TreeviewItem text="Sofas" {...additionalProps} />
          <TreeviewItem text="Occasional Furniture" {...additionalProps} />
        </TreeviewGroup>
      </TreeviewItem>
      <TreeviewItem text="Decor" expanded={false} {...additionalProps}>
        <TreeviewItem text="Bed Linen" {...additionalProps} />
        <TreeviewItem text="Curtains & Blinds" {...additionalProps} />
        <TreeviewItem text="Carpets" {...additionalProps} />
      </TreeviewItem>
    </Treeview>
  );
}


TreeviewDemo.options = options;
TreeviewDemo.states = states;
TreeviewDemo.variants = variants;
TreeviewDemo.defaultOptions = defaults;
TreeviewDemo.modifiers = modifiers;

export default TreeviewDemo;

