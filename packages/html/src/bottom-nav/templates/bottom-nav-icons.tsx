import { BottomNav, BottomNavItem } from "../../bottom-nav";

export const BottomNavIcons = (props) => (
    <BottomNav
        children={[
            <BottomNavItem icon="envelope" />,
            <BottomNavItem icon="envelope" />,
            <BottomNavItem icon="envelope" />
        ]}
        {...props}
    >
    </BottomNav>
);