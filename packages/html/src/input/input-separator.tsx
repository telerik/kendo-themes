import { classNames } from '../utils';

const className = `k-input-separator`;

export const InputSeparator = (props: React.HTMLAttributes<HTMLSpanElement>) => (
    <span
        className={classNames(className, props.className)}
    />
);
