import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area h2 {
        text-align: center;
        grid-column-start: 1;
        grid-column-end: 3;
        margin: 0;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <h2>Drawer Push Mode</h2>
            <section>
                <h4>Drawer mini left</h4>
                <div className="k-drawer-container k-drawer-left k-drawer-push k-drawer-mini k-drawer-expanded">
                    <div className="k-widget k-drawer">
                        <div className="k-drawer-wrapper">
                            <div className="k-drawer-items">
                                <ul>
                                    <li className="k-drawer-item">
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Item</span>
                                    </li>
                                    <li className="k-drawer-item k-drawer-separator"></li>
                                    <li className="k-drawer-item k-state-hover">
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Hover</span>
                                    </li>
                                    <li className="k-drawer-item k-state-selected">
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Selected</span>
                                    </li>
                                    <li className="k-drawer-item k-state-selected k-state-hover">
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Selected hover</span>
                                    </li>
                                    <li className="k-drawer-item k-state-focused">
                                        <Icon name="star-outline" />
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

            <section>
                <h4> Drawer mini right</h4>
                <div className="k-drawer-container k-drawer-right k-drawer-push k-drawer-mini k-drawer-expanded">
                    <div className="k-widget k-drawer">
                        <div className="k-drawer-wrapper">
                            <div className="k-drawer-items">
                                <ul>
                                    <li className="k-drawer-item">
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Item</span>
                                    </li>
                                    <li className="k-drawer-item k-drawer-separator"></li>
                                    <li className="k-drawer-item k-state-hover">
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Hover</span>
                                    </li>
                                    <li className="k-drawer-item k-state-selected">
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Selected</span>
                                    </li>
                                    <li className="k-drawer-item k-state-selected k-state-hover">
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Selected hover</span>
                                    </li>
                                    <li className="k-drawer-item k-state-focused">
                                        <Icon name="star-outline" />
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


            <section>
                <h4>Drawer left</h4>
                <div className="k-drawer-container k-drawer-left k-drawer-push k-drawer-expanded">
                    <div className="k-widget k-drawer">
                        <div className="k-drawer-wrapper" style={{ width: "280px" }}>
                            <div className="k-drawer-items">
                                <ul>
                                    <li className="k-drawer-item">
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Item</span>
                                    </li>
                                    <li className="k-drawer-item k-drawer-separator"></li>
                                    <li className="k-drawer-item k-state-hover">
                                        <Icon name="twitter" />
                                        <span className="k-item-text">Hover</span>
                                    </li>
                                    <li className="k-drawer-item k-state-selected">
                                        <Icon name="anchor" />
                                        <span className="k-item-text">Selected</span>
                                    </li>
                                    <li className="k-drawer-item">
                                        <span className="k-item-text">Item</span>
                                    </li>
                                    <li className="k-drawer-item k-drawer-separator"></li>
                                    <li className="k-drawer-item">
                                        <span className="k-drawer-link">
                                            <Icon name="anchor" />
                                            <span className="k-item-text">Drawer Link</span>
                                        </span>
                                    </li>
                                    <li className="k-drawer-item k-state-selected k-state-hover">
                                        <span className="k-item-text">Selected hover</span>
                                    </li>
                                    <li className="k-drawer-item k-state-focused">
                                        <span className="k-item-text">Focus</span>
                                    </li>
                                    <li className="k-drawer-item k-state-selected k-state-focused">
                                        <span className="k-item-text">Selected focus</span>
                                    </li>
                                    <li className="k-drawer-item">
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Collapsed</span>
                                        <span className="k-spacer"></span>
                                        <Icon name="arrow-chevron-down" />
                                    </li>
                                    <li className="k-drawer-item">
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Expanded</span>
                                        <span className="k-spacer"></span>
                                        <Icon name="arrow-chevron-up" />
                                    </li>
                                    <li className="k-drawer-item">
                                        <Icon name="none" />
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Child Lvl 1</span>
                                    </li>
                                    <li className="k-drawer-item">
                                        <Icon name="none" />
                                        <Icon name="none" />
                                        <Icon name="star-outline" />
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

            <section>
                <h4>Drawer right</h4>
                <div className="k-drawer-container k-drawer-right k-drawer-push k-drawer-expanded">
                    <div className="k-widget k-drawer">
                        <div className="k-drawer-wrapper" style={{ width: "280px" }}>
                            <div className="k-drawer-items">
                                <ul>
                                    <li className="k-drawer-item">
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Item</span>
                                    </li>
                                    <li className="k-drawer-item k-drawer-separator"></li>
                                    <li className="k-drawer-item k-state-hover">
                                        <Icon name="twitter" />
                                        <span className="k-item-text">Hover</span>
                                    </li>
                                    <li className="k-drawer-item k-state-selected">
                                        <Icon name="anchor" />
                                        <span className="k-item-text">Selected</span>
                                    </li>
                                    <li className="k-drawer-item">
                                        <span className="k-item-text">Item</span>
                                    </li>
                                    <li className="k-drawer-item k-drawer-separator"></li>
                                    <li className="k-drawer-item">
                                        <span className="k-drawer-link">
                                            <Icon name="anchor" />
                                            <span className="k-item-text">Drawer Link</span>
                                        </span>
                                    </li>
                                    <li className="k-drawer-item k-state-selected k-state-hover">
                                        <span className="k-item-text">Selected hover</span>
                                    </li>
                                    <li className="k-drawer-item k-state-focused">
                                        <span className="k-item-text">Focus</span>
                                    </li>
                                    <li className="k-drawer-item k-state-selected k-state-focused">
                                        <span className="k-item-text">Selected focus</span>
                                    </li>
                                    <li className="k-drawer-item">
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Collapsed</span>
                                        <span className="k-spacer"></span>
                                        <Icon name="arrow-chevron-down" />
                                    </li>
                                    <li className="k-drawer-item">
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Expanded</span>
                                        <span className="k-spacer"></span>
                                        <Icon name="arrow-chevron-up" />
                                    </li>
                                    <li className="k-drawer-item">
                                        <Icon name="none" />
                                        <Icon name="star-outline" />
                                        <span className="k-item-text">Child Lvl 1</span>
                                    </li>
                                    <li className="k-drawer-item">
                                        <Icon name="none" />
                                        <Icon name="none" />
                                        <Icon name="star-outline" />
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
