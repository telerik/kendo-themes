import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { DropdownList } from '../../dropdownlist';
import { Icon } from '../../icon';
import { Textbox } from '../../textbox';
import { Treeview, TreeviewGroup, TreeviewItem } from '../../treeview';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-animation-container {
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Start View</span>
            <span>Include Fields (list)</span>
            <span>Include Fields (tree)</span>
            <span>Filter Fields View</span>

            <section>
                <div className="k-animation-container k-animation-container-shown">
                    <div className="k-column-menu k-popup k-child-animation-container">
                        <div className="k-grid-columnmenu-popup">
                            <div>
                                <div className="k-columnmenu-item-wrapper">
                                    <div className="k-columnmenu-item">
                                        <Icon name="sort-asc-small" />Sort Ascending
                                    </div>
                                    <div className="k-columnmenu-item">
                                        <Icon name="sort-desc-small" />Sort Descending
                                    </div>
                                </div>
                                <div className="k-columnmenu-item-wrapper">
                                    <div className="k-widget k-expander">
                                        <div className="k-columnmenu-item">
                                            <Icon name="grid-layout" />Include Fields
                                            <span className="k-spacer"></span>
                                            <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                        </div>
                                    </div>
                                </div>
                                <div className="k-columnmenu-item-wrapper">
                                    <div className="k-widget k-expander">
                                        <div className="k-columnmenu-item">
                                            <Icon name="filter" />Filter Fields
                                            <span className="k-spacer"></span>
                                            <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container k-animation-container-shown">
                    <div className="k-column-menu k-popup k-child-animation-container">
                        <div className="k-grid-columnmenu-popup">
                            <div>
                                <div className="k-columnmenu-item-wrapper">
                                    <div className="k-columnmenu-item">
                                        <Icon name="sort-asc-small" />Sort Ascending
                                    </div>
                                    <div className="k-columnmenu-item">
                                        <Icon name="sort-desc-small" />Sort Descending
                                    </div>
                                </div>
                                <div className="k-columnmenu-item-wrapper">
                                    <div className="k-widget k-expander">
                                        <div className="k-columnmenu-item">
                                            <Icon name="grid-layout" />Include Fields
                                            <span className="k-spacer"></span>
                                            <Icon className="k-expander-indicator" name="arrow-chevron-up" />
                                        </div>
                                    </div>
                                    <div className="k-columnmenu-item-content k-columns-item" style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                                        <div className="k-column-list-wrapper">
                                            <div className="k-column-list">
                                                <label className="k-column-list-item k-checkbox-label">
                                                    <Checkbox />
                                                    ID
                                                </label>
                                                <label className="k-column-list-item k-checkbox-label">
                                                    <Checkbox />
                                                    Name
                                                </label>
                                                <label className="k-column-list-item k-checkbox-label">
                                                    <Checkbox />
                                                    Category
                                                </label>
                                                <label className="k-column-list-item k-checkbox-label">
                                                    <Checkbox />
                                                    Account
                                                </label>
                                                <label className="k-column-list-item k-checkbox-label">
                                                    <Checkbox />
                                                    Number
                                                </label>
                                                <label className="k-column-list-item k-checkbox-label">
                                                    <Checkbox />
                                                    Type
                                                </label>
                                                <label className="k-column-list-item k-checkbox-label">
                                                    <Checkbox />
                                                    Employer
                                                </label>
                                                <label className="k-column-list-item k-checkbox-label">
                                                    <Checkbox />
                                                    Employee
                                                </label>
                                                <label className="k-column-list-item k-checkbox-label">
                                                    <Checkbox />
                                                    Company
                                                </label>
                                                <label className="k-column-list-item k-checkbox-label">
                                                    <Checkbox />
                                                    Products
                                                </label>
                                                <label className="k-column-list-item k-checkbox-label">
                                                    <Checkbox />
                                                    Number
                                                </label>
                                                <label className="k-column-list-item k-checkbox-label">
                                                    <Checkbox />
                                                    Type
                                                </label>
                                            </div>
                                        </div>
                                        <ActionButtons alignment="stretched">
                                            <Button>Reset</Button>
                                            <Button themeColor="primary">Apply</Button>
                                        </ActionButtons>
                                    </div>
                                </div>
                                <div className="k-columnmenu-item-wrapper">
                                    <div className="k-widget k-expander">
                                        <div className="k-columnmenu-item">
                                            <Icon name="filter" />Filter Fields
                                            <span className="k-spacer"></span>
                                            <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container k-animation-container-shown">
                    <div className="k-column-menu k-popup k-child-animation-container">
                        <div className="k-grid-columnmenu-popup">
                            <div>
                                <div className="k-columnmenu-item-wrapper">
                                    <div className="k-columnmenu-item">
                                        <Icon name="sort-asc-small" />Sort Ascending
                                    </div>
                                    <div className="k-columnmenu-item">
                                        <Icon name="sort-desc-small" />Sort Descending
                                    </div>
                                </div>
                                <div className="k-columnmenu-item-wrapper">
                                    <div className="k-widget k-expander">
                                        <div className="k-columnmenu-item">
                                            <Icon name="grid-layout" />Include Fields
                                            <span className="k-spacer"></span>
                                            <Icon className="k-expander-indicator" name="arrow-chevron-up" />
                                        </div>
                                    </div>
                                    <div className="k-columnmenu-item-content" style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                                        <div className="k-column-list-wrapper">
                                            <div className="k-column-list">
                                                <Treeview>
                                                    <TreeviewItem showCheckbox hasChildren text="Account" />
                                                    <TreeviewItem showCheckbox hasChildren text="Customer" />
                                                    <TreeviewItem showCheckbox expanded text="Date">
                                                        <TreeviewGroup>
                                                            <TreeviewItem showCheckbox hasChildren text="Date.Calendar" />
                                                            <TreeviewItem showCheckbox expanded text="Date.Calendar Quarter of Year">
                                                                <TreeviewGroup>
                                                                    <TreeviewItem showCheckbox hasChildren text="(All)" />
                                                                    <TreeviewItem showCheckbox hasChildren text="Calendar Quarter of Year" />
                                                                </TreeviewGroup>
                                                            </TreeviewItem>
                                                        </TreeviewGroup>
                                                    </TreeviewItem>
                                                    <TreeviewItem showCheckbox hasChildren text="Delivery date" />
                                                    <TreeviewItem showCheckbox hasChildren text="Department" />
                                                    <TreeviewItem showCheckbox hasChildren text="Country" />
                                                    <TreeviewItem showCheckbox hasChildren text="Region" />
                                                </Treeview>
                                            </div>
                                        </div>
                                        <ActionButtons alignment="stretched">
                                            <Button>Reset</Button>
                                            <Button themeColor="primary">Apply</Button>
                                        </ActionButtons>
                                    </div>
                                </div>
                                <div className="k-columnmenu-item-wrapper">
                                    <div className="k-widget k-expander">
                                        <div className="k-columnmenu-item">
                                            <Icon name="filter" />Filter Fields
                                            <span className="k-spacer"></span>
                                            <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container k-animation-container-shown">
                    <div className="k-column-menu k-popup k-child-animation-container">
                        <div className="k-grid-columnmenu-popup">
                            <div>
                                <div className="k-columnmenu-item-wrapper">
                                    <div className="k-columnmenu-item">
                                        <Icon name="sort-asc-small" />Sort Ascending
                                    </div>
                                    <div className="k-columnmenu-item">
                                        <Icon name="sort-desc-small" />Sort Descending
                                    </div>
                                </div>
                                <div className="k-columnmenu-item-wrapper">
                                    <div className="k-widget k-expander">
                                        <div className="k-columnmenu-item">
                                            <Icon name="grid-layout" />Include Fields
                                            <span className="k-spacer"></span>
                                            <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                                        </div>
                                    </div>
                                </div>
                                <div className="k-columnmenu-item-wrapper">
                                    <div className="k-widget k-expander">
                                        <div className="k-columnmenu-item">
                                            <Icon name="filter" />Filter Fields
                                            <span className="k-spacer"></span>
                                            <Icon className="k-expander-indicator" name="arrow-chevron-up" />
                                        </div>
                                    </div>
                                    <div className="k-columnmenu-item-content">
                                        <div className="k-animation-container">
                                            <div className="k-child-animation-container">
                                                <div className="kendo-grid-filter-menu-container">
                                                    <form className="k-filter-menu k-group k-reset">
                                                        <div className="k-filter-menu-container">
                                                            <DropdownList value="Contains" />
                                                            <Textbox />
                                                            <DropdownList value="And" className="k-filter-and" />
                                                            <DropdownList value="Contains" />
                                                            <Textbox />
                                                            <ActionButtons alignment="stretched">
                                                                <Button>Clear</Button>
                                                                <Button themeColor="primary">Filter</Button>
                                                            </ActionButtons>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
