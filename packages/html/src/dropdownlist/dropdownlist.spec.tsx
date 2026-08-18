import { classNames, States, Size, Roundness, FillMode } from '../misc';
import { Button } from '../button';
import {
    Picker,
    InputInnerSpan,
    InputLoadingIcon,
    InputPrefix,
    InputSuffix,
    InputValidationIcon
} from '../input';
import { Popup } from '../popup';
import { ActionSheet, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';
import { List, ListContent, ListItem } from '../list';

import { KendoComponent } from '../_types/component';
import { DROPDOWNLIST_FOLDER_NAME, DROPDOWNLIST_MODULE_NAME } from './constants';
export const DROPDOWNLIST_CLASSNAME = `k-dropdownlist`;

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
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline]
};

export type KendoDropdownListOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDropdownListProps = KendoDropdownListOptions & {
    valueIconName?: string;
    arrowIconName?: string;
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    value?: string;
    placeholder?: string;
    showValue?: boolean;
    popup?: React.JSX.Element;
    opened?: boolean;
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
    adaptiveTitle?: string;
    adaptiveSubtitle?: string;
    adaptiveFilter?: boolean;
    id?: string;
    activeDescendant?: string;
};

export type KendoDropdownListState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    showValue: true,
    arrowIconName: 'chevron-down',
};

/**
 * @aria {role="combobox"} Announces the dropdown element.
 * @aria {aria-haspopup="listbox"} Indicates the presence of a listbox popup.
 * @aria {aria-expanded} Announces the visibility state of the popup.
 * @aria {aria-label} Accessible name for the dropdown.
 * @aria {tabindex="0"} The element must be focusable.
 * @aria {aria-disabled="true"} Rendered when the dropdown is disabled.
 * @aria {aria-label} Accessible name for the dropdown button.
 * @aria {tabindex="-1"} The button must not be focusable.
 * @aria {role="listbox"} Popup list has listbox role.
 * @aria {aria-label|aria-labelledby} Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby.
 * @aria {role="option"} Each list item is an option.
 * @aria {id} Referenced by aria-controls and aria-activedescendant on the input.
 * @aria {aria-activedescendant} Points to focused item when popup is open
 * @ux {Popup} Clicking the control opens a scrollable list of options.
 * @ux {Selection} Clicking an option selects it and closes the popup.
 * @ux {Filtering} The list can be filtered when the user types.
 * @ux {Placeholder} Displays hint text when no option is selected.
 * @ux {Disabled state} When disabled, the control is non-interactive.
 */
export const DropdownList: KendoComponent<KendoDropdownListProps & KendoDropdownListState & Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>> = (
    props: KendoDropdownListProps &
        KendoDropdownListState &
        Omit<React.HTMLAttributes<HTMLSpanElement>, 'prefix'>
) => {
    const {
        size,
        rounded,
        fillMode,
        arrowIconName = defaultOptions.arrowIconName,
        showValue = defaultOptions.showValue,
        valueIconName,
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
        readonly,
        popup,
        opened,
        adaptive,
        adaptiveSettings,
        adaptiveTitle,
        adaptiveSubtitle,
        adaptiveFilter,
        id,
        activeDescendant,
        'aria-label': ariaLabel,
        ...other
    } = props;

    const listboxId = id ? `${id}-listbox` : undefined;
    const innerSpanId = id ? `${id}-value` : undefined;

    return (
        <>
            <Picker
                {...other}
                id={id}
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
                className={classNames(
                    props.className,
                    DROPDOWNLIST_CLASSNAME,
                    {
                        'k-icon-picker': !showValue && valueIconName
                    }
                )}
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded={opened ? 'true' : 'false'}
                aria-controls={opened ? listboxId : undefined}
                aria-activedescendant={opened && activeDescendant ? activeDescendant : undefined}
                aria-describedby={opened ? innerSpanId : undefined}
                aria-disabled={disabled ? 'true' : undefined}
                aria-label={ariaLabel}
                tabIndex={0}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerSpan
                    placeholder={placeholder}
                    value={value}
                    showValue={showValue}
                    valueIconName={valueIconName}
                    id={innerSpanId}
                />
                <InputValidationIcon
                    valid={valid}
                    invalid={invalid}
                    loading={loading}
                    disabled={disabled} />
                <InputLoadingIcon
                    loading={loading}
                    disabled={disabled} />
                <InputSuffix>{suffix}</InputSuffix>
                <Button
                    className="k-input-button"
                    icon={arrowIconName}
                    size={props.size}
                    fillMode={props.fillMode}
                    aria-label={placeholder || "Toggle dropdown"}
                    tabIndex={-1}
                />
            </Picker>
            {opened && popup &&
                <Popup
                    className="k-list-container k-dropdownlist-popup"
                    containerRole="region"
                    containerAriaLabel="Dropdown suggestions"
                >
                    {popup}
                </Popup>
            }
            {adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" aria-label="Apply selection" />}
                            filter={adaptiveFilter}
                            inputValue={value}
                            inputPlaceholder={placeholder}
                            title={adaptiveTitle}
                            subtitle={adaptiveSubtitle}
                        />
                    }
                >
                    <div className="k-list-container">
                        <List size="large">
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

DropdownList.states = states;
DropdownList.options = options;
DropdownList.className = DROPDOWNLIST_CLASSNAME;
DropdownList.defaultOptions = defaultOptions;
DropdownList.moduleName = DROPDOWNLIST_MODULE_NAME;
DropdownList.folderName = DROPDOWNLIST_FOLDER_NAME;

/**
 * @keyboard {ArrowDown} Selects the next available item.
 * @keyboard {ArrowUp} Selects the previous available item.
 * @keyboard {Home} Selects the first available item. Shortcut is not applicable when the current focused item is the filter textbox. Then focused is in a textbox, home and end keys control the cursor position.
 * @keyboard {End} Selects the last available item. Shortcut is not applicable when the current focused item is the filter textbox. Then focused is in a textbox, home and end keys control the cursor position.
 * @keyboard {Enter} Opens popup
 * @keyboard {Space} Opens popup
 * @keyboard {Alt/Opt(Mac) + ArrowDown} Opens popup
 * @keyboard {Alt/Opt(Mac) + ArrowUp or Escape} `Closes popup
 * @keyboard {Printable Characters} Typing "M" or any other printable character should select the next or first item in the list. Swiftly typing should capture multiple printable characters after the first one.
 * @keyboard {Tab} Closes the actionsheet and focuses the next focusable element.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-select-only.html WAI-ARIA Authoring Practices: Select-Only Combobox Example
 */

export default DropdownList;
