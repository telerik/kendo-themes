import { BottomNav, BottomNavItem } from "../../bottom-nav";

export const BottomNavNormal = (props) => (
    <BottomNav
        children={[
            <BottomNavItem icon="envelope" text="BottomNavItem" />,
            <BottomNavItem icon="envelope" text="BottomNavItem" />,
            <BottomNavItem icon="envelope" text="BottomNavItem" />
        ]}
        {...props}
    >
    </BottomNav>
);