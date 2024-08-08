import { classNames, stateClassNames, States } from '../misc';

const LIST_OPTIONLABEL_CLASSNAME = `k-list-optionlabel`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled
];

const options = {};

const defaultOptions = {};

export type KendoListOptionLabelProps = {
    text?: string;
};

export type KendoListOptionLabelState = { [K in (typeof states)[number]]?: boolean };

export const ListOptionLabel = (
    props: KendoListOptionLabelProps &
        KendoListOptionLabelState &
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
                LIST_OPTIONLABEL_CLASSNAME,
                stateClassNames(LIST_OPTIONLABEL_CLASSNAME, {
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

ListOptionLabel.states = states;
ListOptionLabel.options = options;
ListOptionLabel.className = LIST_OPTIONLABEL_CLASSNAME;
ListOptionLabel.defaultOptions = defaultOptions;

export default ListOptionLabel;
