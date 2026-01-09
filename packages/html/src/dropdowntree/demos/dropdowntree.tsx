import { DropdownTree, KendoDropdownTreeProps } from '../dropdowntree.spec';
import { Treeview, TreeviewGroup, TreeviewItem } from '../../treeview';

const states = DropdownTree.states;
const defaults = DropdownTree.defaultOptions;
const options = DropdownTree.options;

const modifiers = [
  {
    name: 'opened',
    title: 'Opened',
  },
];
const variants = [];

export const DropdowntreeDemo = (props: KendoDropdownTreeProps & {
  modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
}
) => {
  const { modifiers: mods, ...other } = props;

  let additionalProps: any = {};

  const popup = (
    <Treeview size={other.size} style={{ width: 300 }}>
      <TreeviewItem text="Root Item" expanded>
        <TreeviewGroup>
          <TreeviewItem text="Child Item" />
          <TreeviewItem text="Child Item" />
          <TreeviewItem text="Child Item">
            <TreeviewGroup>
              <TreeviewItem text="Child Item Nested" />
            </TreeviewGroup>
          </TreeviewItem>
        </TreeviewGroup>
      </TreeviewItem>
      <TreeviewItem text="Root Item">
        <TreeviewGroup>
          <TreeviewItem text="Child Item" />
        </TreeviewGroup>
      </TreeviewItem>
    </Treeview>
  );

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'opened':
        additionalProps.opened = mods?.[modifier] ? true : false;
        additionalProps.popup = mods?.[modifier] ? popup : undefined;
        break;
      default:
        break;
    }
  });

  return (
    <div>
      <DropdownTree placeholder="Value" style={{ width: 300 }} {...other} {...additionalProps} />
    </div>
  );
}


DropdowntreeDemo.options = options;
DropdowntreeDemo.states = states;
DropdowntreeDemo.variants = variants;
DropdowntreeDemo.defaultOptions = defaults;
DropdowntreeDemo.modifiers = modifiers;

export default DropdowntreeDemo;

