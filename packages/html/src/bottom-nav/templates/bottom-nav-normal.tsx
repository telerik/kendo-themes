import { BottomNav } from "../bottom-nav.spec";
import { BottomNavItem } from "../bottom-nav-item";

export const BottomNavNormal = (props) => (
    <BottomNav
        children={
            <>
                <BottomNavItem icon="envelope" text="BottomNavItem"/>
                <BottomNavItem icon="envelope" text="BottomNavItem"/>
                <BottomNavItem icon="envelope" text="BottomNavItem"/>
            </>
        }
        {...props}
    >
    </BottomNav>
);
