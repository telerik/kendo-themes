import { BottomNav } from "../bottom-nav.spec";
import { BottomNavItem } from "../bottom-nav-item";

export const BottomNavIcons = (props) => (
    <BottomNav
        children={
            <>
                <BottomNavItem icon="envelope"/>
                <BottomNavItem icon="envelope"/>
                <BottomNavItem icon="envelope"/>
            </>
        }
        {...props}
    >
    </BottomNav>
);
