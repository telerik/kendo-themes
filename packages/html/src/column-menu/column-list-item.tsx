import { Checkbox } from '../checkbox';
import { classNames, stateClassNames, States } from '../misc';

export const COLUMNLISTITEM_CLASSNAME = `k-column-list-item`;

const states = [
    States.focus,
    States.disabled,
    States.hover
];

const options = {};

export type KendoColumnListItemProps = {
    label?: string;
    checked?: boolean;
};

const defaultOptions = {};

export type KendoColumnListItemState = { [K in (typeof states)[number]]?: boolean };

export const ColumnListItem = (
    props: KendoColumnListItemProps & KendoColumnListItemState &
        React.HTMLAttributes<HTMLLabelElement>
) => {
    const {
        label,
        checked,
        focus,
        hover,
        disabled,
        ...other
    } = props;

    return (
        <label
            {...other}
            className={classNames(
                props.className,
                COLUMNLISTITEM_CLASSNAME,
                stateClassNames(COLUMNLISTITEM_CLASSNAME, {
                    focus,
                    hover,
                    disabled
                })
            )}>
            <Checkbox disabled={disabled} checked={checked} />
            <span className="k-checkbox-label">{label}</span>
        </label>
    );
};

ColumnListItem.states = states;
ColumnListItem.options = options;
ColumnListItem.className = COLUMNLISTITEM_CLASSNAME;
ColumnListItem.defaultOptions = defaultOptions;

export default ColumnListItem;
