import { classNames, States, Size, Roundness, FillMode } from '../misc';
import {
    Input,
    InputPrefix,
    InputSuffix,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon
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
    fillMode: Input.defaultProps.fillMode
};

export type KendoAutocompleteOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoAutocompleteProps = KendoAutocompleteOptions & {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    value?: string;
    placeholder?: string;
    popup?: JSX.Element;
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
                <InputPrefix>{prefix}</InputPrefix>
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
                <InputSuffix>{suffix}</InputSuffix>
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
