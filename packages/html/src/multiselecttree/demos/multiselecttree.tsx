import { MultiSelectTree, KendoMultiSelectTreeProps } from '../multiselecttree.spec';
import { MultiSelectTreeNormal } from '../templates/multiselecttree-normal';
import { Chip } from '../../chip';
import { Checkbox } from '../../checkbox';
import { Treeview, TreeviewGroup, TreeviewItem } from '../../treeview';
import { KendoMultiSelectProps } from '../../multiselect';

const options = MultiSelectTree.options;
const variants = [];
const states = MultiSelectTree.states;
const defaults = MultiSelectTree.defaultOptions;
const modifiers = [
  {
    name: 'opened',
    title: 'Opened',
  },
];

export const MultiselecttreeDemo = (
  props: KendoMultiSelectTreeProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean }
  }
) => {
  const { modifiers: mods, ...other } = props;

  const popup = (
    <>
      <div className="k-check-all">
        <Checkbox />
        <span className="k-checkbox-label">
          Check all
        </span>
      </div>
      <Treeview dir={props.dir}>
        <TreeviewItem text="Furniture" showCheckbox >
          <TreeviewGroup>
            <TreeviewItem text="Child 1" showCheckbox />
            <TreeviewItem text="Child 2" showCheckbox />
            <TreeviewItem text="Child 3" showCheckbox />
          </TreeviewGroup>
        </TreeviewItem>
        <TreeviewItem text="Decor" showCheckbox>
          <TreeviewGroup>
            <TreeviewItem text="Child 1" showCheckbox />
            <TreeviewItem text="Child 2" showCheckbox />
            <TreeviewItem text="Child 3" showCheckbox />
          </TreeviewGroup>
        </TreeviewItem>
      </Treeview>
    </>
  );

  let additionalProps: KendoMultiSelectProps = {};
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

  return <MultiSelectTreeNormal
    {...other}
    {...additionalProps}
    style={{ width: "300px" }}
    tags={<Chip size={other.size} text="Tables & Chairs"
    />}
  />;
}


MultiselecttreeDemo.options = options;
MultiselecttreeDemo.states = states;
MultiselecttreeDemo.variants = variants;
MultiselecttreeDemo.defaultOptions = defaults;
MultiselecttreeDemo.modifiers = modifiers;

export default MultiselecttreeDemo;

