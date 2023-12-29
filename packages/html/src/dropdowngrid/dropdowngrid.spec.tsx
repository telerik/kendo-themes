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
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ]
};

const defaultProps = {
    size: Input.defaultProps.size,
    rounded: Input.defaultProps.rounded,
    fillMode: Input.defaultProps.fillMode
};

export type KendoDropdownGridOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDropdownGridProps = KendoDropdownGridOptions & {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    type?: string;
    value?: string;
    placeholder?: string;
    autocomplete?: string;
    popup?: JSX.Element;
    opened?: boolean;
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
};

export type KendoDropdownGridState = { [K in (typeof states)[number]]?: boolean };

export const DropdownGrid = (
    props: KendoDropdownGridProps &
        KendoDropdownGridState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        prefix,
        suffix,
        value,
        placeholder,
        size,
        rounded,
        fillMode,
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
        ...other
    } = props;


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
                    <InputSeparator/>
                </>
                }
                <InputInnerInput placeholder={placeholder} value={value} />
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
                    <InputSeparator/>
                    <InputSuffix>{suffix}</InputSuffix>
                </>
                }
                <Button
                    className="k-input-button"
                    icon="caret-alt-down"
                    rounded={null}
                    size={size}
                    fillMode={fillMode}
                />
            </Input>
            { opened && popup &&
                <Popup className="k-dropdowngrid-popup">
                    {popup}
                </Popup>
            }
            { adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings} >
                    <ActionSheetHeader
                        actions={[ 'x' ]}
                        filter={true}
                        title="Select Item">
                    </ActionSheetHeader>
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
                                <TableList>
                                    <TableListRow>
                                        <TableListTd text="1" style={{ width: '50px' }}></TableListTd>
                                        <TableListTd text="Data 1.2" style={{ width: '160px' }}></TableListTd>
                                        <TableListTd text="Data 1.3"></TableListTd>
                                    </TableListRow>
                                    <TableListRow alt>
                                        <TableListTd text="2" style={{ width: '50px' }}></TableListTd>
                                        <TableListTd text="Data 2.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                        <TableListTd text="Data 2.3"></TableListTd>
                                    </TableListRow>
                                    <TableListRow>
                                        <TableListTd text="3" style={{ width: '50px' }}></TableListTd>
                                        <TableListTd text="Data 3.2" style={{ width: '160px' }}></TableListTd>
                                        <TableListTd text="Data 3.3"></TableListTd>
                                    </TableListRow>
                                    <TableListGroupRow>
                                        <TableListTh text="Group"></TableListTh>
                                    </TableListGroupRow>
                                    <TableListRow>
                                        <TableListTd text="4" style={{ width: '50px' }}></TableListTd>
                                        <TableListTd text="Data 4.2" style={{ width: '160px' }}></TableListTd>
                                        <TableListTd text="Data 4.3"></TableListTd>
                                    </TableListRow>
                                    <TableListRow alt>
                                        <TableListTd text="5" style={{ width: '50px' }}></TableListTd>
                                        <TableListTd text="Data 5.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                        <TableListTd text="Data 5.3"></TableListTd>
                                    </TableListRow>
                                    <TableListRow>
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
DropdownGrid.defaultProps = defaultProps;

export default DropdownGrid;
