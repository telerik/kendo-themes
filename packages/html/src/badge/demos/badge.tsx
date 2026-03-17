import { Badge, KendoBadgeProps } from '../badge.spec';
import { Icon } from '../../icon';
import { AvatarIcon } from '../../avatar';

const options = {
  ...Badge.options,
  cutoutBorder: {
    type: 'boolean',
  },
};

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

export const BadgeDemo = (
  props: KendoBadgeProps & { variant?: (typeof variants)[number]['name'] }
) => {
  const { variant, ...other } = { ...defaults, ...props };

  let additionalProps: any = {};

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
BadgeDemo.modifiers = [];
BadgeDemo.className = Badge.className;

export default BadgeDemo;

