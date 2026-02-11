import { TabStrip } from '../tabstrip.spec';
import { TabStripContent } from '../tabstrip-content';
import { TabStripItem } from '../tabstrip-item';

export const TabStripClosable = ({ children, ...other }: any) => (
    <TabStrip
        tabStripItems={
            <>
                <TabStripItem first closable value="First" />
                <TabStripItem active closable value="Second" />
                <TabStripItem closable value="Third" />
            </>
        }
        {...other}
    >
        { children ||
            <TabStripContent active>
                <div>Closable items</div>
            </TabStripContent>
        }
    </TabStrip>
);
