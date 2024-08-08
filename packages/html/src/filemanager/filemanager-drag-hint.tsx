import { classNames } from '../misc';
import { Icon } from '../icon';

const FILEMANAGERDRAGHINT_CLASSNAME = 'k-filemanager-drag-hint';

const states = [];

const options = {};

export type KendoFileManagerDragHintProps = {
    hint: string;
    icon?: string;
};

const defaultOptions = {
    icon: "file",
};

export const FileManagerDragHint = (
    props:
        KendoFileManagerDragHintProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        hint,
        icon = defaultOptions.icon,
        ...other
    } = props;

    return (
        <div className={classNames(
            props.className,
            FILEMANAGERDRAGHINT_CLASSNAME,
            "k-drag-clue",
        )}
        {...other}
        >
            <Icon icon={icon} />
            <span>{hint}</span>
        </div>
    );
};

FileManagerDragHint.states = states;
FileManagerDragHint.options = options;
FileManagerDragHint.className = FILEMANAGERDRAGHINT_CLASSNAME;
FileManagerDragHint.defaultOptions = defaultOptions;

export default FileManagerDragHint;
