import { ChipList } from '../chip-list.spec';
import { KendoChipProps } from '../chip.spec';
import { ChipNormal } from '../templates/chip-normal';
import { ChipAction } from '../chip-action';

const options = ChipList.options;
const variants = [];
const states = ChipList.states;
const defaults = ChipList.defaultOptions;
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
  KendoChipProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean }
  }) => {
  const { size, modifiers } = props;
  const hasIcon = modifiers?.icon;
  const hasActions = modifiers?.actions;
  const hasAvatar = modifiers?.avatar;

  return (
    <ChipList size={size}>
      <ChipNormal {...props} role="option" aria-selected="false" aria-pressed={undefined} icon={hasIcon ? "star" : undefined} actions={hasActions ? <ChipAction type="remove" /> : undefined} showAvatar={hasAvatar}>Chip</ChipNormal>
      <ChipNormal {...props} role="option" aria-selected="false" aria-pressed={undefined} icon={hasIcon ? "star" : undefined} actions={hasActions ? <ChipAction type="remove" /> : undefined} showAvatar={hasAvatar}>Chip</ChipNormal>
      <ChipNormal {...props} role="option" aria-selected="false" aria-pressed={undefined} icon={hasIcon ? "star" : undefined} actions={hasActions ? <ChipAction type="remove" /> : undefined} showAvatar={hasAvatar}>Chip</ChipNormal>
    </ChipList>
  );
}


ChipListDemo.options = options;
ChipListDemo.states = states;
ChipListDemo.variants = variants;
ChipListDemo.defaultOptions = defaults;
ChipListDemo.modifiers = modifiers;

export default ChipListDemo;

