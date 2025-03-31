import { classNames } from '../misc';

const className = `k-no-data`;

export const NoData = (props: React.HTMLAttributes<HTMLSpanElement>) => (
    <span className={classNames(className, props.className)}>
        {props.children}
    </span>
);
