import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';
import { Button } from '../../button';
import { DropdownList } from '../../dropdownlist';
import { DatePicker } from '../../datepicker';
import { NumericTextbox } from '../../numerictextbox';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">
            <section>
                <span>React Treelist</span>
                <div className="k-grid k-grid-md k-treelist-scrollable">
                    <table className="k-table k-table-md k-grid-table">
                        <colgroup>
                            <col style={{ width: "200px" }} />
                            <col style={{ width: "300px" }} />
                            <col style={{ width: "100px" }} />
                            <col style={{ width: "400px" }} />
                            <col style={{ width: "100px" }} />
                        </colgroup>
                        <thead className="k-table-thead k-grid-header">
                            <tr className="k-table-row">
                                <th className="k-table-th k-header">
                                    <a className="k-link">id</a>
                                </th>
                                <th className="k-table-th k-header">
                                    <a className="k-link">text</a>
                                </th>
                                <th className="k-table-th k-header">
                                    <a className="k-link">price</a>
                                </th>
                                <th className="k-table-th k-header">
                                    <a className="k-link">manufactured</a>
                                </th>
                                <th className="k-table-th k-header">
                                    <a className="k-link">discontinued</a>
                                </th>
                            </tr>
                            <tr className="k-table-row k-filter-row">
                                <th className="k-table-th"></th>
                                <th className="k-table-th">
                                    <div className="k-filtercell">
                                        <span>
                                            <Textbox />
                                            <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                            <Button icon="filter-clear" disabled></Button>
                                        </span>
                                    </div>
                                </th>
                                <th className="k-table-th">
                                    <div className="k-filtercell">
                                        <span>
                                            <NumericTextbox />
                                            <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                            <Button icon="filter-clear" disabled></Button>
                                        </span>
                                    </div>
                                </th>
                                <th className="k-table-th">
                                    <div className="k-filtercell">
                                        <span>
                                            <DatePicker />
                                            <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                            <Button icon="filter-clear" disabled></Button>
                                        </span>
                                    </div>
                                </th>
                                <th className="k-table-th">
                                    <div className="k-filtercell">
                                        <span>
                                            <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                            <Button icon="filter-clear" disabled></Button>
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="k-table-tbody">
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td">
                                    <Icon name="collapse"></Icon>
                                    1
                                </td>
                                <td className="k-table-td">Furniture</td>
                                <td className="k-table-td">4</td>
                                <td className="k-table-td">8/12/1996</td>
                                <td className="k-table-td">false</td>
                            </tr>
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td">
                                    <Icon name="none"></Icon>
                                    <Icon name="none"></Icon>
                                    1.1
                                </td>
                                <td className="k-table-td">Tables &amp; Chairs</td>
                                <td className="k-table-td">123</td>
                                <td className="k-table-td">8/12/1996</td>
                                <td className="k-table-td">false</td>
                            </tr>
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td">
                                    <Icon name="none"></Icon>
                                    <Icon name="none"></Icon>
                                    1.2
                                </td>
                                <td className="k-table-td">Sofas</td>
                                <td className="k-table-td">213</td>
                                <td className="k-table-td">8/12/1996</td>
                                <td className="k-table-td">true</td>
                            </tr>
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td">
                                    <Icon name="none"></Icon>
                                    <Icon name="none"></Icon>
                                    1.3
                                </td>
                                <td className="k-table-td">Occasional Furniture</td>
                                <td className="k-table-td">42</td>
                                <td className="k-table-td">8/12/1996</td>
                                <td className="k-table-td">false</td>
                            </tr>
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td">
                                    <Icon name="collapse"></Icon>
                                    2
                                </td>
                                <td className="k-table-td">Decor</td>
                                <td className="k-table-td">2</td>
                                <td className="k-table-td">8/12/1996</td>
                                <td className="k-table-td">false</td>
                            </tr>
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td">
                                    <Icon name="none"></Icon>
                                    <Icon name="none"></Icon>
                                    2.1
                                </td>
                                <td className="k-table-td">Bed Linen</td>
                                <td className="k-table-td">12</td>
                                <td className="k-table-td">8/12/1996</td>
                                <td className="k-table-td">false</td>
                            </tr>
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td">
                                    <Icon name="none"></Icon>
                                    <Icon name="collapse"></Icon>
                                    2.2
                                </td>
                                <td className="k-table-td">Curtains &amp; Blinds</td>
                                <td className="k-table-td">1</td>
                                <td className="k-table-td">8/12/1996</td>
                                <td className="k-table-td">true</td>
                            </tr>
                            <tr className="k-table-row k-master-row">
                                <td className="k-table-td">
                                    <Icon name="none"></Icon>
                                    <Icon name="none"></Icon>
                                    <Icon name="none"></Icon>
                                    2.2.1
                                </td>
                                <td className="k-table-td">Carpets</td>
                                <td className="k-table-td">54</td>
                                <td className="k-table-td">8/12/1996</td>
                                <td className="k-table-td">true</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </>
);
