import { KendoToolbarProps, Toolbar } from '../toolbar';
import { classNames } from '../misc';

export const DOCKMANAGERTOOLBAR_CLASSNAME = `k-dock-manager-toolbar`;

const states = [];

const options = {};

export type KendoDockManagerToolbarProps = {
    toolbarItems?: React.JSX.Element | React.JSX.Element[];
};

export const DockManagerToolbar = (
    props: KendoToolbarProps &
        KendoDockManagerToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        toolbarItems,
        ...other
    } = props;

    return (
        <Toolbar
            {...other}
            className={classNames(
                props.className,
                DOCKMANAGERTOOLBAR_CLASSNAME,
            )}
        >
            {toolbarItems}
        </Toolbar>
    );
};

DockManagerToolbar.states = states;
DockManagerToolbar.options = options;
DockManagerToolbar.className = DOCKMANAGERTOOLBAR_CLASSNAME;

export default DockManagerToolbar;
