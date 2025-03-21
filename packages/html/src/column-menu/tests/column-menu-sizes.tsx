import { Checkbox } from "../../checkbox";
import ColumnMenu from "../column-menu.spec";
import ColumnMenuExpander from "../column-menu-expander.spec";
import { ColumnMenuItemWrapper } from "../column-menu-item-wrapper";
import ColumnMenuItem from "../column-menu-item.spec";
import { ColumnMenuNormal } from "../templates/column-menu-normal";

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
                                <>
                                    <div className="k-column-list-wrapper">
                                        <div className="k-column-list">
                                            <label className="k-column-list-item">
                                                <Checkbox />
                                                <span className="k-checkbox-label">Column 1</span>
                                            </label>
                                            <label className="k-column-list-item k-focus">
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
            ))}
        </div>
    </>
);
