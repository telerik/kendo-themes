import { ProgressBar, KendoProgressBarProps } from '../progressbar.spec';
import { ProgressBarNormal } from '../templates/progressbar-normal';

const options = ProgressBar.options;
const states = ProgressBar.states;
const defaults = {
    ...ProgressBar.defaultOptions,
    variant: 'start',
};

const variants = [
    {
        name: 'start',
        title: 'Label start',
    },
    {
        name: 'center',
        title: 'Label center',
    },
    {
        name: 'end',
        title: 'Label end',
    },
    {
        name: 'empty',
        title: 'No label',
    },
];

const modifiers: Array<{ name: string; title: string }> = [
];

export const ProgressbarDemo = (
    props: KendoProgressBarProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    let additionalProps: any = {};
    let wrapperProps: any = { style: { width: "324px" } };

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'reverse':
                additionalProps.reverse = mods?.[modifier] ? true : false;
                break;
            case 'vertical':
                additionalProps.orientation = mods?.[modifier] ? 'vertical' : undefined;
                wrapperProps.style = mods?.[modifier] ? undefined : { width: "324px" };
                break;
        }
    });

    switch (variant) {
        case 'end':
            return (
                <div {...wrapperProps} >
                    <ProgressBarNormal {...other} {...additionalProps} labelPosition="end" value="50" />
                </div>
            );
        case 'center':
            return (
                <div {...wrapperProps} >
                    <ProgressBarNormal {...other} {...additionalProps} labelPosition="center" value="50" />
                </div>
            );
        case 'empty':
            return (
                <div {...wrapperProps} >
                    <ProgressBarNormal {...other} {...additionalProps} label={false} value="50" />
                </div>
            );
        case 'start':
        default:
            return (
                <div {...wrapperProps} >
                    <ProgressBarNormal {...other} {...additionalProps} labelPosition="start" value="50" />
                </div>
            );
    }
}


ProgressbarDemo.options = options;
ProgressbarDemo.states = states;
ProgressbarDemo.variants = variants;
ProgressbarDemo.defaultOptions = defaults;
ProgressbarDemo.modifiers = modifiers;

export default ProgressbarDemo;

