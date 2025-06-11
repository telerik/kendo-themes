import { classNames } from "../misc";

const className = `k-timestamp`;

export const ChatTimestamp = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </div>
);

