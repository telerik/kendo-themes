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

            <section>
                <div className="k-widget k-panelbar">
                    <div className="k-item">
                        <span className="k-link k-header">
                            <Icon name="cog" className="k-panelbar-item-icon" />
                            Root
                            <Icon className="k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header k-hover">
                            <span className="k-image k-panelbar-item-icon"></span>
                            Root hover
                            <Icon className="k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header k-focus">
                            <span className="k-sprite"></span>
                            Root focus
                            <Icon className="k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header k-selected">
                            Root selected
                            <Icon className="k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </div>
                    <div className="k-item k-disabled">
                        <span className="k-link k-header">
                            Root disabled
                            <Icon className="k-panelbar-expand" name="arrow-chevron-down" />
                        </span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header">
                            Root last
                        </span>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-panelbar">
                    <div className="k-item">
                        <span className="k-link k-header">First</span>
                    </div>
                    <div className="k-item k-expanded">
                        <span className="k-link k-header">
                            Middle expanded
                            <Icon className="k-panelbar-collapse" name="arrow-chevron-up" />
                        </span>
                        <div>
                            <div className="k-panel k-group">
                                <div className="k-item">
                                    <span className="k-link">Child</span>
                                </div>
                                <div className="k-item">
                                    <span className="k-link k-hover">
                                        Child hover
                                        <Icon className="k-panelbar-expand" name="arrow-chevron-down" />
                                    </span>
                                </div>
                                <div className="k-item">
                                    <span className="k-link k-focus">
                                        Child focus
                                        <Icon className="k-panelbar-expand" name="arrow-chevron-down" />
                                    </span>
                                </div>
                                <div className="k-item">
                                    <span className="k-link k-selected">
                                        Child selected
                                        <Icon className="k-panelbar-expand" name="arrow-chevron-down" />
                                    </span>
                                </div>
                                <div className="k-item k-expanded">
                                    <span className="k-link">
                                        Child expanded
                                        <Icon className="k-panelbar-collapse" name="arrow-chevron-up" />
                                    </span>
                                    <div>
                                        <div className="k-panel k-group">
                                            <div className="k-item">
                                                <span className="k-link">Child</span>
                                            </div>
                                            <div className="k-item">
                                                <span className="k-link">Child</span>
                                            </div>
                                            <div className="k-item">
                                                <span className="k-link">Child</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="k-item k-disabled">
                                    <span className="k-link">
                                        Child disabled
                                        <Icon className="k-panelbar-expand" name="arrow-chevron-down" />
                                    </span>
                                </div>
                                <div className="k-item">
                                    <span className="k-link">
                                        <span className="k-panelbar-item-text">Child last</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header">
                            <span className="k-panelbar-item-text">Last</span>
                        </span>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-panelbar">
                    <div className="k-item k-expanded">
                        <span className="k-link k-header">
                            First expanded
                            <Icon className="k-panelbar-collapse" name="arrow-chevron-up" />
                        </span>
                        <div>
                            <div className="k-panelbar-content">
                                <h4>Title in template</h4>
                                <p>Multi line paragraph in template. Some more content to break onto multiple lines</p>
                            </div>
                        </div>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header">Middle</span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header">Last</span>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-panelbar">
                    <div className="k-item">
                        <span className="k-link k-header">First</span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header">Middle</span>
                    </div>
                    <div className="k-item k-expanded">
                        <span className="k-link k-header">
                            Last expanded
                            <Icon className="k-panelbar-collapse" name="arrow-chevron-up" />
                        </span>
                        <div>
                            <div className="k-panelbar-content">
                                <h4>Title in template</h4>
                                <p>Multi line paragraph in template. Some more content to break onto multiple lines</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
