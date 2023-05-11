import { classNames, optionClassNames, Size } from '../misc';
import { TreeviewGroup } from '../treeview';

export const TREEVIEW_CLASSNAME = `k-treeview`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoTreeviewOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoTreeviewProps = KendoTreeviewOptions & {
    children?: JSX.Element | JSX.Element[];
};

export type KendoTreeviewState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    size: Size.medium,
};

export const Treeview = (
    props: KendoTreeviewProps &
        KendoTreeviewState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TREEVIEW_CLASSNAME,
                optionClassNames(TREEVIEW_CLASSNAME, {
                    size,
                })
            )}
        >
            <TreeviewGroup className="k-treeview-lines">
                {children}
            </TreeviewGroup>
        </div>
    );
};

Treeview.states = states;
Treeview.options = options;
Treeview.className = TREEVIEW_CLASSNAME;
Treeview.defaultProps = defaultProps;

export default Treeview;
