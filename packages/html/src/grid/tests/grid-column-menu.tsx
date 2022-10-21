import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { DropdownList } from '../../dropdownlist';
import { Icon } from '../../icon';
import { Searchbox } from '../../searchbox';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-animation-container,
    .k-popup {
        position: relative;
        overflow: visible;
    }

    .k-grid-columnmenu-popup {
        width: 100%;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Basic</span>
            <span>Columns expanded</span>
            <span>Columns grouped expanded</span>

            <section>
                <div className="k-animation-container">
                    <div className="k-column-menu k-popup k-grid-columnmenu-popup">
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="sort-asc-small" />Sort ascending
                            </div>
                            <div className="k-columnmenu-item">
                                <Icon name="sort-desc-small" />Sort descending
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="columns" />Columns
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="filter" />Filter
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="group" />Group column
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="set-column-position" />Set column position
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-column-menu k-popup k-grid-columnmenu-popup">
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="sort-asc-small" />Sort ascending
                            </div>
                            <div className="k-columnmenu-item">
                                <Icon name="sort-desc-small" />Sort descending
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="columns" />Columns
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-up" />
                                </div>
                                <div className="k-columnmenu-item-content k-columns-item" style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                                    <div className="k-column-list-wrapper">
                                        <div className="k-column-list">
                                            <label className="k-column-list-item">
                                                <Checkbox />
                                                <span className="k-checkbox-label">Column 1</span>
                                            </label>
                                            <label className="k-column-list-item">
                                                <Checkbox />
                                                <span className="k-checkbox-label">Column 2</span>
                                            </label>
                                            <label className="k-column-list-item">
                                                <Checkbox />
                                                <span className="k-checkbox-label">Column 3</span>
                                            </label>
                                            <label className="k-column-list-item">
                                                <Checkbox />
                                                <span className="k-checkbox-label">Column 4</span>
                                            </label>
                                        </div>
                                    </div>
                                    <ActionButtons alignment="stretched">
                                        <Button>Reset</Button>
                                        <Button themeColor="primary">Apply</Button>
                                    </ActionButtons>
                                </div>
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="filter" />Filter
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                </div>
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="group" />Group column
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="set-column-position" />Set column position
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-column-menu k-popup k-grid-columnmenu-popup">
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="sort-asc-small" />Sort ascending
                            </div>
                            <div className="k-columnmenu-item">
                                <Icon name="sort-desc-small" />Sort descending
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="columns" />Columns
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-up" />
                                </div>
                                <div className="k-columnmenu-item-content k-columns-item" style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                                    <div className="k-column-list-wrapper">
                                        <div className="k-column-list">
                                            <span className="k-column-menu-group-header">
                                                <span className="k-column-menu-group-header-text">Group 1</span>
                                            </span>
                                            <label className="k-column-list-item">
                                                <Checkbox />
                                                <span className="k-checkbox-label">Column 1</span>
                                            </label>
                                            <label className="k-column-list-item">
                                                <Checkbox />
                                                <span className="k-checkbox-label">Column 2</span>
                                            </label>
                                            <span className="k-column-menu-group-header">
                                                <span className="k-column-menu-group-header-text">Group 2</span>
                                            </span>
                                            <label className="k-column-list-item">
                                                <Checkbox />
                                                <span className="k-checkbox-label">Column 3</span>
                                            </label>
                                            <label className="k-column-list-item">
                                                <Checkbox />
                                                <span className="k-checkbox-label">Column 4</span>
                                            </label>
                                        </div>
                                    </div>
                                    <ActionButtons alignment="stretched">
                                        <Button>Reset</Button>
                                        <Button themeColor="primary">Apply</Button>
                                    </ActionButtons>
                                </div>
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="filter" />Filter
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                </div>
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="group" />Group column
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="set-column-position" />Set column position
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <span>Column position expanded</span>
            <span>Filter expanded</span>
            <span>Filter multi expanded</span>

            <section>
                <div className="k-animation-container">
                    <div className="k-column-menu k-popup k-grid-columnmenu-popup">
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="sort-asc-small" />Sort ascending
                            </div>
                            <div className="k-columnmenu-item">
                                <Icon name="sort-desc-small" />Sort descending
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="columns" />Columns
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                </div>
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="filter" />Filter
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                </div>
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="group" />Group column
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="set-column-position" />Set column position
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-up" />
                                </div>
                                <div className="k-columnmenu-item-content k-columns-item">
                                    <div className="k-column-list">
                                        <div className="k-column-list-item">
                                            <Icon name="lock" />Lock column
                                        </div>
                                        <div className="k-column-list-item">
                                            <Icon name="lock" />Unlock column
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-column-menu k-popup k-grid-columnmenu-popup">
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="sort-asc-small" />Sort ascending
                            </div>
                            <div className="k-columnmenu-item">
                                <Icon name="sort-desc-small" />Sort descending
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="columns" />Columns
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                </div>
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="filter" />Filter
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-up" />
                                </div>
                                <div className="k-columnmenu-item-content k-columns-item">
                                    <form className="k-filter-menu k-group k-reset">
                                        <div className="k-filter-menu-container">
                                            <DropdownList value="Contains" />
                                            <Textbox placeholder="Filter..." />
                                            <DropdownList value="And" className="k-filter-and" />
                                            <DropdownList value="Contains" />
                                            <Textbox placeholder="Filter..." />
                                            <ActionButtons alignment="stretched">
                                                <Button>Clear</Button>
                                                <Button themeColor="primary">Filter</Button>
                                            </ActionButtons>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="group" />Group column
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="set-column-position" />Set column position
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-column-menu k-popup k-grid-columnmenu-popup">
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="sort-asc-small" />Sort ascending
                            </div>
                            <div className="k-columnmenu-item">
                                <Icon name="sort-desc-small" />Sort descending
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="columns" />Columns
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                </div>
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="filter" />Filter
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-up" />
                                </div>
                                <div className="k-columnmenu-item-content k-columns-item">
                                    <form className="k-filter-menu k-group k-reset">
                                        <div className="k-filter-menu-container">
                                            <Searchbox placeholder="Search..." />
                                            <ul className="k-reset k-multicheck-wrap">
                                                <li className="k-item k-check-all-wrap"><label className="k-label k-checkbox-label"><Checkbox /><span>Select All</span></label></li>
                                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>Chai</span></label></li>
                                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>Chang</span></label></li>
                                                <li className="k-item"><label className="k-label k-checkbox-label"><Checkbox /><span>Aniseed Syrup Aniseed Syrup Aniseed Syrup Aniseed Syrup </span></label></li>
                                            </ul>
                                            <div className="k-filter-selected-items">0 selected items</div>
                                            <ActionButtons alignment="stretched">
                                                <Button>Clear</Button>
                                                <Button themeColor="primary">Filter</Button>
                                            </ActionButtons>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-columnmenu-item">
                                <Icon name="group" />Group column
                            </div>
                        </div>
                        <div className="k-columnmenu-item-wrapper">
                            <div className="k-widget k-expander">
                                <div className="k-columnmenu-item">
                                    <Icon name="set-column-position" />Set column position
                                    <span className="k-spacer"></span>
                                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
