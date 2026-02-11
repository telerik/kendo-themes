import { BottomNav } from "../bottom-nav.spec";
import { BottomNavItem } from "../bottom-nav-item";

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
