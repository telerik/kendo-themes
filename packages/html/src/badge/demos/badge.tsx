import { Badge, KendoBadgeProps } from '../badge.spec';
import { Icon } from '../../icon/icon.spec';
import { AvatarIcon } from '../../avatar/templates/avatar-icon';

const options = Badge.options;
const states = Badge.states;
const defaults = {
  ...Badge.defaultOptions,
  themeColor: 'error' as KendoBadgeProps['themeColor'],
  variant: 'icon',
};

const variants = [
  {
    name: 'icon',
    title: 'Icon Badge',
  },
  {
    name: 'text',
    title: 'Text Badge',
  },
];

const modifiers = [
  {
    name: 'cutoutBorder',
    title: 'Cutout Border',
  },
];

export const BadgeDemo = (
  props: KendoBadgeProps & { variant?: (typeof variants)[number]['name'] } & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

  let additionalProps: any = {};

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'cutoutBorder': {
        additionalProps.cutoutBorder = mods?.[modifier] ? true : false;
      }
    }
  });

  switch (variant) {
    case 'text':
      return (
        <div className="k-badge-container">
          <AvatarIcon>
            <Icon icon="user" />
          </AvatarIcon>
          <Badge align={'bottom-end'} position="edge" {...other} {...additionalProps}>
            26
          </Badge>
        </div>
      );
    case 'icon':
    default:
      return (
        <div className="k-badge-container">
          <AvatarIcon>
            <Icon icon="user" />
          </AvatarIcon>
          <Badge align={'bottom-end'} position="edge" {...other} {...additionalProps}>
            <Icon icon="minus" />
          </Badge>
        </div>
      );
  }
}


BadgeDemo.options = options;
BadgeDemo.states = states;
BadgeDemo.variants = variants;
BadgeDemo.defaultOptions = defaults;
BadgeDemo.modifiers = modifiers;

export default BadgeDemo;

