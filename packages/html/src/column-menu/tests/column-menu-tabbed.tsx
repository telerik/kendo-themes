import { Icon } from '../../icon';
import { ColumnMenuTabbed, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander, FilterMenuNormal } from '../../column-menu';
import { TabStrip, TabStripContent, TabStripItem, TabStripItems, TabStripItemsWrapper } from '../..';

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
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>First tab seledted</span>
            <span>Second tab selected</span>
            <section>
                <ColumnMenuTabbed />
            </section>

            <section>
                <ColumnMenuTabbed>
                    <TabStrip header={false} className="k-overflow-hidden">
                        <TabStripItemsWrapper>
                            <TabStripItems>
                                <TabStripItem value={<Icon icon="filter" />}/>
                                <TabStripItem active value={<Icon icon="sliders" />}/>
                                <TabStripItem value={<Icon icon="columns" />}/>
                            </TabStripItems>
                        </TabStripItemsWrapper>
                        <TabStripContent active>
                            <ColumnMenuItemWrapper>
                                <ColumnMenuItem text="Item 1" icon="sort-asc-small" />
                                <ColumnMenuItem text="Item 2" icon="sort-desc-small" />
                            </ColumnMenuItemWrapper>
                            <ColumnMenuItemWrapper>
                                <ColumnMenuItem text="Item 3" icon="group" />
                            </ColumnMenuItemWrapper>
                            <ColumnMenuItemWrapper>
                                <ColumnMenuExpander itemText="Expandable item" itemIcon="set-column-position" />
                            </ColumnMenuItemWrapper>
                        </TabStripContent>
                    </TabStrip>
                </ColumnMenuTabbed>
            </section>

            <span>2 Tabs Set</span>
            <span>Single Tab Set</span>

            <section>
                <ColumnMenuTabbed>
                    <TabStrip header={false} className="k-overflow-hidden">
                        <TabStripItemsWrapper>
                            <TabStripItems>
                                <TabStripItem active value={<Icon icon="filter" />}/>
                                <TabStripItem value={<Icon icon="sliders" />}/>
                            </TabStripItems>
                        </TabStripItemsWrapper>
                        <TabStripContent active>
                            <FilterMenuNormal />
                        </TabStripContent>
                    </TabStrip>
                </ColumnMenuTabbed>
            </section>

            <section>
                <ColumnMenuTabbed>
                    <TabStrip header={false} className="k-pos-relative">
                        <TabStripItemsWrapper>
                            <TabStripItems>
                                <TabStripItem active value={<Icon icon="filter" />}/>
                            </TabStripItems>
                        </TabStripItemsWrapper>
                        <TabStripContent active>
                            <FilterMenuNormal />
                        </TabStripContent>
                    </TabStrip>
                </ColumnMenuTabbed>
            </section>

        </div>
    </>
);
