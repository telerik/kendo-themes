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
import { List, ListContent, ListCustomValue, ListItem } from '../list';
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
    /**
     * Unique identifier for the autocomplete. Used to generate related IDs.
     * @aria Controls aria-controls references
     */
    id?: string;
    /**
     * Autocomplete behavior: 'list', 'both', or 'inline'.
     * @aria aria-autocomplete - Indicates autocomplete type
     */
    autocomplete?: 'list' | 'both' | 'inline' | 'none';
    /**
     * ID of the currently focused/active item in the listbox.
     * @aria aria-activedescendant - Points to focused item when popup is open
     */
    activeDescendant?: string;
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
        id,
        autocomplete,
        activeDescendant,
        'aria-label': ariaLabel,
        ...other
    } = props;

    const listboxId = id ? `${id}-listbox` : undefined;


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
                    role="combobox"
                    aria-haspopup="listbox"
                    aria-expanded={opened ? 'true' : 'false'}
                    aria-controls={opened ? listboxId : undefined}
                    aria-activedescendant={opened && activeDescendant ? activeDescendant : undefined}
                    aria-autocomplete={autocomplete}
                    aria-invalid={invalid ? 'true' : undefined}
                    aria-busy={loading ? 'true' : undefined}
                    aria-label={ariaLabel}
                    disabled={disabled}
                    readOnly={readonly}
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
                    containerClassName="k-autocomplete-popup-container"
                    containerRole="region"
                    containerAriaLabel="Autocomplete suggestions"
                >
                    {popup}
                </Popup>
            }
            {adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" aria-label="Apply selection" />}
                            input={true}
                            inputValue={value}
                            inputPlaceholder={placeholder}
                            title={adaptiveTitle}
                            subtitle={adaptiveSubtitle}
                        />
                    }
                >
                    <div className="k-list-container">
                        <List customValue={adaptiveCustomValue ? <ListCustomValue text={`Use "${value}"`}/> : undefined} size="large">
                            <ListContent aria-label="Options">
                                <ListItem text="List item" />
                                <ListItem text="List item" />
                                <ListItem text="List item" />
                            </ListContent>
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

/**
 * @see List ariaSpec for popup listbox content
 * @see ActionSheet ariaSpec for adaptive mode
 */
Autocomplete.ariaSpec = {
    rules: [
        { selector: '.k-autocomplete .k-input-inner', attribute: 'role=combobox', usage: 'Announces the autocomplete input.' },
        { selector: '.k-autocomplete .k-input-inner', attribute: 'aria-haspopup=listbox', usage: 'Indicates the component has a listbox popup.' },
        { selector: '.k-autocomplete .k-input-inner', attribute: 'aria-expanded', usage: 'Announces the popup visibility.' },
        { selector: '.k-autocomplete .k-input-inner', attribute: 'aria-label', usage: 'Accessible name for the autocomplete.' },
        { selector: '.k-autocomplete.k-disabled .k-input-inner', attribute: 'disabled=disabled or aria-disabled=true', usage: 'Rendered when the autocomplete is disabled.' },
        { selector: '.k-autocomplete-popup .k-list-content, .k-autocomplete-popup .k-list-ul', attribute: 'role=listbox', usage: 'Popup list has listbox role.' },
        { selector: '.k-autocomplete-popup .k-list-ul[role="listbox"], .k-autocomplete-popup .k-list-content[role="listbox"]', attribute: 'aria-label or aria-labelledby', usage: 'Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby.' },
        { selector: '.k-autocomplete-popup .k-list-item', attribute: 'role=option', usage: 'Each list item is an option.' },
    ]
};

export default Autocomplete;
