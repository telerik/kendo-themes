import { ColumnMenu } from "../../column-menu/column-menu.spec";
import { TabStripNormal } from "../../tabstrip/templates/tabstrip-normal";
import { TabStripContent } from "../../tabstrip/tabstrip-content";
import { TabStripItem } from "../../tabstrip/tabstrip-item";

export const ColumnMenuTabbed = (props) => (
    <ColumnMenu
        view="tabbed"
        children={
            <TabStripNormal className="k-pos-relative"
                tabStripItems={
                    <>
                        <TabStripItem active icon="filter" />
                        <TabStripItem icon="sliders" />
                        <TabStripItem icon="columns" />
                    </>
                }
            >
                <TabStripContent active>
                    Tabbed column menu content
                </TabStripContent>
            </TabStripNormal>
        }
        {...props}
    >
    </ColumnMenu>
);
