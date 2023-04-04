import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

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
                <nav className="k-bottom-nav k-bottom-nav-primary k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-horizontal">
                    <span className="k-bottom-nav-item">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Normal</span>
                    </span>
                    <span className="k-bottom-nav-item k-focus">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Focused</span>
                    </span>
                    <span className="k-bottom-nav-item k-selected">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Selected</span>
                    </span>
                    <span className="k-bottom-nav-item k-disabled">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Disabled</span>
                    </span>
                </nav>

                <h4>Vertical</h4>
                <nav className="k-bottom-nav k-bottom-nav-primary k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-vertical">
                    <span className="k-bottom-nav-item">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Normal</span>
                    </span>
                    <span className="k-bottom-nav-item k-focus">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Focused</span>
                    </span>
                    <span className="k-bottom-nav-item k-selected">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Selected</span>
                    </span>
                    <span className="k-bottom-nav-item k-disabled">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                        <span className="k-bottom-nav-item-text">Disabled</span>
                    </span>
                </nav>

                <h4>Icons only</h4>
                <nav className="k-bottom-nav k-bottom-nav-primary k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-horizontal">
                    <span className="k-bottom-nav-item">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                    </span>
                    <span className="k-bottom-nav-item k-focus">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                    </span>
                    <span className="k-bottom-nav-item k-selected">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                    </span>
                    <span className="k-bottom-nav-item k-disabled">
                        <Icon className="k-bottom-nav-item-icon" name="email" />
                    </span>
                </nav>

                <h4>Overflow</h4>
                <div style={{ width: "360px" }}>
                    <nav className="k-bottom-nav k-bottom-nav-primary k-bottom-nav-flat k-bottom-nav-border k-bottom-nav-item-flow-vertical">
                        <span className="k-bottom-nav-item">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Normal</span>
                        </span>
                        <span className="k-bottom-nav-item k-focus">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Focused Long</span>
                        </span>
                        <span className="k-bottom-nav-item k-selected">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Selected</span>
                        </span>
                        <span className="k-bottom-nav-item k-disabled">
                            <Icon className="k-bottom-nav-item-icon" name="email" />
                            <span className="k-bottom-nav-item-text">Disabled Long Text</span>
                        </span>
                    </nav>
                </div>

                <h4>k-bottom-nav-link</h4>
                <div style={{ width: "360px" }}>
                    <div className="k-bottom-nav k-bottom-nav-flat k-bottom-nav-item-flow-vertical k-bottom-nav-primary">
                        <span className="k-bottom-nav-item k-selected">
                            <div className="k-bottom-nav-link"><span>Inbox</span></div>
                        </span>
                        <span className="k-bottom-nav-item">
                            <div className="k-bottom-nav-link"><span>Profile</span></div>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    </>
);
