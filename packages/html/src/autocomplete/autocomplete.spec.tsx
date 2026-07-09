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
    id?: string;
    autocomplete?: 'list' | 'both' | 'inline' | 'none';
    activeDescendant?: string;
};

export type KendoAutocompleteState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    separators: true
};

/**
 * @aria {role="combobox"} Announces the autocomplete input.
 * @aria {aria-haspopup="listbox"} Indicates the component has a listbox popup.
 * @aria {aria-expanded} Announces the popup visibility.
 * @aria {aria-label} Accessible name for the autocomplete.
 * @aria {aria-disabled="true"} Rendered when the autocomplete is disabled.
 * @aria {role="listbox"} Popup list has listbox role.
 * @aria {aria-label|aria-labelledby} Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby.
 * @aria {role="option"} Each list item is an option.
 * @aria {id} Referenced by aria-controls on the input.
 * @aria {aria-autocomplete} Indicates autocomplete type
 * @aria {aria-activedescendant} Points to focused item when popup is open
 */
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
 * @keyboard {Typing in the input} Focuses the matched item.
 * @keyboard {Alt/Opt(Mac) + ArrowDown} Opens the popup.
 * @keyboard {Alt/Opt(Mac) + ArrowUp or Escape} Closes the popup.
 * @keyboard {Escape} Resets the value in the input when the popup is closed.
 * @keyboard {Enter} Triggers the `change` event.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-autocomplete-both.html WAI-ARIA Authoring Practices: Editable Combobox With Both List and Inline Autocomplete Example
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-autocomplete-list.html WAI-ARIA Authoring Practices: Editable Combobox With List Autocomplete Example
 */

export default Autocomplete;
