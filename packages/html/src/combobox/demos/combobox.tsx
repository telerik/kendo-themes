import { Combobox, KendoComboboxProps } from '../combobox.spec';
import { ComboboxNormal } from '../templates/combobox-normal';
import { Icon } from '../../icon/icon.spec';
import { IconButton } from '../../button/templates/icon-button';
import { List } from '../../list/list.spec';
import { ListContent } from '../../list/list-content';
import { ListItem } from '../../list/list-item.spec';

const states = Combobox.states;
const defaults = Combobox.defaultOptions;
const options = Combobox.options;
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
    name: 'opened',
    title: 'Opened',
  },
];
const variants = [];

export const ComboboxDemo = (
  props: KendoComboboxProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { modifiers: mods, ...other } = props;

  let additionalProps: KendoComboboxProps = {};

  const popup = (
    <List style={{ width: 300 }} size={other.size}>
      <ListContent>
        <ListItem>List item</ListItem>
        <ListItem>List item</ListItem>
        <ListItem>List item</ListItem>
      </ListContent>
    </List>
  );

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'prefix':
        additionalProps.prefix = mods?.[modifier] ? <Icon icon="map-marker-target" /> : undefined;
        break;
      case 'suffix':
        additionalProps.suffix = mods?.[modifier] ? <IconButton size={other.size} icon="copy" fillMode="clear" /> : undefined;
        break;
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
      <ComboboxNormal value="Value" style={{ width: 300 }} {...other} {...additionalProps} />
    </div>
  );
}


ComboboxDemo.options = options;
ComboboxDemo.states = states;
ComboboxDemo.variants = variants;
ComboboxDemo.defaultOptions = defaults;
ComboboxDemo.modifiers = modifiers;

export default ComboboxDemo;

