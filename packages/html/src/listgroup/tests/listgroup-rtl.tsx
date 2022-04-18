import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span className="col-4">RTL</span>

            <section dir="rtl">
                <ul className="k-listgroup">
                    <li className="k-listgroup-item">Item</li>
                    <li className="k-listgroup-item">
                        <a href="#" className="k-link">Link</a>
                    </li>
                    <li className="k-listgroup-item">
                        <span className="k-link">Pseudo link</span>
                    </li>
                </ul>
            </section>

            <section dir="rtl">
                <ul className="k-listgroup">
                    <li className="k-listgroup-item">
                        <a href="#" className="k-link">
                            Link
                            <span className="k-select"><Icon name="arrow-chevron-right" /></span>
                        </a>
                    </li>
                    <li className="k-listgroup-item k-listgroup-item-segmented">
                        <span className="k-link">Pseudo link</span>
                        <span className="k-select"><Icon name="arrow-chevron-right" /></span>
                    </li>
                </ul>
            </section>

            <hr className="k-hr col-4" />

            <section className="col-2" dir="rtl">
                <ul className="k-listgroup">
                    <li className="k-listgroup-item">
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Select</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <select></select>
                            </span>
                        </span>
                    </li>
                    <li className="k-listgroup-item">
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Text</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <input type="text" />
                            </span>
                        </span>
                    </li>
                    <li className="k-listgroup-item">
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Password</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <input type="password" />
                            </span>
                        </span>
                    </li>
                    <li className="k-listgroup-item">
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Date</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <input type="date" />
                            </span>
                        </span>
                    </li>
                    <li className="k-listgroup-item">
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Time</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <input type="time" />
                            </span>
                        </span>
                    </li>
                    <li className="k-listgroup-item">
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Number</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <input type="number" />
                            </span>
                        </span>
                    </li>
                    <li className="k-listgroup-item">
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Radio</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <input type="radio" />
                            </span>
                        </span>
                    </li>
                    <li className="k-listgroup-item">
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Checkbox</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <input type="checkbox" />
                            </span>
                        </span>
                    </li>
                </ul>
            </section>

        </div>
    </>
);
