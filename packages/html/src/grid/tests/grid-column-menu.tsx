import { ActionButtons } from '../../action-buttons/action-buttons.spec';
import { Button } from '../../button/button.spec';
import { Icon } from '../../icon/icon.spec';
import { Popup } from '../../popup/popup.spec';
import { ColumnMenuItem } from '../../column-menu/column-menu-item.spec';
import { ColumnMenuItemWrapper } from '../../column-menu/column-menu-item-wrapper';
import { ColumnMenuExpander } from '../../column-menu/column-menu-expander.spec';
import { FilterMenuMultiCheck } from '../../column-menu/templates/filter-menu-multi-check';
import { FilterMenuNormal } from '../../column-menu/templates/filter-menu-normal';
import { ColumnList } from '../../column-menu/column-list.spec';
import { ColumnListItem } from '../../column-menu/column-list-item';
import { ColumnMenuNormal } from '../../column-menu/templates/column-menu-normal';

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
                            <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Columns" itemStartIcon="columns" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter" itemStartIcon="filter" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Group column" startIcon="group" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Set column position" itemStartIcon="set-column-position" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Columns" itemStartIcon="columns" expanded={true} itemContent={
                                <>
                                    <ColumnList>
                                        <ColumnListItem label="Column 1" />
                                        <ColumnListItem label="Column 2" />
                                        <ColumnListItem label="Column 3" />
                                        <ColumnListItem label="Column 4" />
                                    </ColumnList>
                                    <ActionButtons alignment="stretched">
                                        <Button icon="check" themeColor="primary">Apply</Button>
                                        <Button icon="arrow-rotate-ccw">Reset</Button>
                                    </ActionButtons>
                                </>
                            }/>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter" itemStartIcon="filter" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Group column" startIcon="group" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Set column position" itemStartIcon="set-column-position" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Columns" itemStartIcon="columns" expanded={true} itemContent={
                                <>
                                    <ColumnList>
                                        <span className="k-column-menu-group-header">
                                            <span className="k-column-menu-group-header-text">Group 1</span>
                                        </span>
                                        <ColumnListItem label="Column 1" />
                                        <ColumnListItem label="Column 2" />
                                        <span className="k-column-menu-group-header">
                                            <span className="k-column-menu-group-header-text">Group 2</span>
                                        </span>
                                        <ColumnListItem label="Column 3" />
                                        <ColumnListItem label="Column 4" />
                                    </ColumnList>
                                    <ActionButtons alignment="stretched">
                                        <Button icon="check" themeColor="primary">Apply</Button>
                                        <Button icon="arrow-rotate-ccw">Reset</Button>
                                    </ActionButtons>
                                </>
                            }/>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter" itemStartIcon="filter" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Group column" startIcon="group" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Set column position" itemStartIcon="set-column-position" />
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
                            <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Columns" itemStartIcon="columns" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter" itemStartIcon="filter" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Group column" startIcon="group" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Set column position" itemStartIcon="set-column-position" expanded={true} itemContent={
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
                            <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Columns" itemStartIcon="columns" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter" itemStartIcon="filter" expanded={true} itemContent={
                                <FilterMenuNormal />
                            }/>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Group column" startIcon="group" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Set column position" itemStartIcon="set-column-position" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuNormal>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                            <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Columns" itemStartIcon="columns" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Filter" itemStartIcon="filter" expanded={true} itemContent={
                                <FilterMenuMultiCheck />
                            }/>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Group column" startIcon="group" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Set column position" itemStartIcon="set-column-position" />
                        </ColumnMenuItemWrapper>
                    </ColumnMenuNormal>
                </Popup>
            </section>

        </div>
    </>
);
