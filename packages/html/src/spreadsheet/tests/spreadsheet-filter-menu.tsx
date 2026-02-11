import { ActionButtons } from '../../action-buttons/action-buttons.spec';
import { Button } from '../../button/button.spec';
import { Icon } from '../../icon/icon.spec';
import { Searchbox } from '../../searchbox/searchbox.spec';
import { Treeview } from '../../treeview/treeview.spec';
import { TreeviewGroup } from '../../treeview/treeview-group';
import { TreeviewItem } from '../../treeview/treeview-item.spec';
import { AnimationContainer } from '../../animation-container/animation-container.spec';
import { ColumnMenuItem } from '../../column-menu/column-menu-item.spec';
import { ColumnMenuItemWrapper } from '../../column-menu/column-menu-item-wrapper';


const style = `
    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">

            <section>
                <AnimationContainer>
                    <div className="k-spreadsheet-filter-menu k-column-menu k-popup k-group k-reset">
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem>
                                <Icon icon="sort-asc-small"></Icon>Sort range A to Z
                            </ColumnMenuItem>
                            <ColumnMenuItem>
                                <Icon icon="sort-desc-small"></Icon>Sort range Z to A
                            </ColumnMenuItem>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <div className="k-spreadsheet-condition-filter k-expander">
                                <ColumnMenuItem>
                                    Filter by condition
                                    <span className="k-spacer"></span>
                                    <span className="k-expander-indicator">
                                        <Icon icon="chevron-down" />
                                    </span>
                                </ColumnMenuItem>
                            </div>
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <div className="k-expander">
                                <ColumnMenuItem>
                                    Filter by value
                                    <span className="k-spacer"></span>
                                    <span className="k-expander-indicator">
                                        <Icon icon="chevron-up" />
                                    </span>
                                </ColumnMenuItem>
                                <div className="k-columnmenu-item-content">
                                    <Searchbox placeholder="Search..." />
                                    <div className="k-spreadsheet-value-treeview-wrapper">
                                        <Treeview>
                                            <TreeviewItem text="All" showCheckbox expanded>
                                                <TreeviewGroup>
                                                    <TreeviewItem text="$14.87" showCheckbox checked />
                                                    <TreeviewItem text="$21.10" showCheckbox />
                                                    <TreeviewItem text="$16.79" showCheckbox />
                                                    <TreeviewItem text="$11.39" showCheckbox />
                                                    <TreeviewItem text="$41.36" showCheckbox />
                                                    <TreeviewItem text="$13.19" showCheckbox />
                                                    <TreeviewItem text="$41.94" showCheckbox />
                                                    <TreeviewItem text="$23.95" showCheckbox />
                                                    <TreeviewItem text="$16.16" showCheckbox />
                                                </TreeviewGroup>
                                            </TreeviewItem>
                                        </Treeview>
                                    </div>
                                    <ActionButtons alignment="stretched">
                                        <Button themeColor="primary">Apply</Button>
                                        <Button>Clear</Button>
                                    </ActionButtons>
                                </div>
                            </div>
                        </ColumnMenuItemWrapper>
                    </div>
                </AnimationContainer>
            </section>
        </div>
    </>
);
