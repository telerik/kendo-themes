import { KendoTreeviewProps, Treeview } from '../treeview';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
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
FileManagerTreeview.moduleName = "file-manager";
FileManagerTreeview.folderName = "filemanager";

export default FileManagerTreeview;
