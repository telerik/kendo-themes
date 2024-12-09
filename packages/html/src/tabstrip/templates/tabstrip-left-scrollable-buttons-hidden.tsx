import { TabStripNormal, TabStripItem, TabStripContent } from "..";

export const TabStripLeftScrollableButtonsHidden = ({scrollingPosition = "start", children, ...other}: any) => (
    <TabStripNormal position="left" scrollable scrollButtons="hidden" scrollingPosition={scrollingPosition}
        tabStripItems={
            <>
                <TabStripItem first value="First" />
                <TabStripItem value="Second" />
                <TabStripItem active value="Third" />
                <TabStripItem value="Fourth" />
                <TabStripItem value="Fifth - last visible" />
            </>
        }
        {...other}
    >
        { children ||
            <TabStripContent active>
                <div>TabStrip Content</div>
            </TabStripContent>
        }
    </TabStripNormal>
);
