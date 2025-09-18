import { KendoListViewProps, ListView } from '../listview';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { FileManager } from './filemanager.spec';
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
FileManagerListView.moduleName = FileManager.moduleName;
FileManagerListView.folderName = FileManager.folderName;

export default FileManagerListView;
