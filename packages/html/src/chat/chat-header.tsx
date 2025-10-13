import { classNames } from '../misc';
import { Appbar,  KendoAppbarProps } from '../appbar';

const className = 'k-chat-header';

export const ChatHeader = (
    props: KendoAppbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => (
    <Appbar
        {...props}
        positionMode='sticky'
        className={classNames(
            props.className,
            className,
        )}
        themeColor="inherit"
    >
        {props.children}
    </Appbar>
);
