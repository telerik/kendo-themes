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
    id?: string;
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    separators?: boolean;
    value?: string;
    placeholder?: string;
    autocompleteMode?: 'list' | 'both' | 'inline';
    activeDescendantId?: string | null;
    popup?: React.JSX.Element;
    opened?: boolean;
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
    adaptiveTitle?: string;
    adaptiveSubtitle?: string;
    adaptiveCustomValue?: boolean;
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
        id = 'combobox',
        size,
        rounded,
        fillMode,
        separators = defaultOptions.separators,
        prefix,
        suffix,
        value,
        placeholder,
        autocompleteMode = 'list',
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
        activeDescendantId,
        ...other
    } = props;

    const listboxId = `${id}-listbox`;
    const popupId = `${id}-popup`;
    const defaultActiveDescendantId = `${id}-listbox-item-0`;
    const resolvedActiveDescendantId = opened && popup
        ? (activeDescendantId === null ? undefined : (activeDescendantId || defaultActiveDescendantId))
        : undefined;
    const ariaLabel = placeholder ? `Combobox, ${placeholder}` : 'Combobox';


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
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    readonly={readonly}
                    role="combobox"
                    aria-label={ariaLabel}
                    aria-haspopup="listbox"
                    aria-expanded={opened ? 'true' : 'false'}
                    aria-controls={opened && popup ? listboxId : undefined}
                    aria-activedescendant={resolvedActiveDescendantId}
                    aria-autocomplete={autocompleteMode}
                    {...(readonly && { 'aria-readonly': 'true' })}
                    {...(loading && { 'aria-busy': 'true' })}
                    {...(invalid && { 'aria-invalid': 'true' })}
                    {...(disabled && { 'aria-disabled': 'true' })}
                    tabIndex={0}
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
                    aria-label="Open dropdown"
                    tabIndex={-1}
                    disabled={disabled}
                    aria-disabled={disabled ? 'true' : undefined}
                />
            </Input>
            {opened && popup &&
                <Popup
                    className="k-list-container k-combobox-popup"
                    containerClassName="k-combobox-popup-container"
                    id={popupId}
                    role="region"
                    aria-label="Combobox suggestions"
                >
                    {popup}
                </Popup>
            }
            {adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" aria-label="Confirm" />}
                            input={true}
                            inputValue={value}
                            inputPlaceholder={placeholder}
                            title={adaptiveTitle}
                            subtitle={adaptiveSubtitle}
                        />
                    }
                >
                    <div className="k-list-container">
                        <List
                            customValue={adaptiveCustomValue ? <ListCustomValue text={`Use "${value}"`}/> : undefined}
                            size="large"
                            role="listbox"
                            aria-label="Combobox options"
                            listboxId={listboxId}
                        >
                            <ListContent>
                                <ListItem id={`${id}-listbox-item-0`} text="List item" role="option" aria-selected="true" tabIndex={0} selected focus />
                                <ListItem id={`${id}-listbox-item-1`} text="List item" role="option" aria-selected="false" tabIndex={-1} />
                                <ListItem id={`${id}-listbox-item-2`} text="List item" role="option" aria-selected="false" tabIndex={-1} />
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

export default Combobox;
