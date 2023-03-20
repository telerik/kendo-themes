import { classNames } from '../utils';

const className = `k-nodata`;

export const NoData = (props: React.HTMLAttributes<HTMLSpanElement>) => (
    <span className={classNames(className, props.className)}>
        {props.children}
    </span>
);
