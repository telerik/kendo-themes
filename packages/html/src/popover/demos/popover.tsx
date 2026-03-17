import { Popover, KendoPopoverProps } from '../popover.spec';
import { PopoverNormal } from '../templates/popover-normal';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

const options = Popover.options;
const states = Popover.states;
const defaults = {
  ...Popover.defaultOptions,
  variant: 'bottom',
};

const variants = [
    {
        name: 'bottom',
        title: 'Callout bottom',
    },
    {
        name: 'left',
        title: 'Callout left',
    },
    {
        name: 'top',
        title: 'Callout top',
    },
    {
        name: 'right',
        title: 'Callout right',
    },
];

const modifiers = [
    {
        name: 'title',
        title: 'With title',
    },
    {
        name: 'content',
        title: 'With content',
    },
];

export const PopoverDemo = (
    props: KendoPopoverProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {

    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {
        title: "Popover title",
        body: <>The popover component is a UI element that displays additional content or options when an anchor element is hovered, clicked, or focused.</>
    };

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'title':
                additionalProps.title = mods?.[modifier] ? additionalProps.title : '';
                break;
            case 'content':
                additionalProps.body = mods?.[modifier] ? additionalProps.body : undefined;
                break;
            default:
                break;
        }
    });

    switch (variant) {
        case 'left':
            return (
                <PopoverNormal {...other} {...additionalProps} style={{
                    width: "217px",
                    position: "relative",
                    overflow: "visible"
                }}
                    callout="left">
                    <ActionButtons className="k-popover-actions" alignment="stretched">
                        <Button >Action</Button>
                        <Button themeColor="primary">Primary</Button>
                    </ActionButtons>
                </PopoverNormal>
            );
        case 'right':
            return (
                <PopoverNormal {...other} {...additionalProps} style={{
                    width: "217px",
                    position: "relative",
                    overflow: "visible"
                }}
                    callout="right">
                    <ActionButtons className="k-popover-actions" alignment="stretched">
                        <Button >Action</Button>
                        <Button themeColor="primary">Primary</Button>
                    </ActionButtons>
                </PopoverNormal>
            );
        case 'top':
            return (
                <PopoverNormal {...other} {...additionalProps} style={{
                    width: "217px",
                    position: "relative",
                    overflow: "visible"
                }}
                    callout="top">
                    <ActionButtons className="k-popover-actions" alignment="stretched">
                        <Button >Action</Button>
                        <Button themeColor="primary">Primary</Button>
                    </ActionButtons>
                </PopoverNormal>
            );
        case 'bottom':
        default:
            return (
                <PopoverNormal {...other} {...additionalProps} style={{
                    width: "217px",
                    position: "relative",
                    overflow: "visible"
                }}
                    callout="bottom">
                    <ActionButtons className="k-popover-actions" alignment="stretched">
                        <Button >Action</Button>
                        <Button themeColor="primary">Primary</Button>
                    </ActionButtons>
                </PopoverNormal>
            );
    }
}


PopoverDemo.options = options;
PopoverDemo.states = states;
PopoverDemo.variants = variants;
PopoverDemo.defaultOptions = defaults;
PopoverDemo.modifiers = modifiers;
PopoverDemo.className = Popover.className;

export default PopoverDemo;

