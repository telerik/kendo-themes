import { Breadcrumb, KendoBreadcrumbProps } from '../breadcrumb';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { FileManager } from './filemanager.spec';
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
FileManagerBreadcrumb.moduleName = FileManager.moduleName;
FileManagerBreadcrumb.folderName = FileManager.folderName;

export default FileManagerBreadcrumb;
