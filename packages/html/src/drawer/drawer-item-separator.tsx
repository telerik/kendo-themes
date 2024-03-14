
import { classNames } from '../misc';

export const DRAWERITEMSEPARATOR_CLASSNAME = `k-drawer-separator`;

const states = [];

const options = { };

const defaultProps = {} as const;

export const DrawerItemSeparator = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div {...other}
            className={classNames(
                "k-drawer-item",
                DRAWERITEMSEPARATOR_CLASSNAME
            )}>
        </div>
    );
};

DrawerItemSeparator.states = states;
DrawerItemSeparator.options = options;
DrawerItemSeparator.className = DRAWERITEMSEPARATOR_CLASSNAME;
DrawerItemSeparator.defaultProps = defaultProps;

export default DrawerItemSeparator;
