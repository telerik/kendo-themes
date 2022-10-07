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
                    <table>
                        <colgroup>
                            <col style={{ width: "200px" }} />
                            <col style={{ width: "300px" }} />
                            <col style={{ width: "100px" }} />
                            <col style={{ width: "400px" }} />
                            <col style={{ width: "100px" }} />
                        </colgroup>
                        <thead className="k-grid-header">
                            <tr>
                                <th className="k-header">
                                    <a className="k-link">id</a>
                                </th>
                                <th className="k-header">
                                    <a className="k-link">text</a>
                                </th>
                                <th className="k-header">
                                    <a className="k-link">price</a>
                                </th>
                                <th className="k-header">
                                    <a className="k-link">manufactured</a>
                                </th>
                                <th className="k-header">
                                    <a className="k-link">discontinued</a>
                                </th>
                            </tr>
                            <tr className="k-filter-row">
                                <th></th>
                                <th>
                                    <div className="k-filtercell">
                                        <span>
                                            <Textbox />
                                            <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                            <Button icon="filter-clear" disabled></Button>
                                        </span>
                                    </div>
                                </th>
                                <th>
                                    <div className="k-filtercell">
                                        <span>
                                            <NumericTextbox />
                                            <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                            <Button icon="filter-clear" disabled></Button>
                                        </span>
                                    </div>
                                </th>
                                <th>
                                    <div className="k-filtercell">
                                        <span>
                                            <DatePicker />
                                            <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                            <Button icon="filter-clear" disabled></Button>
                                        </span>
                                    </div>
                                </th>
                                <th>
                                    <div className="k-filtercell">
                                        <span>
                                            <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                            <Button icon="filter-clear" disabled></Button>
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="k-master-row">
                                <td>
                                    <Icon name="collapse"></Icon>
                                    1
                                </td>
                                <td>Furniture</td>
                                <td>4</td>
                                <td>8/12/1996</td>
                                <td>false</td>
                            </tr>
                            <tr className="k-master-row">
                                <td>
                                    <Icon name="none"></Icon>
                                    <Icon name="none"></Icon>
                                    1.1
                                </td>
                                <td>Tables &amp; Chairs</td>
                                <td>123</td>
                                <td>8/12/1996</td>
                                <td>false</td>
                            </tr>
                            <tr className="k-master-row">
                                <td>
                                    <Icon name="none"></Icon>
                                    <Icon name="none"></Icon>
                                    1.2
                                </td>
                                <td>Sofas</td>
                                <td>213</td>
                                <td>8/12/1996</td>
                                <td>true</td>
                            </tr>
                            <tr className="k-master-row">
                                <td>
                                    <Icon name="none"></Icon>
                                    <Icon name="none"></Icon>
                                    1.3
                                </td>
                                <td>Occasional Furniture</td>
                                <td>42</td>
                                <td>8/12/1996</td>
                                <td>false</td>
                            </tr>
                            <tr className="k-master-row">
                                <td>
                                    <Icon name="collapse"></Icon>
                                    2
                                </td>
                                <td>Decor</td>
                                <td>2</td>
                                <td>8/12/1996</td>
                                <td>false</td>
                            </tr>
                            <tr className="k-master-row">
                                <td>
                                    <Icon name="none"></Icon>
                                    <Icon name="none"></Icon>
                                    2.1
                                </td>
                                <td>Bed Linen</td>
                                <td>12</td>
                                <td>8/12/1996</td>
                                <td>false</td>
                            </tr>
                            <tr className="k-master-row">
                                <td>
                                    <Icon name="none"></Icon>
                                    <Icon name="collapse"></Icon>
                                    2.2
                                </td>
                                <td>Curtains &amp; Blinds</td>
                                <td>1</td>
                                <td>8/12/1996</td>
                                <td>true</td>
                            </tr>
                            <tr className="k-master-row">
                                <td>
                                    <Icon name="none"></Icon>
                                    <Icon name="none"></Icon>
                                    <Icon name="none"></Icon>
                                    2.2.1
                                </td>
                                <td>Carpets</td>
                                <td>54</td>
                                <td>8/12/1996</td>
                                <td>true</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </>
);
