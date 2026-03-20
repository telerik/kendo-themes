import { ChipList, KendoChipListProps } from '../chip-list.spec';
import { ChipNormal } from '../templates/chip-normal';
import { ChipAction } from '../chip-action';
import Chip, { KendoChipProps } from '../chip.spec';

const options = {
  ...Chip.options,
  ...ChipList.options,
};

const variants = [];
const states = ChipList.states;
const defaults = {
  ...Chip.defaultOptions,
  ...ChipList.defaultOptions,
};

const modifiers = [
  {
    name: 'icon',
    title: 'Icon',
    type: 'boolean',
  },
  {
    name: 'actions',
    title: 'Actions',
    type: 'boolean',
  },
  {
    name: 'avatar',
    title: 'Avatar',
    type: 'boolean',
  },
];

export const ChipListDemo = (props:
  KendoChipListProps & KendoChipProps & {
    className?: string,
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean }
  }) => {
  const { modifiers, className, ...other } = props;
  const hasIcon = modifiers?.icon;
  const hasActions = modifiers?.actions;
  const hasAvatar = modifiers?.avatar;

  return (
    <ChipList size={other.size}  className={className}>
      <ChipNormal {...other} role="option" aria-selected="false" aria-pressed={undefined} icon={hasIcon ? "star" : undefined} actions={hasActions ? <ChipAction type="remove" /> : undefined} showAvatar={hasAvatar}>Chip</ChipNormal>
      <ChipNormal {...other} role="option" aria-selected="false" aria-pressed={undefined} icon={hasIcon ? "star" : undefined} actions={hasActions ? <ChipAction type="remove" /> : undefined} showAvatar={hasAvatar}>Chip</ChipNormal>
      <ChipNormal {...other} role="option" aria-selected="false" aria-pressed={undefined} icon={hasIcon ? "star" : undefined} actions={hasActions ? <ChipAction type="remove" /> : undefined} showAvatar={hasAvatar}>Chip</ChipNormal>
    </ChipList>
  );
}


ChipListDemo.options = options;
ChipListDemo.states = states;
ChipListDemo.variants = variants;
ChipListDemo.defaultOptions = defaults;
ChipListDemo.modifiers = modifiers;
ChipListDemo.className = ChipList.className;

export default ChipListDemo;

