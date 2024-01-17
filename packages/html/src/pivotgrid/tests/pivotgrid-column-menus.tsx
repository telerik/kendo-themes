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
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Start View</span>
            <span>Include Fields (list)</span>
            <span>Include Fields (tree)</span>
            <span>Filter Fields View</span>

            <section>
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
                            <ColumnMenuExpander itemText="Filter fields" itemIcon="filter" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Sort ascending" icon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" icon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Include fields" itemIcon="grid-layout" expanded={true} itemContent={
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
                                        <Button themeColor="primary">Apply</Button>
                                        <Button>Reset</Button>
                                    </ActionButtons>
                                </>
                            }/>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter fields" itemIcon="filter" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Sort ascending" icon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" icon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Include fields" itemIcon="grid-layout" expanded={true} itemContent={
                                <>
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
                                        <Button themeColor="primary">Apply</Button>
                                        <Button>Reset</Button>
                                    </ActionButtons>
                                </>
                            }/>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter fields" itemIcon="filter" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <section>
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
                            <ColumnMenuExpander itemText="Filter fields" itemIcon="filter" expanded={true} itemContent={
                                <FilterMenuNormal />
                            }/>
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

        </div>
    </>
);
