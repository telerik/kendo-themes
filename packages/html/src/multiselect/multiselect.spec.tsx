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
import { ChipList } from '../chip';
import { Popup } from '../popup';
import { ActionSheet, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';
import { List, ListContent, ListCustomValue, ListItem } from '../list';

import { KendoComponent } from '../_types/component';
import { MULTISELECT_FOLDER_NAME, MULTISELECT_MODULE_NAME } from './constants';
export const MULTISELECT_CLASSNAME = `k-multiselect`;

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

export type KendoMultiSelectOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoMultiSelectProps = KendoMultiSelectOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    separators?: boolean;
    type?: string;
    value?: string;
    placeholder?: string;
    tags?: React.JSX.Element;
    popup?: React.JSX.Element;
    showArrowButton?: boolean;
    opened?: boolean;
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
    adaptiveTitle?: string;
    adaptiveSubtitle?: string;
    adaptiveCustomValue?: boolean;
    /**
     * Unique identifier for the multiselect. Used to generate related IDs.
     */
    id?: string;
    /**
     * ID of the currently focused/active item in the listbox.
     */
    activeDescendant?: string;
};

export type KendoMultiSelectState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    separators: true
};

/**
 * @aria {role="combobox"} Announces the multiselect input.
 * @aria {aria-haspopup="listbox"} Indicates the component has a listbox popup.
 * @aria {aria-expanded} Announces the popup visibility.
 * @aria {aria-label} Accessible name for the multiselect.
 * @aria {aria-autocomplete="list"} Indicates list filtering capability.
 * @aria {aria-describedby} Points to the taglist element that contains the selected items.
 * @aria {aria-disabled="true"} Rendered when the multiselect is disabled.
 * @aria {role="listbox"} The taglist has listbox role for selected items.
 * @aria {aria-label|aria-labelledby} The taglist needs an accessible name.
 * @aria {aria-orientation="horizontal"} Specifies horizontal orientation of the taglist.
 * @aria {role="option"} Each tag chip is an option within the taglist listbox.
 * @aria {aria-selected="true"} Tags represent selected items and must have aria-selected=true.
 * @aria {role="listbox"} Popup list has listbox role.
 * @aria {aria-label|aria-labelledby} Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby.
 * @aria {role="option"} Each list item is an option.
 * @aria {id} Referenced by aria-controls on the input.
 * @aria {aria-activedescendant} Points to focused item when popup is open
 */
export const MultiSelect: KendoComponent<KendoMultiSelectProps & KendoMultiSelectState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoMultiSelectProps &
        KendoMultiSelectState &
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
        tags,
        popup,
        showArrowButton,
        hover,
        focus,
        valid,
        invalid,
        required,
        loading,
        disabled,
        readonly,
        opened,
        adaptive,
        adaptiveSettings,
        adaptiveTitle,
        adaptiveSubtitle,
        adaptiveCustomValue,
        id,
        activeDescendant,
        'aria-label': ariaLabel,
        ...other
    } = props;

    const listboxId = id ? `${id}-listbox` : undefined;
    const chipListId = id ? `${id}-taglist` : undefined;

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
                className={classNames(props.className, MULTISELECT_CLASSNAME)}
            >
                {prefix &&
                    <>
                        <InputPrefix>{prefix}</InputPrefix>
                        {separators && <InputSeparator />}
                    </>
                }
                <div className="k-input-values">
                    <ChipList size={size} id={chipListId}>
                        <>
                            {tags}
                        </>
                    </ChipList>
                    <InputInnerInput
                        placeholder={placeholder}
                        value={value}
                        role="combobox"
                        aria-haspopup="listbox"
                        aria-expanded={opened ? 'true' : 'false'}
                        aria-controls={opened ? listboxId : undefined}
                        aria-activedescendant={opened && activeDescendant ? activeDescendant : undefined}
                        aria-autocomplete="list"
                        aria-describedby={tags ? chipListId : undefined}
                        aria-invalid={invalid ? 'true' : undefined}
                        aria-busy={loading ? 'true' : undefined}
                        aria-label={ariaLabel}
                        disabled={disabled}
                        readOnly={readonly}
                    />
                </div>
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
                    value={tags ? 'value' : ''} />
                {suffix &&
                    <>
                        {separators && <InputSeparator />}
                        <InputSuffix>{suffix}</InputSuffix>
                    </>
                }
                {showArrowButton && (
                    <Button
                        className="k-input-button"
                        icon="chevron-down"
                        size={size}
                        fillMode={fillMode}
                        aria-label="Toggle dropdown"
                        tabIndex={-1}
                    />
                )}
            </Input>
            {opened && popup &&
                <Popup
                    className="k-list-container k-multiselect-popup"
                    containerRole="region"
                    containerAriaLabel="MultiSelect suggestions"
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

MultiSelect.states = states;
MultiSelect.options = options;
MultiSelect.className = MULTISELECT_CLASSNAME;
MultiSelect.defaultOptions = defaultOptions;
MultiSelect.moduleName = MULTISELECT_MODULE_NAME;
MultiSelect.folderName = MULTISELECT_FOLDER_NAME;

/**
 * @keyboard {Typing in the input} Focuses the matched item.
 * @keyboard {Alt/Opt(Mac) + ArrowDown} Opens the popup.
 * @keyboard {Alt/Opt(Mac) + ArrowUp or Escape} Closes the popup.
 * @keyboard {ArrowLeft} Focuses the previous tag item in the selected list.
 * @keyboard {ArrowRight} Focuses the next tag item in the selected list.
 * @keyboard {Delete or Backspace} When the focused item is a tag list, removes the item from the selection.
 * @keyboard {Escape} Clears the value when the popup is not open.
 * @keyboard {Shift + ArrowUp} Creates a range selection between the last selected or deselected item and the item that is immediately before the currently focused one. All items outside that range are deselected. The last selected or deselected item is stored when using the mouse to click an item, or when using `Enter` to select or deselect an item. The last selected or deselected item is reset when the value of the MultiSelect is cleared. If the there is no previously selected item, selects only the currently focused and the previous one. At the end of the operation, the focus moves to the the item that is immediately before the currently focused one.
 * @keyboard {Shift + ArrowDown} Creates a range selection between the last selected or deselected item and the item that is immediately after the currently focused one. All items outside that range are deselected. The last selected or deselected item is stored when using the mouse to click an item, or when using `Enter` to select or deselect an item. The last selected or deselected item is reset when the value of the MultiSelect is cleared. If the there is no previously selected item, selects only the currently focused and the next one. At the end of the operation, the focus moves to the the item that is immediately after the currently focused one.
 * @keyboard {Control/Cmd(Mac) + Shift + Home} Creates a range selection from the currently focused item up to the beginning of the list. All items outside that range are deselected.
 * @keyboard {Control/Cmd(Mac) + Shift + End} Creates a range selection from the currently focused item down to the end of the list. All items outside that range are deselected.
 * @keyboard {Control/Cmd(Mac) + A} Selects all items present in the list. If all items are already selected, deselects them.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-select-only.html WAI-ARIA Authoring Practices: Select-Only Combobox Example
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/listbox/listbox-scrollable.html WAI-ARIA Authoring Practices: Scrollable Listbox Example
 */

export default MultiSelect;
