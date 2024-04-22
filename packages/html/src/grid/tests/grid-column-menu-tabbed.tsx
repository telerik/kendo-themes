import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { Searchbox } from '../../searchbox';
import { Popup } from '../../popup';
import { ColumnMenuTabbed, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander, FilterMenuMultiCheck, FilterMenuNormal, ColumnMenuMulticheckItem, ColumnMenuMulticheckWrap } from '../../column-menu';
import { TabStripContent, TabStripItem, TabStripNormal } from '../..';

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
                        <TabStripNormal header={false} className="k-overflow-hidden"
                            tabStripItems={
                                <>
                                    <TabStripItem active value={<Icon icon="filter" />} />
                                    <TabStripItem value={<Icon icon="sliders" />} />
                                    <TabStripItem value={<Icon icon="columns" />} />
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
                        <TabStripNormal header={false} className="k-overflow-hidden"
                            tabStripItems={
                                <>
                                    <TabStripItem value={<Icon icon="filter" />} />
                                    <TabStripItem active value={<Icon icon="sliders" />} />
                                    <TabStripItem value={<Icon icon="columns" />} />
                                </>
                            }
                        >
                            <TabStripContent active>
                                <ColumnMenuItemWrapper>
                                    <ColumnMenuItem text="Sort ascending" icon="sort-asc-small" />
                                    <ColumnMenuItem text="Sort descending" icon="sort-desc-small" />
                                </ColumnMenuItemWrapper>
                                <ColumnMenuItemWrapper>
                                    <ColumnMenuItem text="Group column" icon="group" />
                                </ColumnMenuItemWrapper>
                                <ColumnMenuItemWrapper>
                                    <ColumnMenuItem text="Autosize this column" icon="max-width" />
                                    <ColumnMenuItem text="Autosize all columns" icon="display-inline-flex" />
                                </ColumnMenuItemWrapper>
                                <ColumnMenuItemWrapper>
                                    <ColumnMenuExpander itemText="Set column position" itemIcon="set-column-position" />
                                </ColumnMenuItemWrapper>
                            </TabStripContent>
                        </TabStripNormal>
                    </ColumnMenuTabbed>
                </Popup>
            </section>

            <section>
                <Popup className="k-grid-columnmenu-popup">
                    <ColumnMenuTabbed>
                        <TabStripNormal header={false} className="k-overflow-hidden"
                            tabStripItems={
                                <>
                                    <TabStripItem value={<Icon icon="filter" />} />
                                    <TabStripItem value={<Icon icon="sliders" />} />
                                    <TabStripItem active value={<Icon icon="columns" />} />
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
                                        <Button themeColor="primary">Apply</Button>
                                        <Button>Clear</Button>
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
                        <TabStripNormal header={false} className="k-overflow-hidden"
                            tabStripItems={
                                <>
                                    <TabStripItem active value={<Icon icon="filter" />} />
                                    <TabStripItem value={<Icon icon="sliders" />} />
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
                        <TabStripNormal header={false} className="k-pos-relative"
                            tabStripItems={
                                <>
                                    <TabStripItem active value={<Icon icon="filter" />} />
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
