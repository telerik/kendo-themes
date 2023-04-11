import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <h2 className="k-col-start-1 k-col-end-2 k-text-center">Drawer Push Mode</h2>
            <span>Drawer mini left</span>
            <section>
                <div className="k-drawer-container k-drawer-left k-drawer-push k-drawer-mini k-drawer-expanded">
                    <div className="k-widget k-drawer">
                        <div className="k-drawer-wrapper">
                            <div className="k-drawer-items">
                                <ul>
                                    <li className="k-drawer-item">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Item</span>
                                    </li>
                                    <li className="k-drawer-item k-drawer-separator"></li>
                                    <li className="k-drawer-item k-hover">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Hover</span>
                                    </li>
                                    <li className="k-drawer-item k-selected">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Selected</span>
                                    </li>
                                    <li className="k-drawer-item k-selected k-hover">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Selected hover</span>
                                    </li>
                                    <li className="k-drawer-item k-focus">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Focus</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="k-drawer-content" style={{ padding: "0 20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.olor sit amet consectetur
                        adipisicing elit. Error accusantium odit, optio nulla maiores quo neque fugit debitis dignissimos incidunt
                        maxime? Eum voluptatem blanditiis voluptatum praesentium dolorem, dolore placeat debitis quod delectus laborum
                        assumenda cupiditate.
                    </div>
                </div>
            </section>

            <span>Drawer mini right</span>
            <section>
                <div className="k-drawer-container k-drawer-right k-drawer-push k-drawer-mini k-drawer-expanded">
                    <div className="k-widget k-drawer">
                        <div className="k-drawer-wrapper">
                            <div className="k-drawer-items">
                                <ul>
                                    <li className="k-drawer-item">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Item</span>
                                    </li>
                                    <li className="k-drawer-item k-drawer-separator"></li>
                                    <li className="k-drawer-item k-hover">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Hover</span>
                                    </li>
                                    <li className="k-drawer-item k-selected">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Selected</span>
                                    </li>
                                    <li className="k-drawer-item k-selected k-hover">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Selected hover</span>
                                    </li>
                                    <li className="k-drawer-item k-focus">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Focus</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="k-drawer-content" style={{ padding: "0 20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.olor sit amet consectetur
                        adipisicing elit. Error accusantium odit, optio nulla maiores quo neque fugit debitis dignissimos incidunt
                        maxime? Eum voluptatem blanditiis voluptatum praesentium dolorem, dolore placeat debitis quod delectus laborum
                        assumenda cupiditate.
                    </div>
                </div>
            </section>


            <span>Drawer left</span>
            <section>
                <div className="k-drawer-container k-drawer-left k-drawer-push k-drawer-expanded">
                    <div className="k-widget k-drawer">
                        <div className="k-drawer-wrapper" style={{ width: "280px" }}>
                            <div className="k-drawer-items">
                                <ul>
                                    <li className="k-drawer-item">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Item</span>
                                    </li>
                                    <li className="k-drawer-item k-drawer-separator"></li>
                                    <li className="k-drawer-item k-hover">
                                        <Icon icon="twitter" />
                                        <span className="k-item-text">Hover</span>
                                    </li>
                                    <li className="k-drawer-item k-selected">
                                        <Icon icon="anchor" />
                                        <span className="k-item-text">Selected</span>
                                    </li>
                                    <li className="k-drawer-item">
                                        <span className="k-item-text">Item</span>
                                    </li>
                                    <li className="k-drawer-item k-drawer-separator"></li>
                                    <li className="k-drawer-item">
                                        <span className="k-drawer-link">
                                            <Icon icon="anchor" />
                                            <span className="k-item-text">Drawer Link</span>
                                        </span>
                                    </li>
                                    <li className="k-drawer-item k-selected k-hover">
                                        <span className="k-item-text">Selected hover</span>
                                    </li>
                                    <li className="k-drawer-item k-focus">
                                        <span className="k-item-text">Focus</span>
                                    </li>
                                    <li className="k-drawer-item k-selected k-focus">
                                        <span className="k-item-text">Selected focus</span>
                                    </li>
                                    <li className="k-drawer-item">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Collapsed</span>
                                        <span className="k-spacer"></span>
                                        <span className="k-drawer-toggle">
                                            <Icon icon="chevron-down" />
                                        </span>
                                    </li>
                                    <li className="k-drawer-item">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Expanded</span>
                                        <span className="k-spacer"></span>
                                        <span className="k-drawer-toggle">
                                            <Icon icon="chevron-up" />
                                        </span>
                                    </li>
                                    <li className="k-drawer-item k-level-1">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Child Lvl 1</span>
                                    </li>
                                    <li className="k-drawer-item k-level-2">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Child Lvl 2</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="k-drawer-content" style={{ padding: "0 20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.olor sit amet consectetur
                            adipisicing elit. Error accusantium odit, optio nulla maiores quo neque fugit debitis dignissimos incidunt
                            maxime? Eum voluptatem blanditiis voluptatum praesentium dolorem, dolore placeat debitis quod delectus laborum
                            assumenda cupiditate.
                    </div>
                </div>
            </section>

            <span>Drawer right</span>
            <section>
                <div className="k-drawer-container k-drawer-right k-drawer-push k-drawer-expanded">
                    <div className="k-widget k-drawer">
                        <div className="k-drawer-wrapper" style={{ width: "280px" }}>
                            <div className="k-drawer-items">
                                <ul>
                                    <li className="k-drawer-item">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Item</span>
                                    </li>
                                    <li className="k-drawer-item k-drawer-separator"></li>
                                    <li className="k-drawer-item k-hover">
                                        <Icon icon="twitter" />
                                        <span className="k-item-text">Hover</span>
                                    </li>
                                    <li className="k-drawer-item k-selected">
                                        <Icon icon="anchor" />
                                        <span className="k-item-text">Selected</span>
                                    </li>
                                    <li className="k-drawer-item">
                                        <span className="k-item-text">Item</span>
                                    </li>
                                    <li className="k-drawer-item k-drawer-separator"></li>
                                    <li className="k-drawer-item">
                                        <span className="k-drawer-link">
                                            <Icon icon="anchor" />
                                            <span className="k-item-text">Drawer Link</span>
                                        </span>
                                    </li>
                                    <li className="k-drawer-item k-selected k-hover">
                                        <span className="k-item-text">Selected hover</span>
                                    </li>
                                    <li className="k-drawer-item k-focus">
                                        <span className="k-item-text">Focus</span>
                                    </li>
                                    <li className="k-drawer-item k-selected k-focus">
                                        <span className="k-item-text">Selected focus</span>
                                    </li>
                                    <li className="k-drawer-item">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Collapsed</span>
                                        <span className="k-spacer"></span>
                                        <span className="k-drawer-toggle">
                                            <Icon icon="chevron-down" />
                                        </span>
                                    </li>
                                    <li className="k-drawer-item">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Expanded</span>
                                        <span className="k-spacer"></span>
                                        <span className="k-drawer-toggle">
                                            <Icon icon="chevron-up" />
                                        </span>
                                    </li>
                                    <li className="k-drawer-item k-level-1">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Child Lvl 1</span>
                                    </li>
                                    <li className="k-drawer-item k-level-2">
                                        <Icon icon="star-outline" />
                                        <span className="k-item-text">Child Lvl 2</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="k-drawer-content" style={{ padding: "0 20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.olor sit amet consectetur
                            adipisicing elit. Error accusantium odit, optio nulla maiores quo neque fugit debitis dignissimos incidunt
                            maxime? Eum voluptatem blanditiis voluptatum praesentium dolorem, dolore placeat debitis quod delectus laborum
                            assumenda cupiditate.
                    </div>
                </div>
            </section>
        </div>
    </>
);
