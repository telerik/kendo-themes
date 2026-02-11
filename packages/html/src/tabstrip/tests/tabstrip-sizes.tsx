import { TabStripContent } from '../tabstrip-content';
import { TabStripNormal } from '../templates/tabstrip-normal';
import { TabStripItem } from '../tabstrip-item';
import { TabStrip } from '../tabstrip.spec';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            {
                TabStrip.options.size.map((size) => (
                    <>
                        <div>
                            <span>{`${size}`}</span>
                            <TabStripNormal scrollable size={size}
                                tabStripItems={
                                    <>
                                        <TabStripItem first active value="First" />
                                        <TabStripItem last value="Last" />
                                    </>
                                }
                                >
                                <TabStripContent active>
                                    <div>Tab Content</div>
                                </TabStripContent>
                            </TabStripNormal>
                        </div>
                    </>
                ))
            }
        </div>
    </>
);
