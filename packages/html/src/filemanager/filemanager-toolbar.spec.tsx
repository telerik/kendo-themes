import { KendoToolbarProps, Toolbar } from '../toolbar';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { FileManager } from './filemanager.spec';
export const FILEMANAGERTOOLBAR_CLASSNAME = `k-filemanager-toolbar`;

const states = [];

const options = {};

const defaultOptions = {};

export const FileManagerToolbar: KendoComponent<KendoToolbarProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <Toolbar
            {...other}
            className={classNames(
                props.className,
                FILEMANAGERTOOLBAR_CLASSNAME,
            )}
        >
            {children}
        </Toolbar>
    );
};

FileManagerToolbar.states = states;
FileManagerToolbar.options = options;
FileManagerToolbar.className = FILEMANAGERTOOLBAR_CLASSNAME;
FileManagerToolbar.defaultOptions = defaultOptions;
FileManagerToolbar.moduleName = FileManager.moduleName;
FileManagerToolbar.folderName = FileManager.folderName;

export default FileManagerToolbar;
