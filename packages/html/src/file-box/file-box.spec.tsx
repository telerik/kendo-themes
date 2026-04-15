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
                <Button as="span" icon="x-mark-sm-outline" fillMode="flat" size="xsmall" aria-hidden="true" /> :
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
FileBox.ariaSpec = {
    selector: '.k-file-box-wrapper',
    rules: [
        { selector: '.k-file-box-wrapper', attribute: 'role=list', usage: 'Explicitly sets the UL role to list.' },
        { selector: '.k-file-box-wrapper', attribute: 'aria-label', usage: 'Provides an accessible name for the file list (e.g. "Attached files").' },
        { selector: '.k-file-box-wrapper .k-files-scroll', attribute: 'role=presentation', usage: 'The scrollable container between the list and its items is presentational, ensuring the list→listitem relationship is preserved in the accessibility tree.' },
        { selector: '.k-file-box-wrapper .k-file-box', attribute: 'role=listitem', usage: 'Explicitly sets the LI role to listitem.' },
        { selector: '.k-file-box-wrapper .k-file-box', attribute: 'tabindex', usage: 'Makes the file box focusable. Uses roving tabindex: 0 for the focused item, -1 for the rest.' },
        { selector: '.k-file-box-wrapper .k-file-box', attribute: 'aria-label', usage: 'Provides an accessible name describing the file. Can include the file name and size (e.g. "FileName.pdf 2MB").' },
        { selector: '.k-file-box-wrapper .k-file-box .k-icon', attribute: 'aria-hidden=true', usage: 'The file type icon is decorative and hidden from screen readers.' },
        { selector: '.k-file-box-wrapper .k-file-box span.k-button', attribute: 'aria-hidden=true', usage: 'The remove button is rendered as a decorative span and hidden from screen readers. File removal is handled by keyboard interaction on the listitem itself.' }
    ]
};

export default FileBox;
