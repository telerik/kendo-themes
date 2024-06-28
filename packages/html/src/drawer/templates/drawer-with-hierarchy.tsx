import { Drawer, DrawerContent, DrawerItem } from "..";

export const DrawerWithHierarchy = (props) => (
    <Drawer expanded
        items={
            <>
                <DrawerItem icon="info-circle" text="Getting Started" hasChildren />
                <DrawerItem icon="question-circle" text="About Kendo UI" level={1} />
                <DrawerItem icon="palette" text="Supported Themes" level={2} />
                <DrawerItem icon="search" text="Overview" hasChildren expanded />
                <DrawerItem icon="star" text="Most Popular Widgets" hasChildren />
                <DrawerItem icon="palette" text="Supported Themes" level={1} />
            </>
        }
        {...props}
    >
        { props.children ||
            <DrawerContent>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.olor sit amet consectetur
                    adipisicing elit. Error accusantium odit, optio nulla maiores quo neque fugit debitis dignissimos incidunt
                    maxime? Eum voluptatem blanditiis voluptatum praesentium dolorem, dolore placeat debitis quod delectus laborum
                    assumenda cupiditate.
                </p>
            </DrawerContent>
        }
    </Drawer>
);

export default DrawerWithHierarchy;
