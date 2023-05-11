import { classNames } from '../misc';

const className = `k-nodata`;

export const NoData = (props: React.HTMLAttributes<HTMLSpanElement>) => (
    <span className={classNames(className, props.className)}>
        {props.children}
    </span>
);
