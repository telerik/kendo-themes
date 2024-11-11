import { ColumnMenu } from "../../column-menu";
import { TabStripNormal, TabStripContent, TabStripItem } from "../../tabstrip";

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
