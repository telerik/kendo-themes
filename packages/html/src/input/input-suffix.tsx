import { classNames } from '../utils';

const className = `k-input-suffix`;

export const InputSuffix = (props: React.HTMLAttributes<HTMLSpanElement>) => {

    if (!props.children) {
        return <></>;
    }

    return (
        <span className={classNames(className, props.className)}>
            {props.children}
        </span>
    );
};
