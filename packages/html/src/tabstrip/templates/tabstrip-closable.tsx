import { TabStrip, TabStripContent, TabStripItem } from "..";

export const TabStripClosable = ({ children, ...other }: any) => (
    <TabStrip
        tabStripItems={
            <>
                <TabStripItem first closable value="First" id="tab-closable-1" />
                <TabStripItem active closable value="Second" id="tab-closable-2" aria-controls="tabpanel-closable-2" />
                <TabStripItem closable value="Third" id="tab-closable-3" />
            </>
        }
        {...other}
    >
        { children ||
            <TabStripContent active id="tabpanel-closable-2" aria-labelledby="tab-closable-2">
                <div>Closable items</div>
            </TabStripContent>
        }
    </TabStrip>
);
