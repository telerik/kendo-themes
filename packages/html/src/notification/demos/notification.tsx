import { Notification, KendoNotificationProps } from '../notification.spec';
import { NotificationAction } from '../notification-action';

const states = Notification.states;
const defaults = Notification.defaultOptions;
const options = Notification.options;
const modifiers = [
  {
    name: 'closable',
    title: 'Close icon',
  },
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
  const { modifiers: mods, ...other } = props;

  let additionalProps: any = {};

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'closable':
        additionalProps.closable = mods?.[modifier] ? true : false;
        additionalProps.actions = mods?.[modifier] ? <NotificationAction type="close" /> : '';
        break;
      case 'icon':
        additionalProps.icon = mods?.[modifier] ? "info-circle" : "";
        break;
      default:
        break;
    }
  });

  return <Notification text='Notification' icon='before'{...other} {...additionalProps} />;
}


NotificationDemo.options = options;
NotificationDemo.states = states;
NotificationDemo.variants = variants;
NotificationDemo.defaultOptions = defaults;
NotificationDemo.modifiers = modifiers;

export default NotificationDemo;

