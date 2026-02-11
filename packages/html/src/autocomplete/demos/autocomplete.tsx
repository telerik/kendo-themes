import { KendoAutocompleteProps } from '../autocomplete.spec';
import { AutocompleteNormal } from '../templates/autocomplete-normal';
import { Textbox } from '../../textbox/textbox.spec';
import { Icon } from '../../icon/icon.spec';
import { TextButton } from '../../button/templates/text-button';
import { List } from '../../list/list.spec';
import { ListContent } from '../../list/list-content';
import { ListItem } from '../../list/list-item.spec';

const states = Textbox.states;
const defaults = Textbox.defaultOptions;
const options = Textbox.options;
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
  }
];
const variants = [];

export const AutocompleteDemo = (
  props: KendoAutocompleteProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { modifiers: mods, ...other } = props;

  let additionalProps: KendoAutocompleteProps = {};

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
        additionalProps.prefix = mods?.[modifier] ? <Icon icon="search" /> : undefined;
        break;
      case 'suffix':
        additionalProps.suffix = mods?.[modifier] ? <TextButton size={other.size} fillMode="clear">Search</TextButton> : undefined;
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
    <AutocompleteNormal value="Value" style={{ width: 300 }} {...other} {...additionalProps} />
  );
}


AutocompleteDemo.options = options;
AutocompleteDemo.states = states;
AutocompleteDemo.variants = variants;
AutocompleteDemo.defaultOptions = defaults;
AutocompleteDemo.modifiers = modifiers;

export default AutocompleteDemo;

