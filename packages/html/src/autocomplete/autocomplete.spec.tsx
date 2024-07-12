import { classNames, States, Size, Roundness, FillMode } from '../misc';
import {
    Input,
    InputPrefix,
    InputSuffix,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon,
    InputSeparator
} from '../input';
import { Popup } from '../popup';
import { ActionSheet, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';
import { List, ListItem } from '../list';

export const AUTOCOMPLETE_CLASSNAME = `k-autocomplete`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.loading,
    States.readonly
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ],
};
const defaultProps = {
    size: Input.defaultProps.size,
    rounded: Input.defaultProps.rounded,
    fillMode: Input.defaultProps.fillMode,
    separators: true
};

export type KendoAutocompleteOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoAutocompleteProps = KendoAutocompleteOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    separators?: boolean;
    value?: string;
    placeholder?: string;
    popup?: React.JSX.Element;
    opened?: boolean;
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
};

export type KendoAutocompleteState = { [K in (typeof states)[number]]?: boolean };

export const Autocomplete = (
    props: KendoAutocompleteProps &
        KendoAutocompleteState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        prefix,
        suffix,
        separators = defaultProps.separators,
        value,
        placeholder,
        size,
        rounded,
        fillMode,
        hover,
        focus,
        valid,
        invalid,
        required,
        loading,
        disabled,
        popup,
        opened,
        readonly,
        adaptive,
        adaptiveSettings,
        ...other
    } = props;


    return (
        <>
            <Input
                {...other}
                size={size}
                rounded={rounded}
                fillMode={fillMode}
                hover={hover}
                focus={focus}
                valid={valid}
                invalid={invalid}
                required={required}
                loading={loading}
                disabled={disabled}
                readonly={readonly}
                className={classNames(props.className, AUTOCOMPLETE_CLASSNAME)}
            >
                {prefix &&
                <>
                    <InputPrefix>{prefix}</InputPrefix>
                    {separators && <InputSeparator/>}
                </>
                }
                <InputInnerInput placeholder={placeholder} value={value} />
                <InputValidationIcon
                    valid={valid}
                    invalid={invalid}
                    loading={loading}
                    disabled={disabled} />
                <InputLoadingIcon
                    loading={loading}
                    disabled={disabled} />
                <InputClearValue
                    loading={loading}
                    disabled={disabled}
                    readonly={readonly}
                    value={value} />
                {suffix &&
                <>
                    {separators && <InputSeparator/>}
                    <InputSuffix>{suffix}</InputSuffix>
                </>
                }
            </Input>
            { opened && popup &&
                <Popup className="k-list-container k-autocomplete-popup">
                    {popup}
                </Popup>
            }
            { adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings} >
                    <ActionSheetHeader
                        actions={[ 'x' ]}
                        filter={true}
                        title="Select Item">
                    </ActionSheetHeader>
                    <div className="k-list-container">
                        <List size="large">
                            <ListItem text="List item" />
                            <ListItem text="List item" />
                            <ListItem text="List item" />
                        </List>
                    </div>
                </ActionSheet>
            }
        </>
    );
};

Autocomplete.states = states;
Autocomplete.options = options;
Autocomplete.className = AUTOCOMPLETE_CLASSNAME;
Autocomplete.defaultProps = defaultProps;

export default Autocomplete;
