import { KendoToolbarProps, Toolbar } from '../toolbar';
import { classNames } from '../misc';

export const FILEMANAGERTOOLBAR_CLASSNAME = `k-filemanager-toolbar`;

const states = [];

const options = {};

export const FileManagerToolbar = (
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

export default FileManagerToolbar;
