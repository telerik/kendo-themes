import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Base</h3>
            <div className="k-grid k-widget telerik-blazor">
                <div className="k-grouping-header">
                    Drag a column header and drop it here to group by that column
                </div>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead role="rowgroup">
                                <tr role="row">
                                    <th className="k-header" colSpan={1}>
                                        <Checkbox />
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Id
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Name
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Command
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-container">
                    <div className="k-grid-content k-virtual-content">
                        <div className="k-pos-relative">
                            <div className="k-virtual-position">
                                <table role="grid" className="k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody role="rowgroup">
                                        <tr role="row" className="k-master-row">
                                            <td colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td colSpan={0}>
                                                1
                                            </td>
                                            <td colSpan={0}>
                                                Product1
                                            </td>
                                            <td className="k-command-cell   " colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-master-row k-alt">
                                            <td colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td colSpan={0}>
                                                2
                                            </td>
                                            <td colSpan={0}>
                                                Product2
                                            </td>
                                            <td className="k-command-cell   " colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="k-height-container">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Single Group</h3>
            <div className="k-grid k-widget telerik-blazor">
                <div className="k-grouping-header">
                    <ChipList>
                        <Chip actions={ <ChipAction type="remove"/> }>Id</Chip>
                    </ChipList>
                </div>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table role="grid">
                            <colgroup>
                                <col className="k-group-col" />
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead role="rowgroup">
                                <tr role="row">
                                    <th colSpan={1} rowSpan={1} className="k-group-cell k-header"></th>
                                    <th className="k-header" colSpan={1}>
                                        <Checkbox />
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Id
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Name
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Command
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-container">
                    <div className="k-grid-content k-virtual-content">
                        <div className="k-pos-relative">
                            <div className="k-virtual-position">
                                <table role="grid" className="k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody role="rowgroup">
                                        <tr role="row" className="k-grouping-row">
                                            <td colSpan={5}>
                                                <p className="k-reset">
                                                    <Icon name="collapse" />
                                                    Id: 1
                                                </p>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-master-row">
                                            <td className="k-group-cell"></td>
                                            <td colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td colSpan={0}>
                                                1
                                            </td>
                                            <td colSpan={0}>
                                                Product1
                                            </td>
                                            <td className="k-command-cell   " colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-grouping-row">
                                            <td colSpan={5}>
                                                <p className="k-reset">
                                                    <Icon name="collapse" />
                                                    Id: 2
                                                </p>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-master-row k-alt">
                                            <td className="k-group-cell"></td>
                                            <td colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td colSpan={0}>
                                                2
                                            </td>
                                            <td colSpan={0}>
                                                Product2
                                            </td>
                                            <td className="k-command-cell   " colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="k-height-container">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Two Groups</h3>
            <div className="k-grid k-widget telerik-blazor">
                <div className="k-grouping-header">
                    <ChipList>
                        <Chip actions={ <ChipAction type="remove"/> }>Id</Chip>
                        <Chip actions={ <ChipAction type="remove"/> }>Name</Chip>
                    </ChipList>
                </div>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table role="grid">
                            <colgroup>
                                <col className="k-group-col" />
                                <col className="k-group-col" />
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead role="rowgroup">
                                <tr role="row">
                                    <th colSpan={1} rowSpan={1} className="k-group-cell k-header"></th>
                                    <th colSpan={1} rowSpan={1} className="k-group-cell k-header"></th>
                                    <th className="k-header" colSpan={1}>
                                        <Checkbox />
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Id
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Name
                                    </th>
                                    <th className="k-header" colSpan={1}>
                                        Command
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-container">
                    <div className="k-grid-content k-virtual-content">
                        <div className="k-pos-relative">
                            <div className="k-virtual-position">
                                <table role="grid" className="k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col className="k-group-col" />
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody role="rowgroup">
                                        <tr role="row" className="k-grouping-row">
                                            <td colSpan={6}>
                                                <p className="k-reset">
                                                    <Icon name="collapse" />
                                                    Id: 1
                                                </p>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-grouping-row">
                                            <td className="k-group-cell"></td>
                                            <td colSpan={5}>
                                                <p className="k-reset">
                                                    <Icon name="collapse" />
                                                    Name: Product1
                                                </p>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-master-row">
                                            <td className="k-group-cell"></td>
                                            <td className="k-group-cell"></td>
                                            <td colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td colSpan={0}>
                                                1
                                            </td>
                                            <td colSpan={0}>
                                                Product1
                                            </td>
                                            <td className="k-command-cell   " colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-grouping-row">
                                            <td colSpan={6}>
                                                <p className="k-reset">
                                                    <Icon name="collapse" />
                                                    Id: 2
                                                </p>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-grouping-row">
                                            <td className="k-group-cell"></td>
                                            <td colSpan={5}>
                                                <p className="k-reset">
                                                    <Icon name="collapse" />
                                                    Name: Product2
                                                </p>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-master-row k-alt">
                                            <td className="k-group-cell"></td>
                                            <td className="k-group-cell"></td>
                                            <td colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td colSpan={0}>
                                                2
                                            </td>
                                            <td colSpan={0}>
                                                Product2
                                            </td>
                                            <td className="k-command-cell   " colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="k-height-container">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
