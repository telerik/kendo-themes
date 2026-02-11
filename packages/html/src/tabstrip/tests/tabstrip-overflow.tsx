import { TabStripContent } from '../tabstrip-content';
import { TabStripItem } from '../tabstrip-item';
import { TabStrip } from '../tabstrip.spec';
import { TabStripOverflow } from '../templates/tabstrip-overflow';
import { MenuList } from '../../menu/menu-list.spec';
import { MenuListItem } from '../../menu/menu-list-item.spec';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2" style={{ gap: "30px" }}>

            <section>
                <h4>TabStrip - No Overflow</h4>
                <TabStrip
                    tabStripItems={
                        <>
                            <TabStripItem first value="Tab 1" />
                            <TabStripItem value="Tab 2" />
                            <TabStripItem active value="Tab 3" />
                            <TabStripItem value="Tab 4" />
                            <TabStripItem value="Tab 5" />
                            <TabStripItem last value="Tab 6" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>TabStrip Content</div>
                    </TabStripContent>
                </TabStrip>
            </section>

            <section>
                <h4>TabStrip - With Overflow</h4>
                <TabStripOverflow popupOffset={{ top: "110px", left: "921px" }} />
            </section>

            <section>
                <h4>TabStrip - No Overflow, Active Tab</h4>
                <TabStrip
                    tabStripItems={
                        <>
                            <TabStripItem first value="Tab 1" />
                            <TabStripItem value="Tab 2" />
                            <TabStripItem value="Tab 3" />
                            <TabStripItem value="Tab 4" />
                            <TabStripItem value="Tab 5" />
                            <TabStripItem last active value="Tab 6" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>TabStrip Content</div>
                    </TabStripContent>
                </TabStrip>
            </section>

            <section>
                <h4>TabStrip - With Overflow, Active Tab Preceded by Overflow Tabs</h4>
                <TabStripOverflow
                    style={{ width: "380px" }}
                    popupOffset={{ top: "283px", left: "831px" }}
                    tabStripItems={
                        <>
                            <TabStripItem first value="Tab 1" />
                            <TabStripItem value="Tab 2" />
                            <TabStripItem value="Tab 3" />
                            <TabStripItem last active value="Tab 6" />
                        </>
                    }
                    popup={
                        <MenuList>
                            <MenuListItem first text="Tab 4" />
                            <MenuListItem last text="Tab 5" />
                        </MenuList>
                    }
                />
            </section>

        </div>
    </>
);
