import { KendoListViewProps, ListView } from '../listview';
import { classNames } from '../misc';

export const FILEMANAGERLISTVIEW_CLASSNAME = `k-filemanager-listview`;

const states = [];

const options = {};

export const FileManagerListView = (
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

export default FileManagerListView;
