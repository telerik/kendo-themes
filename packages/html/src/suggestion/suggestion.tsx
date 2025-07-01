import { States, ThemeColor, classNames, optionClassNames, stateClassNames } from '../misc';

export const SUGGESTION_CLASSNAME = `k-suggestion`;

const states = [
    States.active,
    States.hover,
    States.focus,
];

const options = {
    themeColor: [
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary
    ],
};

export type KendoSuggestionOptions = {
    themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoSuggestionProps = KendoSuggestionOptions & {
    text?: string;
};

export type KendoSuggestionState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    text: "Suggestion"
};

export const Suggestion = (
    props: KendoSuggestionProps &
        KendoSuggestionState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        themeColor,
        active,
        hover,
        focus,
        text,
        ...other
    } = props;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                SUGGESTION_CLASSNAME,
                stateClassNames(SUGGESTION_CLASSNAME, {
                    hover,
                    active,
                    focus,
                }),
                optionClassNames(SUGGESTION_CLASSNAME, {
                    themeColor,
                }),
            )}>
            {text}
        </span>
    );
};

Suggestion.states = states;
Suggestion.options = options;
Suggestion.className = SUGGESTION_CLASSNAME;
Suggestion.item = defaultOptions;

export default Suggestion;
