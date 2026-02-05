import { PanelBar } from '../panelbar.spec';
import { PanelBarContent } from '../panelbar-content';
import { PanelBarGroup } from '../panelbar-group';
import { PanelBarItem } from '../panelbar-item';
import { PanelBarNormal } from '../templates/panelbar-normal';
import { PanelBarExpandGroup } from '../templates/panelbar-expand-group';

const options = PanelBar.options;
const states = PanelBar.states;
const defaults = {
  ...PanelBar.defaultOptions,
  variant: 'normal',
};

const variants = [
    {
        name: 'normal',
        title: 'Normal',
    },
    {
        name: 'expand',
        title: 'Expanded',
    },
];

const modifiers = [
    {
        name: 'icon',
        title: 'Item icons',
    },
    {
        name: 'disabled',
        title: 'Disabled item',
    },
];

export const PanelbarDemo = (
    props: { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {};

    let iconMap: any = {
        folder: "folder",
        gear: "gear",
        file: "file",
        image: "image",
    };

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'icon': {
                additionalProps.icon = mods?.[modifier] ? iconMap : undefined;
                break;
            }
            case 'disabled': {
                additionalProps.disabled = mods?.[modifier] ? true : false;
            }
        }
    });

    switch (variant) {
        case 'expand':
            return (
                <>
                    <PanelBarExpandGroup style={{ width: "300px" }} {...other}>
                        <PanelBarItem icon={additionalProps.icon?.gear} header text="Item 1">
                            <PanelBarContent>content</PanelBarContent>
                        </PanelBarItem>
                        <PanelBarItem icon={additionalProps.icon?.folder} selected header expanded text="Item 2">
                            <PanelBarGroup>
                                <PanelBarItem level={1} text="Child 1" />
                                <PanelBarItem level={1} expanded text="Child 2">
                                    <PanelBarGroup>
                                        <PanelBarItem level={2} text="Child 2.1" />
                                        <PanelBarItem icon={additionalProps.icon?.image} level={2} text="Child 2.2" />
                                    </PanelBarGroup>
                                </PanelBarItem>
                                <PanelBarItem disabled={additionalProps.disabled} level={1} text="Child 3">
                                    <PanelBarContent>content</PanelBarContent>
                                </PanelBarItem>
                                <PanelBarItem level={1} text="Child 4" />
                            </PanelBarGroup>
                        </PanelBarItem>
                        <PanelBarItem icon={additionalProps.icon?.folder} disabled={additionalProps.disabled} header text="Item 3">
                            <PanelBarContent>content</PanelBarContent>
                        </PanelBarItem>
                        <PanelBarItem icon={additionalProps.icon?.file} header text="Item 4" />
                    </PanelBarExpandGroup>
                </>
            );
        case 'normal':
        default:
            return (
                <>
                    <PanelBarNormal style={{ width: "300px" }}  {...other}>
                        <PanelBarItem icon={additionalProps.icon?.gear} header text="Item 1">
                            <PanelBarContent>content</PanelBarContent>
                        </PanelBarItem>
                        <PanelBarItem icon={additionalProps.icon?.folder} header text="Item 2">
                            <PanelBarContent>content</PanelBarContent>
                        </PanelBarItem>
                        <PanelBarItem icon={additionalProps.icon?.folder} disabled={additionalProps.disabled} header text="Item 3">
                            <PanelBarContent>content</PanelBarContent>
                        </PanelBarItem>
                        <PanelBarItem icon={additionalProps.icon?.file} header text="Item 4" />
                    </PanelBarNormal>
                </>
            );
    }
}


PanelbarDemo.options = options;
PanelbarDemo.states = states;
PanelbarDemo.variants = variants;
PanelbarDemo.defaultOptions = defaults;
PanelbarDemo.modifiers = modifiers;

export default PanelbarDemo;

