import { ColumnMenu } from "../../column-menu";
import { Icon } from '../../icon';
import { TabStrip, TabStripContent, TabStripItem, TabStripItems, TabStripItemsWrapper } from "../../tabstrip";

export const ColumnMenuTabbed = (props) => (
    <ColumnMenu
        view="tabbed"
        children={
            <TabStrip header={false} className="k-pos-relative">
                <TabStripItemsWrapper>
                    <TabStripItems>
                        <TabStripItem active value={<Icon icon="filter" />}/>
                        <TabStripItem value={<Icon icon="sliders" />}/>
                        <TabStripItem value={<Icon icon="columns" />}/>
                    </TabStripItems>
                </TabStripItemsWrapper>
                <TabStripContent active>
                    Tabbed column menu content
                </TabStripContent>
            </TabStrip>
        }
        {...props}
    >
    </ColumnMenu>
);
