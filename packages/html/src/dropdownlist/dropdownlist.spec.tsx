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
import { List, ListItem } from '../list';

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
    id?: string;
    valueIconName?: string;
    arrowIconName?: string;
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    value?: string;
    placeholder?: string;
    showValue?: boolean;
    activeDescendantId?: string | null;
    popup?: React.JSX.Element;
    opened?: boolean;
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
    adaptiveTitle?: string;
    adaptiveSubtitle?: string;
    adaptiveFilter?: boolean;
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
        id = 'dropdownlist',
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
        activeDescendantId,
        ...other
    } = props;

    const listboxId = `${id}-listbox`;
    const popupId = `${id}-popup`;
    const valueId = `${id}-value`;
    const defaultActiveDescendantId = `${id}-listbox-item-0`;
    const resolvedActiveDescendantId = opened && popup
        ? (activeDescendantId === null ? undefined : (activeDescendantId || defaultActiveDescendantId))
        : undefined;
    const ariaLabel = placeholder ? `DropdownList, ${placeholder}` : 'DropdownList';


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
                aria-label={ariaLabel}
                aria-haspopup="listbox"
                aria-expanded={opened ? 'true' : 'false'}
                aria-controls={opened && popup ? listboxId : undefined}
                aria-activedescendant={resolvedActiveDescendantId}
                aria-describedby={valueId}
                {...(readonly && { 'aria-readonly': 'true' })}
                {...(loading && { 'aria-busy': 'true' })}
                {...(invalid && { 'aria-invalid': 'true' })}
                {...(disabled && { 'aria-disabled': 'true' })}
                tabIndex={0}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerSpan
                    id={valueId}
                    placeholder={placeholder}
                    value={value}
                    showValue={showValue}
                    valueIconName={valueIconName}
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
                    rounded={null}
                    size={props.size}
                    fillMode={props.fillMode}
                    aria-label="Open dropdown"
                    tabIndex={-1}
                    disabled={disabled}
                    aria-disabled={disabled ? 'true' : undefined}
                />
            </Picker>
            {opened && popup &&
                <Popup
                    className="k-list-container k-dropdownlist-popup"
                    containerClassName="k-dropdownlist-popup-container"
                    id={popupId}
                    role="region"
                    aria-label="DropdownList suggestions"
                >
                    {popup}
                </Popup>
            }
            {adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" aria-label="Confirm" />}
                            filter={adaptiveFilter}
                            inputValue={value}
                            inputPlaceholder={placeholder}
                            title={adaptiveTitle}
                            subtitle={adaptiveSubtitle}
                            filterInputProps={adaptiveFilter ? {
                                role: 'searchbox',
                                'aria-label': 'Filter options',
                                'aria-activedescendant': defaultActiveDescendantId,
                                'aria-autocomplete': 'list',
                                'aria-controls': listboxId,
                                'aria-haspopup': 'listbox'
                            } : undefined}
                        />
                    }
                >
                    <div className="k-list-container">
                        <List size="large" role="listbox" aria-label="DropdownList options" listboxId={listboxId} listboxAriaLive="polite">
                            <ListItem id={`${id}-listbox-item-0`} text="List item" role="option" aria-selected="true" tabIndex={0} selected focus />
                            <ListItem id={`${id}-listbox-item-1`} text="List item" role="option" aria-selected="false" tabIndex={-1} />
                            <ListItem id={`${id}-listbox-item-2`} text="List item" role="option" aria-selected="false" tabIndex={-1} />
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

export default DropdownList;
