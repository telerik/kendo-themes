import { Drawer, DrawerContent, DrawerItem, DrawerItemSeparator } from '..';

const styles = `
    #test-area {
        height: 600px;
        position: relative;
    }
    #test-area .k-drawer,
    #test-area .k-overlay {
        position: absolute;
    }

    #test-area .k-drawer-container:nth-of-type(2) .k-overlay {
        display: none;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area">
            <Drawer mode="overlay" expanded items={
                <>
                    <DrawerItem icon="star-outline" text="Item" />
                    <DrawerItemSeparator />
                    <DrawerItem icon="star-outline" text="Hovered Item" hover />
                    <DrawerItem icon="star-outline" text="Selected Item" selected />
                    <DrawerItem icon="star-outline" text="Selected and hovered item" selected hover />
                    <DrawerItem icon="star-outline" text="Focused item" focus />
                    <DrawerItem icon="star-outline" text="Collapsed" hasChildren />
                    <DrawerItem icon="star-outline" text="Expanded" hasChildren expanded />
                    <DrawerItem icon="star-outline" text="Child Lvl 1" level={1} />
                    <DrawerItem icon="star-outline" text="Child Lvl 2" level={2} />
                </>
            }>
            </Drawer>

            <Drawer position="end" mode="overlay" expanded items={
                <>
                    <DrawerItem icon="star-outline" text="Item" />
                    <DrawerItemSeparator />
                    <DrawerItem icon="star-outline" text="Hovered Item" hover />
                    <DrawerItem icon="star-outline" text="Selected Item" selected />
                    <DrawerItem icon="star-outline" text="Selected and hovered item" selected hover />
                    <DrawerItem icon="star-outline" text="Focused item" focus />
                    <DrawerItem icon="star-outline" text="Collapsed" hasChildren />
                    <DrawerItem icon="star-outline" text="Expanded" hasChildren expanded />
                    <DrawerItem icon="star-outline" text="Child Lvl 1" level={1} />
                    <DrawerItem icon="star-outline" text="Child Lvl 2" level={2} />
                </>
            }>
            </Drawer>

            <h2 style={{ textAlign: "center" }}>Drawer overlay</h2>
            <DrawerContent style={{ padding: "0 20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.olor sit amet consectetur
                adipisicing elit. Error accusantium odit, optio nulla maiores quo neque fugit debitis dignissimos incidunt
                maxime? Eum voluptatem blanditiis voluptatum praesentium dolorem, dolore placeat debitis quod delectus laborum
                assumenda cupiditate.
            </DrawerContent>
        </div>
    </>
);
