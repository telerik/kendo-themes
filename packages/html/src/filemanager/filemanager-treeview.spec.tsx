import { KendoTreeviewProps, Treeview } from '../treeview';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { FILEMANAGER_FOLDER_NAME, FILEMANAGER_MODULE_NAME } from './constants';
export const FILEMANAGERTREEVIEW_CLASSNAME = `k-filemanager-treeview`;

const states = [];

const options = {};

const defaultOptions = {};

export const FileManagerTreeview: KendoComponent<KendoTreeviewProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoTreeviewProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <Treeview
            className={classNames(
                props.className,
                FILEMANAGERTREEVIEW_CLASSNAME,
            )}
            {...other}
        >
            {children}
        </Treeview>
    );
};

FileManagerTreeview.states = states;
FileManagerTreeview.options = options;
FileManagerTreeview.className = FILEMANAGERTREEVIEW_CLASSNAME;
FileManagerTreeview.defaultOptions = defaultOptions;
FileManagerTreeview.moduleName = FILEMANAGER_MODULE_NAME;
FileManagerTreeview.folderName = FILEMANAGER_FOLDER_NAME;

export default FileManagerTreeview;
