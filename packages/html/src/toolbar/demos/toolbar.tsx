import { Toolbar, KendoToolbarProps } from '../toolbar.spec';
import { ToolbarSection } from '../templates/toolbar-section';
import { ToolbarNormal } from '../templates/toolbar-normal';
import { ToolbarScrollable } from '../templates/toolbar-scrollable';
import { ToolbarScrollableButtonsHidden } from '../templates/toolbar-scrollable-buttons-hidden';

const options = Toolbar.options;
const states = Toolbar.states;
const defaults = {
  ...Toolbar.defaultOptions,
  variant: 'default',
};
const variants = [
  {
    name: 'default',
    title: 'Default',
  },
  {
    name: 'scrollable',
    title: 'Scrollable',
  },
  {
    name: 'overlay',
    title: 'Overlay',
  },
  {
    name: 'responsive',
    title: 'Responsive',
  },
];
const modifiers = [];

export const ToolbarDemo = (
  props: KendoToolbarProps & { variant?: (typeof variants)[number]['name'] }
) => {
  const { variant, ...other } = { ...defaults, ...props };

  switch (variant) {
    case 'responsive':
      return (
        <div>
          <ToolbarSection style={{ width: "583px" }} {...other} />
        </div>
      );
    case 'overlay':
      return (
        <div>
          <ToolbarScrollableButtonsHidden style={{ width: "583px" }} {...other} scrollingPosition="start" scrollButtons="hidden" />
        </div>
      );
    case 'scrollable':
      return (
        <div>
          <ToolbarScrollable style={{ width: "583px" }} {...other} />
        </div>
      );
    case 'default':
    default:
      return (
        <div>
          <ToolbarNormal style={{ width: "583px" }} {...other} />
        </div>
      );
  }
}


ToolbarDemo.options = options;
ToolbarDemo.states = states;
ToolbarDemo.variants = variants;
ToolbarDemo.defaultOptions = defaults;
ToolbarDemo.modifiers = modifiers;

export default ToolbarDemo;

