import { classNames } from '../misc';
import { Splitter, KendoSplitterProps } from '../splitter';

export const DOCKMANAGERSPLITTER_CLASSNAME = `k-dock-manager-splitter`;

const states = [];

const options = {};

const defaultOptions = {};

export const DockManagerSplitter = (
    props: KendoSplitterProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <Splitter
            {...other}
            className={classNames(
                props.className,
                DOCKMANAGERSPLITTER_CLASSNAME,
            )}
        >
            {children}
        </Splitter>
    );
};

DockManagerSplitter.states = states;
DockManagerSplitter.options = options;
DockManagerSplitter.className = DOCKMANAGERSPLITTER_CLASSNAME;
DockManagerSplitter.defaultOptions = defaultOptions;

export default DockManagerSplitter;
