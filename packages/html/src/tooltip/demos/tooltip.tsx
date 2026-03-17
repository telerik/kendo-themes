import { Tooltip, KendoTooltipProps } from '../tooltip.spec';
import { TooltipNormal } from '../templates/tooltip-normal';
import { AnimationContainer } from '../../animation-container';
import { Button } from '../../button';

const options = {
    ...Tooltip.options,
    closable: { type: 'boolean' },
    callout: ['none', 'top', 'bottom', 'left', 'right'],
};

const states = Tooltip.states;
const defaults = {
    ...Tooltip.defaultOptions,
    callout: 'top',
};

const variants = [
];

export const TooltipDemo = (
    props: KendoTooltipProps & { variant?: (typeof variants)[number]['name'] }
) => {
    const { callout = "top", ...other } = { ...defaults, ...props };


    const tooltipSettings: any = {
        none: { top: "-33px", left: "-17px", calloutDirection: null },
        right: { top: "2px", left: "61px", calloutDirection: 'left' },
        left: { top: "2px", left: "-94px", calloutDirection: 'right' },
        bottom: { top: "38px", left: "-17px", calloutDirection: 'top' },
        top: { top: "-33px", left: "-17px", calloutDirection: 'bottom' },
    };

    const { top, left, calloutDirection } = tooltipSettings[callout] || {};

    return (
        <div style={{ position: "absolute" }}>
            <AnimationContainer style={{ top, left }}>
                <TooltipNormal
                    style={{ width: "86px", textAlign: "center" }}
                    callout={calloutDirection}
                    content="Content"
                    {...other} />
            </AnimationContainer>
            <Button text="Show" />
        </div>
    );

}


TooltipDemo.options = options;
TooltipDemo.states = states;
TooltipDemo.variants = variants;
TooltipDemo.defaultOptions = defaults;
TooltipDemo.modifiers = [];
TooltipDemo.className = Tooltip.className;

export default TooltipDemo;

