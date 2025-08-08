import { classNames } from "../misc";

const className = `k-chat-file-wrapper`;

export const ChatFileWrapper = (
    props: React.HTMLAttributes<HTMLUListElement>
) => (
    <ul
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </ul>
);

