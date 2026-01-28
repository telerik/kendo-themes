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
import { List, ListCustomValue, ListItem } from '../list';
import { Button } from '../button';

import { KendoComponent } from '../_types/component';
import { AUTOCOMPLETE_FOLDER_NAME, AUTOCOMPLETE_MODULE_NAME } from './constants';
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
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    rounded: [Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline],
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
    adaptiveTitle?: string;
    adaptiveSubtitle?: string;
    adaptiveCustomValue?: boolean;
    id?: string;
};

export type KendoAutocompleteState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    separators: true
};

export const Autocomplete: KendoComponent<KendoAutocompleteProps & KendoAutocompleteState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoAutocompleteProps &
        KendoAutocompleteState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        rounded,
        fillMode,
        separators = defaultOptions.separators,
        prefix,
        suffix,
        value,
        placeholder,
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
        adaptiveTitle,
        adaptiveSubtitle,
        adaptiveCustomValue,
        id = 'k-autocomplete',
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
                        {separators && <InputSeparator />}
                    </>
                }
                <InputInnerInput
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    readonly={readonly}
                    role="combobox"
                    aria-haspopup="listbox"
                    aria-expanded={opened ? 'true' : 'false'}
                    aria-controls={opened ? `${id}-listbox` : undefined}
                    aria-autocomplete="list"
                    {...(readonly && { 'aria-readonly': 'true' })}
                    {...(loading && { 'aria-busy': 'true' })}
                    {...(invalid && { 'aria-invalid': 'true' })}
                    tabIndex={0}
                />
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
                        {separators && <InputSeparator />}
                        <InputSuffix>{suffix}</InputSuffix>
                    </>
                }
            </Input>
            {opened && popup &&
                <Popup
                    className="k-list-container k-autocomplete-popup"
                    id={`${id}-listbox`}
                    role="region"
                    aria-label="Autocomplete suggestions"
                >
                    {popup}
                </Popup>
            }
            {adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" aria-label="Confirm" />}
                            input={true}
                            inputValue={value}
                            inputPlaceholder={placeholder}
                            title={adaptiveTitle}
                            subtitle={adaptiveSubtitle}
                        />
                    }
                >
                    <div className="k-list-container">
                        <List
                            customValue={adaptiveCustomValue ? <ListCustomValue text={`Use "${value}"`}/> : undefined}
                            size="large"
                            role="listbox"
                            aria-label="Autocomplete options"
                        >
                            <ListItem role="option" aria-selected="false" tabIndex={-1} text="List item" />
                            <ListItem role="option" aria-selected="false" tabIndex={-1} text="List item" />
                            <ListItem role="option" aria-selected="false" tabIndex={-1} text="List item" />
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
Autocomplete.defaultOptions = defaultOptions;
Autocomplete.moduleName = AUTOCOMPLETE_MODULE_NAME;
Autocomplete.folderName = AUTOCOMPLETE_FOLDER_NAME;

export default Autocomplete;
