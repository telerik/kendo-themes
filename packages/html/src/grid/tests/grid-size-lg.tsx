import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Chip, ChipAction, ChipList } from '../../chip';
import { DropdownList } from '../../dropdownlist';
import { Icon } from '../../icon';
import { NumericTextbox } from '../../numerictextbox';
import { Pager } from '../../pager';
import { Textbox } from '../../textbox';
import { Toolbar } from '../../toolbar';


const styles = `
    .k-grouping-header .k-grouping-dropclue {
        left: 0;
    }
    .k-drag-clue {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="col-2">Grid</span>

            <section className="col-2">
                <div className="k-grid k-grid-lg k-grid-no-scrollbar">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-lg k-grid-header-table">
                                <colgroup>
                                    <col style={{ width: "100px" }} />
                                    <col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">100px</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">no width</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-table k-table-lg k-grid-table">
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
                    <Pager className="k-grid-pager" size="large" />
                </div>
            </section>

            <span className="col-2">Filtering</span>
            <section className="col-2">
                <div className="k-grid k-grid-lg k-grid-no-scrollbar" style={{ height: "190px" }}>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-lg k-grid-header-table">
                                <colgroup>
                                    <col className="k-hierarchy-col" /><col /><col /><col /><col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-header k-hierarchy-cell">
                                        </th>
                                        <th className="k-table-th k-header k-filterable">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Default</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-hover">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Hover</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-focus">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Focus</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-active">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Active</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu k-active"><Icon icon="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-sorted">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Sorted</span>
                                                    <span className="k-sort-icon"><Icon icon="sort-asc-small" /></span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a>
                                            </span>
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
                                                    <NumericTextbox size="large" />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList className="k-dropdown-operator" arrowIconName="filter" size="large" />
                                                        {' '}
                                                        <Button size="large" icon="filter-clear" disabled></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="k-table-th">
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <Textbox size="large" showClearButton={false} value="p" />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList size="large" className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button size="large" icon="filter-clear"></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="k-table-th">
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <Textbox size="large" showClearButton={false} value="p" />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList size="large" className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button size="large" icon="filter-clear"></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="k-table-th">
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <Textbox size="large" showClearButton={false} value="p" />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList size="large" className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button size="large" icon="filter-clear"></Button>
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
                        <table className="k-table k-table-lg k-grid-table">
                            <colgroup>
                                <col className="k-hierarchy-col" /><col /><col /><col /><col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-master-row k-table-row k-expanded">
                                    <td className="k-hierarchy-cell k-table-td">
                                        <Icon icon="caret-alt-down" />
                                    </td>
                                    <td className="k-table-td">1</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                    <td className="k-table-td">Text</td>
                                </tr>
                                <tr className="k-detail-row k-table-row">
                                    <td className="k-hierarchy-cell k-table-td"></td>
                                    <td className="k-detail-cell k-table-td" colSpan={5}>
                                        {/* hierarchy child content */}
                                        <div style={{ background: "#ccc", padding: "10px" }}>
                                            Nested content
                                        </div>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-alt-row k-alt k-master-row">
                                    <td className="k-hierarchy-cell k-table-td">
                                        <Icon icon="caret-alt-right" />
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
                <div className="k-grid k-grid-lg k-grid-no-scrollbar">
                    <Toolbar size="large" className="k-grid-toolbar">
                        <Button size="large" icon="plus">Add new record</Button>
                    </Toolbar>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-lg k-grid-header-table">
                                <colgroup>
                                    <col /><col /><col /><col style={{ width: "300px" }} />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th scope="col" className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Name</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th scope="col" className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Price</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th scope="col" className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Available</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th scope="col" className="k-table-th k-header">&nbsp;</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-table k-table-lg k-grid-table" style={{ height: 'auto' }}>
                            <colgroup>
                                <col /><col /><col /><col style={{ width: "300px" }} />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-grid-edit-row">
                                    <td className="k-table-td">
                                        <Textbox size="large" value="Towel" required />
                                    </td>
                                    <td className="k-table-td">
                                        <NumericTextbox size="large" invalid />
                                        <div className="k-tooltip k-validator-tooltip k-tooltip-error k-invalid-msg"><Icon className="k-tooltip-icon" icon="exclamation-circle" /><span className="k-tooltip-content">Price</span><div className="k-callout k-callout-n"></div></div>
                                    </td>
                                    <td className="k-table-td"><Checkbox size="large" id="e77452cd-b3b5-4dc9-8210-17007584b695" /><label className="k-checkbox-label" htmlFor="e77452cd-b3b5-4dc9-8210-17007584b695"></label></td>
                                    <td className="k-table-td k-command-cell">
                                        <Button size="large" icon="check" themeColor="primary">Update</Button>
                                        <Button size="large" icon="cancel">Cancel</Button>
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
                                        <Button size="large" icon="pencil">Edit</Button>
                                        <Button size="large" icon="x">Delete</Button>
                                    </td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">Chang</td>
                                    <td className="k-table-td">19</td>
                                    <td className="k-table-td">false</td>
                                    <td className="k-table-td k-command-cell">
                                        <Button size="large" icon="pencil">Edit</Button>
                                        <Button size="large" icon="x">Delete</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>

            <span>Grouping</span>
            <section className="col-2">
                <div className="k-grid k-grid-lg k-grid-no-scrollbar">
                    <div className="k-grouping-header">
                        <div className="k-grouping-dropclue"></div>
                        <ChipList size="large">
                            <Chip size="large" icon="sort-asc-small" actions={ <ChipAction type="remove"/> }>Price</Chip>
                            <Chip size="large" icon="sort-desc-small" actions={ <ChipAction type="remove"/> }>Name</Chip>
                        </ChipList>
                        <div className="k-grouping-drop-container"></div>
                    </div>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-lg k-grid-header-table">
                                <colgroup>
                                    <col className="k-group-col" /><col /><col /><col /><col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-group-cell k-header" scope="col"></th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Name</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Price</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Available</span>
                                                </span>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Units</span>
                                                </span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-content">
                        <table className="k-table k-table-lg k-grid-table" style={{ height: 'auto' }}>
                            <colgroup>
                                <col className="k-group-col" /><col /><col /><col /><col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-table-group-row k-grouping-row">
                                    <td className="k-table-td" colSpan={5}>
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-right" />
                                            Price: 19
                                        </p>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-group-row k-grouping-row">
                                    <td className="k-table-td" colSpan={5}>
                                        <p className="k-reset">
                                            <Icon icon="caret-alt-down" />
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
