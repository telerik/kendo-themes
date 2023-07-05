import { Icon } from '../icon';
import { classNames } from '../misc';

export const CHIPACTION_CLASSNAME = `k-chip-action`;

export enum chipActionType {
    REMOVE = 'remove',
    MORE = 'more'
}

export type KendoChipActionProps = {
    type?: chipActionType | string;
};

export const ChipAction = (
    props: KendoChipActionProps &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        type,
        ...other
    } = props;

    let icon;

    switch (type) {
        case chipActionType.REMOVE:
            icon = <Icon icon="x-circle" size="small" />;
            break;
        case chipActionType.MORE:
            icon = <Icon icon="more-vertical" size="small" />;
            break;
        default:
            return <Icon icon={type} size="small" />;
    }

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                CHIPACTION_CLASSNAME,
                `k-chip-${type}-action`
            )}
        >
            {icon}
        </span>
    );
};
