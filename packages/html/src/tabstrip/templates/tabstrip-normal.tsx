import { TabStrip, TabStripContent, TabStripItem } from "..";

export const TabStripNormal = ({ children, ...other }: any) => (
    <TabStrip
        tabStripItems={
            <>
                <TabStripItem first value="First" id="tab-1" />
                <TabStripItem active value="Second" id="tab-2" aria-controls="tabpanel-2" />
                <TabStripItem value="Third" id="tab-3" />
                <TabStripItem value="Fourth" id="tab-4" />
                <TabStripItem last value="Fifth" id="tab-5" />
            </>
        }
        {...other}
    >
        { children ||
            <TabStripContent active id="tabpanel-2" aria-labelledby="tab-2">
                <div>TabStrip Content</div>
            </TabStripContent>
        }
    </TabStrip>
);
