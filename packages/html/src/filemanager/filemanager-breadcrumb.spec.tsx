import { Breadcrumb, KendoBreadcrumbProps } from '../breadcrumb';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { FILEMANAGER_FOLDER_NAME, FILEMANAGER_MODULE_NAME } from './constants';
export const FILEMANAGERBREADCRUMB_CLASSNAME = `k-filemanager-breadcrumb`;

const states = [];

const options = {};

const defaultOptions = {};

export const FileManagerBreadcrumb: KendoComponent<KendoBreadcrumbProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoBreadcrumbProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <Breadcrumb
            className={classNames(
                props.className,
                FILEMANAGERBREADCRUMB_CLASSNAME,
            )}
            {...other}
        >
            {children}
        </Breadcrumb>
    );
};

FileManagerBreadcrumb.states = states;
FileManagerBreadcrumb.options = options;
FileManagerBreadcrumb.className = FILEMANAGERBREADCRUMB_CLASSNAME;
FileManagerBreadcrumb.defaultOptions = defaultOptions;
FileManagerBreadcrumb.moduleName = FILEMANAGER_MODULE_NAME;
FileManagerBreadcrumb.folderName = FILEMANAGER_FOLDER_NAME;

export default FileManagerBreadcrumb;
