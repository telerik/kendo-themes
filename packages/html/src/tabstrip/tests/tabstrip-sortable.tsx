import ReactDOM from 'react-dom/client';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div className="k-widget k-tabstrip k-header k-tabstrip-top">
                    <div className="k-tabstrip-items-wrapper k-hstack">
                        <ul className="k-reset k-tabstrip-items">
                            <li className="k-item k-first k-active k-tabstrip-dragging">
                                <span className="k-link">First</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Closable</span>
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </li>
                            <li className="k-item k-focus">
                                <span className="k-link">Focused</span>
                            </li>
                        </ul>
                    </div>
                    <div className="k-tabstrip-content k-active k-focus">
                        <div>Top sortable</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-tabstrip k-header k-tabstrip-bottom">
                    <div className="k-tabstrip-content k-active">
                        <div>Bottom sortable</div>
                    </div>
                    <div className="k-tabstrip-items-wrapper k-hstack">
                        <ul className="k-reset k-tabstrip-items">
                            <li className="k-item k-first k-active k-tabstrip-dragging">
                                <span className="k-link">First</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Closable</span>
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </li>
                            <li className="k-item k-focus">
                                <span className="k-link">Focused</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-tabstrip k-header k-tabstrip-left">
                    <div className="k-tabstrip-items-wrapper k-vstack">
                        <ul className="k-reset k-tabstrip-items">
                            <li className="k-item k-first k-active k-tabstrip-dragging">
                                <span className="k-link">Active</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Normal</span>
                            </li>
                            <li className="k-item k-hover">
                                <span className="k-link">Hover</span>
                            </li>
                            <li className="k-item k-focus">
                                <span className="k-link">Focused</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Closable</span>
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </li>
                            <li className="k-item k-last k-disabled">
                                <span className="k-link">Disabled</span>
                            </li>
                        </ul>
                    </div>
                    <div className="k-tabstrip-content k-active">
                        <div>Left orientation</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-tabstrip k-header k-tabstrip-right">
                    <div className="k-tabstrip-items-wrapper k-vstack">
                        <ul className="k-reset k-tabstrip-items">
                            <li className="k-item k-first k-active k-tabstrip-dragging">
                                <span className="k-link">Active</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Normal</span>
                            </li>
                            <li className="k-item k-hover">
                                <span className="k-link">Hover</span>
                            </li>
                            <li className="k-item k-focus">
                                <span className="k-link">Focused</span>
                            </li>
                            <li className="k-item">
                                <span className="k-link">Closable</span>
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </li>
                            <li className="k-item k-last k-disabled">
                                <span className="k-link">Disabled</span>
                            </li>
                        </ul>
                    </div>
                    <div className="k-tabstrip-content k-active">
                        <div>Right orientation</div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
