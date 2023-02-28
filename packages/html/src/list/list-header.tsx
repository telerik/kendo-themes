import { classNames } from '../utils-new';

const className = `k-list-group-sticky-header`;

export const ListHeader = (props: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={classNames(className, props.className)}>
        <div className="k-list-header-text">{props.children}</div>
    </div>
);
