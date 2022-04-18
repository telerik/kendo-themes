import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { RadioButton } from '../../radio';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <div className="k-pane-wrapper k-widget" style={{ height: "550px" }}>
                <div className="k-pane">
                    <div className="k-grid-filter-menu k-view k-widget">
                        <div className="k-appbar k-appbar-primary">
                            <Button className="k-header-cancel" fillMode="flat" icon="arrow-chevron-left"></Button>
                            <span className="k-spacer"></span>
                            <span>Filter in Discontinued</span>
                            <span className="k-spacer"></span>
                            <Button className="k-header-done" fillMode="flat" icon="check"></Button>
                        </div>
                        <div className="k-stretched-view k-content">
                            <form className="k-filter-menu">
                                <span className="k-list-title k-filter-help-text">Show items with value that:</span>
                                <ul className="k-listgroup k-listgroup-flush k-multicheck-bool-wrap">
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <label className="k-item-title k-listgroup-form-field-label">is true</label>
                                            <span className="k-listgroup-form-field-wrapper">
                                                <RadioButton checked />
                                            </span>
                                        </label>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <label className="k-item-title k-listgroup-form-field-label">is false (focused state)</label>
                                            <span className="k-listgroup-form-field-wrapper">
                                                <RadioButton />
                                            </span>
                                        </label>
                                    </li>
                                </ul>
                                <span className="k-list-title">&nbsp;</span>
                                <ul className="k-listgroup k-listgroup-flush">
                                    <li className="k-listgroup-item">
                                        <span className="k-link k-label k-clear">Clear</span>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
);
