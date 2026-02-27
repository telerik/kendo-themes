import { TabStrip, TabStripContent, TabStripItem } from "..";

export const TabStripWithPanels = ({ children, ...other }: any) => (
    <TabStrip
        tabStripItems={
            <>
                <TabStripItem first value="First" />
                <TabStripItem active value="Second" aria-controls="panel-second" />
                <TabStripItem value="Third" />
                <TabStripItem value="Fourth" />
                <TabStripItem last value="Fifth" />
            </>
        }
        {...other}
    >
        { children ||
            <>
                <TabStripContent aria-labelledby="tab-second" aria-hidden="true">
                    <div>First Panel (hidden)</div>
                </TabStripContent>
                <TabStripContent active id="panel-second" aria-labelledby="tab-second">
                    <div>Second Panel (active)</div>
                </TabStripContent>
            </>
        }
    </TabStrip>
);
