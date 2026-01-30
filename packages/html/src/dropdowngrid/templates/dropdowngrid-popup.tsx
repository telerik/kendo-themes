import DropdownGrid from "../dropdowngrid.spec";
import { DataTable, TableBody, TableFooter, TableGroupStickyHeader, TableHeader, TableList, TableListGroupRow, TableListRow, TableListTd, TableListTh, TableRow, TableTh, TableThead } from '../../table';

export const DropdownGridPopup = (props) => (
    <DropdownGrid
        id="dropdowngrid"
        opened={true}
        activeDescendantId="dropdowngrid-option-3"
        listboxId="dropdowngrid-listbox"
        popup={
            <DataTable>
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
                    <TableList role="listbox" id="dropdowngrid-listbox" aria-label="DropdownGrid options">
                        <TableListRow role="option" id="dropdowngrid-option-1" tabIndex={-1}>
                            <TableListTd text="1" style={{ width: '50px' }}></TableListTd>
                            <TableListTd text="Data 1.2" style={{ width: '160px' }}></TableListTd>
                            <TableListTd text="Data 1.3"></TableListTd>
                        </TableListRow>
                        <TableListRow role="option" id="dropdowngrid-option-2" alt tabIndex={-1}>
                            <TableListTd text="2" style={{ width: '50px' }}></TableListTd>
                            <TableListTd text="Data 2.2 (alt)" style={{ width: '160px' }}></TableListTd>
                            <TableListTd text="Data 2.3"></TableListTd>
                        </TableListRow>
                        <TableListRow role="option" id="dropdowngrid-option-3" focus selected tabIndex={0} aria-selected="true">
                            <TableListTd text="3" style={{ width: '50px' }}></TableListTd>
                            <TableListTd text="Data 3.2" style={{ width: '160px' }}></TableListTd>
                            <TableListTd text="Data 3.3"></TableListTd>
                        </TableListRow>
                        <TableListGroupRow>
                            <TableListTh text="Group"></TableListTh>
                        </TableListGroupRow>
                        <TableListRow role="option" id="dropdowngrid-option-4" tabIndex={-1}>
                            <TableListTd text="4" style={{ width: '50px' }}></TableListTd>
                            <TableListTd text="Data 4.2" style={{ width: '160px' }}></TableListTd>
                            <TableListTd text="Data 4.3"></TableListTd>
                        </TableListRow>
                        <TableListRow role="option" id="dropdowngrid-option-5" alt tabIndex={-1}>
                            <TableListTd text="5" style={{ width: '50px' }}></TableListTd>
                            <TableListTd text="Data 5.2 (alt)" style={{ width: '160px' }}></TableListTd>
                            <TableListTd text="Data 5.3"></TableListTd>
                        </TableListRow>
                        <TableListRow role="option" id="dropdowngrid-option-6" tabIndex={-1}>
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
        }
        {...props}
    />
);
