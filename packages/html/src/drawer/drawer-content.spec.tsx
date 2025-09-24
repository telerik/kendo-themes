
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { DRAWER_FOLDER_NAME, DRAWER_MODULE_NAME } from './constants';
export const DRAWERCONTENT_CLASSNAME = `k-drawer-content`;

const states = [];

const options = { };

const defaultOptions = {} as const;

export const DrawerContent: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div {...other}
            className={classNames(
                props.className,
                DRAWERCONTENT_CLASSNAME
            )}>
            {props.children}
        </div>
    );
};

DrawerContent.states = states;
DrawerContent.options = options;
DrawerContent.className = DRAWERCONTENT_CLASSNAME;
DrawerContent.defaultOptions = defaultOptions;
DrawerContent.moduleName = DRAWER_MODULE_NAME;
DrawerContent.folderName = DRAWER_FOLDER_NAME;

export default DrawerContent;
