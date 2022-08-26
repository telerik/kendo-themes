import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>hierarchical items</span>
            <span>hierarchical items - RTL</span>
            <span></span>
            <span></span>

            <section>
                <div className="k-drawer-container k-drawer-push k-drawer-expanded">
                    <div className="k-widget k-drawer k-drawer-start">
                        <div className="k-drawer-wrapper">
                            <ul className="k-drawer-items">
                                <li className="k-drawer-item k-level-0">
                                    <Icon name="information" />
                                    <span className="k-item-text">Getting Started</span>
                                    <span className="k-drawer-toggle"><Icon name="arrow-chevron-down" /></span>
                                </li>
                                <li className="k-drawer-item k-hover k-level-1">
                                    <Icon name="question" />
                                    <span className="k-item-text">About Kendo UI</span>
                                </li>
                                <li className="k-drawer-item k-selected k-level-2">
                                    <Icon name="palette" />
                                    <span className="k-item-text">Supported Themes</span>
                                </li>
                                <li className="k-drawer-item k-level-0">
                                    <Icon name="zoom" />
                                    <span className="k-item-text">Overview</span>
                                    <span className="k-drawer-toggle"><Icon name="arrow-chevron-up" /></span>
                                </li>
                                <li className="k-drawer-item k-level-0">
                                    <Icon name="star" />
                                    <span className="k-item-text">Most Popular Widgets</span>
                                    <span className="k-drawer-toggle"><Icon name="arrow-chevron-down" /></span>
                                </li>
                                <li className="k-drawer-item k-level-1">
                                    <Icon name="palette" />
                                    <span className="k-item-text">Supported Themes</span>
                                </li>
                                <li className="k-drawer-item k-level-1">
                                    <Icon name="button" />
                                    <span className="k-item-text">Button Package</span>
                                </li>
                                <li className="k-drawer-item k-level-2">
                                    <Icon name="button" />
                                    <span className="k-item-text">Split Button</span>
                                </li>
                                <li className="k-drawer-item k-level-3">
                                    <Icon name="question" />
                                    <span className="k-item-text">API</span>
                                </li>
                                <li className="k-drawer-item k-level-2">
                                    <Icon name="button" />
                                    <span className="k-item-text">Chip List</span>
                                </li>
                                <li className="k-drawer-item k-level-3">
                                    <Icon name="question" />
                                    <span className="k-item-text">API</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div dir="rtl" className="k-drawer-container k-drawer-push k-drawer-expanded">
                    <div className="k-widget k-drawer k-drawer-start">
                        <div className="k-drawer-wrapper">
                            <ul className="k-drawer-items">
                                <li className="k-drawer-item k-level-0">
                                    <Icon name="information" />
                                    <span className="k-item-text">Getting Started</span>
                                    <span className="k-drawer-toggle"><Icon name="arrow-chevron-down" /></span>
                                </li>
                                <li className="k-drawer-item k-hover k-level-1">
                                    <Icon name="question" />
                                    <span className="k-item-text">About Kendo UI</span>
                                </li>
                                <li className="k-drawer-item k-selected k-level-2">
                                    <Icon name="palette" />
                                    <span className="k-item-text">Supported Themes</span>
                                </li>
                                <li className="k-drawer-item k-level-0">
                                    <Icon name="zoom" />
                                    <span className="k-item-text">Overview</span>
                                    <span className="k-drawer-toggle"><Icon name="arrow-chevron-up" /></span>
                                </li>
                                <li className="k-drawer-item k-level-0">
                                    <Icon name="star" />
                                    <span className="k-item-text">Most Popular Widgets</span>
                                    <span className="k-drawer-toggle"><Icon name="arrow-chevron-down" /></span>
                                </li>
                                <li className="k-drawer-item k-level-1">
                                    <Icon name="palette" />
                                    <span className="k-item-text">Supported Themes</span>
                                </li>
                                <li className="k-drawer-item k-level-1">
                                    <Icon name="button" />
                                    <span className="k-item-text">Button Package</span>
                                </li>
                                <li className="k-drawer-item k-level-2">
                                    <Icon name="button" />
                                    <span className="k-item-text">Split Button</span>
                                </li>
                                <li className="k-drawer-item k-level-3">
                                    <Icon name="question" />
                                    <span className="k-item-text">API</span>
                                </li>
                                <li className="k-drawer-item k-level-2">
                                    <Icon name="button" />
                                    <span className="k-item-text">Chip List</span>
                                </li>
                                <li className="k-drawer-item k-level-3">
                                    <Icon name="question" />
                                    <span className="k-item-text">API</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
