import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Searchbox } from '../../searchbox';

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
                            <span>Filter in Name</span>
                            <span className="k-spacer"></span>
                            <Button className="k-header-done" fillMode="flat" icon="check"></Button>
                        </div>
                        <div className="k-stretched-view k-content">
                            <form className="k-filter-menu">
                                <div className="k-list-filter">
                                    <Searchbox placeholder="Search..." />
                                </div>
                                <div className="k-filter-tools">
                                    <div className="k-filter-selected-items">0 items selected</div>
                                    <span className="k-spacer"></span>
                                    <span className="k-label k-select-all">Select All</span>
                                    <span className="k-label k-clear-all">Clear All</span>
                                </div>
                                <ul className="k-multicheck-wrap k-listgroup k-listgroup-flush">
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <span className="k-item-title k-listgroup-form-field-label">Chai</span>
                                            <span className="k-listgroup-form-field-wrapper">
                                                <Checkbox checked />
                                            </span>
                                        </label>
                                    </li>
                                    <li className="k-item k-listgroup-item">
                                        <label className="k-label k-listgroup-form-row">
                                            <span className="k-item-title k-listgroup-form-field-label">Chang</span>
                                            <span className="k-listgroup-form-field-wrapper">
                                                <Checkbox />
                                            </span>
                                        </label>
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
