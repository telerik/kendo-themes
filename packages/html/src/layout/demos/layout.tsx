import { Layout, KendoLayoutProps } from '../layout';
import { StackLayoutNormal } from '../templates/stack-layout-normal';
import { StackLayout } from '../stack-layout.spec';

const options = Layout.options;
const states = Layout.states;
const defaults = {
    ...Layout.defaultOptions,
  variant: 'stretch',
};

const variants = [
    {
        name: 'start',
        title: 'Start'
    },
    {
        name: 'middle',
        title: 'Middle'
    },
    {
        name: 'end',
        title: 'End'
    },
    {
        name: 'stretch',
        title: 'Stretch'
    },
];

const modifiers: Array<{ name: string; title: string }> = [

];

export const LayoutDemo = (
    props: KendoLayoutProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...props };

    let additionalProps: any = {
        orientation: "vertical"
    };

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'vertical': {
                additionalProps.orientation = mods?.[modifier] ? "vertical" : "horizontal";
            }
        }
    });

    const baseStyleClasses = "k-border-solid k-border-secondary-subtle k-p-3";
    const baseStyles = {width: "228px", height: "228px", gap: "8px"};

    const baseStackLayoutContent =
        <>
            <div className="k-p-5 k-bg-primary-subtle" />
            <div className="k-p-5 k-bg-primary-emphasis" />
            <div className="k-p-5 k-bg-primary" />
        </>
    ;

    switch (variant) {
        case 'start':
            return (
                <StackLayoutNormal {...other} {...additionalProps} style={baseStyles} className={baseStyleClasses} alignItems="stretch" justifyContent="start" >
                    {baseStackLayoutContent}
                </StackLayoutNormal>
            );
        case 'middle':
            return (
                <StackLayoutNormal {...other} {...additionalProps} style={baseStyles} className={baseStyleClasses} alignItems="stretch" justifyContent="center">
                    {baseStackLayoutContent}
                </StackLayoutNormal>
            );
        case 'end':
            return (
                <StackLayoutNormal {...other} {...additionalProps} style={baseStyles} className={baseStyleClasses} alignItems="stretch" justifyContent="end">
                    {baseStackLayoutContent}
                </StackLayoutNormal>
            );
        case 'stretch':
        default:
            return (
                <StackLayoutNormal {...other} {...additionalProps} style={baseStyles} className={baseStyleClasses} alignItems="stretch" justifyContent="stretch">
                    {baseStackLayoutContent}
                </StackLayoutNormal>
            );
    }
}


LayoutDemo.options = options;
LayoutDemo.states = states;
LayoutDemo.variants = variants;
LayoutDemo.defaultOptions = defaults;
LayoutDemo.modifiers = modifiers;
LayoutDemo.className = StackLayout.className;

export default LayoutDemo;

