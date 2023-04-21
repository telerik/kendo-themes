import ReactDOM from 'react-dom/client';
import { BottomNav, BottomNavItem } from '../../bottom-nav';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
#test-area {
    background-color: #f3f5f7;
}
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <h4>Horizontal</h4>
                <BottomNav fillMode="flat" themeColor="primary" border>
                    <BottomNavItem icon="email" text="Normal" />
                    <BottomNavItem icon="email" text="Focused" focus />
                    <BottomNavItem icon="email" text="Selected" selected />
                    <BottomNavItem icon="email" text="Disabled" disabled />
                </BottomNav>

                <h4>Vertical</h4>
                <BottomNav fillMode="flat" themeColor="primary" border flow="vertical">
                    <BottomNavItem icon="email" text="Normal" />
                    <BottomNavItem icon="email" text="Focused" focus />
                    <BottomNavItem icon="email" text="Selected" selected />
                    <BottomNavItem icon="email" text="Disabled" disabled />
                </BottomNav>

                <h4>Icons only</h4>
                <BottomNav fillMode="flat" themeColor="primary" border>
                    <BottomNavItem icon="email" />
                    <BottomNavItem icon="email" focus />
                    <BottomNavItem icon="email" selected />
                    <BottomNavItem icon="email" disabled />
                </BottomNav>

                <h4>Overflow</h4>
                <div style={{ width: "360px" }}>
                    <BottomNav fillMode="flat" themeColor="primary" border flow="vertical">
                        <BottomNavItem icon="email" text="Normal" />
                        <BottomNavItem icon="email" text="Focused Long" focus />
                        <BottomNavItem icon="email" text="Selected" selected />
                        <BottomNavItem icon="email" text="Disabled Long Text" disabled />
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
