import { classNames } from '../misc';
import DockIndicator from './dock-indicator';

export const DOCKNAVIGATOR_CLASSNAME = `k-dock-navigator`;

const states = [];

const options = {};

export const DockNavigator = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                DOCKNAVIGATOR_CLASSNAME
            )}>
            <DockIndicator position="top"/>
            <DockIndicator position="right"/>
            <DockIndicator position="bottom"/>
            <DockIndicator position="left"/>
            <DockIndicator />
        </div>
    );
};

DockNavigator.states = states;
DockNavigator.options = options;
DockNavigator.className = DOCKNAVIGATOR_CLASSNAME;

export default DockNavigator;
