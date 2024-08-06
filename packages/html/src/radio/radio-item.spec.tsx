import { classNames } from '../misc';

export const RADIOITEM_CLASSNAME = `k-radio-list-item`;

const states = [];

const options = {};

export type KendoRadioItemState = { [K in (typeof states)[number]]?: boolean };

export const RadioItem = (
    props: KendoRadioItemState &
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
                RADIOITEM_CLASSNAME,
            )}
        >
            {props.children}
        </li>
    );
};

RadioItem.states = states;
RadioItem.options = options;
RadioItem.className = RADIOITEM_CLASSNAME;

export default RadioItem;
