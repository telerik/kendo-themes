import { classNames } from '../misc';
import { Toolbar, KendoToolbarProps } from '../toolbar';

const className = 'k-chat-header';

export const ChatHeader = (
    props: KendoToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => (
    <Toolbar
        {...props}
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </Toolbar>
);
