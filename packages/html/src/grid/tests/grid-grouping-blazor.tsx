import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';
import { Chip, ChipList, ChipAction } from '../../chip';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            <h3>Base</h3>
            <div className="k-grid k-grid-md telerik-blazor">
                <div className="k-grouping-header">
                    <div className="k-grouping-drop-container">
                        Drag a column header and drop it here to group by that column
                    </div>
                </div>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table className="k-table k-table-md k-grid-header-table" role="grid">
                            <colgroup>
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <Checkbox />
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Id</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Name</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Command</span>
                                            </span>
                                        </span>
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
                                <table role="grid" className="k-table k-table-md k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                1
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product1
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                2
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product2
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
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
            <div className="k-grid k-grid-md telerik-blazor">
                <div className="k-grouping-header">
                    <ChipList>
                        <Chip actions={ <ChipAction type="remove"/> }>Id</Chip>
                    </ChipList>
                    <div className="k-grouping-drop-container"></div>
                </div>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table className="k-table k-table-md k-grid-header-table" role="grid">
                            <colgroup>
                                <col className="k-group-col" />
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th colSpan={1} rowSpan={1} className="k-table-th k-group-cell k-header"></th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <Checkbox />
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Id</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Name</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Command</span>
                                            </span>
                                        </span>
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
                                <table role="grid" className="k-table k-table-md k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr role="row" className="k-table-row k-table-group-row k-grouping-row">
                                            <td className="k-table-td" colSpan={5}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    Id: 1
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                1
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product1
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-table-row k-table-group-row k-grouping-row">
                                            <td className="k-table-td" colSpan={5}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    Id: 2
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                2
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product2
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
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
            <div className="k-grid k-grid-md telerik-blazor">
                <div className="k-grouping-header">
                    <ChipList>
                        <Chip actions={ <ChipAction type="remove"/> }>Id</Chip>
                        <Chip actions={ <ChipAction type="remove"/> }>Name</Chip>
                    </ChipList>
                    <div className="k-grouping-drop-container"></div>
                </div>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table className="k-table k-table-md k-grid-header-table" role="grid">
                            <colgroup>
                                <col className="k-group-col" />
                                <col className="k-group-col" />
                                <col style={{ width: "65px" }} />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
                                    <th colSpan={1} rowSpan={1} className="k-table-th k-group-cell k-header"></th>
                                    <th colSpan={1} rowSpan={1} className="k-table-th k-group-cell k-header"></th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <Checkbox />
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Id</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Name</span>
                                            </span>
                                        </span>
                                    </th>
                                    <th className="k-table-th k-header" colSpan={1}>
                                        <span className="k-cell-inner">
                                            <span className="k-link">
                                                <span className="k-column-title">Command</span>
                                            </span>
                                        </span>
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
                                <table role="grid" className="k-table k-table-md k-grid-table" style={{ height: 'auto' }}>
                                    <colgroup>
                                        <col className="k-group-col" />
                                        <col className="k-group-col" />
                                        <col style={{ width: "65px" }} />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr role="row" className="k-table-row k-table-group-row k-grouping-row">
                                            <td className="k-table-td" colSpan={6}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    Id: 1
                                                </p>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-table-row k-table-group-row k-grouping-row">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td" colSpan={5}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    Name: Product1
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-master-row">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                1
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product1
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
                                                <span>
                                                    <Button icon="trash">Delete</Button>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-table-row k-table-group-row k-grouping-row">
                                            <td className="k-table-td" colSpan={6}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    Id: 2
                                                </p>
                                            </td>
                                        </tr>
                                        <tr role="row" className="k-table-row k-table-group-row k-grouping-row">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td" colSpan={5}>
                                                <p className="k-reset">
                                                    <Icon icon="caret-alt-down" />
                                                    Name: Product2
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="k-table-row k-table-alt-row k-master-row k-alt">
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td" colSpan={0}>
                                                <span>
                                                    <Checkbox className="k-grid-checkbox" />
                                                </span>
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                2
                                            </td>
                                            <td className="k-table-td" colSpan={0}>
                                                Product2
                                            </td>
                                            <td className="k-table-td k-command-cell" colSpan={0}>
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
