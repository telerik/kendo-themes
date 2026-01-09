import { MultiSelect, KendoMultiSelectProps } from '../multiselect.spec';
import { MultiSelectNormal } from '../templates/multiselect-normal';
import { Icon } from '../../icon';
import { TextButton } from '../../button';
import { Chip, ChipAction } from '../../chip';
import { List, ListItem } from '../../list';

const states = MultiSelect.states;
const defaults = MultiSelect.defaultOptions;
const options = MultiSelect.options;
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
    name: 'arrow-button',
    title: '`Arrow` Button',
  },
  {
    name: 'opened',
    title: 'Opened',
  },
];
const variants = [];

export const MultiselectDemo = (
  props: KendoMultiSelectProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { modifiers: mods, ...other } = props;

  const popup = (
    <List>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
    </List>
  );

  let additionalProps: KendoMultiSelectProps = {};

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'arrow-button':
        additionalProps.showArrowButton = mods?.[modifier];
        break;
      case 'prefix':
        additionalProps.prefix = mods?.[modifier] ? <Icon icon="user" /> : undefined;
        break;
      case 'suffix':
        additionalProps.suffix = mods?.[modifier] ? <TextButton size={other.size} fillMode="clear">Cc</TextButton> : undefined;
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
    <MultiSelectNormal
      {...other}
      {...additionalProps}
      style={{ width: "300px" }}
      tags={
        <>
          <Chip size={other.size} text="Chip" actions={<ChipAction type="remove" />} />
        </>
      }
    />
  );
}


MultiselectDemo.options = options;
MultiselectDemo.states = states;
MultiselectDemo.variants = variants;
MultiselectDemo.defaultOptions = defaults;
MultiselectDemo.modifiers = modifiers;

export default MultiselectDemo;

