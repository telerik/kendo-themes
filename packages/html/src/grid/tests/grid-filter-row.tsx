import { Autocomplete } from '../../autocomplete/autocomplete.spec';
import { Button } from '../../button/button.spec';
import { ColorPicker } from '../../colorpicker/colorpicker.spec';
import { Combobox } from '../../combobox/combobox.spec';
import { DatePicker } from '../../datepicker/datepicker.spec';
import { DateTimePicker } from '../../datetimepicker/datetimepicker.spec';
import { DropdownList } from '../../dropdownlist/dropdownlist.spec';
import { NumericTextbox } from '../../numerictextbox/numerictextbox.spec';
import { Textbox } from '../../textbox/textbox.spec';
import { TimePicker } from '../../timepicker/timepicker.spec';
import { Grid } from '../grid.spec';
import { GridWithFilterRow } from '../templates/grid-with-filter-row';
import { GridHeader } from '../grid-header.spec';
import { GridHeaderTable } from '../grid-header-table.spec';
import { TableThead } from '../../table/table-thead';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <div className="section">
                <Grid className="k-grid-display-block k-grid-no-scrollbar">
                    <GridHeader>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow className="k-filter-row">
                                        <TableTd>
                                            <span className="k-filtercell">
                                                <span>
                                                    <ColorPicker />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </TableTd>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                </Grid>
            </div>
            <div></div>
            <div></div>

            <div className="section">
                <Grid className="k-grid-display-block k-grid-no-scrollbar">
                    <GridHeader>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow className="k-filter-row">
                                        <TableTd>
                                            <span className="k-filtercell">
                                                <span>
                                                    <Autocomplete placeholder="Autocomplete..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </TableTd>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                </Grid>
            </div>

            <div className="section">
                <Grid className="k-grid-display-block k-grid-no-scrollbar">
                    <GridHeader>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow className="k-filter-row">
                                        <TableTd>
                                            <span className="k-filtercell">
                                                <span>
                                                    <Combobox placeholder="Combobox..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </TableTd>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                </Grid>
            </div>

            <div className="section">
                <Grid className="k-grid-display-block k-grid-no-scrollbar">
                    <GridHeader>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow className="k-filter-row">
                                        <TableTd>
                                            <span className="k-filtercell">
                                                <span>
                                                    <DropdownList placeholder="DropdownList..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </TableTd>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                </Grid>
            </div>

            <div className="section">
                <Grid className="k-grid-display-block k-grid-no-scrollbar">
                    <GridHeader>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow className="k-filter-row">
                                        <TableTd>
                                            <span className="k-filtercell">
                                                <span>
                                                    <NumericTextbox placeholder="Numeric..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </TableTd>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                </Grid>
            </div>

            <div className="section">
                <Grid className="k-grid-display-block k-grid-no-scrollbar">
                    <GridHeader>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow className="k-filter-row">
                                        <TableTd>
                                            <span className="k-filtercell">
                                                <span>
                                                    <Textbox placeholder="Textbox..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </TableTd>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                </Grid>
            </div>

            <div></div>

            <div className="section">
                <Grid className="k-grid-display-block k-grid-no-scrollbar">
                    <GridHeader>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow className="k-filter-row">
                                        <TableTd>
                                            <span className="k-filtercell">
                                                <span>
                                                    <DatePicker placeholder="Datepicker..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </TableTd>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                </Grid>
            </div>

            <div className="section">
                <Grid className="k-grid-display-block k-grid-no-scrollbar">
                    <GridHeader>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow className="k-filter-row">
                                        <TableTd>
                                            <span className="k-filtercell">
                                                <span>
                                                    <TimePicker placeholder="TimePicker..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </TableTd>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                </Grid>
            </div>

            <div className="section">
                <Grid className="k-grid-display-block k-grid-no-scrollbar">
                    <GridHeader>
                        <div className="k-grid-header-wrap k-auto-scrollable">
                            <GridHeaderTable>
                                <colgroup>
                                    <col />
                                </colgroup>
                                <TableThead>
                                    <TableRow className="k-filter-row">
                                        <TableTd>
                                            <span className="k-filtercell">
                                                <span>
                                                    <DateTimePicker placeholder="DateTimePicker..." />
                                                    <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                    <Button icon="filter-clear" disabled></Button>
                                                </span>
                                            </span>
                                        </TableTd>
                                    </TableRow>
                                </TableThead>
                            </GridHeaderTable>
                        </div>
                    </GridHeader>
                </Grid>
            </div>

            <div className="k-col-span-full">
                <GridWithFilterRow></GridWithFilterRow>
            </div>

        </div>
    </>
);
