import { DropdownList, KendoDropdownListProps } from '../dropdownlist.spec';
import { List, ListContent, ListItem } from '../../list';
import { Searchbox } from '../../searchbox/searchbox.spec';

const states = DropdownList.states;
const defaults = DropdownList.defaultOptions;
const options = DropdownList.options;

const modifiers = [
  {
    name: 'opened',
    title: 'Opened',
  },
];
const variants = [];

export const DropdownlistDemo = (props: KendoDropdownListProps & {
  modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
}
) => {
  const { modifiers: mods, ...other } = props;

  let additionalProps: KendoDropdownListProps = {};

  const popup = (
    <>
      <div className="k-list-filter">
        <Searchbox />
      </div>
      <List style={{ width: 300 }} size={other.size}>
        <ListContent>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
        </ListContent>
      </List>
    </>
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
      <DropdownList placeholder="Value" style={{ width: 300 }} {...other} {...additionalProps} />
    </div>
  );
}


DropdownlistDemo.options = options;
DropdownlistDemo.states = states;
DropdownlistDemo.variants = variants;
DropdownlistDemo.defaultOptions = defaults;
DropdownlistDemo.modifiers = modifiers;

export default DropdownlistDemo;

