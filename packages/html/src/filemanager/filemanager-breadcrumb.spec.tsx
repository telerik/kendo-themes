import { Breadcrumb, KendoBreadcrumbProps } from '../breadcrumb';
import { classNames } from '../misc';

export const FILEMANAGERBREADCRUMB_CLASSNAME = `k-filemanager-breadcrumb`;

const states = [];

const options = {};

const defaultProps = {};

export const FileManagerBreadcrumb = (
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
FileManagerBreadcrumb.defaultProps = defaultProps;

export default FileManagerBreadcrumb;
