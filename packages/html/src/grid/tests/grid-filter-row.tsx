import { Autocomplete } from '../../autocomplete';
import { Button } from '../../button';
import { ColorPicker } from '../../colorpicker';
import { Combobox } from '../../combobox';
import { DatePicker } from '../../datepicker';
import { DateTimePicker } from '../../datetimepicker';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';
import { TimePicker } from '../../timepicker';
import { Grid, GridHeader, GridHeaderTable, GridWithFilterRow } from '../../grid';
import { TableThead, TableRow, TableTd } from '../../table';

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
