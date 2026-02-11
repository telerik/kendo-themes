import { Tooltip, KendoTooltipProps } from '../tooltip.spec';
import { TooltipNormal } from '../templates/tooltip-normal';
import { AnimationContainer } from '../../animation-container/animation-container.spec';
import { Button } from '../../button/button.spec';

const options = Tooltip.options.themeColor;
const states = Tooltip.states;
const defaults = {
  ...Tooltip.defaultOptions,
  variant: 'top',
};

const variants = [
    {
        name: 'top',
        title: 'Top',
    },
    {
        name: 'right',
        title: 'Right',
    },
    {
        name: 'left',
        title: 'Left',
    },
    {
        name: 'bottom',
        title: 'Bottom',
    },
];

const modifiers = [
    {
        name: 'closable',
        title: 'Closable',
    },
    {
        name: 'callout',
        title: 'Callout'
    },
];

export const TooltipDemo = (
    props: KendoTooltipProps & { variant: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant = "top", modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {};

    let hasCallout = true;

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'closable': {
                additionalProps.closable = mods?.[modifier] ? true : false;
                break;
            }
            case 'callout': {
                hasCallout = mods?.[modifier] ? true : false;
                break;
            }
        }
    });

    const tooltipSettings: any = {
        right: { top: "2px", left: "61px", calloutDirection: 'left' },
        left: { top: "2px", left: "-94px", calloutDirection: 'right' },
        bottom: { top: "38px", left: "-17px", calloutDirection: 'top' },
        top: { top: "-33px", left: "-17px", calloutDirection: 'bottom' },
    };

    const { top, left, calloutDirection } = tooltipSettings[variant] || {};

    return (
        <div style={{ position: "absolute" }}>
            <AnimationContainer style={{ top, left }}>
                <TooltipNormal
                    style={{ width: "86px", textAlign: "center" }}
                    callout={!hasCallout ? null : calloutDirection}
                    content="Content"
                    {...other} {...additionalProps} />
            </AnimationContainer>
            <Button text="Show" />
        </div>
    );

}


TooltipDemo.options = options;
TooltipDemo.states = states;
TooltipDemo.variants = variants;
TooltipDemo.defaultOptions = defaults;
TooltipDemo.modifiers = modifiers;

export default TooltipDemo;

