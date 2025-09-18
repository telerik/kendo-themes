import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { DRAWER_FOLDER_NAME, DRAWER_MODULE_NAME } from './constants';

export const DRAWER_OVERLAY_CLASSNAME = `k-drawer-overlay`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoDrawerOverlayOptions = {};

export type KendoDrawerOverlayProps = KendoDrawerOverlayOptions & {};

export const DrawerOverlay: KendoComponent<KendoDrawerOverlayProps & React.HTMLAttributes<HTMLDivElement>> = (
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
DrawerOverlay.moduleName = DRAWER_MODULE_NAME;
DrawerOverlay.folderName = DRAWER_FOLDER_NAME;

export default DrawerOverlay;
