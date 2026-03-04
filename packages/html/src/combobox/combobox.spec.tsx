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
     * @aria Controls aria-controls and aria-activedescendant references
     */
    id?: string;
    /**
     * Autocomplete behavior: 'list' for filtering, 'both' for filtering + suggest, 'inline' for suggest only.
     * @aria aria-autocomplete - Indicates autocomplete behavior to assistive technologies
     */
    autocomplete?: 'list' | 'both' | 'inline' | 'none';
    /**
     * ID of the currently focused/active item in the listbox.
     * @aria aria-activedescendant - Points to focused item when popup is open
     */
    activeDescendant?: string;
};

export type KendoComboboxState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    separators: true
};

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
                    icon="caret-alt-down"
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
 * Accessibility specification for Combobox.
 *
 * @accessibility
 * - Input has role="combobox" with aria-haspopup="listbox"
 * - aria-expanded indicates popup visibility
 * - aria-controls points to listbox when open
 * - aria-activedescendant tracks focused option via keyboard
 * - aria-autocomplete indicates filtering/suggest behavior
 * - Dropdown button has aria-label and tabindex=-1
 * - Adaptive mode uses ActionSheet with aria-labelledby="${id}-adaptive-title"
 * - Requires accessible name via label element (provided by consuming application)
 *
 * @wcag 4.1.2 Name, Role, Value - combobox pattern with listbox popup
 * @see Popup.ariaSpec for popup container
 * @see List.ariaSpec for listbox content
 * @see ActionSheet.ariaSpec for adaptive mode dialog
 */
Combobox.ariaSpec = {
    selector: '.k-combobox',
    rules: [
        { selector: '.k-combobox > .k-input-inner', attribute: 'role=combobox', usage: 'Identifies the input as a combobox.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'aria-haspopup=listbox', usage: 'Indicates the combobox has a listbox popup.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'aria-expanded', usage: 'Indicates whether the popup is open.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'aria-controls=${id}-listbox (when open)', usage: 'Points to the listbox element when popup is open.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'aria-activedescendant (when open)', usage: 'Points to the focused item in the listbox.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'aria-autocomplete=list|both|inline (when has autocomplete)', usage: 'Indicates the autocomplete behavior.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'aria-invalid=true (when invalid)', usage: 'Rendered when the combobox is in an invalid state.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'aria-busy=true (when loading)', usage: 'Rendered when the combobox is loading data.' },
        { selector: '.k-combobox > .k-input-inner', attribute: 'label for or aria-label or aria-labelledby (when has accessible name)', usage: 'Accessible name provided by consuming app.' },
        { selector: '.k-combobox.k-disabled > .k-input-inner', attribute: 'disabled=disabled or aria-disabled=true', usage: 'Rendered when the combobox is disabled.' },
        { selector: '.k-combobox .k-input-button', attribute: 'role=button or nodeName=button', usage: 'The dropdown toggle button.' },
        { selector: '.k-combobox .k-input-button', attribute: 'aria-label', usage: 'Accessible name for the dropdown button.' },
        { selector: '.k-combobox .k-input-button', attribute: 'tabindex=-1', usage: 'Dropdown button is not in the tab order.' },
        { selector: '.k-combobox-popup .k-list-content, .k-combobox-popup .k-list-ul', attribute: 'role=listbox', usage: 'The popup list container has the listbox role.' },
        { selector: '.k-combobox-popup .k-list-ul[role="listbox"], .k-combobox-popup .k-list-content[role="listbox"]', attribute: 'aria-label or aria-labelledby', usage: 'Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby.' },
        { selector: '.k-combobox-popup .k-list-item', attribute: 'role=option', usage: 'Each list item is an option.' },
        { selector: '.k-combobox-popup .k-list-item', attribute: 'aria-selected (when selectable)', usage: 'Indicates the selected state.' },
        { selector: '.k-combobox-popup .k-no-data', attribute: 'aria-live=polite', usage: 'Announces no-data state to screen readers.' },
    ]
};

export default Combobox;
