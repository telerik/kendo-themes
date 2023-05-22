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
                    <BottomNavItem icon="envelop" text="Normal" />
                    <BottomNavItem icon="envelop" text="Focused" focus />
                    <BottomNavItem icon="envelop" text="Selected" selected />
                    <BottomNavItem icon="envelop" text="Disabled" disabled />
                </BottomNav>

                <h4>Vertical</h4>
                <BottomNav fillMode="flat" themeColor="primary" border flow="vertical">
                    <BottomNavItem icon="envelop" text="Normal" />
                    <BottomNavItem icon="envelop" text="Focused" focus />
                    <BottomNavItem icon="envelop" text="Selected" selected />
                    <BottomNavItem icon="envelop" text="Disabled" disabled />
                </BottomNav>

                <h4>Icons only</h4>
                <BottomNav fillMode="flat" themeColor="primary" border>
                    <BottomNavItem icon="envelop" />
                    <BottomNavItem icon="envelop" focus />
                    <BottomNavItem icon="envelop" selected />
                    <BottomNavItem icon="envelop" disabled />
                </BottomNav>

                <h4>Overflow</h4>
                <div style={{ width: "360px" }}>
                    <BottomNav fillMode="flat" themeColor="primary" border flow="vertical">
                        <BottomNavItem icon="envelop" text="Normal" />
                        <BottomNavItem icon="envelop" text="Focused Long" focus />
                        <BottomNavItem icon="envelop" text="Selected" selected />
                        <BottomNavItem icon="envelop" text="Disabled Long Text" disabled />
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
