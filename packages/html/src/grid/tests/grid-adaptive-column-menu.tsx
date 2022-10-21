import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { Switch } from '../../switch';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <div className="k-pane-wrapper k-widget" style={{ height: "650px" }}>
                <div className="k-pane">
                    <div className="k-grid-column-menu k-view k-widget">
                        <div className="k-appbar k-appbar-primary">
                            <Button className="k-header-cancel" fillMode="flat" icon="arrow-chevron-left"></Button>
                            <span className="k-spacer"></span>
                            <span>Edit Column Settings</span>
                            <span className="k-spacer"></span>
                            <Button className="k-header-done" fillMode="flat" icon="check"></Button>
                        </div>
                        <div className="k-stretched-view k-content">
                            <div className="k-column-menu">
                                <span className="k-list-title">Column: Discontinued</span>
                                <ul className="k-listgroup k-listgroup-flush">
                                    <li className="k-item k-listgroup-item k-sort-asc k-selected">
                                        <span className="k-link">
                                            <Icon name="sort-asc-small" />
                                            <span className="k-item-title">Sort Ascending</span>
                                        </span>
                                    </li>
                                    <li className="k-item k-listgroup-item k-sort-desc">
                                        <span className="k-link">
                                            <Icon name="sort-desc-small" />
                                            <span className="k-item-title">Sort Descending</span>
                                        </span>
                                    </li>
                                    <li className="k-item k-listgroup-item k-lock">
                                        <span className="k-link">
                                            <Icon name="lock" />
                                            <span className="k-item-title">Lock</span>
                                        </span>
                                    </li>
                                    <li className="k-item k-listgroup-item k-unlock k-disabled">
                                        <span className="k-link">
                                            <Icon name="unlock" />
                                            <span className="k-item-title">Unlock</span>
                                        </span>
                                    </li>
                                    <li className="k-item k-listgroup-item k-filter-item">
                                        <span className="k-link k-filterable">
                                            <Icon name="filter" />
                                            <span className="k-item-title">Filter</span>
                                            <span className="k-select"><Icon name="arrow-chevron-right" /></span>
                                        </span>
                                    </li>
                                </ul>
                                <span className="k-list-title">Column Visibility</span>
                                <span className="k-listgroup-title">Group A</span>
                                <ul className="k-listgroup k-listgroup-flush">
                                    <li className="k-item k-listgroup-item">
                                        <span className="k-listgroup-form-row">
                                            <span className="k-item-title k-listgroup-form-field-label">Discontinued</span>
                                            <span className="k-listgroup-form-field-wrapper">
                                                <Switch checked />
                                            </span>
                                        </span>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <span className="k-listgroup-form-row">
                                            <span className="k-item-title k-listgroup-form-field-label">ProductID</span>
                                            <span className="k-listgroup-form-field-wrapper">
                                                <Switch checked />
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <span className="k-listgroup-title">Group B</span>
                                <ul className="k-listgroup k-listgroup-flush">
                                    <li className="k-item k-listgroup-item">
                                        <span className="k-listgroup-form-row">
                                            <span className="k-item-title k-listgroup-form-field-label">Name</span>
                                            <span className="k-listgroup-form-field-wrapper">
                                                <Switch checked disabled />
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <ul className="k-listgroup k-listgroup-flush">
                                    <li className="k-listgroup-item">
                                        <span className="k-link k-label k-clear">Clear</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
);
