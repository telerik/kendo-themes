import { classNames, States } from '../misc';
import { Icon } from '../icon';
import { IconButton } from '../button';
import { MenuButton } from '../menu-button';
import { FILE_BOX_FOLDER_NAME, FILE_BOX_MODULE_NAME } from './constants';

export const FILE_BOX_CLASSNAME = 'k-file-box';

const states = [
    States.selected
];

const options = {};

const defaultOptions = {
    icon: 'file-pdf',
    name: 'FileName.pdf',
    size: '2MB',
    showButton: 'true'
};

export type KendoFileBoxProps = {
    icon?: string;
    name?: string;
    size?: null | string;
    status?: string;
    deleted?: boolean;
    removeButton?: boolean;
    showButton?: boolean;
};

export const FileBox = (
    props: KendoFileBoxProps &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        icon = defaultOptions.icon,
        name = defaultOptions.name,
        size = defaultOptions.size,
        status,
        deleted,
        removeButton,
        showButton = defaultOptions.showButton,
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                FILE_BOX_CLASSNAME,
                props.className,
                {
                    'k-file-deleted': deleted,
                },
            )}>
            <Icon icon={icon} size="xlarge"></Icon>
            <div className='k-file-info'>
                {name && <span className="k-file-name">{name}</span>}
                {size && <span className="k-file-size">{size}</span>}
                {status && <span className="k-file-status">{status}</span>}
            </div>
            {showButton && (removeButton ?
                <IconButton icon="x-mark-sm-outline" fillMode="flat"></IconButton> :
                <MenuButton icon="more-vertical" fillMode="flat" showArrow={false}></MenuButton>
            )}
        </li>
    );
};

FileBox.states = states;
FileBox.options = options;
FileBox.className = FILE_BOX_CLASSNAME;
FileBox.defaultOptions = defaultOptions;
FileBox.moduleName = FILE_BOX_MODULE_NAME;
FileBox.folderName = FILE_BOX_FOLDER_NAME;

export default FileBox;
