import { Window, KendoWindowProps } from '../window.spec';
import { Button } from '../../button/button.spec';

const options = Window.options.themeColor;
const states = Window.states;
const defaults = {
  ...Window.defaultOptions,
  variant: 'normal',
};

const variants = [
  {
    name: 'normal',
    title: 'Normal',
  },
  {
    name: 'actions',
    title: 'Actions',
  }
];
const modifiers = [];

export const WindowDemo = (props: KendoWindowProps & { variant?: (typeof variants)[number]['name'] }) => {
  const { variant, ...other } = { ...defaults, ...props };
  return (
    <Window
      title="Window"
      actions={['window-minimize', 'window', 'x']}
      style={{ maxWidth: '400px' }}
      actionButtonsAlign="stretched" actionButtons={
        variant === 'actions' ? (
          <>
            <Button>Cancel</Button>
            <Button themeColor="primary">Submit</Button>
          </>
        ) : undefined
      }
      {...other}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis hac neque, sapien orci.
      Dignissim pulvinar commodo lorem pellentesque ornare dictum egestas feugiat fringilla. Proin
      facilisis mattis sed accumsan orci velit eget.
    </Window>
  );
}


WindowDemo.options = options;
WindowDemo.states = states;
WindowDemo.variants = variants;
WindowDemo.defaultOptions = defaults;
WindowDemo.modifiers = modifiers;

export default WindowDemo;

