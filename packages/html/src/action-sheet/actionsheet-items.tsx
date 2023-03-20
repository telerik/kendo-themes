import { classNames } from "../utils";

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
