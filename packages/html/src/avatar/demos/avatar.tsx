import { Avatar, KendoAvatarProps } from '../avatar.spec';
import { AvatarImage } from '../templates/avatar-image';
import { AvatarIcon } from '../templates/avatar-icon';
import { AvatarText } from '../templates/avatar-text';
import { Icon } from '../../icon';

const options = Avatar.options;
const states = Avatar.states;
const defaults = {
  ...Avatar.defaultOptions,
  variant: 'image',
};
const variants = [
  {
    name: 'image',
    title: 'Image',
  },
  {
    name: 'icon',
    title: 'Icon Avatar',
  },
  {
    name: 'text',
    title: 'Text Avatar',
  },
];
const modifiers = [];

export const AvatarDemo = (
  props: KendoAvatarProps & { variant?: (typeof variants)[number]['name'] }
) => {
  const { variant, ...other } = props;

  switch (variant) {
    case 'icon':
      return (
        <AvatarIcon {...other}>
          <Icon icon="star" />
        </AvatarIcon>
      );
    case 'text':
      return <AvatarText {...other}>JO</AvatarText>;
    case 'image':
    default:
      return (
        <AvatarImage {...other}>
          <img src="https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg" />
        </AvatarImage>
      );
  }
}


AvatarDemo.options = options;
AvatarDemo.states = states;
AvatarDemo.variants = variants;
AvatarDemo.defaultOptions = defaults;
AvatarDemo.modifiers = modifiers;
AvatarDemo.className = Avatar.className;

export default AvatarDemo;

