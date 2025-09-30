import { classNames, States } from '../misc';
import { Icon } from '../icon';
import { IconButton } from '../button';
import { MenuButton } from '../menu-button';

export const CHATFILE_CLASSNAME = 'k-chat-file';

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

export type KendoChatFileProps = {
    icon?: string;
    name?: string;
    size?: null | string;
    status?: string;
    deleted?: boolean;
    removeButton?: boolean;
    showButton?: boolean;
};

export const ChatFile = (
    props: KendoChatFileProps &
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
                CHATFILE_CLASSNAME,
                props.className,
                {
                    'k-chat-file-deleted': deleted,
                },
            )}>
            <Icon icon={icon} size="xlarge"></Icon>
            <div className='k-chat-file-info'>
                {name && <span className="k-chat-file-name">{name}</span>}
                {size && <span className="k-chat-file-size">{size}</span>}
                {status && <span className="k-chat-file-status">{status}</span>}
            </div>
            {showButton && (removeButton ?
                <IconButton icon="x" fillMode="flat"></IconButton> :
                <MenuButton icon="more-vertical" fillMode="flat" showArrow={false}></MenuButton>
            )}
        </li>
    );
};

ChatFile.states = states;
ChatFile.options = options;
ChatFile.className = CHATFILE_CLASSNAME;
ChatFile.defaultOptions = defaultOptions;

export default ChatFile;
