import { States, classNames, stateClassNames } from '../misc';

export const TABSTRIPCONTENT_CLASSNAME = `k-tabstrip-content`;

const states = [
    States.active,
    States.focus,
];

const options = {};

const defaultProps = {};

export type KendoTabStripContentState = { [K in (typeof states)[number]]?: boolean };

export const TabStripContent = (
    props: KendoTabStripContentState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        active,
        focus,
        children,
        ...other
    } = props;

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
            )}>
            {children}
        </div>
    );
};

TabStripContent.states = states;
TabStripContent.options = options;
TabStripContent.className = TABSTRIPCONTENT_CLASSNAME;
TabStripContent.defaultProps = defaultProps;

export default TabStripContent;
