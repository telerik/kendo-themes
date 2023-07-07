import { Icon } from '../../icon';
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
                <h4>Bottom Navigation with SPAN</h4>
                <BottomNav fillMode="flat" themeColor="primary" border flow="vertical">
                    <BottomNavItem icon="envelope" text="Normal" />
                    <BottomNavItem icon="envelope" text="Focused" focus />
                    <BottomNavItem icon="envelope" text="Selected" selected />
                    <BottomNavItem icon="envelope" text="Disabled" disabled />
                </BottomNav>
            </section>

            <section>
                <h4>Bottom Navigation with BUTTON</h4>
                <BottomNav fillMode="flat" themeColor="primary" border flow="vertical">
                    <button className="k-bottom-nav-item">
                        <Icon className="k-bottom-nav-item-icon" icon="envelope" size="xlarge" />
                        <span className="k-bottom-nav-item-text">Normal</span>
                    </button>
                    <button className="k-bottom-nav-item k-focus">
                        <Icon className="k-bottom-nav-item-icon" icon="envelope" size="xlarge" />
                        <span className="k-bottom-nav-item-text">Focused</span>
                    </button>
                    <button className="k-bottom-nav-item k-selected">
                        <Icon className="k-bottom-nav-item-icon" icon="envelope" size="xlarge" />
                        <span className="k-bottom-nav-item-text">Selected</span>
                    </button>
                    <button className="k-bottom-nav-item k-disabled">
                        <Icon className="k-bottom-nav-item-icon" icon="envelope" size="xlarge" />
                        <span className="k-bottom-nav-item-text">Disabled</span>
                    </button>
                </BottomNav>
            </section>

            <section>
                <h4>Bottom Navigation with A</h4>
                <BottomNav fillMode="flat" themeColor="primary" border flow="vertical">
                    <a className="k-bottom-nav-item">
                        <Icon className="k-bottom-nav-item-icon" icon="envelope" size="xlarge" />
                        <span className="k-bottom-nav-item-text">Normal</span>
                    </a>
                    <a className="k-bottom-nav-item k-focus" href="#">
                        <Icon className="k-bottom-nav-item-icon" icon="envelope" size="xlarge" />
                        <span className="k-bottom-nav-item-text">Focused</span>
                    </a>
                    <a className="k-bottom-nav-item k-selected">
                        <Icon className="k-bottom-nav-item-icon" icon="envelope" size="xlarge" />
                        <span className="k-bottom-nav-item-text">Selected</span>
                    </a>
                    <a className="k-bottom-nav-item k-disabled">
                        <Icon className="k-bottom-nav-item-icon" icon="envelope" size="xlarge" />
                        <span className="k-bottom-nav-item-text">Disabled</span>
                    </a>
                </BottomNav>
            </section>
        </div>
    </>
);
