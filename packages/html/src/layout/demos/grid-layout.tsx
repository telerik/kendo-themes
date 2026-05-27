import { Layout, KendoLayoutProps } from '../layout';
import { GridLayoutNormal } from '../templates/grid-layout-normal';
import { GridLayout } from '../grid-layout.spec';

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

export const GridLayoutDemo = (
    props: KendoLayoutProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: _mods, ...other } = { ...props };

    const baseStyleClasses = "k-border-solid k-border-secondary-subtle k-p-3";
    const baseStyles = { width: "228px", height: "228px", gap: "8px", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr 1fr" };

    const baseGridLayoutContent =
        <>
            <div className="k-p-5 k-bg-primary-subtle" />
            <div className="k-p-5 k-bg-primary-emphasis" />
            <div className="k-p-5 k-bg-primary" />
            <div className="k-p-5 k-bg-primary" />
            <div className="k-p-5 k-bg-primary-subtle" />
            <div className="k-p-5 k-bg-primary-emphasis" />
            <div className="k-p-5 k-bg-primary-emphasis" />
            <div className="k-p-5 k-bg-primary" />
            <div className="k-p-5 k-bg-primary-subtle" />
        </>
    ;

    switch (variant) {
        case 'start':
            return (
                <GridLayoutNormal {...other} style={baseStyles} className={baseStyleClasses} alignItems="stretch" justifyItems="start">
                    {baseGridLayoutContent}
                </GridLayoutNormal>
            );
        case 'middle':
            return (
                <GridLayoutNormal {...other} style={baseStyles} className={baseStyleClasses} alignItems="stretch" justifyItems="center">
                    {baseGridLayoutContent}
                </GridLayoutNormal>
            );
        case 'end':
            return (
                <GridLayoutNormal {...other} style={baseStyles} className={baseStyleClasses} alignItems="stretch" justifyItems="end">
                    {baseGridLayoutContent}
                </GridLayoutNormal>
            );
        case 'stretch':
        default:
            return (
                <GridLayoutNormal {...other} style={baseStyles} className={baseStyleClasses} alignItems="stretch" justifyItems="stretch">
                    {baseGridLayoutContent}
                </GridLayoutNormal>
            );
    }
};


GridLayoutDemo.options = options;
GridLayoutDemo.states = states;
GridLayoutDemo.variants = variants;
GridLayoutDemo.defaultOptions = defaults;
GridLayoutDemo.modifiers = modifiers;
GridLayoutDemo.className = GridLayout.className;

export default GridLayoutDemo;
