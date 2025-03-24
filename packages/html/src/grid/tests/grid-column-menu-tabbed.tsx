import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Searchbox } from '../../searchbox';
import { Popup } from '../../popup';
import { ColumnMenuTabbed, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander, FilterMenuMultiCheck, FilterMenuNormal, ColumnMenuMulticheckItem, ColumnMenuMulticheckWrap } from '../../column-menu';
import { TabStripNormal, TabStripItem, TabStripContent } from '../../tabstrip';

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

            <span>Tab Filter</span>
            <span>Tab More</span>
            <span>Tab Column Visibility</span>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuTabbed>
                        <TabStripNormal className="k-overflow-hidden"
                            tabStripItems={
                                <>
                                    <TabStripItem active icon="filter" />
                                    <TabStripItem icon="sliders" />
                                    <TabStripItem icon="columns" />
                                </>
                            }
                        >
                            <TabStripContent active>
                                <FilterMenuNormal />
                            </TabStripContent>
                        </TabStripNormal>
                    </ColumnMenuTabbed>
                </Popup>
            </section>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuTabbed>
                        <TabStripNormal className="k-overflow-hidden"
                            tabStripItems={
                                <>
                                    <TabStripItem icon="filter" />
                                    <TabStripItem active icon="sliders" />
                                    <TabStripItem icon="columns" />
                                </>
                            }
                        >
                            <TabStripContent active>
                                <ColumnMenuItemWrapper>
                                    <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                                    <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                                </ColumnMenuItemWrapper>
                                <ColumnMenuItemWrapper>
                                    <ColumnMenuItem text="Group column" startIcon="group" />
                                </ColumnMenuItemWrapper>
                                <ColumnMenuItemWrapper>
                                    <ColumnMenuItem text="Autosize this column" startIcon="max-width" />
                                    <ColumnMenuItem text="Autosize all columns" startIcon="display-inline-flex" />
                                </ColumnMenuItemWrapper>
                                <ColumnMenuItemWrapper>
                                    <ColumnMenuExpander itemText="Set column position" itemStartIcon="set-column-position" />
                                </ColumnMenuItemWrapper>
                            </TabStripContent>
                        </TabStripNormal>
                    </ColumnMenuTabbed>
                </Popup>
            </section>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuTabbed>
                        <TabStripNormal className="k-overflow-hidden"
                            tabStripItems={
                                <>
                                    <TabStripItem icon="filter" />
                                    <TabStripItem icon="sliders" />
                                    <TabStripItem active icon="columns" />
                                </>
                            }
                        >
                            <TabStripContent active>
                                <FilterMenuMultiCheck>
                                    <Searchbox placeholder="Search..." />
                                    <ColumnMenuMulticheckWrap>
                                        <ColumnMenuMulticheckItem text="Select All" className="k-check-all-wrap" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                        <ColumnMenuMulticheckItem text="Column" />
                                    </ColumnMenuMulticheckWrap>
                                    <div className="k-filter-selected-items">0 selected items</div>
                                    <ActionButtons alignment="stretched">
                                        <Button icon="check" themeColor="primary">Apply</Button>
                                        <Button icon="arrow-rotate-ccw">Reset</Button>
                                    </ActionButtons>
                                </FilterMenuMultiCheck>
                            </TabStripContent>
                        </TabStripNormal>
                    </ColumnMenuTabbed>
                </Popup>
            </section>

            <span>2 Tab Set</span>
            <span>Single Tab Set</span>
            <span></span>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuTabbed>
                        <TabStripNormal className="k-overflow-hidden"
                            tabStripItems={
                                <>
                                    <TabStripItem active icon="filter" />
                                    <TabStripItem icon="sliders" />
                                </>
                            }
                        >
                            <TabStripContent active>
                                <FilterMenuNormal />
                            </TabStripContent>
                        </TabStripNormal>
                    </ColumnMenuTabbed>
                </Popup>
            </section>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuTabbed>
                        <TabStripNormal className="k-pos-relative"
                            tabStripItems={
                                <>
                                    <TabStripItem active icon="filter" />
                                </>
                            }
                        >
                            <TabStripContent active>
                                <FilterMenuNormal />
                            </TabStripContent>
                        </TabStripNormal>
                    </ColumnMenuTabbed>
                </Popup>
            </section>

        </div>
    </>
);
