
import { Drawer, DrawerContent, DrawerItem } from "..";

export const DrawerWithOverlay = (props) => (
    <Drawer expanded mode="overlay"
        items={
            <>
                <DrawerItem text="Inbox" />
                <DrawerItem icon="bell" text="Notification" />
                <DrawerItem icon="star" text="Favourites" />
                <DrawerItem icon="calendar" text="Calendar" />
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
