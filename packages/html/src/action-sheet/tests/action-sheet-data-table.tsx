import { ActionSheet, ActionSheetFooter, ActionSheetHeader } from '../../action-sheet';
import { Button } from '../../button';
import { DataTable, TableBody, TableFooter, TableGroupStickyHeader, TableHeader, TableList, TableListGroupRow, TableListRow, TableListTd, TableListTh, TableRow, TableTh, TableThead } from '../../table';


const styles = `
    #test-area {
        --kendo-actionsheet-height: 400px;
        --kendo-actionsheet-max-height: 400px;
    }
    #test-area > section {
        height: 600px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>partial</span>
            <span>full screen</span>

            <section>
                <ActionSheet adaptive={true}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="x" size="large" fillMode="flat" />}
                            filter={true}
                            title="Select Item">
                        </ActionSheetHeader>
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Apply" size="large" themeColor="primary" />
                            <Button text="Cancel" size="large" themeColor="base" />
                        </ActionSheetFooter>
                    }
                >
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
            </section>

            <section>
                <ActionSheet adaptive={true} fullscreen={true}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="x" size="large" fillMode="flat" />}
                            filter={true}
                            title="Select Item">
                        </ActionSheetHeader>
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Apply" size="large" themeColor="primary" />
                            <Button text="Cancel" size="large" themeColor="base" />
                        </ActionSheetFooter>
                    }
                >
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
            </section>

        </div>
    </>
);
