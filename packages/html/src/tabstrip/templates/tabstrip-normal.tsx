import { TabStrip } from '../tabstrip.spec';
import { TabStripContent } from '../tabstrip-content';
import { TabStripItem } from '../tabstrip-item';

export const TabStripNormal = ({ children, ...other }: any) => (
    <TabStrip
        tabStripItems={
            <>
                <TabStripItem first value="First" />
                <TabStripItem active value="Second" />
                <TabStripItem value="Third" />
                <TabStripItem value="Fourth" />
                <TabStripItem last value="Fifth" />
            </>
        }
        {...other}
    >
        { children ||
            <TabStripContent active>
                <div>TabStrip Content</div>
            </TabStripContent>
        }
    </TabStrip>
);
