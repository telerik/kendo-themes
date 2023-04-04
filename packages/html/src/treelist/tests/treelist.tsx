import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">
            <section>

                <div id="treelist" className="k-treelist k-grid k-grid-md k-grid-no-scrollbar">
                    <div className="k-grid-header" style={{ paddingRight: '0px' }}>
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: "250px" }}/>
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header k-filterable">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">First Name</span>
                                                </span>
                                                <a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon name="more-vertical" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Last Name</span>
                                                </span>
                                                <a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon name="more-vertical" /></a>
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
                                <col style={{ width: "250px" }}/>
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row">
                                    <td className="k-table-td"><Icon name="caret-alt-right"></Icon>Daryl</td>
                                    <td className="k-table-td">Sweeney</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>

            <section>
                <div id="treelist" className="k-treelist k-grid k-grid-md">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: "280px" }} />
                                    <col style={{ width: "160px" }} />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header k-filterable">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">First Name</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Last Name</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Position</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
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
                                <col style={{ width: "280px" }} />
                                <col style={{ width: "160px" }}/>
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-treelist-group">
                                    <td className="k-table-td"><Icon name="caret-alt-down"></Icon>Daryl</td>
                                    <td className="k-table-td">Sweeney</td>
                                    <td className="k-table-td">CEO</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt k-treelist-group">
                                    <td className="k-table-td"><Icon name="none"></Icon><Icon name="caret-alt-down"></Icon>Guy
                                    </td>
                                    <td className="k-table-td">Wooten</td>
                                    <td className="k-table-td">Chief Technical Officer</td>
                                </tr>
                                <tr className="k-table-row k-treelist-group">
                                    <td className="k-table-td"><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="caret-alt-down"></Icon>Buffy</td>
                                    <td className="k-table-td">Weber</td>
                                    <td className="k-table-td">VP, Engineering</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt k-treelist-group">
                                    <td className="k-table-td"><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="caret-alt-down"></Icon>Hyacinth
                                    </td>
                                    <td className="k-table-td">Hood</td>
                                    <td className="k-table-td">Team Lead</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td"><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon><Icon name="none"></Icon>Akeem</td>
                                    <td className="k-table-td">Carr</td>
                                    <td className="k-table-td">Junior Software Developer</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    </>
);
