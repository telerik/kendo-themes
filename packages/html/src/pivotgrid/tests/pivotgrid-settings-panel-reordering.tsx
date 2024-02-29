import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { ChipList, Chip, ChipAction } from '../../chip';
import { Icon } from '../../icon';
import { Searchbox } from '../../searchbox';
import { Treeview, TreeviewItem, TreeviewGroup } from '../../treeview';
import { Popup } from '../../popup';
import { ColumnMenuItem, ColumnMenuItemWrapper, ColumnMenuExpander, ColumnMenuNormal } from '../../column-menu';

const style = `
    .k-animation-container {
        bottom: 160px;
        left: 110px;
        position: relative;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <div className="k-d-flex k-flex-row k-pos-relative">
                    <div className="k-pivotgrid-configurator k-pivotgrid-configurator-vertical k-pivotgrid-configurator-push" style={{ height: "552px" }}>
                        <div className="k-pivotgrid-configurator-panel">
                            <div className="k-pivotgrid-configurator-header">
                                <div className="k-pivotgrid-configurator-header-text">Settings</div>
                            </div>
                            <div className="k-pivotgrid-configurator-content">
                                <form className="k-form k-form-md k-form-horizontal">
                                    <div className="k-form-field">
                                        <label className="k-label">Fields</label>
                                        <span className="k-spacer"></span>
                                        <Searchbox placeholder="Search..." />
                                    </div>
                                    <div className="k-form-field">
                                        <div className="k-select-all">
                                            <Checkbox />
                                            <span>Select all</span>
                                        </div>
                                        <span className="k-spacer"></span>
                                        <span>5 fields selected</span>
                                    </div>
                                    <div className="k-form-field">
                                        <div className="k-fields-list-wrapper">
                                            <Treeview>
                                                <TreeviewItem top showCheckbox hasChildren text="Account" />
                                                <TreeviewItem showCheckbox hasChildren text="Customer" />
                                                <TreeviewItem showCheckbox expanded text="Date">
                                                    <TreeviewGroup>
                                                        <TreeviewItem top showCheckbox hasChildren text="Date.Calendar" />
                                                        <TreeviewItem bottom showCheckbox expanded text="Date.Calendar Quarter of Year">
                                                            <TreeviewGroup>
                                                                <TreeviewItem top showCheckbox hasChildren text="(All)" />
                                                                <TreeviewItem bottom showCheckbox hasChildren text="Calendar Quarter of Year" />
                                                            </TreeviewGroup>
                                                        </TreeviewItem>
                                                    </TreeviewGroup>
                                                </TreeviewItem>
                                                <TreeviewItem showCheckbox hasChildren text="Delivery date" />
                                                <TreeviewItem showCheckbox hasChildren text="Department" />
                                                <TreeviewItem showCheckbox hasChildren text="Country" />
                                                <TreeviewItem bottom showCheckbox hasChildren text="Region" />
                                            </Treeview>
                                        </div>
                                    </div>
                                    <div className="k-form-field">
                                        <label className="k-label">Columns</label>
                                    </div>
                                    <ChipList className="k-column-fields">
                                        <Chip
                                            text="Date.Calendar"
                                            actions={
                                                <>
                                                    <ChipAction type="more"/>
                                                    <ChipAction type="remove"/>
                                                </>
                                            }
                                        />
                                        <Chip
                                            text="Product.Category"
                                            actions={
                                                <>
                                                    <ChipAction type="more"/>
                                                    <ChipAction type="remove"/>
                                                </>
                                            }
                                        />
                                    </ChipList>
                                    <div className="k-form-field">
                                        <label className="k-label">Rows</label>
                                    </div>
                                    <ChipList className="k-row-fields">
                                        <Chip
                                            text="Geography.City"
                                            actions={
                                                <>
                                                    <ChipAction type="more"/>
                                                    <ChipAction type="remove"/>
                                                </>
                                            }
                                        />
                                    </ChipList>
                                    <div className="k-form-field">
                                        <label className="k-label">Values</label>
                                        <span className="k-spacer"></span>
                                        <Button>Add Custom</Button>
                                    </div>
                                </form>
                            </div>
                            <ActionButtons alignment="end" className="k-pivotgrid-configurator-actions">
                                <Button>Cancel</Button>
                                <Button themeColor="primary">Apply</Button>
                            </ActionButtons>
                        </div>
                    </div>
                    <div className="k-pivotgrid-configurator-button">
                        <span>
                            Change settings
                            <Icon icon="gear" />
                        </span>
                    </div>
                    {/* grid-template-columns (width of the row headers table + auto width of the values table) and grid-template-rows (height of the column headers + auto height of the values table) will be calculated by the component */}
                    <div className="k-pivotgrid" style={{ height: "550px", gridTemplateColumns: "150px auto", gridTemplateRows: "242px auto" }}>
                        <span className="k-pivotgrid-empty-cell"></span>

                        {/* Pivot Multi Column Headers */}
                        <div className="k-pivotgrid-column-headers">

                            <table className="k-pivotgrid-table">
                                <colgroup>
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                </colgroup>
                                <tbody className="k-pivotgrid-tbody">
                                    {/* Four Rows for Date.Calendar Column grouping field */}
                                    <tr className="k-pivotgrid-row k-pivotgrid-column-total">
                                        <th colSpan={9} className="k-pivotgrid-cell k-pivotgrid-expanded k-pivotgrid-header-root">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-up" />
                                            <span className="k-pivotgrid-header-title">All Periods</span>
                                        </th>
                                        <th colSpan={1} rowSpan={4} className="k-pivotgrid-cell k-pivotgrid-header-total k-pivotgrid-header-root">
                                            <span className="k-pivotgrid-header-title">All Periods</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={6} className="k-pivotgrid-cell k-pivotgrid-expanded">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-up" />
                                            <span className="k-pivotgrid-header-title">CY 2010</span>
                                        </th>
                                        <th colSpan={1} rowSpan={3} className="k-pivotgrid-cell">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-down" />
                                            <span className="k-pivotgrid-header-title">CY 2011</span>
                                        </th>
                                        <th colSpan={1} rowSpan={3} className="k-pivotgrid-cell">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-down" />
                                            <span className="k-pivotgrid-header-title">CY 2012</span>
                                        </th>
                                        <th colSpan={1} rowSpan={3} className="k-pivotgrid-cell">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-down" />
                                            <span className="k-pivotgrid-header-title">CY 2013</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell k-pivotgrid-expanded">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-up" />
                                            <span className="k-pivotgrid-header-title">H2 CY 2010</span>
                                        </th>
                                        <th colSpan={5} rowSpan={2} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">H2 CY 2010</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-down" />
                                            <span className="k-pivotgrid-header-title">Q4 CY 2010</span>
                                        </th>
                                    </tr>

                                    {/* Table for Product.Category Column grouping field */}
                                    <tr className="k-pivotgrid-row k-pivotgrid-column-total">
                                        <th colSpan={1} rowSpan={2} className="k-pivotgrid-cell k-pivotgrid-header-root">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-down" />
                                            <span className="k-pivotgrid-header-title">All Products</span>
                                        </th>
                                        <th colSpan={4} className="k-pivotgrid-cell k-pivotgrid-expanded k-pivotgrid-header-root">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-up" />
                                            <span className="k-pivotgrid-header-title">All Products</span>
                                        </th>
                                        <th colSpan={1} rowSpan={2} className="k-pivotgrid-cell k-pivotgrid-header-root">
                                            <span className="k-pivotgrid-header-title">All Products</span>
                                        </th>
                                        <th colSpan={1} rowSpan={2} className="k-pivotgrid-cell k-pivotgrid-header-root">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-down" />
                                            <span className="k-pivotgrid-header-title">All Products</span>
                                        </th>
                                        <th colSpan={1} rowSpan={2} className="k-pivotgrid-cell k-pivotgrid-header-root">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-down" />
                                            <span className="k-pivotgrid-header-title">All Products</span>
                                        </th>
                                        <th colSpan={1} rowSpan={2} className="k-pivotgrid-cell k-pivotgrid-header-root">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-down" />
                                            <span className="k-pivotgrid-header-title">All Products</span>
                                        </th>
                                        <th colSpan={1} rowSpan={2} className="k-pivotgrid-cell k-pivotgrid-header-total k-pivotgrid-header-root">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-down" />
                                            <span className="k-pivotgrid-header-title">All Products</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell k-first">
                                            <span className="k-pivotgrid-header-title">Accessories</span>
                                        </th>
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Bikes</span>
                                        </th>
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Clothing</span>
                                        </th>
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Components</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Pivot Multi Row Headers */}
                        <div className="k-pivotgrid-row-headers">
                            <table className="k-pivotgrid-table">
                                <colgroup>
                                    <col />
                                    <col />
                                </colgroup>
                                <tbody className="k-pivotgrid-tbody">
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} rowSpan={9} className="k-pivotgrid-cell k-pivotgrid-row-total k-pivotgrid-expanded k-pivotgrid-header-root">
                                            <Icon className="k-pivotgrid-toggle" icon="chevron-up" />
                                            <span className="k-pivotgrid-header-title">All Geographies</span>
                                        </th>
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Austell</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Biloxi</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Braintree</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Casper</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Clearwater</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Destin</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Euclid</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Everett</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-header-title">Fort Wayne</span>
                                        </th>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <th colSpan={2} className="k-pivotgrid-cell k-pivotgrid-header-total">
                                            <span className="k-pivotgrid-header-title">All Geographies</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Details */}
                        <div className="k-pivotgrid-values">
                            <table className="k-pivotgrid-table" style={{ width: "1200px" }}>
                                <colgroup>
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                    <col width="120" />
                                </colgroup>
                                <tbody className="k-pivotgrid-tbody">
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$514.14</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2.02</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$508.12</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$4.00</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$514.14</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$3682.86</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2451.14</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2919.53</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$10567.67</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row k-hover">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$344.69</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2.52</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$298.45</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$7.47</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$36.25</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$344.69</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$1461.20</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$105.70</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$1911.60</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell k-focus">
                                            <span className="k-pivotgrid-content">$96.89</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$96.17</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$0.72</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$96.89</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$719.27</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$816.16</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row k-selected">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$1070.34</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$3.03</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$1064.62</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2.69</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$1070.34</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$4671.39</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$6621.86</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$5156.51</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$17520.10</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$514.14</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2.02</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$508.12</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$4.00</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$514.14</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$3682.86</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2451.14</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2919.53</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$10567.67</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell k-selected">
                                            <span className="k-pivotgrid-content">$344.69</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2.52</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$298.45</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$7.47</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$36.25</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$344.69</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$1461.20</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$105.70</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$1911.60</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$96.89</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$96.17</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$0.72</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$96.89</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$719.27</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$816.16</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$1070.34</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$3.03</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$1064.62</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$2.69</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$1070.34</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$4671.39</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$6621.86</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$5156.51</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$17520.10</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$96.89</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$96.17</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$0.72</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$96.89</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content">$719.27</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell">
                                            <span className="k-pivotgrid-content"></span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$816.16</span>
                                        </td>
                                    </tr>
                                    <tr className="k-pivotgrid-row">
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$9336.89</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$4719.27</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$9687.17</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$7680.72</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$4719.27</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$9546.89</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$4719.27</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$4719.27</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$4719.27</span>
                                        </td>
                                        <td colSpan={1} className="k-pivotgrid-cell k-pivotgrid-total">
                                            <span className="k-pivotgrid-content">$88816.16</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <Popup className="k-grid-columnmenu-popup">
                <ColumnMenuNormal>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Sort ascending" icon="sort-asc-small" />
                        <ColumnMenuItem text="Sort descending" icon="sort-desc-small" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Include fields" itemIcon="grid-layout" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Move to Columns" icon="columns" className="k-disabled" />
                        <ColumnMenuItem text="Move to Rows" icon="rows" />
                        <ColumnMenuItem text="Move previous" icon="arrow-left" className="k-disabled" />
                        <ColumnMenuItem text="Move next" icon="arrow-right" />
                    </ColumnMenuItemWrapper>
                </ColumnMenuNormal>
            </Popup>
        </div>
    </>
);
