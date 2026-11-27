import { Autocomplete } from '../../autocomplete';
import { Combobox } from '../../combobox';
import { DateInput } from '../../dateinput';
import { DatePicker } from '../../datepicker';
import { DateTimePicker } from '../../datetimepicker';
import { DropdownList } from '../../dropdownlist';
import { MultiSelect } from '../../multiselect';
import { NumericTextbox } from '../../numerictextbox';
import { Switch } from '../../switch';
import { TimePicker } from '../../timepicker';
import { GridWithEditRow, GridHeader, GridHeaderCell, GridHeaderTable, GridContainer, GridContent, GridTable } from '../../grid';
import { TableThead, TableTbody, TableRow, TableTd } from '../../table';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <GridWithEditRow toolbar={false} className="k-grid-no-scrollbar">
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "68px" }} /><col /><col /><col /><col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell accessibleLabel="Commands"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Autocomplete"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Combobox"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Dropdown"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Multiselect"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div>
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: "68px" }} /><col /><col /><col /><col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row k-grid-edit-row">
                                        <TableTd>LTR</TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <Autocomplete placeholder="Autocomplete..." />
                                        </TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <Combobox placeholder="Combobox..." />
                                        </TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <DropdownList placeholder="DropdownList..." />
                                        </TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <MultiSelect placeholder="Multiselect..." />
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-grid-edit-row" alt>
                                        <TableTd>RTL</TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <Autocomplete placeholder="Autocomplete..." className="k-rtl" />
                                        </TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <Combobox placeholder="Combobox..." className="k-rtl" />
                                        </TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <DropdownList placeholder="DropdownList..." className="k-rtl" />
                                        </TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <MultiSelect placeholder="Multiselect..." className="k-rtl" />
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithEditRow>

            <GridWithEditRow toolbar={false} className="k-grid-no-scrollbar">
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "68px" }} /><col /><col /><col /><col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell accessibleLabel="Commands"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Datepicker"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Timepicker"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Datetime"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Dateinput"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer style={{ overflow: "visible" }}>
                    <GridContent style={{ overflow: "visible" }}>
                        <div>
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: "68px" }} /><col /><col /><col /><col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row k-grid-edit-row">
                                        <TableTd>LTR</TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <DatePicker placeholder="DatePicker..." />
                                        </TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <TimePicker placeholder="TimePicker..." />
                                        </TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <DateTimePicker placeholder="DateTimePicker..." />
                                        </TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <DateInput placeholder="DateInput..." />
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-grid-edit-row" alt>
                                        <TableTd>RTL</TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <DatePicker placeholder="DatePicker..." className="k-rtl"/>
                                        </TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <TimePicker placeholder="TimePicker..." className="k-rtl"/>
                                        </TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <DateTimePicker placeholder="DateTimePicker..." className="k-rtl"/>
                                        </TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <DateInput placeholder="DateInput..." className="k-rtl"/>
                                        </TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithEditRow>

            <GridWithEditRow toolbar={false} className="k-grid-no-scrollbar">
                <GridHeader>
                    <div className="k-grid-header-wrap">
                        <GridHeaderTable>
                            <colgroup>
                                <col style={{ width: "68px" }} /><col /><col /><col />
                            </colgroup>
                            <TableThead>
                                <TableRow>
                                    <GridHeaderCell accessibleLabel="Commands"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Numeric"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Switch"></GridHeaderCell>
                                    <GridHeaderCell accessibleLabel="Commands"></GridHeaderCell>
                                </TableRow>
                            </TableThead>
                        </GridHeaderTable>
                    </div>
                </GridHeader>
                <GridContainer>
                    <GridContent>
                        <div>
                            <GridTable>
                                <colgroup>
                                    <col style={{ width: "68px" }} /><col /><col /><col />
                                </colgroup>
                                <TableTbody>
                                    <TableRow className="k-master-row k-grid-edit-row">
                                        <TableTd>LTR</TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <NumericTextbox placeholder="Numeric..." />
                                        </TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <Switch checked/>
                                        </TableTd>
                                        <TableTd></TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-grid-edit-row" alt>
                                        <TableTd>RTL</TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <NumericTextbox placeholder="Numeric..." className="k-rtl" />
                                        </TableTd>
                                        <TableTd className="k-grid-edit-cell">
                                            <Switch checked className="k-rtl" />
                                        </TableTd>
                                        <TableTd></TableTd>
                                    </TableRow>
                                </TableTbody>
                            </GridTable>
                        </div>
                    </GridContent>
                </GridContainer>
            </GridWithEditRow>
        </div>
    </>
);
