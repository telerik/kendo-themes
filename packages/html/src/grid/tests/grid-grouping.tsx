import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Icon } from '../../icon';
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

            <span>angular no grouping</span>
            <span>jquery no grouping</span>

            <div className="k-widget k-grid k-grid-no-scrollbar">
                <Toolbar className="k-grid-toolbar">
                    <Button>Button</Button>
                    <ButtonGroup>
                        <Button icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button icon="underline"></Button>
                    </ButtonGroup>
                </Toolbar>
                <div className="k-grouping-header k-grouping-header-flex">
                    <div className="k-grouping-dropclue"></div>
                    <div className="k-indicator-container">Drag a column header and drop it here to group by that column</div>
                </div>
                <div className="k-grid-aria-root">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col /><col /><col /><col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-header">Name</th>
                                        <th className="k-header">Price</th>
                                        <th className="k-header">Available</th>
                                        <th className="k-header">Units</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content k-virtual-content">
                            <div>
                                <table className="k-grid-table">
                                    <colgroup>
                                        <col /><col /><col /><col />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td>Chai</td>
                                            <td>30</td>
                                            <td>false</td>
                                            <td>15</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="k-widget k-grid k-grid-no-scrollbar">
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
                    Drag a column header and drop it here to group by that column
                </div>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table>
                            <colgroup>
                                <col /><col /><col /><col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th className="k-header"><a className="k-link">Name</a></th>
                                    <th className="k-header"><a className="k-link">Price</a></th>
                                    <th className="k-header"><a className="k-link">Available</a></th>
                                    <th className="k-header"><a className="k-link">Units</a></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-content">
                    <table>
                        <colgroup>
                            <col /><col /><col /><col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td>Chai</td>
                                <td>30</td>
                                <td>false</td>
                                <td>15</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <span>angular with grouping</span>
            <span>jquery with grouping</span>

            <div className="k-widget k-grid k-grid-no-scrollbar">
                <Toolbar className="k-grid-toolbar">
                    <Button>Button</Button>
                    <span className="k-button-group">
                        <Button icon="bold"></Button>
                        <Button icon="italic"></Button>
                        <Button icon="underline"></Button>
                    </span>
                </Toolbar>
                <div className="k-grouping-header k-grouping-header-flex">
                    <div className="k-grouping-dropclue"></div>
                    <div className="k-indicator-container">
                        <div className="k-group-indicator">
                            <a className="k-link"><Icon name="sort-asc-sm" />Price</a>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-indicator-container">
                        <div className="k-group-indicator">
                            <a className="k-link"><Icon name="sort-desc-sm" />Name</a>
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-indicator-container">&nbsp;</div>
                </div>
                <div className="k-grid-aria-root">
                    <div className="k-grid-header">
                        <div className="k-grid-header-wrap">
                            <table>
                                <colgroup>
                                    <col className="k-group-col" /><col /><col /><col /><col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="k-group-cell k-header"></th>
                                        <th className="k-header">Name</th>
                                        <th className="k-header">Price</th>
                                        <th className="k-header">Discontinued</th>
                                        <th className="k-header">Units</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="k-grid-container">
                        <div className="k-grid-content k-virtual-content">
                            <div>
                                <table className="k-grid-table">
                                    <colgroup>
                                        <col className="k-group-col" /><col /><col /><col /><col />
                                    </colgroup>
                                    <tbody>
                                        <tr className="k-grouping-row">
                                            <td colSpan={5}>
                                                <p className="k-reset">
                                                    <Icon name="expand" />
                                                    Price: 19
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="k-grouping-row">
                                            <td colSpan={5}>
                                                <p className="k-reset">
                                                    <Icon name="collapse" />
                                                    Price: 30
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="k-group-cell"></td>
                                            <td>Chai</td>
                                            <td>30</td>
                                            <td>false</td>
                                            <td>15</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="k-grid k-grid-no-scrollbar k-widget k-grid-display-block">
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
                    <div className="k-group-indicator">
                        <a className="k-link"><Icon name="sort-asc-sm" />Price</a>
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                    <div className="k-group-indicator">
                        <a className="k-link"><Icon name="sort-desc-sm" />Name</a>
                        <Button fillMode="flat" icon="close"></Button>
                    </div>
                </div>
                <div className="k-grid-header">
                    <div className="k-grid-header-wrap">
                        <table>
                            <colgroup>
                                <col className="k-group-col" /><col /><col /><col /><col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th className="k-group-cell k-header" scope="col"></th>
                                    <th className="k-header"><a className="k-link">Name</a></th>
                                    <th className="k-header"><a className="k-link">Price</a></th>
                                    <th className="k-header"><a className="k-link">Available</a></th>
                                    <th className="k-header"><a className="k-link">Units</a></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="k-grid-content">
                    <table style={{ height: 'auto' }}>
                        <colgroup>
                            <col className="k-group-col" /><col /><col /><col /><col />
                        </colgroup>
                        <tbody>
                            <tr className="k-grouping-row">
                                <td colSpan={5}>
                                    <p className="k-reset">
                                        <Icon name="expand" />
                                        Price: 19
                                    </p>
                                </td>
                            </tr>
                            <tr className="k-grouping-row">
                                <td colSpan={5}>
                                    <p className="k-reset">
                                        <Icon name="collapse" />
                                        Price: 30
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className="k-group-cell">&nbsp;</td>
                                <td>Chai</td>
                                <td>30</td>
                                <td>false</td>
                                <td>15</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <span>angular grid drag clue</span>
            <span>jquery grid drag clue</span>

            <section className="section">
                <div className="k-header k-drag-clue"><Icon className="k-drag-status" name="cancel" />Drag clue</div>
            </section>

            <section className="section">
                <div className="k-header k-drag-clue k-group-clue"><Icon className="k-drag-status" name="plus" />Drag clue</div>
            </section>

        </div>
    </>
);
