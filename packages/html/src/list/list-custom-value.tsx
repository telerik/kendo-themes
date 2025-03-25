import { classNames, stateClassNames, States } from '../misc';

const LIST_CUSTOMVALUE_CLASSNAME = `k-list-custom-value`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled
];

const options = {};

const defaultOptions = {};

export type KendoListCustomValueProps = {
    text?: string;
};

export type KendoListCustomValueState = { [K in (typeof states)[number]]?: boolean };

export const ListCustomValue = (
    props: KendoListCustomValueProps &
       KendoListCustomValueState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        text,
        hover,
        focus,
        selected,
        disabled,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                LIST_CUSTOMVALUE_CLASSNAME,
                stateClassNames(LIST_CUSTOMVALUE_CLASSNAME, {
                    hover,
                    focus,
                    selected,
                    disabled
                })
            )}
        >
            {text}
        </div>
    );
};

ListCustomValue.states = states;
ListCustomValue.options = options;
ListCustomValue.className = LIST_CUSTOMVALUE_CLASSNAME;
ListCustomValue.defaultOptions = defaultOptions;

export default ListCustomValue;
