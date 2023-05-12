import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Icon } from '../../icon';
import { Toolbar } from '../../toolbar';
import { Chip, ChipList, ChipAction } from '../../chip';


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

            <span>angular no grouping</span>
            <span>jquery no grouping</span>

            <div className="k-grid k-grid-md k-grid-no-scrollbar">
                <Toolbar className="k-grid-toolbar">
                    <Button>Button</Button>
                    <ButtonGroup>
                        <Button icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button icon="underline"></Button>
                    </ButtonGroup>
                </Toolbar>
                <div className="k-grouping-header">
                    <div className="k-grouping-dropclue"></div>
                    <div className="k-grouping-drop-container">
                        Drag a column header and drop it here to group by that column
                    </div>
                </div>
                <div className="k-grid-aria-root">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col /><col /><col /><col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
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
                    <div className="k-grid-container">
                        <div className="k-grid-content k-virtual-content">
                            <div>
                                <table className="k-table k-table-md k-grid-table">
                                    <colgroup>
                                        <col /><col /><col /><col />
                                    </colgroup>
                                    <tbody className="k-table-tbody">
                                        <tr className="k-table-row">
                                            <td className="k-table-td">Chai</td>
                                            <td className="k-table-td">30</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">15</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="k-grid k-grid-md k-grid-no-scrollbar">
                <Toolbar className="k-grid-toolbar">
                    <Button>Button</Button>
                    <span className="k-button-group">
                        <Button icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button icon="underline"></Button>
                    </span>
                </Toolbar>
                <div className="k-grouping-header">
                    <div className="k-grouping-dropclue"></div>
                    <div className="k-grouping-drop-container">
                        Drag a column header and drop it here to group by that column
                    </div>
                </div>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table className="k-table k-table-md k-grid-header-table">
                            <colgroup>
                                <col /><col /><col /><col />
                            </colgroup>
                            <thead className="k-table-thead">
                                <tr className="k-table-row">
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
                    <table className="k-table k-table-md k-grid-table">
                        <colgroup>
                            <col /><col /><col /><col />
                        </colgroup>
                        <tbody className="k-table-tbody">
                            <tr className="k-table-row">
                                <td className="k-table-td">Chai</td>
                                <td className="k-table-td">30</td>
                                <td className="k-table-td">false</td>
                                <td className="k-table-td">15</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <span>angular with grouping</span>
            <span>jquery with grouping</span>

            <div className="k-grid k-grid-md k-grid-no-scrollbar">
                <Toolbar className="k-grid-toolbar">
                    <Button>Button</Button>
                    <ButtonGroup>
                        <Button icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button icon="underline"></Button>
                    </ButtonGroup>
                </Toolbar>
                <div className="k-grouping-header">
                    <div className="k-grouping-dropclue"></div>
                    <ChipList>
                        <Chip icon="sort-asc-small" actions={ <ChipAction type="remove"/> }>Price</Chip>
                        <Chip icon="sort-desc-small" actions={ <ChipAction type="remove"/> }>Name</Chip>
                    </ChipList>
                    <div className="k-grouping-drop-container"></div>
                </div>
                <div className="k-grid-aria-root">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table className="k-table k-table-md k-grid-header-table">
                                <colgroup>
                                    <col className="k-group-col" /><col /><col /><col /><col />
                                </colgroup>
                                <thead className="k-table-thead">
                                    <tr className="k-table-row">
                                        <th className="k-table-th k-group-cell k-header"></th>
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
                                                    <span className="k-column-title">Discontinued</span>
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
                    <div className="k-grid-container">
                        <div className="k-grid-content k-virtual-content">
                            <div>
                                <table className="k-table k-table-md k-grid-table">
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
                                            <td className="k-table-td k-table-group-td k-group-cell"></td>
                                            <td className="k-table-td">Chai</td>
                                            <td className="k-table-td">30</td>
                                            <td className="k-table-td">false</td>
                                            <td className="k-table-td">15</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="k-grid k-grid-md k-grid-no-scrollbar k-grid-display-block">
                <Toolbar className="k-grid-toolbar">
                    <Button>Button</Button>
                    <ButtonGroup>
                        <Button icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button icon="underline"></Button>
                    </ButtonGroup>
                </Toolbar>
                <div className="k-grouping-header">
                    <div className="k-grouping-dropclue"></div>
                    <ChipList>
                        <Chip icon="sort-asc-small" actions={ <ChipAction type="remove"/> }>Price</Chip>
                        <Chip icon="sort-desc-small" actions={ <ChipAction type="remove"/> }>Name</Chip>
                    </ChipList>
                    <div className="k-grouping-drop-container"></div>
                </div>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table className="k-table k-table-md k-grid-header-table">
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
                    <table className="k-table k-table-md k-grid-table" style={{ height: 'auto' }}>
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

            <span>angular grid drag clue</span>
            <span>jquery grid drag clue</span>

            <section className="section">
                <div className="k-header k-drag-clue"><Icon className="k-drag-status" icon="cancel" />Drag clue</div>
            </section>

            <section className="section">
                <div className="k-header k-drag-clue k-group-clue"><Icon className="k-drag-status" icon="plus" />Drag clue</div>
            </section>

        </div>
    </>
);
