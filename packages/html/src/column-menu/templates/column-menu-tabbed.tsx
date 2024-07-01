import { ColumnMenu } from "../../column-menu";
import { Icon } from '../../icon';
import { TabStripNormal, TabStripContent, TabStripItem } from "../../tabstrip";

export const ColumnMenuTabbed = (props) => (
    <ColumnMenu
        view="tabbed"
        children={
            <TabStripNormal header={false} className="k-pos-relative"
                tabStripItems={
                    <>
                        <TabStripItem active value={<Icon icon="filter" />}/>
                        <TabStripItem value={<Icon icon="sliders" />}/>
                        <TabStripItem value={<Icon icon="columns" />}/>
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

export default ColumnMenuTabbed;
