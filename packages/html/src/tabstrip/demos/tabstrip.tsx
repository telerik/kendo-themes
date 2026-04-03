import { TabStrip, KendoTabStripProps } from '../tabstrip.spec';
import { TabStripNormal } from '../templates/tabstrip-normal';
import { TabStripLeft } from '../templates/tabstrip-left';
import { TabStripRight } from '../templates/tabstrip-right';
import { TabStripBottom } from '../templates/tabstrip-bottom';

const options = {
    ...TabStrip.options,
    scrollable: { type: "boolean" },
};

const states = TabStrip.states;
const defaults = {
    ...TabStrip.defaultOptions,
    scrollable: false,
    variant: 'up',
};

const variants = [
    {
        name: 'up',
        title: 'Position Up',
    },
    {
        name: 'bottom',
        title: 'Position Bottom',
    },
    {
        name: 'left',
        title: 'Position Left',
    },
    {
        name: 'right',
        title: 'Position Right',
    },
];

const modifiers = [];

export const TabstripDemo = (
    props: KendoTabStripProps & { variant?: (typeof variants)[number]['name'] }
) => {
    const { variant, ...other } = { ...defaults, ...props };

    let additionalProps: any = {};

    switch (variant) {
        case 'right':
            return (
                <TabStripRight style={{ height: "230px" }} {...other} {...additionalProps} position="right" />
            );
        case 'left':
            return (
                <TabStripLeft style={{ height: "230px" }} {...other} {...additionalProps} position="left" />
            );
        case 'bottom':
            return (
                <TabStripBottom style={{ width: "350px" }} {...other} {...additionalProps} position="bottom" />
            );
        case 'up':
        default:
            return (
                <TabStripNormal style={{ width: "350px" }} {...other} {...additionalProps} />
            );
    }
}

TabstripDemo.options = options;
TabstripDemo.states = states;
TabstripDemo.variants = variants;
TabstripDemo.defaultOptions = defaults;
TabstripDemo.modifiers = modifiers;
TabstripDemo.className = TabStrip.className;

export default TabstripDemo;

