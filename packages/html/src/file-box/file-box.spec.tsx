import { classNames, States } from '../misc';
import { Icon } from '../icon';
import { Button } from '../button';
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

/**
 * @keyboard {ArrowRight} Focuses the next file in the list. If the focus is on the last file, the focus does not move.
 * @keyboard {ArrowLeft} Focuses the previous file in the list. If the focus is on the first file, the focus does not move.
 * @keyboard {Home} Focuses the first file in the list.
 * @keyboard {End} Focuses the last file in the list.
 * @keyboard {Delete or Backspace} Removes the currently focused file. After removal, the focus moves to the next file in the list if available, or to the previous file if the last file was removed.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#list WAI-ARIA Specification: List
 * @see https://www.w3.org/TR/wai-aria-1.2/#listitem WAI-ARIA Specification: Listitem
 */

export default FileBox;
