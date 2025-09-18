import { KendoListViewProps, ListView } from '../listview';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { FILEMANAGER_FOLDER_NAME, FILEMANAGER_MODULE_NAME } from './constants';
export const FILEMANAGERLISTVIEW_CLASSNAME = `k-filemanager-listview`;

const states = [];

const options = {};

const defaultOptions = {};

export const FileManagerListView: KendoComponent<KendoListViewProps & React.HTMLAttributes<HTMLDivElement>> = (
    props:
        KendoListViewProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <ListView
            className={classNames(
                props.className,
                FILEMANAGERLISTVIEW_CLASSNAME,
                "k-selectable",
            )}
            layout="flex"
            flexDirection="row"
            flexWrap="wrap"
            {...other}
        >
            {children}
        </ListView>
    );
};

FileManagerListView.states = states;
FileManagerListView.options = options;
FileManagerListView.className = FILEMANAGERLISTVIEW_CLASSNAME;
FileManagerListView.defaultOptions = defaultOptions;
FileManagerListView.moduleName = FILEMANAGER_MODULE_NAME;
FileManagerListView.folderName = FILEMANAGER_FOLDER_NAME;

export default FileManagerListView;
