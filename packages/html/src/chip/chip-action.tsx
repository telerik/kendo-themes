import { Icon } from '../icon';
import { classNames } from '../utils';

export const CHIPACTION_CLASSNAME = `k-chip-action`;

export enum chipActionType {
    REMOVE = 'remove',
    MORE = 'more',
}

export type KendoChipActionProps = {
    type?: chipActionType | string
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
            icon = <Icon name="x-circle" />;
            break;
        case chipActionType.MORE:
            icon = <Icon name="more-vertical" />;
            break;
        default:
            return <Icon name={type} />;
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
