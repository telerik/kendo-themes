import { TabStripNormal, TabStripItem, TabStripContent } from "..";

export const TabStripScrollableButtonsHidden = ({scrollingPosition = "start", children, ...other}: any) => (
    <TabStripNormal scrollable scrollButtons="hidden" scrollingPosition={scrollingPosition}
        tabStripItems={
            <>
                <TabStripItem first value="First" />
                <TabStripItem value="Second" />
                <TabStripItem active value="Third" />
                <TabStripItem value="Fourth" />
                <TabStripItem value="Fifth - last visible" />
                <TabStripItem value="Sixth" />
                <TabStripItem last value="Last Very Long item" />
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
