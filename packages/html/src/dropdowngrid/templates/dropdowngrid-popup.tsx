import DropdownGrid from "../dropdowngrid.spec";
import { nextId } from "../../misc";
import { DataTable, TableBody, TableFooter, TableGroupStickyHeader, TableHeader, TableList, TableListGroupRow, TableListRow, TableListTd, TableListTh, TableRow, TableTh, TableThead } from '../../table';

export const DropdownGridPopup = (props) => {
    const ddgId = nextId('ddg');
    const tableListId = nextId('ddg-tl');
    const row1Id = nextId('ddg-row');
    const row2Id = nextId('ddg-row');
    const row3Id = nextId('ddg-row');
    const row4Id = nextId('ddg-row');
    const row5Id = nextId('ddg-row');
    const row6Id = nextId('ddg-row');

    return (
        <DropdownGrid
            id={ddgId}
            aria-label="Select item"
            opened={true}
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
                        <TableList role="listbox" id={tableListId} aria-label="Options">
                            <TableListRow role="option" id={row1Id}>
                                <TableListTd text="1" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 1.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 1.3"></TableListTd>
                            </TableListRow>
                            <TableListRow role="option" id={row2Id} alt>
                                <TableListTd text="2" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 2.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 2.3"></TableListTd>
                            </TableListRow>
                            <TableListRow role="option" id={row3Id}>
                                <TableListTd text="3" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 3.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 3.3"></TableListTd>
                            </TableListRow>
                            <TableListGroupRow role="presentation">
                                <TableListTh text="Group"></TableListTh>
                            </TableListGroupRow>
                            <TableListRow role="option" id={row4Id}>
                                <TableListTd text="4" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 4.2" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 4.3"></TableListTd>
                            </TableListRow>
                            <TableListRow role="option" id={row5Id} alt>
                                <TableListTd text="5" style={{ width: '50px' }}></TableListTd>
                                <TableListTd text="Data 5.2 (alt)" style={{ width: '160px' }}></TableListTd>
                                <TableListTd text="Data 5.3"></TableListTd>
                            </TableListRow>
                            <TableListRow role="option" id={row6Id}>
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
};
