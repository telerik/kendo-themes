import { Icon } from '../icon';
import { classNames } from '../misc';

const className = `k-menu-group-header`;

export type MenuGroupHeaderProps = {
    groupIconName?: string;
};

/**
 * Menu group header item for grouped Menu popups.
 *
 * @aria {role="presentation"} Group header is a visual element; removes it from the accessibility tree.
 * @aria {aria-hidden="true"} The group icon (if present) is decorative.
 */
export const MenuGroupHeader = (props: MenuGroupHeaderProps & React.HTMLAttributes<HTMLLIElement>) => {
    const { groupIconName, ...other } = props;

    return (
        <li
            {...other}
            role="presentation"
            className={classNames(className, props.className)}
        >
            {groupIconName && <Icon icon={groupIconName} className="k-menu-link-icon" />}
            <span className="k-menu-link-text">{props.children}</span>
        </li>
    );
};

/**
 * ARIA specification for MenuGroupHeader.
 */
