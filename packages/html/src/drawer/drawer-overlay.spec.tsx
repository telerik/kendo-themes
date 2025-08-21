import { classNames } from '../misc';

export const DRAWER_OVERLAY_CLASSNAME = `k-drawer-overlay`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoDrawerOverlayOptions = {};

export type KendoDrawerOverlayProps = KendoDrawerOverlayOptions & {};

export const DrawerOverlay = (
    props: KendoDrawerOverlayProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                DRAWER_OVERLAY_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

DrawerOverlay.states = states;
DrawerOverlay.options = options;
DrawerOverlay.className = DRAWER_OVERLAY_CLASSNAME;
DrawerOverlay.defaultOptions = defaultOptions;

export default DrawerOverlay;
