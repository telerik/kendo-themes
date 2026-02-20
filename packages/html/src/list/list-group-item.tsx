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
 * @accessibility
 * - Has `role="presentation"` as it's a visual group header, not a selectable option
 * - Should have an id that can be referenced by the parent UL's `aria-labelledby`
 * - Icon (if present) has `aria-hidden="true"`
 */
export const ListGroupItem = (props: ListGroupItemProps & React.HTMLAttributes<HTMLLIElement>) => {
    const { groupIconName, ...other } = props;

    return (
        <li
            {...other}
            role="presentation"
            className={classNames(className, props.className)}
        >
            {groupIconName && <span className="k-list-item-icon-wrapper"><Icon icon={groupIconName} className="k-list-item-icon" aria-hidden="true" /></span>}
            <span className="k-list-item-text">{props.children}</span>
        </li>
    );
};

/**
 * ARIA specification for ListGroupItem.
 */
ListGroupItem.ariaSpec = {
    selector: '.k-list-group-item',
    rules: [
        { selector: '.k-list-group-item', attribute: 'role=presentation', usage: 'Group headers are presentational, not selectable options.' },
        { selector: '.k-list-group-item', attribute: 'id (when referenced)', usage: 'ID for aria-labelledby on the parent group UL.' },
    ]
};
