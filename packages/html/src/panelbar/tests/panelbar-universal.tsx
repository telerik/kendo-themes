import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-sprite {
        background-color: gray;
    }
    .k-image {
        width: 16px;
        height: 16px;
        display: inline-block;
        background-color: gold;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span className="k-colspan-all k-col-span-full">LTR</span>

            <section>
                <ul className="k-panelbar">
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <Icon className="k-panelbar-item-icon" name="cog" />
                            <span className="k-panelbar-item-text">Root</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-hover">
                            <span className="k-panelbar-item-icon k-image"></span>
                            <span className="k-panelbar-item-text">Root hover</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-focus">
                            <span className="k-panelbar-item-icon k-sprite"></span>
                            <span className="k-panelbar-item-text">Root focus</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-focus k-state-hover">
                            <span className="k-panelbar-item-icon k-sprite"></span>
                            <span className="k-panelbar-item-text">Root hover&focus</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-disabled">
                            <span className="k-panelbar-item-text">Root disabled</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-selected">
                            <span className="k-panelbar-item-text">Root selected</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-selected k-state-hover">
                            <span className="k-panelbar-item-text">Root selected hover</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-selected k-state-focus">
                            <span className="k-panelbar-item-text">Root selected focus</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-selected k-state-focus k-state-hover">
                            <span className="k-panelbar-item-text">Root selected hover&focus</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                </ul>
            </section>

            <section>
                <ul className="k-panelbar">
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">First</span>
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-state-expanded k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Middle expanded</span>
                            <Icon className="k-panelbar-toggle k-panelbar-collapse" name="arrow-chevron-up" />
                        </span>
                        <ul className="k-panelbar-group k-panel k-group">
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link">
                                    <span className="k-panelbar-item-text">Child</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-hover">
                                    <span className="k-panelbar-item-text">Child hover</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-focus">
                                    <span className="k-panelbar-item-text">Child focus</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-focus k-state-hover">
                                    <span className="k-panelbar-item-text">Child focus&hover</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-selected">
                                    <span className="k-panelbar-item-text">Child selected</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-selected k-state-hover">
                                    <span className="k-panelbar-item-text">Child selected hover</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-selected k-state-focus">
                                    <span className="k-panelbar-item-text">Child selected focus</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-selected k-state-focus k-state-hover">
                                    <span className="k-panelbar-item-text">Child selected focus&hover</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-state-expanded k-level-1">
                                <span className="k-link">
                                    <span className="k-panelbar-item-text">Child expanded</span>
                                    <Icon className="k-panelbar-toggle k-panelbar-collapse" name="arrow-chevron-up" />
                                </span>
                                <ul className="k-panelbar-group k-panel k-group">
                                    <li className="k-panelbar-item k-item k-level-2">
                                        <span className="k-link">
                                            <span className="k-panelbar-item-text">Child</span>
                                        </span>
                                    </li>
                                    <li className="k-panelbar-item k-item k-level-2">
                                        <span className="k-link">
                                            <span className="k-panelbar-item-text">Child</span>
                                        </span>
                                    </li>
                                    <li className="k-panelbar-item k-item k-level-2">
                                        <span className="k-link">
                                            <span className="k-panelbar-item-text">Child</span>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-disabled">
                                    <span className="k-panelbar-item-text">Child disabled</span>
                                    <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link">
                                    <span className="k-panelbar-item-text">Child last</span>
                                </span>
                            </li>
                        </ul>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Last</span>
                        </span>
                    </li>
                </ul>
            </section>

            <section>
                <ul className="k-panelbar">
                    <li className="k-panelbar-header k-item k-state-expanded k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">First expanded</span>
                            <Icon className="k-panelbar-toggle k-panelbar-collapse" name="arrow-chevron-up" />
                        </span>
                        <div className="k-panelbar-content">
                            <h4>Title in template</h4>
                            <p>Multi line paragraph in template. Some more content to break onto multiple lines</p>
                        </div>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Middle</span>
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Last</span>
                        </span>
                    </li>
                </ul>
            </section>

            <section>
                <ul className="k-panelbar">
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">First</span>
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Middle</span>
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-state-expanded k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Last expanded</span>
                            <Icon className="k-panelbar-toggle k-panelbar-collapse" name="arrow-chevron-up" />
                        </span>
                        <div className="k-panelbar-content">
                            <h4>Title in template</h4>
                            <p>Multi line paragraph in template. Some more content to break onto multiple lines</p>
                        </div>
                    </li>
                </ul>
            </section>

            <span className="k-colspan-all k-col-span-full">RTL</span>

            <section className="k-rtl">
                <ul className="k-panelbar">
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <Icon className="k-panelbar-item-icon" name="cog" />
                            <span className="k-panelbar-item-text">Root</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-hover">
                            <span className="k-panelbar-item-icon k-image"></span>
                            <span className="k-panelbar-item-text">Root hover</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-focus">
                            <span className="k-panelbar-item-icon k-sprite"></span>
                            <span className="k-panelbar-item-text">Root focus</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-focus k-state-hover">
                            <span className="k-panelbar-item-icon k-sprite"></span>
                            <span className="k-panelbar-item-text">Root hover&focus</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-disabled">
                            <span className="k-panelbar-item-text">Root disabled</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-selected">
                            <span className="k-panelbar-item-text">Root selected</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-selected k-state-hover">
                            <span className="k-panelbar-item-text">Root selected hover</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-selected k-state-focus">
                            <span className="k-panelbar-item-text">Root selected focus</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link k-state-selected k-state-focus k-state-hover">
                            <span className="k-panelbar-item-text">Root selected hover&focus</span>
                            <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </li>
                </ul>
            </section>

            <section className="k-rtl">
                <ul className="k-panelbar">
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">First</span>
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-state-expanded k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Middle expanded</span>
                            <Icon className="k-panelbar-toggle k-panelbar-collapse" name="arrow-chevron-up" />
                        </span>
                        <ul className="k-panelbar-group k-panel k-group">
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link">
                                    <span className="k-panelbar-item-text">Child</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-hover">
                                    <span className="k-panelbar-item-text">Child hover</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-focus">
                                    <span className="k-panelbar-item-text">Child focus</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-focus k-state-hover">
                                    <span className="k-panelbar-item-text">Child focus&hover</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-selected">
                                    <span className="k-panelbar-item-text">Child selected</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-selected k-state-hover">
                                    <span className="k-panelbar-item-text">Child selected hover</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-selected k-state-focus">
                                    <span className="k-panelbar-item-text">Child selected focus</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-selected k-state-focus k-state-hover">
                                    <span className="k-panelbar-item-text">Child selected focus&hover</span>
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-state-expanded k-level-1">
                                <span className="k-link">
                                    <span className="k-panelbar-item-text">Child expanded</span>
                                    <Icon className="k-panelbar-toggle k-panelbar-collapse" name="arrow-chevron-up" />
                                </span>
                                <ul className="k-panelbar-group k-panel k-group">
                                    <li className="k-panelbar-item k-item k-level-2">
                                        <span className="k-link">
                                            <span className="k-panelbar-item-text">Child</span>
                                        </span>
                                    </li>
                                    <li className="k-panelbar-item k-item k-level-2">
                                        <span className="k-link">
                                            <span className="k-panelbar-item-text">Child</span>
                                        </span>
                                    </li>
                                    <li className="k-panelbar-item k-item k-level-2">
                                        <span className="k-link">
                                            <span className="k-panelbar-item-text">Child</span>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link k-state-disabled">
                                    <span className="k-panelbar-item-text">Child disabled</span>
                                    <Icon className="k-panelbar-toggle k-panelbar-expand" name="arrow-chevron-down" />
                                </span>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link">
                                    <span className="k-panelbar-item-text">Child last</span>
                                </span>
                            </li>
                        </ul>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Last</span>
                        </span>
                    </li>
                </ul>
            </section>

            <section className="k-rtl">
                <ul className="k-panelbar">
                    <li className="k-panelbar-header k-item k-state-expanded k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">First expanded</span>
                            <Icon className="k-panelbar-toggle k-panelbar-collapse" name="arrow-chevron-up" />
                        </span>
                        <div className="k-panelbar-content">
                            <h4>Title in template</h4>
                            <p>Multi line paragraph in template. Some more content to break onto multiple lines</p>
                        </div>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Middle</span>
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Last</span>
                        </span>
                    </li>
                </ul>
            </section>

            <section className="k-rtl">
                <ul className="k-panelbar">
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">First</span>
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Middle</span>
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-state-expanded k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Last expanded</span>
                            <Icon className="k-panelbar-toggle k-panelbar-collapse" name="arrow-chevron-up" />
                        </span>
                        <div className="k-panelbar-content">
                            <h4>Title in template</h4>
                            <p>Multi line paragraph in template. Some more content to break onto multiple lines</p>
                        </div>
                    </li>
                </ul>
            </section>

        </div>
    </>
);
