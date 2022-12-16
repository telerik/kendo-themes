import React from 'react';
import ReactDOM from 'react-dom/client';
import { Pager } from '../../pager';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>LTR</span>
            <section>
                <div className="k-pane-wrapper k-widget">
                    <div className="k-pane">
                        <div className="k-view k-widget">
                            <div className="k-stretched-view k-content">
                                <div className="k-grid k-widget k-grid-display-block k-grid-mobile k-editable">
                                    <Pager className="k-grid-pager" mobile="small" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <span>RTL</span>
            <section className="k-rtl">
                <div className="k-pane-wrapper k-widget">
                    <div className="k-pane">
                        <div className="k-view k-widget">
                            <div className="k-stretched-view k-content">
                                <div className="k-grid k-widget k-grid-display-block k-grid-mobile k-editable">
                                    <Pager className="k-grid-pager" mobile="small" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
