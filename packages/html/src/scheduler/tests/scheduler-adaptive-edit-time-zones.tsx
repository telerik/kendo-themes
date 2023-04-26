import ReactDOM from 'react-dom/client';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <div className="k-pane-wrapper k-widget" style={{ height: "600px" }}>
                    <div className="k-pane">
                        <div className="k-popup-edit-form k-scheduler-edit-form k-mobile-list k-view k-widget">
                            <div className="k-appbar k-appbar-primary">
                                <Button className="k-header-cancel" fillMode="flat" icon="chevron-left"></Button>
                                <span className="k-spacer"></span>
                                <span>Time zones</span>
                                <span className="k-spacer"></span>
                                <Button className="k-header-done" fillMode="flat" icon="check"></Button>
                            </div>
                            <div className="k-stretched-view k-content">
                                <div className="k-popup-edit-form k-scheduler-edit-form k-scheduler-timezones">
                                    <ul className="k-listgroup k-listgroup-flush">
                                        <li className="k-item k-listgroup-item">
                                            <label className="k-label k-listgroup-form-row">
                                                <span className="k-listgroup-form-field-label k-item-title">Use separate start and end time zones</span>
                                                <span className="k-listgroup-form-field-wrapper">
                                                    <input type="checkbox" checked />
                                                </span>
                                            </label>
                                        </li>
                                        <li className="k-item k-listgroup-item">
                                            <label className="k-label k-listgroup-form-row">
                                                <span className="k-listgroup-form-field-label k-item-title">Start timezone</span>
                                                <div className="k-listgroup-form-field-wrapper">
                                                    <div className="k-mobiletimezoneeditor">
                                                        <select>
                                                            <option>No timezone</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="k-item k-listgroup-item k-zonepicker">
                                            <label className="k-label k-listgroup-form-row">
                                                <span className="k-listgroup-form-field-label k-item-title"></span>
                                                <div className="k-listgroup-form-field-wrapper">
                                                    <select>
                                                        <option value="Europe/London">London</option>
                                                    </select>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="k-item k-listgroup-item">
                                            <label className="k-label k-listgroup-form-row">
                                                <span className="k-listgroup-form-field-label k-item-title">End timezone</span>
                                                <div className="k-listgroup-form-field-wrapper">
                                                    <div className="k-mobiletimezoneeditor">
                                                        <select>
                                                            <option>(GMT) Casablanca</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="k-item k-listgroup-item k-zonepicker">
                                            <label className="k-label k-listgroup-form-row">
                                                <span className="k-listgroup-form-field-label k-item-title"></span>
                                                <div className="k-listgroup-form-field-wrapper">
                                                    <select>
                                                        <option value="Atlantic/Reykjavik">Reykjavik</option>
                                                    </select>
                                                </div>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
