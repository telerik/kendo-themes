import { Drawer, DrawerItem } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>hierarchical items</span>
            <span>hierarchical items - RTL</span>
            <span></span>
            <span></span>

            <section>
                <Drawer expanded items={
                    <>
                        <DrawerItem icon="info-circle" text="Getting Started" hasChildren />
                        <DrawerItem icon="question-circle" text="About Kendo UI" level={1} hover />
                        <DrawerItem icon="palette" text="Supported Themes" level={2} selected />
                        <DrawerItem icon="search" text="Overview" hasChildren expanded />
                        <DrawerItem icon="star" text="Most Popular Widgets" hasChildren />
                        <DrawerItem icon="palette" text="Supported Themes" level={1} />
                        <DrawerItem icon="button" text="Button Package" level={1} />
                        <DrawerItem icon="button" text="Split Button" level={2} />
                        <DrawerItem icon="question-circle" text="API" level={3} />
                        <DrawerItem icon="button" text="Chip List" level={2} />
                        <DrawerItem icon="question-circle" text="API" level={3} />
                    </>
                }>
                </Drawer>
            </section>

            <section>
                <Drawer dir="rtl" expanded items={
                    <>
                        <DrawerItem icon="info-circle" text="Getting Started" hasChildren />
                        <DrawerItem icon="question-circle" text="About Kendo UI" level={1} hover />
                        <DrawerItem icon="palette" text="Supported Themes" level={2} selected />
                        <DrawerItem icon="search" text="Overview" hasChildren expanded />
                        <DrawerItem icon="star" text="Most Popular Widgets" hasChildren />
                        <DrawerItem icon="palette" text="Supported Themes" level={1} />
                        <DrawerItem icon="button" text="Button Package" level={1} />
                        <DrawerItem icon="button" text="Split Button" level={2} />
                        <DrawerItem icon="question-circle" text="API" level={3} />
                        <DrawerItem icon="button" text="Chip List" level={2} />
                        <DrawerItem icon="question-circle" text="API" level={3} />
                    </>
                }>
                </Drawer>
            </section>

        </div>
    </>
);
