import { Icon } from '../icon';
import { classNames } from '../misc';

const className = `k-list-group-item`;

export type ListGroupItemProps = {
    /**
     * Icon to display before the group label.
     */
    groupIconName?: string;
};

/**
 * List group header item for grouped lists.
 *
 * @aria {role="presentation"} Group header is a visual element; removes it from the accessibility tree.
 * @aria {id} Referenced by the parent list\'s aria-labelledby to name the group.
 * @aria {aria-hidden="true"} The group icon (if present) is decorative.
 *
 */
export const ListGroupItem = (props: ListGroupItemProps & React.HTMLAttributes<HTMLLIElement>) => {
    const { groupIconName, ...other } = props;

    return (
        <li
            {...other}
            role="presentation"
            className={classNames(className, props.className)}
        >
            {groupIconName && <span className="k-list-item-icon-wrapper"><Icon icon={groupIconName} className="k-list-item-icon" /></span>}
            <span className="k-list-item-text">{props.children}</span>
        </li>
    );
};

/**
 * ARIA specification for ListGroupItem.
 */
