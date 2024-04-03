import { BottomNav, BottomNavItem } from "../../bottom-nav";

export const BottomNavLinks = (props) => (
    <BottomNav
        children={
            <>
                <BottomNavItem link="LinkItem"/>
                <BottomNavItem link="LinkItem"/>
                <BottomNavItem link="LinkItem"/>
            </>
        }
        {...props}
    >
    </BottomNav>
);
