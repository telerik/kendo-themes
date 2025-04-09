import ColumnMenu from "../column-menu.spec";
import ColumnMenuExpander from "../column-menu-expander.spec";
import { ColumnMenuItemWrapper } from "../column-menu-item-wrapper";
import ColumnMenuItem from "../column-menu-item.spec";
import { ColumnListItem, ColumnList, ColumnMenuNormal } from ".."

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>

            {ColumnMenu.options.size.map((size) => (
                <section>
                    <ColumnMenuNormal size={size}>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuItem text="Item 1" startIcon="sort-asc-small" />
                            <ColumnMenuItem text="Item 2" startIcon="sort-desc-small" />
                        </ColumnMenuItemWrapper>
                        <ColumnMenuItemWrapper>
                            <ColumnMenuExpander itemText="Expanded item" itemStartIcon="columns" expanded={true} itemContent={
                                <ColumnList size={size}>
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
            ))}
        </div>
    </>
);
