import { classNames } from "../misc";

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
