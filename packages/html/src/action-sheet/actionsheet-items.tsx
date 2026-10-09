import { classNames } from "../misc";
import { Icon } from "../icon";

/**
 * Container for ActionSheet items.
 */
export const ActionSheetItems = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                'k-list-ul',
            )}>
            {props.children}
        </div>
    );
};

export const ACTIONSHEETGROUPITEM_CLASSNAME = `k-actionsheet-group-item`;

export type KendoActionSheetGroupItemProps = {
    iconName?: string;
}

/**
 * Group header item used to label a group of ActionSheet items.
 *
 * @aria {role="presentation"} Group header is a visual element; removes it from the accessibility tree.
 */
export const ActionSheetGroupItem = (
    props: KendoActionSheetGroupItemProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        iconName,
        ...other
    } = props;

    return (
        <div
            {...other}
            role="presentation"
            className={classNames(
                props.className,
                ACTIONSHEETGROUPITEM_CLASSNAME,
            )}>
            { iconName && <span className="k-icon-wrap"><Icon className="k-actionsheet-item-icon" icon={iconName} /></span> }
            {props.children}
        </div>
    );
};
