import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { ColumnMenuItem, ColumnMenuItemWrapper, ColumnMenuExpander, ColumnMenuNormal, ColumnList, ColumnListItem } from '..';

const styles = `
    .k-animation-container,
    .k-popup {
        position: relative;
        overflow: visible;
    }

    .k-column-menu-popup {
        width: 100%;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Basic</span>
            <span>Expanded item</span>
            <span>Expanded item with Action buttons</span>

            <section>
                <ColumnMenuNormal />
            </section>

            <section>
                <ColumnMenuNormal>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Item 1" startIcon="sort-asc-small" />
                        <ColumnMenuItem text="Item 2" startIcon="sort-desc-small" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Expanded item" itemStartIcon="columns" expanded={true} itemContent={
                            <ColumnList>
                                <ColumnListItem label="Column 1" />
                                <ColumnListItem focus label="Column 2" />
                                <ColumnListItem label="Column 3" />
                                <ColumnListItem label="Column 4" />
                            </ColumnList>
                        } />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Expandable item" itemStartIcon="filter" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Non-expandable item" startIcon="group" />
                    </ColumnMenuItemWrapper>
                </ColumnMenuNormal>
            </section>

            <section>
                <ColumnMenuNormal>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Item 1" startIcon="sort-asc-small" />
                        <ColumnMenuItem text="Item 2" startIcon="sort-desc-small" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Expanded item" itemStartIcon="columns" expanded={true} itemContent={
                            <>
                                <ColumnList>
                                    <ColumnListItem label="Column 1" />
                                    <ColumnListItem focus label="Column 2" />
                                    <ColumnListItem label="Column 3" />
                                    <ColumnListItem label="Column 4" />
                                </ColumnList>
                                <ActionButtons alignment="stretched">
                                    <Button themeColor="primary">Apply</Button>
                                    <Button>Reset</Button>
                                </ActionButtons>
                            </>
                        }/>
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Expandable item" itemStartIcon="filter" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Non-expandable item" startIcon="group" />
                    </ColumnMenuItemWrapper>
                </ColumnMenuNormal>
            </section>

        </div>
    </>
);
