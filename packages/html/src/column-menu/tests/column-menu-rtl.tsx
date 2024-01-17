import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { ColumnMenuItem, ColumnMenuItemWrapper, ColumnMenuExpander, ColumnMenuNormal } from '../../column-menu';

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
        <div id="test-area" className="k-d-grid k-grid-cols-3 k-rtl" dir="rtl">

            <span>Basic</span>
            <span>Expanded item</span>
            <span>Expanded item with Action buttons</span>

            <section>
                <ColumnMenuNormal />
            </section>

            <section>
                <ColumnMenuNormal>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Item 1" icon="sort-asc-small" />
                        <ColumnMenuItem text="Item 2" icon="sort-desc-small" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Expanded item" itemIcon="columns" expanded={true} itemContent={
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
                        <ColumnMenuExpander itemText="Expandable item" itemIcon="filter" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Non-expandable item" icon="group" />
                    </ColumnMenuItemWrapper>
                </ColumnMenuNormal>
            </section>

            <section>
                <ColumnMenuNormal>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Item 1" icon="sort-asc-small" />
                        <ColumnMenuItem text="Item 2" icon="sort-desc-small" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Expanded item" itemIcon="columns" expanded={true} itemContent={
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
                                <ActionButtons alignment="stretched">
                                    <Button themeColor="primary">Apply</Button>
                                    <Button>Reset</Button>
                                </ActionButtons>
                            </>
                        }/>
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuExpander itemText="Expandable item" itemIcon="filter" />
                    </ColumnMenuItemWrapper>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Non-expandable item" icon="group" />
                    </ColumnMenuItemWrapper>
                </ColumnMenuNormal>
            </section>

        </div>
    </>
);
