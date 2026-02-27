import { BottomNav, BottomNavItem } from "../../bottom-nav";

export const BottomNavSelected = (props) => (
    <BottomNav
        children={
            <>
                <BottomNavItem icon="envelope" text="Inbox"/>
                <BottomNavItem icon="calendar" text="Calendar" selected/>
                <BottomNavItem icon="gear" text="Settings"/>
            </>
        }
        {...props}
    >
    </BottomNav>
);
