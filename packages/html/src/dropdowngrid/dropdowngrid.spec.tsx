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
import { DataTable, TableBody, TableFooter, TableGroupStickyHeader, TableHeader, TableList, TableListGroupRow, TableListRow, TableListTd, TableListTh, TableRow, TableTh, TableThead } from '../table';

import { KendoComponent } from '../_types/component';
import { DROPDOWNGRID_FOLDER_NAME, DROPDOWNGRID_MODULE_NAME } from './constants';
export const DROPDOWNGRID_CLASSNAME = `k-dropdowngrid`;

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

const defaultOptions = {
    separators: true
};

export type KendoDropdownGridOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDropdownGridProps = KendoDropdownGridOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    separators?: boolean;
    type?: string;
    value?: string;
    placeholder?: string;
    autocomplete?: string;
    popup?: React.JSX.Element;
    opened?: boolean;
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
    adaptiveTitle?: string;
    adaptiveSubtitle?: string;
    /**
     * Unique identifier for the dropdowngrid. Used to generate related IDs.
     * @aria Controls aria-controls references
     */
    id?: string;
    /**
     * Autocomplete behavior: 'list', 'both', or 'inline'.
     * @aria aria-autocomplete - Indicates autocomplete type
     */
    ariaAutocomplete?: 'list' | 'both' | 'inline' | 'none';
    /**
     * ID of the currently focused/active item in the table list.
     * @aria aria-activedescendant - Points to focused item when popup is open
     */
    activeDescendant?: string;
};

export type KendoDropdownGridState = { [K in (typeof states)[number]]?: boolean };

export const DropdownGrid: KendoComponent<KendoDropdownGridProps & KendoDropdownGridState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoDropdownGridProps &
        KendoDropdownGridState &
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
        id,
        ariaAutocomplete,
        activeDescendant,
        'aria-label': ariaLabel,
        ...other
    } = props;

    const tableListId = id ? `${id}-table-list` : undefined;


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
                className={classNames(
                    props.className,
                    DROPDOWNGRID_CLASSNAME,
                    'k-combobox'
                )}
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
                    aria-controls={opened ? tableListId : undefined}
                    aria-activedescendant={opened && activeDescendant ? activeDescendant : undefined}
                    aria-autocomplete={ariaAutocomplete}
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
                <Popup className="k-dropdowngrid-popup">
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
                    }>
                    <div className="k-list-container">
                        <DataTable size="large">
                            <TableHeader>
                                <colgroup>
                                    <col style={{ width: '50px' }} />
                                    <col style={{ width: '160px' }} />
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow>
                                        <TableTh text="ID"></TableTh>
                                        <TableTh text="Name"></TableTh>
                                        <TableTh text="Job Title"></TableTh>
                                    </TableRow>
                                </TableThead>
                            </TableHeader>
                            <TableGroupStickyHeader>
                                <TableListTh text="Initial group"></TableListTh>
                            </TableGroupStickyHeader>
                            <TableBody>
                                <TableList role="listbox" id={id ? `${id}-table-list` : undefined} aria-label="Options">
                                    <TableListRow role="option">
                                        <TableListTd text="1" style={{ width: '50px' }}></TableListTd>
                                        <TableListTd text="Data 1.2" style={{ width: '160px' }}></TableListTd>
                                        <TableListTd text="Data 1.3"></TableListTd>
                                    </TableListRow>
                                    <TableListRow role="option" alt>
                                        <TableListTd text="2" style={{ width: '50px' }}></TableListTd>
                                        <TableListTd text="Data 2.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                        <TableListTd text="Data 2.3"></TableListTd>
                                    </TableListRow>
                                    <TableListRow role="option">
                                        <TableListTd text="3" style={{ width: '50px' }}></TableListTd>
                                        <TableListTd text="Data 3.2" style={{ width: '160px' }}></TableListTd>
                                        <TableListTd text="Data 3.3"></TableListTd>
                                    </TableListRow>
                                    <TableListGroupRow role="presentation">
                                        <TableListTh text="Group"></TableListTh>
                                    </TableListGroupRow>
                                    <TableListRow role="option">
                                        <TableListTd text="4" style={{ width: '50px' }}></TableListTd>
                                        <TableListTd text="Data 4.2" style={{ width: '160px' }}></TableListTd>
                                        <TableListTd text="Data 4.3"></TableListTd>
                                    </TableListRow>
                                    <TableListRow role="option" alt>
                                        <TableListTd text="5" style={{ width: '50px' }}></TableListTd>
                                        <TableListTd text="Data 5.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                        <TableListTd text="Data 5.3"></TableListTd>
                                    </TableListRow>
                                    <TableListRow role="option">
                                        <TableListTd text="6" style={{ width: '50px' }}></TableListTd>
                                        <TableListTd text="Data 6.2" style={{ width: '160px' }}></TableListTd>
                                        <TableListTd text="Data 6.3"></TableListTd>
                                    </TableListRow>
                                </TableList>
                            </TableBody>
                            <TableFooter>
                                <TableListTd text="30 records in total"></TableListTd>
                            </TableFooter>
                        </DataTable>
                    </div>
                </ActionSheet>
            }
        </>
    );
};

DropdownGrid.states = states;
DropdownGrid.options = options;
DropdownGrid.className = DROPDOWNGRID_CLASSNAME;
DropdownGrid.defaultOptions = defaultOptions;
DropdownGrid.moduleName = DROPDOWNGRID_MODULE_NAME;
DropdownGrid.folderName = DROPDOWNGRID_FOLDER_NAME;

/**
 * @see ActionSheet ariaSpec for adaptive mode
 */
DropdownGrid.ariaSpec = {
    rules: [
        { selector: '.k-combobox .k-input-inner', attribute: 'role=combobox', usage: 'Identifies the input as a combobox.' },
        { selector: '.k-combobox .k-input-inner', attribute: 'aria-haspopup=listbox', usage: 'Indicates the combobox has a listbox popup.' },
        { selector: '.k-combobox .k-input-inner', attribute: 'aria-expanded', usage: 'Indicates whether the popup is open.' },
        { selector: '.k-combobox .k-input-inner', attribute: 'aria-label', usage: 'Accessible name for the combobox.' },
        { selector: '.k-combobox .k-input-button', attribute: 'aria-label', usage: 'Accessible name for the dropdown button.' },
        { selector: '.k-combobox .k-input-button', attribute: 'tabindex=-1', usage: 'Dropdown button is not in the tab order.' },
        { selector: '.k-dropdowngrid-popup .k-table-list', attribute: 'role=listbox', usage: 'Table list has listbox role.' },
        { selector: '.k-dropdowngrid-popup .k-table-list[role="listbox"]', attribute: 'aria-label or aria-labelledby', usage: 'Table listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby.' },
        { selector: '.k-dropdowngrid-popup .k-table-list .k-table-row', attribute: 'role=option', usage: 'Each table row is an option.' },
    ]
};

export default DropdownGrid;
