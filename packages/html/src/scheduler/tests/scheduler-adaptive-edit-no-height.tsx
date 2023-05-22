import { Button } from '../../button';
import { Icon } from '../../icon';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <div className="k-pane-wrapper k-widget">
                    <div className="k-pane">
                        <div className="k-popup-edit-form k-scheduler-edit-form k-mobile-list k-view k-widget">
                            <div className="k-appbar k-appbar-primary">
                                <Button className="k-header-cancel" fillMode="flat" icon="chevron-left"></Button>
                                <span className="k-spacer"></span>
                                <span>Event</span>
                                <span className="k-spacer"></span>
                                <Button className="k-header-done" fillMode="flat" icon="check"></Button>
                            </div>
                            <div className="k-stretched-view k-content">
                                <ul className="k-listgroup k-listgroup-flush">
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <span className="k-item-title k-listgroup-form-field-label">Title</span>
                                            <div className="k-listgroup-form-field-wrapper">
                                                <input type="text" />
                                            </div>
                                        </label>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <span className="k-item-title k-listgroup-form-field-label">Start</span>
                                            <div className="k-listgroup-form-field-wrapper">
                                                <input type="datetime-local" />
                                            </div>
                                        </label>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <span className="k-item-title k-listgroup-form-field-label">End</span>
                                            <div className="k-listgroup-form-field-wrapper">
                                                <input type="datetime-local" />
                                            </div>
                                        </label>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <span className="k-item-title k-listgroup-form-field-label">All day event</span>
                                            <div className="k-listgroup-form-field-wrapper">
                                                <input type="checkbox" />
                                            </div>
                                        </label>
                                    </li>
                                </ul>
                                <ul className="k-listgroup k-listgroup-flush">
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <span className="k-item-title k-listgroup-form-field-label">Timezone</span>
                                            <div className="k-listgroup-form-field-wrapper">
                                                <span className="k-timezone-label">No timezone</span>
                                                <Icon icon="chevron-right"></Icon>
                                            </div>
                                        </label>
                                    </li>
                                </ul>
                                <ul className="k-listgroup k-listgroup-flush">
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <span className="k-item-title k-listgroup-form-field-label">Repeat</span>
                                            <div className="k-listgroup-form-field-wrapper">
                                                <span>Never</span>
                                                <Icon icon="chevron-right"></Icon>
                                            </div>
                                        </label>
                                    </li>
                                </ul>
                                <ul className="k-listgroup k-listgroup-flush">
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <span className="k-item-title k-listgroup-form-field-label">Description</span>
                                            <div className="k-listgroup-form-field-wrapper">
                                                <textarea></textarea>
                                            </div>
                                        </label>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <span className="k-item-title k-listgroup-form-field-label">Owner</span>
                                            <div className="k-listgroup-form-field-wrapper">
                                                <select>
                                                    <option>Alex</option>
                                                </select>
                                            </div>
                                        </label>
                                    </li>
                                </ul>
                                <ul className="k-edit-buttons k-listgroup k-listgroup-flush">
                                    <li className="k-item k-listgroup-item">
                                        <span className="k-scheduler-delete k-link k-label">Delete</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
