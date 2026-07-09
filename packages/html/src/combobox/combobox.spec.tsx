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
import { Button } from '../button';
import { Popup } from '../popup';
import { ActionSheet, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';
import { List, ListContent, ListCustomValue, ListItem } from '../list';

import { KendoComponent } from '../_types/component';
import { COMBOBOX_FOLDER_NAME, COMBOBOX_MODULE_NAME } from './constants';
export const COMBOBOX_CLASSNAME = `k-combobox`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.loading,
    States.required,
    States.disabled,
    States.readonly
];

const options = {
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    rounded: [Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline]
};

export type KendoComboboxOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoComboboxProps = KendoComboboxOptions & {
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
     * Unique identifier for the combobox. Used to generate related IDs.
     */
    id?: string;
    /**
     * Autocomplete behavior: 'list' for filtering, 'both' for filtering + suggest, 'inline' for suggest only.
     */
    autocomplete?: 'list' | 'both' | 'inline' | 'none';
    /**
     * ID of the currently focused/active item in the listbox.
     */
    activeDescendant?: string;
};

export type KendoComboboxState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    separators: true
};

/**
 * @aria {role="combobox"} Identifies the input as a combobox.
 * @aria {aria-haspopup="listbox"} Indicates the combobox has a listbox popup.
 * @aria {aria-expanded} Indicates whether the popup is open.
 * @aria {aria-controls="${id}-listbox"} Points to the listbox element when popup is open.
 * @aria {aria-invalid="true"} Rendered when the combobox is in an invalid state.
 * @aria {aria-busy="true"} Rendered when the combobox is loading data.
 * @aria {aria-label|aria-labelledby} Accessible name provided by consuming app.
 * @aria {aria-disabled="true"} Rendered when the combobox is disabled.
 * @aria {role="button"} The dropdown toggle button.
 * @aria {aria-label} Accessible name for the dropdown button.
 * @aria {tabindex="-1"} Dropdown button is not in the tab order.
 * @aria {role="listbox"} The popup list container has the listbox role.
 * @aria {aria-label|aria-labelledby} Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby.
 * @aria {role="option"} Each list item is an option.
 * @aria {aria-selected} Indicates the selected state.
 * @aria {aria-live="polite"} Announces no-data state to screen readers.
 * @aria {id} Referenced by aria-controls and aria-activedescendant on the input.
 * @aria {aria-autocomplete} Indicates autocomplete behavior to assistive technologies
 * @aria {aria-activedescendant} Points to focused item when popup is open
 */
export const Combobox: KendoComponent<KendoComboboxProps & KendoComboboxState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoComboboxProps &
        KendoComboboxState &
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
                className={classNames(props.className, COMBOBOX_CLASSNAME)}
            >
                {prefix &&
                    <>
                        <InputPrefix>{prefix}</InputPrefix>
                        {separators && <InputSeparator />}
                    </>
                }
                <InputInnerInput
                    id={id}
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
                <Button
                    className="k-input-button"
                    icon="chevron-down"
                    size={size}
                    fillMode={fillMode}
                    aria-label="Open popup"
                    tabIndex={-1}
                    disabled={disabled}
                />
            </Input>
            {opened && popup &&
                <Popup
                    className="k-list-container k-combobox-popup"
                    containerRole="region"
                    containerAriaLabel="Combobox suggestions"
                >
                    {popup}
                </Popup>
            }
            {adaptive &&
                <ActionSheet adaptive={true} id={id ? `${id}-adaptive` : undefined} {...adaptiveSettings}
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
                            <ListContent aria-label={adaptiveTitle || 'Options'}>
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

Combobox.states = states;
Combobox.options = options;
Combobox.className = COMBOBOX_CLASSNAME;
Combobox.defaultOptions = defaultOptions;
Combobox.moduleName = COMBOBOX_MODULE_NAME;
Combobox.folderName = COMBOBOX_FOLDER_NAME;

/**
 * @keyboard {Typing in the input} Focuses the matched item.
 * @keyboard {ArrowDown} Highlights the next available item.
 * @keyboard {ArrowUp} Highlights the previous available item.
 * @keyboard {Enter} Selects the focused item.
 * @keyboard {Alt/Opt(Mac) + ArrowDown} Opens the popup.
 * @keyboard {Alt/Opt(Mac) + ArrowUp or Escape} Closes the popup.
 * @keyboard {Escape} If the popup is not visible, clears the value.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-autocomplete-both.html WAI-ARIA Authoring Practices: Editable Combobox With Both List and Inline Autocomplete Example
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-autocomplete-list.html WAI-ARIA Authoring Practices: Editable Combobox With List Autocomplete Example
 */

export default Combobox;
