import { Drawer, DrawerContent, DrawerItem, DrawerItemSeparator } from "..";

export const DrawerMini = (props) => (
    <Drawer mini
        items={
            <>
                <DrawerItem icon="inbox" text="Inbox" level={''} mini aria-label="Inbox" />
                <DrawerItem icon="bell" text="Notification" level={''} mini aria-label="Notification" />
                <DrawerItemSeparator />
                <DrawerItem icon="star" text="Favourites" level={''} mini aria-label="Favourites" />
                <DrawerItem icon="calendar" text="Calendar" level={''} mini aria-label="Calendar" />
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
