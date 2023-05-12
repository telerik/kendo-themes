import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../utils';

export const TREEVIEWLEAF_CLASSNAME = `k-treeview-leaf`;

const states = [
    States.hover,
    States.focus,
    States.selected
];

const options = {};

export type KendoTreeviewLeafProps = {
    text?: string;
    showIcon?: boolean;
    icon?: string;
};

export type KendoTreeviewLeafState = { [K in (typeof states)[number]]?: boolean };

export const TreeviewLeaf = (
    props: KendoTreeviewLeafProps &
        KendoTreeviewLeafState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        text,
        showIcon,
        icon,
        hover,
        focus,
        selected,
        ...other
    } = props;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                TREEVIEWLEAF_CLASSNAME,
                stateClassNames(TREEVIEWLEAF_CLASSNAME, {
                    hover,
                    focus,
                    selected
                })
            )}
        >
            {showIcon && <Icon icon={icon} />}
            <span className="k-treeview-leaf-text">
                {text}
            </span>
        </span>
    );
};

TreeviewLeaf.states = states;
TreeviewLeaf.options = options;
TreeviewLeaf.className = TREEVIEWLEAF_CLASSNAME;

export default TreeviewLeaf;
