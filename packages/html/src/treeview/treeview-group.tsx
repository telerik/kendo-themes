import { classNames } from '../utils';

const className = `k-treeview-group`;

export const TreeviewGroup = (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={classNames(props.className, className)}>
        {props.children}
    </ul>
);
