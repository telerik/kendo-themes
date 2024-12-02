import { ColumnMenuTabbed, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander, FilterMenuNormal } from '../../column-menu';
import { TabStripNormal, TabStripContent, TabStripItem } from '../..';

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
                    </TabStripNormal>
                </ColumnMenuTabbed>
            </section>

            <span>2 Tabs Set</span>
            <span>Single Tab Set</span>

            <section>
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
            </section>

            <section>
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
            </section>

        </div>
    </>
);
