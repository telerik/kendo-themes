import { JSX } from 'react';
import { FloatingActionButton, KendoFloatingActionButtonProps } from '../fab.spec';
import { FloatingActionButtonItem } from '../fab-item';
import { FloatingActionButtonItems } from '../fab-items';

const options = FloatingActionButton.options;
const states = FloatingActionButton.states;
const defaults = {
  ...FloatingActionButton.defaultOptions,
  variant: 'text',
};
const variants = [
  {
    name: 'icon-only',
    title: 'Icon Only',
  },
  {
    name: 'icon-and-text',
    title: 'Icon & Text',
  },
  {
    name: 'text',
    title: 'Text',
  },
];

const modifiers = [
  {
    name: 'opened',
    title: 'Opened',
  },
];

export const FabDemo = (
  props: KendoFloatingActionButtonProps & { variant?: (typeof variants)[number]['name'] } &
  { modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean } }
) => {
  const { variant, modifiers: mods, ...other } = props;
  const { opened } = mods || {};

  const itemsContent = opened ? (
    <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: `calc(16px + 36px)`, right: `calc(16px + calc(36px / 2) - calc(36px /2))` }}>
      <FloatingActionButtonItems position="bottom">
        <FloatingActionButtonItem text="Item" icon={"pencil"} align="right" />
      </FloatingActionButtonItems>
    </div>
  ) : null;

  let component: JSX.Element;
  switch (variant) {
    case 'icon-only':
      component = <FloatingActionButton {...other} icon="star" />

      break;
    case 'icon-and-text':
      component = <FloatingActionButton {...other} icon="star" text="Action" />;
      break;
    case 'text':
    default:
      component = <FloatingActionButton {...other} text="Action" />;
      break;
  }

  return <span style={{ position: 'relative' }}>{component}{itemsContent}</span>;
}


FabDemo.options = options;
FabDemo.states = states;
FabDemo.variants = variants;
FabDemo.defaultOptions = defaults;
FabDemo.modifiers = modifiers;

export default FabDemo;

