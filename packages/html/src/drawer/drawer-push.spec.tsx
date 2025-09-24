import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { DRAWER_FOLDER_NAME, DRAWER_MODULE_NAME } from './constants';

export const DRAWER_PUSH_CLASSNAME = `k-drawer-push`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoDrawerPushOptions = {};

export type KendoDrawerPushProps = KendoDrawerPushOptions & {};

export const DrawerPush: KendoComponent<KendoDrawerPushProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoDrawerPushProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                DRAWER_PUSH_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

DrawerPush.states = states;
DrawerPush.options = options;
DrawerPush.className = DRAWER_PUSH_CLASSNAME;
DrawerPush.defaultOptions = defaultOptions;
DrawerPush.moduleName = DRAWER_MODULE_NAME;
DrawerPush.folderName = DRAWER_FOLDER_NAME;

export default DrawerPush;
