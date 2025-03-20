import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { Searchbox } from '../../searchbox';
import { Treeview, TreeviewGroup, TreeviewItem } from '../../treeview';
import { AnimationContainer } from '../../animation-container';
import { ColumnMenuItemWrapper, ColumnMenuItem } from '../../column-menu';


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
                                            <TreeviewItem top bottom text="All" showCheckbox expanded>
                                                <TreeviewGroup>
                                                    <TreeviewItem top text="$14.87" showCheckbox checked />
                                                    <TreeviewItem text="$21.10" showCheckbox />
                                                    <TreeviewItem text="$16.79" showCheckbox />
                                                    <TreeviewItem text="$11.39" showCheckbox />
                                                    <TreeviewItem text="$41.36" showCheckbox />
                                                    <TreeviewItem text="$13.19" showCheckbox />
                                                    <TreeviewItem text="$41.94" showCheckbox />
                                                    <TreeviewItem text="$23.95" showCheckbox />
                                                    <TreeviewItem bottom text="$16.16" showCheckbox />
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
