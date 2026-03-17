import { ChipAction } from "../chip-action";
import { Chip, KendoChipProps } from "../chip.spec";

const states = Chip.states;
const defaults = Chip.defaultOptions;
const options = Chip.options;
const variants = [];
const modifiers = [
  {
    name: 'icon',
    title: 'Icon',
  },
  {
    name: 'avatar',
    title: 'Avatar',
  },
  {
    name: 'remove-icon',
    title: '`Remove` Icon',
  },
  {
    name: 'more-options',
    title: '`More options` Icon',
  },
];

export const ChipDemo = (
  props: KendoChipProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { modifiers: mods, ...other } = props;

  let additionalProps: any = {};

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'icon':
        additionalProps.icon = mods?.[modifier] ? 'arrow-down' : undefined;
        break;
      case 'avatar':
        additionalProps.showAvatar = mods?.[modifier] ? true : false;
        additionalProps.avatarImage = mods?.[modifier] ? "https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg" : undefined;
        break;
      case 'more-options':
        if (!additionalProps.actions) {
          additionalProps.actions = [];
        }
        additionalProps.actions[0] = mods?.[modifier] ? (
          <ChipAction type="more" />
        ) : undefined;
        break;
      case 'remove-icon':
        if (!additionalProps.actions) {
          additionalProps.actions = [];
        }
        additionalProps.actions[1] = mods?.[modifier] ? (
          <ChipAction type="remove" />
        ) : undefined;
        break;

      default:
        break;
    }
  });

  return (
    <Chip {...other} {...additionalProps}>
      Chip component
    </Chip>
  );
}

ChipDemo.options = options;
ChipDemo.states = states;
ChipDemo.variants = variants;
ChipDemo.defaultOptions = defaults;
ChipDemo.modifiers = modifiers;
ChipDemo.className = Chip.className;

export default ChipDemo;
