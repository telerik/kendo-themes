import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Icon } from '../../icon';
import { Popup } from '../../popup';
import { ColumnMenuNormal, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander, FilterMenuNormal, FilterMenuMultiCheck } from "../../column-menu";


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

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Basic</span>
            <span>Columns expanded</span>
            <span>Columns grouped expanded</span>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Sort ascending" icon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" icon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Columns" itemIcon="columns" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter" itemIcon="filter" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Group column" icon="group" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Set column position" itemIcon="set-column-position" />
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
                            <ColumnMenuExpander itemText="Columns" itemIcon="columns" expanded={true} itemContent={
                                <>
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
                                        <Button themeColor="primary">Apply</Button>
                                        <Button>Reset</Button>
                                    </ActionButtons>
                                </>
                            }/>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter" itemIcon="filter" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Group column" icon="group" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Set column position" itemIcon="set-column-position" />
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
                            <ColumnMenuExpander itemText="Columns" itemIcon="columns" expanded={true} itemContent={
                                <>
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
                                        <Button themeColor="primary">Apply</Button>
                                        <Button>Reset</Button>
                                    </ActionButtons>
                                </>
                            }/>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter" itemIcon="filter" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Group column" icon="group" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Set column position" itemIcon="set-column-position" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <span>Column position expanded</span>
            <span>Filter expanded</span>
            <span>Filter multi expanded</span>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Sort ascending" icon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" icon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Columns" itemIcon="columns" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter" itemIcon="filter" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Group column" icon="group" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Set column position" itemIcon="set-column-position" expanded={true} itemContent={
                                <>
                                    <div className="k-column-list">
                                        <div className="k-column-list-item">
                                            <Icon icon="lock" />Lock column
                                        </div>
                                        <div className="k-column-list-item k-disabled">
                                            <Icon icon="unlock" />Unlock column
                                        </div>
                                        <div className="k-column-list-item">
                                            <Icon icon="stick" />Stick column
                                        </div>
                                        <div className="k-column-list-item k-disabled">
                                            <Icon icon="unstick" />Unstick column
                                        </div>
                                    </div>
                                </>
                            }/>
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
                            <ColumnMenuExpander itemText="Columns" itemIcon="columns" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter" itemIcon="filter" expanded={true} itemContent={
                                <FilterMenuNormal />
                            }/>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Group column" icon="group" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Set column position" itemIcon="set-column-position" />
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
                            <ColumnMenuExpander itemText="Columns" itemIcon="columns" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter" itemIcon="filter" expanded={true} itemContent={
                                <FilterMenuMultiCheck />
                            }/>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Group column" icon="group" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Set column position" itemIcon="set-column-position" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

        </div>
    </>
);