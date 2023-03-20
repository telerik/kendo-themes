import { classNames } from '../utils';

const className = `k-list-group-item`;

export const ListGroupItem = (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={classNames(className, props.className)}>
        <span className="k-list-item-text">{props.children}</span>
    </li>
);
