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
import a11ySpec from './behavior/accessibility.json';
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
     * @aria Controls aria-controls references
     */
    id?: string;
    /**
     * ID of the currently focused/active item in the listbox.
     * @aria aria-activedescendant - Points to focused item when popup is open
     */
    activeDescendant?: string;
};

export type KendoMultiSelectState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    separators: true
};

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

MultiSelect.ariaSpec = a11ySpec.ariaSpec;

export default MultiSelect;
