import { ColumnMenu } from "../../column-menu";
import { TabStripNormal, TabStripContent, TabStripItem } from "../../tabstrip";

export const ColumnMenuTabbed = (props) => (
    <ColumnMenu
        view="tabbed"
        children={
            <TabStripNormal className="k-pos-relative"
                tabStripItems={
                    <>
                        <TabStripItem active icon="filter" aria-label="Filter" />
                        <TabStripItem icon="sliders" aria-label="Settings" />
                        <TabStripItem icon="columns" aria-label="Columns" />
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
