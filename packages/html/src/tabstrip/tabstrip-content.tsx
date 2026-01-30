import { States, classNames, stateClassNames } from '../misc';

export const TABSTRIPCONTENT_CLASSNAME = `k-tabstrip-content`;

const states = [
    States.active,
    States.focus,
];

const options = {};

const defaultOptions = {};

export type KendoTabStripContentProps = {
    'aria-labelledby'?: string;
    persisted?: boolean;
};

export type KendoTabStripContentState = { [K in (typeof states)[number]]?: boolean };

export const TabStripContent = (
    props: KendoTabStripContentProps &
        KendoTabStripContentState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        active,
        focus,
        children,
        'aria-labelledby': ariaLabelledby,
        persisted,
        ...other
    } = props;

    const ariaHidden = !active && persisted ? 'true' : undefined;

    const ariaProps = {
        ...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby }),
        ...(ariaHidden && { 'aria-hidden': ariaHidden }),
    } as React.HTMLAttributes<HTMLDivElement>;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TABSTRIPCONTENT_CLASSNAME,
                stateClassNames(TABSTRIPCONTENT_CLASSNAME, {
                    active,
                    focus,
                }),
                props.className
            )}
            role="tabpanel"
            {...ariaProps}>
            {children}
        </div>
    );
};

TabStripContent.states = states;
TabStripContent.options = options;
TabStripContent.className = TABSTRIPCONTENT_CLASSNAME;
TabStripContent.defaultOptions = defaultOptions;

export default TabStripContent;
