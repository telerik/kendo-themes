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
                <h4>Bottom Navigation RTL Horizontal</h4>
                <BottomNav fillMode="flat" themeColor="primary" border dir="rtl">
                    <BottomNavItem icon="envelop" text="Normal" />
                    <BottomNavItem icon="envelop" text="Focused" focus />
                    <BottomNavItem icon="envelop" text="Selected" selected />
                    <BottomNavItem icon="envelop" text="Disabled" disabled />
                </BottomNav>
            </section>

            <section>
                <h4>Bottom Navigation RTL Vertical</h4>
                <BottomNav fillMode="flat" themeColor="primary" border flow="vertical" dir="rtl">
                    <BottomNavItem icon="envelop" text="Normal" />
                    <BottomNavItem icon="envelop" text="Focused" focus />
                    <BottomNavItem icon="envelop" text="Selected" selected />
                    <BottomNavItem icon="envelop" text="Disabled" disabled />
                </BottomNav>
            </section>
        </div>
    </>
);
