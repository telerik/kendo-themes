import { Notification, KendoNotificationProps } from '../notification.spec';
import { NotificationAction } from '../notification-action';

const states = Notification.states;
const defaults = Notification.defaultOptions;
const options = {
  ...Notification.options,
  closable: { type: 'boolean' },
};

const modifiers = [
  {
    name: 'icon',
    title: 'Icon before',
  },
];

const variants = [];

export const NotificationDemo = (
  props: KendoNotificationProps & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }
) => {
  const { modifiers: mods, closable, ...other } = props;

  let additionalProps: any = {};

  if (closable) {
    additionalProps.closable = true;
    additionalProps.actions = <NotificationAction type="close" />;
  }

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'icon':
        additionalProps.icon = mods?.[modifier] ? "info-circle" : "";
        break;
      default:
        break;
    }
  });

  return <Notification text='Notification' {...other} {...additionalProps} />;
}

NotificationDemo.options = options;
NotificationDemo.states = states;
NotificationDemo.variants = variants;
NotificationDemo.defaultOptions = defaults;
NotificationDemo.modifiers = modifiers;
NotificationDemo.className = Notification.className;

export default NotificationDemo;

