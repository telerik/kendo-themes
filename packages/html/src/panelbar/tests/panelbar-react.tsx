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

            <span className="k-colspan-all">LTR</span>

            <section>
                <div className="k-widget k-panelbar">
                    <div className="k-item">
                        <span className="k-link k-header">
                            <Icon name="cog" />
                            Root
                            <Icon className="k-panelbar-expand" name="arrow-s" />
                        </span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header k-state-hover">
                            <span className="k-image"></span>
                            Root hover
                            <Icon className="k-panelbar-expand" name="arrow-s" />
                        </span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header k-state-focus">
                            <span className="k-sprite"></span>
                            Root focus
                            <Icon className="k-panelbar-expand" name="arrow-s" />
                        </span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header k-state-selected">
                            Root selected
                            <Icon className="k-panelbar-expand" name="arrow-s" />
                        </span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header k-state-disabled">
                            Root disabled
                            <Icon className="k-panelbar-expand" name="arrow-s" />
                        </span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header">Root last</span>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-panelbar">
                    <div className="k-item">
                        <span className="k-link k-header">First</span>
                    </div>
                    <div className="k-item k-state-expanded">
                        <span className="k-link k-header">
                            Middle expanded
                            <Icon className="k-panelbar-collapse" name="arrow-n" />
                        </span>
                        <div className="k-animation-container k-animation-container-relative" style={{ display: "block" }}>
                            <div className="k-child-animation-container">
                                <div className="k-panel k-group">
                                    <div className="k-item">
                                        <span className="k-link">Child</span>
                                    </div>
                                    <div className="k-item">
                                        <span className="k-link k-state-hover">
                                            Child hover
                                            <Icon className="k-panelbar-expand" name="arrow-s" />
                                        </span>
                                    </div>
                                    <div className="k-item">
                                        <span className="k-link k-state-focus">
                                            Child focus
                                            <Icon className="k-panelbar-expand" name="arrow-s" />
                                        </span>
                                    </div>
                                    <div className="k-item">
                                        <span className="k-link k-state-selected">
                                            Child selected
                                            <Icon className="k-panelbar-expand" name="arrow-s" />
                                        </span>
                                    </div>
                                    <div className="k-item k-state-expanded">
                                        <span className="k-link">
                                            Child expanded
                                            <Icon className="k-panelbar-collapse" name="arrow-n" />
                                        </span>
                                        <div className="k-animation-container k-animation-container-relative" style={{ display: "block" }}>
                                            <div className="k-child-animation-container">
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
                                    </div>
                                    <div className="k-item">
                                        <span className="k-link k-state-disabled">
                                            Child disabled
                                            <Icon className="k-panelbar-expand" name="arrow-s" />
                                        </span>
                                    </div>
                                    <div className="k-item">
                                        <span className="k-link">Child last</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header">Last</span>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-panelbar">
                    <div className="k-item k-state-expanded">
                        <span className="k-link k-header">
                            First expanded
                            <Icon className="k-panelbar-collapse" name="arrow-n" />
                        </span>
                        <div className="k-animation-container k-animation-container-relative" style={{ display: "block" }}>
                            <div className="k-child-animation-container">
                                <div className="k-panelbar-content">
                                    <h4>Title in template</h4>
                                    <p>Multi line paragraph in template. Some more content to break onto multiple lines</p>
                                </div>
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
                    <div className="k-item k-state-expanded">
                        <span className="k-link k-header">
                            Last expanded
                            <Icon className="k-panelbar-collapse" name="arrow-n" />
                        </span>
                        <div className="k-animation-container k-animation-container-relative" style={{ display: "block" }}>
                            <div className="k-child-animation-container">
                                <div className="k-panelbar-content">
                                    <h4>Title in template</h4>
                                    <p>Multi line paragraph in template. Some more content to break onto multiple lines</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <span className="k-colspan-all">RTL</span>

            <section className="k-rtl">
                <div className="k-widget k-panelbar">
                    <div className="k-item">
                        <span className="k-link k-header">
                            <Icon name="cog" />
                            Root
                            <Icon className="k-panelbar-expand" name="arrow-s" />
                        </span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header k-state-hover">
                            <span className="k-image"></span>
                            Root hover
                            <Icon className="k-panelbar-expand" name="arrow-s" />
                        </span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header k-state-focus">
                            <span className="k-sprite"></span>
                            Root focus
                            <Icon className="k-panelbar-expand" name="arrow-s" />
                        </span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header k-state-selected">
                            Root selected
                            <Icon className="k-panelbar-expand" name="arrow-s" />
                        </span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header k-state-disabled">
                            Root disabled
                            <Icon className="k-panelbar-expand" name="arrow-s" />
                        </span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header">Root last</span>
                    </div>
                </div>
            </section>

            <section className="k-rtl">
                <div className="k-widget k-panelbar">
                    <div className="k-item">
                        <span className="k-link k-header">First</span>
                    </div>
                    <div className="k-item k-state-expanded">
                        <span className="k-link k-header">
                            Middle expanded
                            <Icon className="k-panelbar-collapse" name="arrow-n" />
                        </span>
                        <div className="k-animation-container k-animation-container-relative" style={{ display: "block" }}>
                            <div className="k-child-animation-container">
                                <div className="k-panel k-group">
                                    <div className="k-item">
                                        <span className="k-link">Child</span>
                                    </div>
                                    <div className="k-item">
                                        <span className="k-link k-state-hover">
                                            Child hover
                                            <Icon className="k-panelbar-expand" name="arrow-s" />
                                        </span>
                                    </div>
                                    <div className="k-item">
                                        <span className="k-link k-state-focus">
                                            Child focus
                                            <Icon className="k-panelbar-expand" name="arrow-s" />
                                        </span>
                                    </div>
                                    <div className="k-item">
                                        <span className="k-link k-state-selected">
                                            Child selected
                                            <Icon className="k-panelbar-expand" name="arrow-s" />
                                        </span>
                                    </div>
                                    <div className="k-item k-state-expanded">
                                        <span className="k-link">
                                            Child expanded
                                            <Icon className="k-panelbar-collapse" name="arrow-n" />
                                        </span>
                                        <div className="k-animation-container k-animation-container-relative" style={{ display: "block" }}>
                                            <div className="k-child-animation-container">
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
                                    </div>
                                    <div className="k-item">
                                        <span className="k-link k-state-disabled">
                                            Child disabled
                                            <Icon className="k-panelbar-expand" name="arrow-s" />
                                        </span>
                                    </div>
                                    <div className="k-item">
                                        <span className="k-link">Child last</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header">Last</span>
                    </div>
                </div>
            </section>

            <section className="k-rtl">
                <div className="k-widget k-panelbar">
                    <div className="k-item k-state-expanded">
                        <span className="k-link k-header">
                            First expanded
                            <Icon className="k-panelbar-collapse" name="arrow-n" />
                        </span>
                        <div className="k-animation-container k-animation-container-relative" style={{ display: "block" }}>
                            <div className="k-child-animation-container">
                                <div className="k-panelbar-content">
                                    <h4>Title in template</h4>
                                    <p>Multi line paragraph in template. Some more content to break onto multiple lines</p>
                                </div>
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

            <section className="k-rtl">
                <div className="k-widget k-panelbar">
                    <div className="k-item">
                        <span className="k-link k-header">First</span>
                    </div>
                    <div className="k-item">
                        <span className="k-link k-header">Middle</span>
                    </div>
                    <div className="k-item k-state-expanded">
                        <span className="k-link k-header">
                            Last expanded
                            <Icon className="k-panelbar-collapse" name="arrow-n" />
                        </span>
                        <div className="k-animation-container k-animation-container-relative" style={{ display: "block" }}>
                            <div className="k-child-animation-container">
                                <div className="k-panelbar-content">
                                    <h4>Title in template</h4>
                                    <p>Multi line paragraph in template. Some more content to break onto multiple lines</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
