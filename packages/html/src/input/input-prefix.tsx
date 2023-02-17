import { classNames } from '../utils-new';

const className = `k-input-prefix`;

export const InputPrefix = (props: React.HTMLAttributes<HTMLSpanElement>) => {

    if (!props.children) {
        return <></>;
    }

    return (
        <span className={classNames(className, props.className)}>
            {props.children}
        </span>
    );
};
