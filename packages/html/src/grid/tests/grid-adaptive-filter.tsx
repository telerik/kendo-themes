import { Button } from '../../button';
import { RadioButton } from '../../radio';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <div className="k-pane-wrapper k-widget" style={{ height: "550px" }}>
                <div className="k-pane">
                    <div className="k-grid-filter-menu k-view k-widget">
                        <div className="k-appbar k-appbar-primary">
                            <Button className="k-header-cancel" fillMode="flat" icon="chevron-left"></Button>
                            <span className="k-spacer"></span>
                            <span>Filter in ProductID</span>
                            <span className="k-spacer"></span>
                            <Button className="k-header-done" fillMode="flat" icon="check"></Button>
                        </div>
                        <div className="k-stretched-view k-content">
                            <form className="k-filter-menu">
                                <span className="k-list-title k-filter-help-text">Show items with value that:</span>
                                <ul className="k-listgroup k-listgroup-flush">
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <span className="k-filter-operator-text k-listgroup-form-field-label">Operator</span>
                                            <span className="k-listgroup-form-field-wrapper">
                                                <select className="k-filter-operator">
                                                    <option>Is equal to</option>
                                                    <option>Is not equal to</option>
                                                </select>
                                            </span>
                                        </label>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <label className="k-filter-input-text k-listgroup-form-field-label">Value</label>
                                            <span className="k-listgroup-form-field-wrapper">
                                                <input className="k-value-input" type="text" />
                                            </span>
                                        </label>
                                    </li>
                                </ul>
                                <ul className="k-listgroup k-listgroup-flush">
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <span className="k-filter-logic-and-text k-listgroup-form-field-label">And</span>
                                            <span className="k-listgroup-form-field-wrapper">
                                                <RadioButton checked />
                                            </span>
                                        </label>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <span className="k-filter-logic-or-text k-listgroup-form-field-label">Or</span>
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
