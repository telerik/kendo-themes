import { classNames } from '../misc';

export const CHECKBOXITEM_CLASSNAME = `k-checkbox-list-item`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoCheckboxItemState = { [K in (typeof states)[number]]?: boolean };

export const CheckboxItem = (
    props: KendoCheckboxItemState &
     React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        ...other
    } = props;
    return (
        <li
            {...other}
            className={classNames(
                props.className,
                CHECKBOXITEM_CLASSNAME,
            )}
        >
            {props.children}
        </li>
    );
};

CheckboxItem.states = states;
CheckboxItem.options = options;
CheckboxItem.className = CHECKBOXITEM_CLASSNAME;
CheckboxItem.defaultOptions = defaultOptions;

export default CheckboxItem;
