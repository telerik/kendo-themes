import { Drawer, DrawerContent, DrawerItem, DrawerItemSeparator } from '..';
import { Icon } from '../../icon';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <h2 className="k-col-start-1 k-col-end-2 k-text-center">Drawer Push Mode</h2>
            <span>Drawer mini left</span>
            <section className="k-rtl">
                <Drawer mini items={
                    <>
                        <DrawerItem icon="star-outline" text="Item" />
                        <DrawerItemSeparator />
                        <DrawerItem icon="star-outline" text="Hover" hover />
                        <DrawerItem icon="star-outline" text="Selected" selected />
                        <DrawerItem icon="star-outline" text="Selected hover" selected hover />
                        <DrawerItem icon="star-outline" text="Focus" focus />
                    </>
                }>
                    <DrawerContent style={{ padding: "0 20px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.olor sit amet consectetur
                        adipisicing elit. Error accusantium odit, optio nulla maiores quo neque fugit debitis dignissimos incidunt
                        maxime? Eum voluptatem blanditiis voluptatum praesentium dolorem, dolore placeat debitis quod delectus laborum
                        assumenda cupiditate.
                    </DrawerContent>
                </Drawer>
            </section>

            <span> Drawer mini right</span>
            <section className="k-rtl">
                <Drawer mini position="end" items={
                    <>
                        <DrawerItem icon="star-outline" text="Item" />
                        <DrawerItemSeparator />
                        <DrawerItem icon="star-outline" text="Hover" hover />
                        <DrawerItem icon="star-outline" text="Selected" selected />
                        <DrawerItem icon="star-outline" text="Selected hover" selected hover />
                        <DrawerItem icon="star-outline" text="Focus" focus />
                    </>
                }>
                    <DrawerContent style={{ padding: "0 20px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.olor sit amet consectetur
                        adipisicing elit. Error accusantium odit, optio nulla maiores quo neque fugit debitis dignissimos incidunt
                        maxime? Eum voluptatem blanditiis voluptatum praesentium dolorem, dolore placeat debitis quod delectus laborum
                        assumenda cupiditate.
                    </DrawerContent>
                </Drawer>
            </section>


            <span>Drawer left</span>
            <section className="k-rtl">
                <Drawer expanded width="280px" items={
                    <>
                        <DrawerItem icon="star-outline" text="Item" />
                        <DrawerItemSeparator />
                        <DrawerItem icon="twitter" text="Hover" hover />
                        <DrawerItem icon="anchor" text="Selected" selected />
                        <DrawerItem text="Item" />
                        <DrawerItemSeparator />
                        <DrawerItem>
                            <span className="k-drawer-link">
                                <Icon icon="anchor" />
                                <span className="k-item-text">Drawer Link</span>
                            </span>
                        </DrawerItem>
                        <DrawerItem text="Selected hover" selected hover />
                        <DrawerItem text="Focus" focus />
                        <DrawerItem text="Selected focus" selected focus />
                        <DrawerItem icon="star-outline" text="Collapsed" hasChildren />
                        <DrawerItem icon="star-outline" text="Expanded" hasChildren expanded />
                        <DrawerItem icon="star-outline" text="Child Lvl 1" level={1} />
                        <DrawerItem icon="star-outline" text="Child Lvl 2" level={2} />
                    </>
                }>
                    <DrawerContent style={{ padding: "0 20px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.olor sit amet consectetur
                            adipisicing elit. Error accusantium odit, optio nulla maiores quo neque fugit debitis dignissimos incidunt
                            maxime? Eum voluptatem blanditiis voluptatum praesentium dolorem, dolore placeat debitis quod delectus laborum
                            assumenda cupiditate.
                    </DrawerContent>
                </Drawer>
            </section>

            <span>Drawer right</span>
            <section className="k-rtl">
                <Drawer position="end" expanded width="280px" items={
                    <>
                        <DrawerItem icon="star-outline" text="Item" />
                        <DrawerItemSeparator />
                        <DrawerItem icon="twitter" text="Hover" hover />
                        <DrawerItem icon="anchor" text="Selected" selected />
                        <DrawerItem text="Item" />
                        <DrawerItemSeparator />
                        <DrawerItem>
                            <span className="k-drawer-link">
                                <Icon icon="anchor" />
                                <span className="k-item-text">Drawer Link</span>
                            </span>
                        </DrawerItem>
                        <DrawerItem text="Selected hover" selected hover />
                        <DrawerItem text="Focus" focus />
                        <DrawerItem text="Selected focus" selected focus />
                        <DrawerItem icon="star-outline" text="Collapsed" hasChildren />
                        <DrawerItem icon="star-outline" text="Expanded" hasChildren expanded />
                        <DrawerItem icon="star-outline" text="Child Lvl 1" level={1} />
                        <DrawerItem icon="star-outline" text="Child Lvl 2" level={2} />
                    </>
                }>
                    <DrawerContent style={{ padding: "0 20px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.olor sit amet consectetur
                        adipisicing elit. Error accusantium odit, optio nulla maiores quo neque fugit debitis dignissimos incidunt
                        maxime? Eum voluptatem blanditiis voluptatum praesentium dolorem, dolore placeat debitis quod delectus laborum
                        assumenda cupiditate.
                    </DrawerContent>
                </Drawer>
            </section>
        </div>
    </>
);
