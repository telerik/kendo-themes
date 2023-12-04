import { BottomNavNormal, BottomNavItem, BottomNavIcons, BottomNavLinks } from '../../bottom-nav';


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
                <BottomNavNormal themeColor="primary" border>
                    <BottomNavItem icon="envelope" text="Normal" />
                    <BottomNavItem icon="envelope" text="Focused" focus />
                    <BottomNavItem icon="envelope" text="Selected" selected />
                    <BottomNavItem icon="envelope" text="Disabled" disabled />
                </BottomNavNormal>

                <h4>Vertical</h4>
                <BottomNavNormal themeColor="primary" border flow="vertical">
                    <BottomNavItem icon="envelope" text="Normal" />
                    <BottomNavItem icon="envelope" text="Focused" focus />
                    <BottomNavItem icon="envelope" text="Selected" selected />
                    <BottomNavItem icon="envelope" text="Disabled" disabled />
                </BottomNavNormal>

                <h4>Icons only</h4>
                <BottomNavIcons themeColor="primary" border>
                    <BottomNavItem icon="envelope" />
                    <BottomNavItem icon="envelope" focus />
                    <BottomNavItem icon="envelope" selected />
                    <BottomNavItem icon="envelope" disabled />
                </BottomNavIcons>

                <h4>Overflow</h4>
                <div style={{ width: "360px" }}>
                    <BottomNavNormal themeColor="primary" border flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused Long" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled Long Text" disabled />
                    </BottomNavNormal>
                </div>

                <h4>k-bottom-nav-link</h4>
                <div style={{ width: "360px" }}>
                    <BottomNavLinks themeColor="primary" flow="vertical">
                        <BottomNavItem link="Inbox" selected />
                        <BottomNavItem link="Profile" />
                    </BottomNavLinks>
                </div>
            </section>
        </div>
    </>
);
