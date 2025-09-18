import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { TOOLBAR_FOLDER_NAME, TOOLBAR_MODULE_NAME } from './constants';

export const FLOATING_TOOLBAR_CLASSNAME = `k-floating-toolbar`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoFloatingToolbarOptions = {};

export type KendoFloatingToolbarProps = KendoFloatingToolbarOptions & {};

export const FloatingToolbar: KendoComponent<KendoFloatingToolbarProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoFloatingToolbarProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                FLOATING_TOOLBAR_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

FloatingToolbar.states = states;
FloatingToolbar.options = options;
FloatingToolbar.className = FLOATING_TOOLBAR_CLASSNAME;
FloatingToolbar.defaultOptions = defaultOptions;
FloatingToolbar.moduleName = TOOLBAR_MODULE_NAME;
FloatingToolbar.folderName = TOOLBAR_FOLDER_NAME;

export default FloatingToolbar;
