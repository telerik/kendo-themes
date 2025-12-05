
import { classNames } from '../misc';
import { Icon } from '../icon';

const className = `k-list-group-item`;

export type KendoListGroupItemProps = {
    groupIcon?: boolean;
    groupIconName?: string;
};

export const ListGroupItem = (props: KendoListGroupItemProps & React.HTMLAttributes<HTMLLIElement>) => {
    const { groupIcon, groupIconName, children, ...other } = props;

    return (
        <li {...other} className={classNames(className, props.className)}>
            {groupIcon && <Icon icon={groupIconName} />}
            <span className="k-list-item-text">{children}</span>
        </li>
    );
};
