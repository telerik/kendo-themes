import { ActionSheet, KendoActionSheetProps } from '../action-sheet.spec';
import { ActionSheetHeader } from '../actionsheet-header';
import { ActionSheetFooter } from '../actionsheet-footer';
import { ActionSheetItems } from '../actionsheet-items';
import { ActionSheetItem } from '../actionsheet-item';
import { Button } from '../../button/button.spec';

const options = ActionSheet.options;
const states = ActionSheet.states;
const defaults = { ...ActionSheet.defaultOptions, variant: 'normal' };

const variants = [
  {
    name: 'normal',
    title: 'Normal',
  },
  {
    name: 'adaptive',
    title: 'Adaptive',
  },
  {
    name: 'fullScreen',
    title: 'Full Screen',
  },
];

const modifiers = [
  {
    name: 'actions',
    title: 'Titlebar Actions',
    type: 'boolean',
  },
  {
    name: 'subtitle',
    title: 'Subtitle',
    type: 'boolean',
  },
  {
    name: 'footer',
    title: 'Footer',
    type: 'boolean',
  },
];

export const ActionSheetDemo = (
  props: KendoActionSheetProps & { variant?: (typeof variants)[number]['name'] } & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }) => {
  const { variant, modifiers: mods, ...other } = { ...defaults, ...props };
  let additionalProps: any = {};

  const actionSheetItems = (
    <ActionSheetItems>
      <ActionSheetItem text="Edit Item" description="Click to edit" iconName="edit-tools" />
      <ActionSheetItem text="Add to Favorites" iconName="heart" />
      <ActionSheetItem text="Upload New" iconName="upload" disabled />
      <hr className="k-hr" />
      <ActionSheetItem text="Cancel" iconName="cancel" />
    </ActionSheetItems>
  );

  const subtitle = 'Choose from the items below';
  const title = 'Select Item';

  if (variant === 'fullScreen') {
    additionalProps.fullScreen = true;
  }

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'actions':
        additionalProps.actionsStart = mods?.[modifier] ? true : false;
        additionalProps.actionsEnd = mods?.[modifier] ? true : false;
        break;
      case 'subtitle':
        additionalProps.subtitle = mods?.[modifier] ? subtitle : undefined;
        break;
      case 'footer':
        additionalProps.footer = mods?.[modifier] ? true : false;
        break;
      default:
        break;
    }
  });

  switch (variant) {
    case 'adaptive':
      return (
        <ActionSheet
          {...other}
          adaptive={true}
          fullscreen={additionalProps.fullScreen}
          header={
            <ActionSheetHeader
              actionsStart={
                additionalProps.actionsStart ? (
                  <Button icon="chevron-left" size="large" fillMode="flat" />
                ) : undefined
              }
              actionsEnd={
                additionalProps.actionsEnd ? (
                  <Button icon="x" size="large" fillMode="flat" />
                ) : undefined
              }
              title={title}
              subtitle={additionalProps.subtitle}
            />
          }
          footer={
            additionalProps.footer ? (
              <ActionSheetFooter alignment="stretched">
                <Button text="Cancel" size="large" themeColor="base" />
                <Button text="Apply" size="large" themeColor="primary" />
              </ActionSheetFooter>
            ) : undefined
          }
        >
          {actionSheetItems}
        </ActionSheet>
      );
    case 'normal':
    default:
      return (
        <ActionSheet
          {...other}
          fullscreen={additionalProps.fullScreen}
          header={
            <ActionSheetHeader
              actionsStart={
                additionalProps.actionsStart ? (
                  <Button icon="chevron-left" fillMode="flat" />
                ) : undefined
              }
              actionsEnd={
                additionalProps.actionsEnd ? <Button icon="x" fillMode="flat" /> : undefined
              }
              title="Select Item"
              subtitle={additionalProps.subtitle}
            />
          }
          footer={
            additionalProps.footer ? (
              <ActionSheetFooter alignment="stretched">
                <Button text="Apply" themeColor="primary" />
                <Button text="Cancel" themeColor="base" />
              </ActionSheetFooter>
            ) : undefined
          }
        >
          {actionSheetItems}
        </ActionSheet>
      );
  }
};

ActionSheetDemo.options = options;
ActionSheetDemo.states = states;
ActionSheetDemo.variants = variants;
ActionSheetDemo.defaultOptions = defaults;
ActionSheetDemo.modifiers = modifiers;

export default ActionSheetDemo;
