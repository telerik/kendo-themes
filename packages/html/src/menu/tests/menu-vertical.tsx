import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-animation-container {
        position: relative;
        display: inline-block;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Vertical Menu</span>
            <span>Vertical Scrolling Menu</span>

            <section>
                <ul id="menu" className="k-widget k-reset k-header k-menu k-menu-vertical">
                    <li className="k-item k-menu-item k-disabled k-first">
                        <span className="k-link k-menu-link">
                            <span className="k-menu-link-text">Disabled</span>
                        </span>
                    </li>
                    <li className="k-item k-menu-item">
                        <span className="k-link k-menu-link">
                            <span className="k-menu-link-text">Normal</span>
                        </span>
                    </li>
                    <li className="k-item k-menu-item k-hover">
                        <span className="k-link k-menu-link">
                            <span className="k-menu-link-text">Hover</span>
                            <span className="k-menu-expand-arrow">
                                <Icon icon="caret-alt-right"></Icon>
                            </span>
                        </span>
                    </li>
                    <li className="k-item k-menu-item k-active">
                        <span className="k-link k-menu-link">
                            <span className="k-menu-link-text">Active</span>
                            <span className="k-menu-expand-arrow">
                                <Icon icon="caret-alt-right"></Icon>
                            </span>
                        </span>
                    </li>
                    <li className="k-item k-menu-item k-focus">
                        <span className="k-link k-menu-link">
                            <span className="k-menu-link-text">Focus</span>
                        </span>
                    </li>
                    <li className="k-item k-menu-item">
                        <span className="k-link k-menu-link">
                            <Icon icon="folder"></Icon>
                            <span className="k-menu-link-text">Normal with icon</span>
                            <span className="k-menu-expand-arrow">
                                <Icon icon="caret-alt-right"></Icon>
                            </span>
                        </span>
                    </li>
                    <li className="k-item k-menu-item k-hover">
                        <span className="k-link k-menu-link">
                            <Icon icon="folder"></Icon>
                            <span className="k-menu-link-text">Hover with icon</span>
                            <span className="k-menu-expand-arrow">
                                <Icon icon="caret-alt-right"></Icon>
                            </span>
                        </span>
                    </li>
                    <li className="k-item k-menu-item k-active">
                        <span className="k-link k-menu-link">
                            <Icon icon="folder"></Icon>
                            <span className="k-menu-link-text">Active with icon</span>
                            <span className="k-menu-expand-arrow">
                                <Icon icon="caret-alt-right"></Icon>
                            </span>
                        </span>
                    </li>
                    <li className="k-item k-menu-item k-focus">
                        <span className="k-link k-menu-link">
                            <Icon icon="folder"></Icon>
                            <span className="k-menu-link-text">Focus with icon</span>
                            <span className="k-menu-expand-arrow">
                                <Icon icon="caret-alt-right"></Icon>
                            </span>
                        </span>
                    </li>
                </ul>
            </section>

            <section>
                <div className="k-menu-scroll-wrapper vertical">
                    <ul id="menu" className="k-widget k-reset k-header k-menu k-menu-vertical" style={{ height: "150px" }} >
                        <li className="k-item k-menu-item k-first">
                            <span className="k-link k-menu-link">
                                <span className="k-menu-link-text">Item 1</span>
                            </span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">
                                <span className="k-menu-link-text">Item 2</span>
                            </span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">
                                <span className="k-menu-link-text">Item 3</span>
                            </span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">
                                <span className="k-menu-link-text">Item 4</span>
                            </span>
                        </li>
                        <li className="k-item k-menu-item k-last">
                            <span className="k-link k-menu-link">
                                <span className="k-menu-link-text">Item 5</span>
                            </span>
                        </li>
                        <li className="k-item k-menu-item k-last">
                            <span className="k-link k-menu-link">
                                <span className="k-menu-link-text">Item 6</span>
                            </span>
                        </li>
                    </ul>
                    <Button icon="caret-alt-up" className="k-menu-scroll-button k-scroll-up"></Button>
                    <Button icon="caret-alt-down" className="k-menu-scroll-button k-scroll-down"></Button>
                </div>
            </section>
        </div>

    </>
);
