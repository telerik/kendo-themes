import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Chip, ChipAction, ChipList } from '../../chip';
import { DropdownList } from '../../dropdownlist';
import { Icon } from '../../icon';
import { NumericTextbox } from '../../numerictextbox';
import { Pager } from '../../pager';
import { Textbox } from '../../textbox';
import { Toolbar } from '../../toolbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-grouping-header .k-grouping-dropclue {
        left: 0;
    }
    .k-drag-clue {
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="col-2">Grid</span>

            <section className="col-2">
                <div className="k-grid k-grid-sm k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-sm k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header">100px</th>
                                        <th className="k-table-th k-header">no width</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-table k-table-sm k-grid-table">
                            <colgroup>
                                <col style={{ width: "100px" }} />
                                <col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row">
                                    <td className="k-table-td">1</td>
                                    <td className="k-table-td">Row</td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td">2</td>
                                    <td className="k-table-td">Alt row</td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">3</td>
                                    <td className="k-table-td">
                                        This text continues to the end of the grid to test overflow behavior of row contents, as well as line height and vertical alignment.
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt">
                                    <td className="k-table-td">4</td>
                                    <td className="k-table-td"><span className="k-placeholder-line"></span></td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">5</td>
                                    <td className="k-table-td"><span className="k-placeholder-line"></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Pager className="k-grid-pager" size="small" />
                </div>
            </section>

            <span className="col-2">Filtering</span>
            <section className="col-2">
                <div className="k-grid k-grid-sm k-grid-no-scrollbar" style={{ height: "150px" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-sm k-grid-header-table">
                                <colgroup>
                                    <col className="k-hierarchy-col" /><col /><col /><col /><col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header k-hierarchy-cell">
                                        </th>
                                        <th className="k-table-th k-header k-filterable">
                                            <a className="k-grid-filter"><Icon name="filter" /></a>
                                            <a className="k-link">Default<span></span></a>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-hover">
                                            <a className="k-grid-filter"><Icon name="filter" /></a>
                                            <a className="k-link">Hover<span></span></a>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-focus">
                                            <a className="k-grid-filter"><Icon name="filter" /></a>
                                            <a className="k-link">Focus<span></span></a>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-active">
                                            <a className="k-grid-filter"><Icon name="filter" /></a>
                                            <a className="k-link">Active<span></span></a>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-sorted">
                                            <a className="k-grid-filter"><Icon name="filter" /></a>
                                            <a className="k-link">Sorted<Icon name="sort-asc-sm" /></a>
                                        </th>
                                    </tr>
                                    <tr className="k-table-row k-filter-row">
                                        <th className="k-table-th">
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                </div>
                                            </div>
                                        </th>
                                        <th className="k-table-th">
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <NumericTextbox size="small" />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList size="small" className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button size="small" icon="filter-clear" disabled></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="k-table-th">
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <Textbox size="small" showClearButton={false} value="p" />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList size="small" className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button size="small" icon="filter-clear"></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="k-table-th">
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <Textbox size="small" showClearButton={false} value="p" />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList size="small" className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button size="small" icon="filter-clear"></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="k-table-th">
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <Textbox size="small" showClearButton={false} value="p" />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList size="small" className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button size="small" icon="filter-clear"></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="k-table-th">
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-table k-table-sm k-grid-table">
                            <colgroup>
                                <col className="k-hierarchy-col" /><col /><col /><col /><col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-master-row k-expanded">
                                    <td className="k-table-td k-hierarchy-cell">
                                        <Icon name="collapse" />
                                    </td>
                                    <td className="k-table-td">1</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                </tr>
                                <tr className="k-table-row k-detail-row">
                                    <td className="k-table-td k-hierarchy-cell"></td>
                                    <td className="k-table-td k-detail-cell" colSpan={5}>
                                        {/* hierarchy child content */}
                                        <div style={{ background: "#ccc", padding: "10px" }}>
                                            Nested content
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt k-master-row">
                                    <td className="k-table-td k-hierarchy-cell">
                                        <Icon name="expand" />
                                    </td>
                                    <td className="k-table-td">2</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <span>Editing</span>
            <section className="col-2">
                <div className="k-grid k-grid-sm k-grid-no-scrollbar">
                    <Toolbar className="k-grid-toolbar" size="small">
                        <Button icon="add" size="small" >Add new record</Button>
                    </Toolbar>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-sm k-grid-header-table">
                                <colgroup>
                                    <col /><col /><col /><col style={{ width: "300px" }} />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th scope="col" className="k-table-th k-header">Name</th>
                                        <th scope="col" className="k-table-th k-header">Price</th>
                                        <th scope="col" className="k-table-th k-header">Available</th>
                                        <th scope="col" className="k-table-th k-header">&nbsp;</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-table k-table-sm k-grid-table" style={{ height: 'auto' }}>
                            <colgroup>
                                <col /><col /><col /><col style={{ width: "300px" }} />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-grid-edit-row">
                                    <td className="k-table-td">
                                        <Textbox value="Towel" required size="small" />
                                    </td>
                                    <td className="k-table-td">
                                        <NumericTextbox invalid size="small" />
                                        <div className="k-tooltip k-validator-tooltip k-tooltip-error k-invalid-msg"><Icon className="k-tooltip-icon" name="warning" /><span className="k-tooltip-content">Price</span><div className="k-callout k-callout-n"></div></div>
                                    </td>
                                    <td className="k-table-td"><Checkbox id="e77452cd-b3b5-4dc9-8210-17007584b695" /><label className="k-checkbox-label" htmlFor="e77452cd-b3b5-4dc9-8210-17007584b695"></label></td>
                                    <td className="k-table-td k-command-cell">
                                        <Button size="small" icon="check" themeColor="primary">Update</Button>
                                        <Button size="small" icon="cancel">Cancel</Button>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt k-grid-edit-row">
                                    <td className="k-table-td k-dirty-cell">
                                        <span className="k-dirty"></span>
                                        LongSingleWordTestLongSingleWordTestLongSingleWordTestLongSingleWordTest
                                    </td>
                                    <td className="k-table-td">18</td>
                                    <td className="k-table-td">false</td>
                                    <td className="k-table-td k-command-cell">
                                        <Button size="small" icon="edit">Edit</Button>
                                        <Button size="small" icon="close">Delete</Button>
                                    </td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">Chang</td>
                                    <td className="k-table-td">19</td>
                                    <td className="k-table-td">false</td>
                                    <td className="k-table-td k-command-cell">
                                        <Button size="small" icon="edit">Edit</Button>
                                        <Button size="small" icon="close">Delete</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>

            <span>Grouping</span>
            <section className="col-2">
                <div className="k-grid k-grid-sm k-grid-no-scrollbar">
                    <div className="k-grouping-header">
                        <div className="k-grouping-dropclue"></div>
                        <ChipList size="small">
                            <Chip size="small" icon="sort-asc-small" actions={ <ChipAction type="remove"/> }>Price</Chip>
                            <Chip size="small" icon="sort-desc-small" actions={ <ChipAction type="remove"/> }>Name</Chip>
                        </ChipList>
                        <div className="k-grouping-drop-container"></div>
                    </div>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-sm k-grid-header-table">
                                <colgroup>
                                    <col className="k-group-col" /><col /><col /><col /><col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-group-cell k-header" scope="col"></th>
                                        <th className="k-table-th k-header"><a className="k-link">Name</a></th>
                                        <th className="k-table-th k-header"><a className="k-link">Price</a></th>
                                        <th className="k-table-th k-header"><a className="k-link">Available</a></th>
                                        <th className="k-table-th k-header"><a className="k-link">Units</a></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-table k-table-sm k-grid-table" style={{ height: 'auto' }}>
                            <colgroup>
                                <col className="k-group-col" /><col /><col /><col /><col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-table-group-row k-grouping-row">
                                    <td className="k-table-td" colSpan={5}>
                                        <p className="k-reset">
                                            <Icon name="expand" />
                                            Price: 19
                                        </p>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-group-row k-grouping-row">
                                    <td className="k-table-td" colSpan={5}>
                                        <p className="k-reset">
                                            <Icon name="collapse" />
                                            Price: 30
                                        </p>
                                    </td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td k-table-group-td k-group-cell">&nbsp;</td>
                                    <td className="k-table-td">Chai</td>
                                    <td className="k-table-td">30</td>
                                    <td className="k-table-td">false</td>
                                    <td className="k-table-td">15</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    </>
);
