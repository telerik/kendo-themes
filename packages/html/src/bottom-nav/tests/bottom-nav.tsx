import { BottomNav, BottomNavItem } from '../../bottom-nav';


const styles = `
#test-area {
    background-color: #f3f5f7;
}
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <h4>Horizontal</h4>
                <BottomNav fillMode="flat" themeColor="primary" border>
                    <BottomNavItem icon="envelope" text="Normal" />
                    <BottomNavItem icon="envelope" text="Focused" focus />
                    <BottomNavItem icon="envelope" text="Selected" selected />
                    <BottomNavItem icon="envelope" text="Disabled" disabled />
                </BottomNav>

                <h4>Vertical</h4>
                <BottomNav fillMode="flat" themeColor="primary" border flow="vertical">
                    <BottomNavItem icon="envelope" text="Normal" />
                    <BottomNavItem icon="envelope" text="Focused" focus />
                    <BottomNavItem icon="envelope" text="Selected" selected />
                    <BottomNavItem icon="envelope" text="Disabled" disabled />
                </BottomNav>

                <h4>Icons only</h4>
                <BottomNav fillMode="flat" themeColor="primary" border>
                    <BottomNavItem icon="envelope" />
                    <BottomNavItem icon="envelope" focus />
                    <BottomNavItem icon="envelope" selected />
                    <BottomNavItem icon="envelope" disabled />
                </BottomNav>

                <h4>Overflow</h4>
                <div style={{ width: "360px" }}>
                    <BottomNav fillMode="flat" themeColor="primary" border flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused Long" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled Long Text" disabled />
                    </BottomNav>
                </div>

                <h4>k-bottom-nav-link</h4>
                <div style={{ width: "360px" }}>
                    <BottomNav fillMode="flat" themeColor="primary" flow="vertical">
                        <BottomNavItem link="Inbox" selected />
                        <BottomNavItem link="Profile" />
                    </BottomNav>
                </div>
            </section>
        </div>
    </>
);
