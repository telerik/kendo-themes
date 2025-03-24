import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Treeview, TreeviewGroup, TreeviewItem } from '../../treeview';
import { Popup } from '../../popup';
import { ColumnMenuNormal, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander, FilterMenuNormal } from "../../column-menu";

const styles = `
    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <section>
                <span>Start View</span>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Include fields" itemStartIcon="grid-layout" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter fields" itemStartIcon="filter" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <section>
                <span>Columns Field Menu View</span>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Include fields" itemStartIcon="grid-layout" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Move to Columns" startIcon="columns" className="k-disabled" />
                            <ColumnMenuItem text="Move to Rows" startIcon="rows" />
                            <ColumnMenuItem text="Move previous" startIcon="arrow-left" className="k-disabled" />
                            <ColumnMenuItem text="Move next" startIcon="arrow-right" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <section>
                <span>Rows Field Menu View</span>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Include fields" itemStartIcon="grid-layout" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Move to Columns" startIcon="columns" />
                            <ColumnMenuItem text="Move to Rows" startIcon="rows" className="k-disabled" />
                            <ColumnMenuItem text="Move previous" startIcon="arrow-left" className="k-disabled" />
                            <ColumnMenuItem text="Move next" startIcon="arrow-right" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <section>
                <span>Include Fields (list)</span>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Include fields" itemStartIcon="grid-layout" expanded={true} itemContent={
                                <>
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
                                        <Button icon="check" themeColor="primary">Apply</Button>
                                        <Button icon="arrow-rotate-ccw">Reset</Button>
                                    </ActionButtons>
                                </>
                            }/>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter fields" itemStartIcon="filter" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <section>
                <span>Include Fields (tree)</span>

                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Include fields" itemStartIcon="grid-layout" expanded={true} itemContent={
                                <>
                                    <div className="k-column-list-wrapper">
                                        <div className="k-column-list">
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
                                    <ActionButtons alignment="stretched">
                                        <Button icon="check" themeColor="primary">Apply</Button>
                                        <Button icon="arrow-rotate-ccw">Reset</Button>
                                    </ActionButtons>
                                </>
                            }/>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter fields" itemStartIcon="filter" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <section>
                <span>Filter Fields View</span>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Include fields" itemStartIcon="grid-layout" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter fields" itemStartIcon="filter" expanded={true} itemContent={
                                <FilterMenuNormal />
                            }/>
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

        </div>
    </>
);
