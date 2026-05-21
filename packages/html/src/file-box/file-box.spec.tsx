import { classNames, States } from '../misc';
import { Icon } from '../icon';
import { Button } from '../button';
import { MenuButton } from '../menu-button';
import { FILE_BOX_FOLDER_NAME, FILE_BOX_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';

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

    const label = [name, size].filter(Boolean).join(' ');

    return (
        <li
            role="listitem"
            tabIndex={0}
            aria-label={label || undefined}
            {...other}
            className={classNames(
                FILE_BOX_CLASSNAME,
                props.className,
                {
                    'k-file-deleted': deleted,
                },
            )}>
            <Icon icon={icon} size="xlarge" aria-hidden="true"></Icon>
            <div className='k-file-info'>
                {name && <span className="k-file-name">{name}</span>}
                {size && <span className="k-file-size">{size}</span>}
                {status && <span className="k-file-status">{status}</span>}
            </div>
            {showButton && (removeButton ?
                <Button as="span" icon="x-circle" fillMode="flat" size="xsmall" aria-hidden="true" /> :
                <MenuButton icon="more-vertical" fillMode="flat" size="xsmall" showArrow={false} aria-label="File actions"></MenuButton>
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

FileBox.ariaSpec = a11ySpec.ariaSpec;
export default FileBox;
