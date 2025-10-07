import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { DIALOG_FOLDER_NAME, DIALOG_MODULE_NAME } from './constants';

export const DIALOG_WRAPPER_CLASSNAME = `k-dialog-wrapper`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoDialogContainerOptions = {};

export type KendoDialogContainerProps = KendoDialogContainerOptions & {};

export const DialogContainer: KendoComponent<KendoDialogContainerProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoDialogContainerProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                DIALOG_WRAPPER_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

DialogContainer.states = states;
DialogContainer.options = options;
DialogContainer.className = DIALOG_WRAPPER_CLASSNAME;
DialogContainer.defaultOptions = defaultOptions;
DialogContainer.moduleName = DIALOG_MODULE_NAME;
DialogContainer.folderName = DIALOG_FOLDER_NAME;

export default DialogContainer;
