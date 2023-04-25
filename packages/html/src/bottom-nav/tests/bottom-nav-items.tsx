import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';
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
                <h4>Bottom Navigation with SPAN</h4>
                <BottomNav fillMode="flat" themeColor="primary" border flow="vertical">
                    <BottomNavItem icon="envelop" text="Normal" />
                    <BottomNavItem icon="envelop" text="Focused" focus />
                    <BottomNavItem icon="envelop" text="Selected" selected />
                    <BottomNavItem icon="envelop" text="Disabled" disabled />
                </BottomNav>
            </section>

            <section>
                <h4>Bottom Navigation with BUTTON</h4>
                <BottomNav fillMode="flat" themeColor="primary" border flow="vertical">
                    <button className="k-bottom-nav-item">
                        <Icon className="k-bottom-nav-item-icon" icon="envelop" />
                        <span className="k-bottom-nav-item-text">Normal</span>
                    </button>
                    <button className="k-bottom-nav-item k-focus">
                        <Icon className="k-bottom-nav-item-icon" icon="envelop" />
                        <span className="k-bottom-nav-item-text">Focused</span>
                    </button>
                    <button className="k-bottom-nav-item k-selected">
                        <Icon className="k-bottom-nav-item-icon" icon="envelop" />
                        <span className="k-bottom-nav-item-text">Selected</span>
                    </button>
                    <button className="k-bottom-nav-item k-disabled">
                        <Icon className="k-bottom-nav-item-icon" icon="envelop" />
                        <span className="k-bottom-nav-item-text">Disabled</span>
                    </button>
                </BottomNav>
            </section>

            <section>
                <h4>Bottom Navigation with A</h4>
                <BottomNav fillMode="flat" themeColor="primary" border flow="vertical">
                    <a className="k-bottom-nav-item">
                        <Icon className="k-bottom-nav-item-icon" icon="envelop" />
                        <span className="k-bottom-nav-item-text">Normal</span>
                    </a>
                    <a className="k-bottom-nav-item k-focus" href="#">
                        <Icon className="k-bottom-nav-item-icon" icon="envelop" />
                        <span className="k-bottom-nav-item-text">Focused</span>
                    </a>
                    <a className="k-bottom-nav-item k-selected">
                        <Icon className="k-bottom-nav-item-icon" icon="envelop" />
                        <span className="k-bottom-nav-item-text">Selected</span>
                    </a>
                    <a className="k-bottom-nav-item k-disabled">
                        <Icon className="k-bottom-nav-item-icon" icon="envelop" />
                        <span className="k-bottom-nav-item-text">Disabled</span>
                    </a>
                </BottomNav>
            </section>
        </div>
    </>
);
