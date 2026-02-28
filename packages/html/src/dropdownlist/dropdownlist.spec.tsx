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
    /**
     * Unique identifier for the dropdownlist. Used to generate related IDs.
     * @aria Controls aria-controls and aria-activedescendant references
     */
    id?: string;
    /**
     * ID of the currently focused/active item in the listbox.
     * @aria aria-activedescendant - Points to focused item when popup is open
     */
    activeDescendant?: string;
};

export type KendoDropdownListState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    showValue: true,
    arrowIconName: 'caret-alt-down',
};

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
                    containerClassName="k-dropdownlist-popup-container"
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
 * @see List ariaSpec for popup listbox content
 * @see ActionSheet ariaSpec for adaptive mode
 */
DropdownList.ariaSpec = {
    rules: [
        { selector: '.k-dropdownlist:not(.k-views-dropdown)', attribute: 'role=combobox', usage: 'Announces the dropdown element.' },
        { selector: '.k-dropdownlist:not(.k-views-dropdown)', attribute: 'aria-haspopup=listbox', usage: 'Indicates the presence of a listbox popup.' },
        { selector: '.k-dropdownlist:not(.k-views-dropdown)', attribute: 'aria-expanded', usage: 'Announces the visibility state of the popup.' },
        { selector: '.k-dropdownlist:not(.k-views-dropdown)', attribute: 'aria-label', usage: 'Accessible name for the dropdown.' },
        { selector: '.k-dropdownlist:not(.k-views-dropdown)', attribute: 'tabindex=0', usage: 'The element must be focusable.' },
        { selector: '.k-dropdownlist.k-disabled', attribute: 'aria-disabled=true', usage: 'Rendered when the dropdown is disabled.' },
        { selector: '.k-dropdownlist .k-input-button', attribute: 'aria-label', usage: 'Accessible name for the dropdown button.' },
        { selector: '.k-dropdownlist .k-input-button', attribute: 'tabindex=-1', usage: 'The button must not be focusable.' },
        { selector: '.k-dropdownlist-popup .k-list-content, .k-dropdownlist-popup .k-list-ul', attribute: 'role=listbox', usage: 'Popup list has listbox role.' },
        { selector: '.k-dropdownlist-popup .k-list-ul[role="listbox"]', attribute: 'aria-label or aria-labelledby', usage: 'Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby.' },
        { selector: '.k-dropdownlist-popup .k-list-item', attribute: 'role=option', usage: 'Each list item is an option.' },
    ]
};

export default DropdownList;
