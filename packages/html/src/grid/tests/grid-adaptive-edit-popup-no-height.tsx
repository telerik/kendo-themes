import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <div className="k-pane-wrapper k-widget">
                <div className="k-pane">
                    <div className="k-grid-edit-form k-view k-widget">
                        <div className="k-appbar k-appbar-primary">
                            <Button className="k-header-cancel" fillMode="flat" icon="arrow-chevron-left"></Button>
                            <span className="k-spacer"></span>
                            <span>Edit</span>
                            <span className="k-spacer"></span>
                            <Button className="k-header-done" fillMode="flat" icon="check"></Button>
                        </div>
                        <div className="k-content k-stretched-view">
                            <div className="k-popup-edit-form">
                                <ul className="k-listgroup k-listgroup-flush">
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row k-no-click">
                                            <label className="k-item-title k-listgroup-form-field-label">ProductID</label>
                                            <span className="k-no-editor k-listgroup-form-field-wrapper">1</span>
                                        </label>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <label className="k-item-title k-listgroup-form-field-label">Discontinued</label>
                                            <div className="k-listgroup-form-field-wrapper">
                                                <input type="checkbox" />
                                            </div>
                                        </label>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <label className="k-item-title k-listgroup-form-field-label">myText</label>
                                            <div className="k-listgroup-form-field-wrapper">
                                                <input type="text" />
                                            </div>
                                        </label>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <label className="k-item-title k-listgroup-form-field-label">UnitsInStock</label>
                                            <div className="k-listgroup-form-field-wrapper">
                                                <input type="number" />
                                            </div>
                                        </label>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <label className="k-item-title k-listgroup-form-field-label">myDate</label>
                                            <div className="k-listgroup-form-field-wrapper">
                                                <input type="date" />
                                            </div>
                                        </label>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <label className="k-item-title k-listgroup-form-field-label">myID</label>
                                            <div className="k-listgroup-form-field-wrapper">
                                                <select>
                                                    <option>Beverages</option>
                                                    <option>Condiments</option>
                                                </select>
                                            </div>
                                        </label>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <label className="k-item-title k-listgroup-form-field-label">Unit Price</label>
                                            <div className="k-listgroup-form-field-wrapper">
                                                <input type="number" />
                                            </div>
                                        </label>
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
