import { Drawer, DrawerContent, DrawerItem, DrawerItemSeparator } from "..";

export const DrawerMini = (props) => (
    <Drawer mini
        items={
            <>
                <DrawerItem icon="inbox" text="Inbox" level={''} />
                <DrawerItem icon="bell" text="Notification" level={''} />
                <DrawerItemSeparator />
                <DrawerItem icon="star" text="Favourites" level={''} />
                <DrawerItem icon="calendar" text="Calendar" level={''} />
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

export default DrawerMini;
