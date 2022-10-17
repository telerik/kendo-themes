import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionSheet, ActionSheetFooter, ActionSheetHeader } from '../../action-sheet';
import { List, ListGroup, ListItem } from '../../list';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

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

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>partial</span>
            <span>full screen</span>

            <section>
                <ActionSheet adaptive={true}>
                    <ActionSheetHeader
                        actions={[ 'x' ]}
                        filter={true}
                        title="Select Item">
                    </ActionSheetHeader>
                    <div className="k-list-container">
                        <div className="k-data-table k-table-lg">
                            <div className="k-table-header">
                                <div className="k-table-header-wrap">
                                    <table className="k-table">
                                        <colgroup>
                                            <col style={{ width: '50px' }} />
                                            <col style={{ width: "160px" }} />
                                            <col />
                                        </colgroup>
                                        <thead className="k-table-thead">
                                            <tr className="k-table-row">
                                                <th className="k-table-th">ID</th>
                                                <th className="k-table-th">Name</th>
                                                <th className="k-table-th">Job Title</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                            <div className="k-table-group-sticky-header">
                                <span className="k-table-th">Initial group</span>
                            </div>
                            <div className="k-table-scroller">
                                <ul className="k-table k-table-list">
                                    <li className="k-table-row">
                                        <span style={{ width: '50px' }} className="k-table-td">1</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 1.2</span>
                                        <span className="k-table-td">Data 1.3</span>
                                    </li>
                                    <li className="k-table-row k-table-alt-row">
                                        <span style={{ width: '50px' }} className="k-table-td">2</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 2.2 (alt)</span>
                                        <span className="k-table-td">Data 2.3</span>
                                    </li>
                                    <li className="k-table-row">
                                        <span style={{ width: '50px' }} className="k-table-td">3</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 3.2</span>
                                        <span className="k-table-td">Data 3.3</span>
                                    </li>
                                    <li className="k-table-group-row">
                                        <span className="k-table-th">Group</span>
                                    </li>
                                    <li className="k-table-row">
                                        <span style={{ width: '50px' }} className="k-table-td">4</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 4.2</span>
                                        <span className="k-table-td">Data 4.3</span>
                                    </li>
                                    <li className="k-table-row k-table-alt-row">
                                        <span style={{ width: '50px' }} className="k-table-td">5</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 5.2 (alt)</span>
                                        <span className="k-table-td">Data 5.3</span>
                                    </li>
                                    <li className="k-table-row">
                                        <span style={{ width: '50px' }} className="k-table-td">6</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 6.2</span>
                                        <span className="k-table-td">Data 6.3</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="k-table-footer">
                                <span className="k-table-td">30 records in total</span>
                            </div>
                        </div>
                    </div>
                    <ActionSheetFooter actions={[ '!Apply', 'Cancel' ]} />
                </ActionSheet>
            </section>

            <section>
                <ActionSheet adaptive={true} fullscreen={true}>
                    <ActionSheetHeader
                        actions={[ 'x' ]}
                        filter={true}
                        title="Select Item">
                    </ActionSheetHeader>
                    <div className="k-list-container">
                        <div className="k-data-table k-table-lg">
                            <div className="k-table-header">
                                <div className="k-table-header-wrap">
                                    <table className="k-table">
                                        <colgroup>
                                            <col style={{ width: '50px' }} />
                                            <col style={{ width: "160px" }} />
                                            <col />
                                        </colgroup>
                                        <thead className="k-table-thead">
                                            <tr className="k-table-row">
                                                <th className="k-table-th">ID</th>
                                                <th className="k-table-th">Name</th>
                                                <th className="k-table-th">Job Title</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                            <div className="k-table-group-sticky-header">
                                <span className="k-table-th">Initial group</span>
                            </div>
                            <div className="k-table-scroller">
                                <ul className="k-table k-table-list">
                                    <li className="k-table-row">
                                        <span style={{ width: '50px' }} className="k-table-td">1</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 1.2</span>
                                        <span className="k-table-td">Data 1.3</span>
                                    </li>
                                    <li className="k-table-row k-table-alt-row">
                                        <span style={{ width: '50px' }} className="k-table-td">2</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 2.2 (alt)</span>
                                        <span className="k-table-td">Data 2.3</span>
                                    </li>
                                    <li className="k-table-row">
                                        <span style={{ width: '50px' }} className="k-table-td">3</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 3.2</span>
                                        <span className="k-table-td">Data 3.3</span>
                                    </li>
                                    <li className="k-table-group-row">
                                        <span className="k-table-th">Group</span>
                                    </li>
                                    <li className="k-table-row">
                                        <span style={{ width: '50px' }} className="k-table-td">4</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 4.2</span>
                                        <span className="k-table-td">Data 4.3</span>
                                    </li>
                                    <li className="k-table-row k-table-alt-row">
                                        <span style={{ width: '50px' }} className="k-table-td">5</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 5.2 (alt)</span>
                                        <span className="k-table-td">Data 5.3</span>
                                    </li>
                                    <li className="k-table-row">
                                        <span style={{ width: '50px' }} className="k-table-td">6</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 6.2</span>
                                        <span className="k-table-td">Data 6.3</span>
                                    </li>
                                    <li className="k-table-group-row">
                                        <span className="k-table-th">Group</span>
                                    </li>
                                    <li className="k-table-row">
                                        <span style={{ width: '50px' }} className="k-table-td">4</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 4.2</span>
                                        <span className="k-table-td">Data 4.3</span>
                                    </li>
                                    <li className="k-table-row k-table-alt-row">
                                        <span style={{ width: '50px' }} className="k-table-td">5</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 5.2 (alt)</span>
                                        <span className="k-table-td">Data 5.3</span>
                                    </li>
                                    <li className="k-table-row">
                                        <span style={{ width: '50px' }} className="k-table-td">6</span>
                                        <span style={{ width: "160px" }} className="k-table-td">Data 6.2</span>
                                        <span className="k-table-td">Data 6.3</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="k-table-footer">
                                <span className="k-table-td">30 records in total</span>
                            </div>
                        </div>
                    </div>
                    <ActionSheetFooter actions={[ '!Apply', 'Cancel' ]} />
                </ActionSheet>
            </section>

        </div>
    </>
);
