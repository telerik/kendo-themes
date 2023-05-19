import { Icon } from '../../icon';

export default () => (
    <>
        <div id="test-area">
            <div id="treelist" className="k-treelist k-grid k-grid-md k-grid-no-scrollbar">
                <div className="k-grid-header" style={{ paddingRight: '0px' }}>
                    <div className="k-grid-header-wrap">
                        <table className="k-table k-table-md k-grid-header-table">
                            <colgroup>
                                <col className="k-drag-col"/>
                                <col style={{ width: "250px" }}/>
                                <col />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th className="k-table-th k-header k-drag-cell"></th>
                                    <th className="k-table-th k-header">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">First Name</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-header">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Last Name</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-header">
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Position</span>
                                            </span>
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-content k-auto-scrollable">
                    <table className="k-table k-table-md k-grid-table">
                        <colgroup>
                            <col className="k-drag-col" />
                            <col style={{ width: "250px" }}/>
                            <col />
                        </colgroup>
                        <tbody className="k-table-tbody">
                            <tr className="k-table-row">
                                <td className="k-table-td k-drag-cell"><Icon icon="reorder"/></td>
                                <td className="k-table-td"><Icon icon="caret-alt-right"></Icon>Daryl</td>
                                <td className="k-table-td">Sweeney</td>
                                <td className="k-table-td">CEO</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt k-treelist-group">
                                <td className="k-table-td k-drag-cell"><Icon icon="reorder"/></td>
                                <td className="k-table-td"><Icon icon="none"></Icon><Icon icon="caret-alt-down"></Icon>Guy</td>
                                <td className="k-table-td">Wooten</td>
                                <td className="k-table-td">Chief Technical Officer</td>
                            </tr>
                            <tr className="k-table-row k-treelist-group">
                                <td className="k-table-td k-drag-cell"><Icon icon="reorder"/></td>
                                <td className="k-table-td"><Icon icon="none"></Icon><Icon icon="none"></Icon><Icon icon="caret-alt-down"></Icon>Buffy</td>
                                <td className="k-table-td">Weber</td>
                                <td className="k-table-td">VP, Engineering</td>
                            </tr>
                            <tr className="k-table-row k-table-alt-row k-alt k-treelist-group">
                                <td className="k-table-td k-drag-cell"><Icon icon="reorder"/></td>
                                <td className="k-table-td"><Icon icon="none"></Icon><Icon icon="none"></Icon><Icon icon="none"></Icon><Icon icon="caret-alt-down"></Icon>Hyacinth
                                </td>
                                <td className="k-table-td">Hood</td>
                                <td className="k-table-td">Team Lead</td>
                            </tr>
                            <tr className="k-table-row">
                                <td className="k-table-td k-drag-cell"><Icon icon="reorder"/></td>
                                <td className="k-table-td"><Icon icon="none"></Icon><Icon icon="none"></Icon><Icon icon="none"></Icon><Icon icon="none"></Icon><Icon icon="none"></Icon>Akeem</td>
                                <td className="k-table-td">Carr</td>
                                <td className="k-table-td">Junior Software Developer</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
);
