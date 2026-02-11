import { Autocomplete } from '../../autocomplete/autocomplete.spec';
import { Combobox } from '../../combobox/combobox.spec';
import { DateInput } from '../../dateinput/dateinput.spec';
import { DatePicker } from '../../datepicker/datepicker.spec';
import { DateTimePicker } from '../../datetimepicker/datetimepicker.spec';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { MultiSelect } from '../../multiselect/multiselect.spec';
import { NumericTextbox } from '../../numerictextbox/numerictextbox.spec';
import { Switch } from '../../switch/switch.spec';
import { TimePicker } from '../../timepicker/timepicker.spec';
import { GridWithEditRow } from '../templates/grid-with-edit-row';
import { GridHeader } from '../grid-header.spec';
import { GridHeaderCell } from '../grid-header-cell.spec';
import { GridHeaderTable } from '../grid-header-table.spec';
import { GridContainer } from '../grid-container.spec';
import { GridContent } from '../grid-content.spec';
import { GridTable } from '../grid-table.spec';
import { TableThead } from '../../table/table-thead';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';


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
                                    <GridHeaderCell></GridHeaderCell>
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
                                        <TableTd>
                                            <Autocomplete placeholder="Autocomplete..." />
                                        </TableTd>
                                        <TableTd>
                                            <Combobox placeholder="Combobox..." />
                                        </TableTd>
                                        <TableTd>
                                            <DropdownList placeholder="DropdownList..." />
                                        </TableTd>
                                        <TableTd>
                                            <MultiSelect placeholder="Multiselect..." />
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-grid-edit-row" alt>
                                        <TableTd>RTL</TableTd>
                                        <TableTd>
                                            <Autocomplete placeholder="Autocomplete..." className="k-rtl" />
                                        </TableTd>
                                        <TableTd>
                                            <Combobox placeholder="Combobox..." className="k-rtl" />
                                        </TableTd>
                                        <TableTd>
                                            <DropdownList placeholder="DropdownList..." className="k-rtl" />
                                        </TableTd>
                                        <TableTd>
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
                                    <GridHeaderCell></GridHeaderCell>
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
                                        <TableTd>
                                            <DatePicker placeholder="DatePicker..." />
                                        </TableTd>
                                        <TableTd>
                                            <TimePicker placeholder="TimePicker..." />
                                        </TableTd>
                                        <TableTd>
                                            <DateTimePicker placeholder="DateTimePicker..." />
                                        </TableTd>
                                        <TableTd>
                                            <DateInput placeholder="DateInput..." />
                                        </TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-grid-edit-row" alt>
                                        <TableTd>RTL</TableTd>
                                        <TableTd>
                                            <DatePicker placeholder="DatePicker..." className="k-rtl"/>
                                        </TableTd>
                                        <TableTd>
                                            <TimePicker placeholder="TimePicker..." className="k-rtl"/>
                                        </TableTd>
                                        <TableTd>
                                            <DateTimePicker placeholder="DateTimePicker..." className="k-rtl"/>
                                        </TableTd>
                                        <TableTd>
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
                                    <GridHeaderCell></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Numeric"></GridHeaderCell>
                                    <GridHeaderCell columnTitle="Switch"></GridHeaderCell>
                                    <GridHeaderCell></GridHeaderCell>
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
                                        <TableTd>
                                            <NumericTextbox placeholder="Numeric..." />
                                        </TableTd>
                                        <TableTd>
                                            <Switch checked/>
                                        </TableTd>
                                        <TableTd></TableTd>
                                    </TableRow>
                                    <TableRow className="k-master-row k-grid-edit-row" alt>
                                        <TableTd>RTL</TableTd>
                                        <TableTd>
                                            <NumericTextbox placeholder="Numeric..." className="k-rtl" />
                                        </TableTd>
                                        <TableTd>
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
