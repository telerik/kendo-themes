import { Icon } from '../icon';
import { classNames } from '../misc';

const className = `k-list-group-item`;

export type ListGroupItemProps = {
    groupIconName?: string;
};

export const ListGroupItem = (props: ListGroupItemProps & React.HTMLAttributes<HTMLLIElement>) => {
    const { groupIconName, ...other } = props;

    return (
        <li {...other} className={classNames(className, props.className)}>
            {groupIconName && <span className="k-list-item-icon-wrapper"><Icon icon={groupIconName} className="k-list-item-icon" /></span>}
            <span className="k-list-item-text">{props.children}</span>
        </li>
    );
};
