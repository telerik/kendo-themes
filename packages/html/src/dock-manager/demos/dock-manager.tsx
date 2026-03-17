import { DockManager, KendoDockManagerProps } from '../dock-manager.spec';
import { DockManagerNormal } from '../templates/dock-manager-normal';
import { DockManagerUnpinnedPane } from '../templates/dock-manager-unpinned-pane';

const options = DockManager.options;
const states = DockManager.states;
const defaults = {
  ...DockManager.defaultOptions,
  variant: 'normal',
};

const variants = [
    {
        name: 'normal',
        title: 'Normal',
    },
    {
        name: 'pane-unpinned',
        title: 'Pane unpinned',
    },
];
const modifiers = [];

export const DockManagerDemo = (
    props: KendoDockManagerProps & { variant?: (typeof variants)[number]['name'] }
) => {
    const { variant, ...other } = { ...defaults, ...props };

    switch (variant) {
        case 'pane-unpinned':
            return (
                <DockManagerUnpinnedPane {...other} style={{width: "80%"}}/>
            );
        case 'normal':
        default:
            return (
                <DockManagerNormal {...other} style={{width: "80%"}}/>
            );
    }
}


DockManagerDemo.options = options;
DockManagerDemo.states = states;
DockManagerDemo.variants = variants;
DockManagerDemo.defaultOptions = defaults;
DockManagerDemo.modifiers = modifiers;
DockManagerDemo.className = DockManager.className;

export default DockManagerDemo;

