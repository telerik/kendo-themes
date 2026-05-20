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
import a11ySpec from './behavior/accessibility.json';
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

Combobox.ariaSpec = a11ySpec.ariaSpec;

export default Combobox;
