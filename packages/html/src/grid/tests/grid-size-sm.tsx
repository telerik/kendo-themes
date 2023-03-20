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
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Default</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-hover">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Hover</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-focus">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Focus</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-active">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Active</span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu k-active"><Icon name="filter" /></a>
                                            </span>
                                        </th>
                                        <th className="k-table-th k-header k-filterable k-sorted">
                                            <span className="k-cell-inner">
                                                <span className="k-link">
                                                    <span className="k-column-title">Sorted</span>
                                                    <span className="k-sort-icon"><Icon name="sort-asc-small" /></span>
                                                </span>
                                                <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon name="filter" /></a>
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
                                                    <NumericTextbox />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button icon="filter-clear" disabled></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="k-table-th">
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <Textbox showClearButton={false} value="p" />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button icon="filter-clear"></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="k-table-th">
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <Textbox showClearButton={false} value="p" />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button icon="filter-clear"></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="k-table-th">
                                            <div className="k-filtercell">
                                                <div className="k-filtercell-wrapper">
                                                    <Textbox showClearButton={false} value="p" />
                                                    <div className="k-filtercell-operator">
                                                        <DropdownList className="k-dropdown-operator" arrowIconName="filter" />
                                                        {' '}
                                                        <Button icon="filter-clear"></Button>
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
                                <tr className="k-master-row k-table-row k-expanded">
                                    <td className="k-hierarchy-cell k-table-td">
                                        <Icon name="caret-alt-down" />
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
                                        <Icon name="caret-alt-right" />
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
                    <Toolbar className="k-grid-toolbar">
                        <Button icon="add">Add new record</Button>
                    </Toolbar>
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-sm k-grid-header-table">
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
                        <table className="k-table k-table-sm k-grid-table" style={{ height: 'auto' }}>
                            <colgroup>
                                <col /><col /><col /><col style={{ width: "300px" }} />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-grid-edit-row">
                                    <td className="k-table-td">
                                        <Textbox value="Towel" required />
                                    </td>
                                    <td className="k-table-td">
                                        <NumericTextbox invalid />
                                        <div className="k-tooltip k-validator-tooltip k-tooltip-error k-invalid-msg"><Icon className="k-tooltip-icon" name="warning" /><span className="k-tooltip-content">Price</span><div className="k-callout k-callout-n"></div></div>
                                    </td>
                                    <td className="k-table-td"><Checkbox id="e77452cd-b3b5-4dc9-8210-17007584b695" /><label className="k-checkbox-label" htmlFor="e77452cd-b3b5-4dc9-8210-17007584b695"></label></td>
                                    <td className="k-table-td k-command-cell">
                                        <Button icon="check" themeColor="primary">Update</Button>
                                        <Button icon="cancel">Cancel</Button>
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
                                        <Button icon="edit">Edit</Button>
                                        <Button icon="close">Delete</Button>
                                    </td>
                                </tr>
                                <tr className="k-table-row">
                                    <td className="k-table-td">Chang</td>
                                    <td className="k-table-td">19</td>
                                    <td className="k-table-td">false</td>
                                    <td className="k-table-td k-command-cell">
                                        <Button icon="edit">Edit</Button>
                                        <Button icon="close">Delete</Button>
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
                        <table className="k-table k-table-sm k-grid-table" style={{ height: 'auto' }}>
                            <colgroup>
                                <col className="k-group-col" /><col /><col /><col /><col />
                            </colgroup>
                            <tbody className="k-table-tbody">
                                <tr className="k-table-row k-table-group-row k-grouping-row">
                                    <td className="k-table-td" colSpan={5}>
                                        <p className="k-reset">
                                            <Icon name="caret-alt-right" />
                                            Price: 19
                                        </p>
                                    </td>
                                </tr>
                                <tr className="k-table-row k-table-group-row k-grouping-row">
                                    <td className="k-table-td" colSpan={5}>
                                        <p className="k-reset">
                                            <Icon name="caret-alt-down" />
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
