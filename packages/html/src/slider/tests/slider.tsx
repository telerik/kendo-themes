import ReactDOM from 'react-dom/client';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        grid-template-columns: 100px 1fr 1fr 1fr;
        align-items: center;
    }

    .k-slider-0 {
        --kendo-slider-start: 0;
        --kendo-slider-end: 0;
    }
    .k-slider-50 {
        --kendo-slider-start: 0;
        --kendo-slider-end: 50;
    }
    .k-slider-100 {
        --kendo-slider-start: 0;
        --kendo-slider-end: 100;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">
            <span></span>
            <span>Empty</span>
            <span>Not Empty</span>
            <span>Full</span>

            <span>Normal</span>
            <section>
                <div className="k-slider k-slider-horizontal k-slider-0">
                    <Button icon="caret-alt-left" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">5</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">10</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="caret-alt-right" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>
            <section>
                <div className="k-slider k-slider-horizontal k-slider-50">
                    <Button icon="caret-alt-left" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">5</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">10</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-end k-hover"></a>
                        </div>
                    </div>
                    <Button icon="caret-alt-right" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>
            <section>
                <div className="k-slider k-slider-horizontal k-slider-100">
                    <Button icon="caret-alt-left" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">5</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">10</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-end k-focus"></a>
                        </div>
                    </div>
                    <Button icon="caret-alt-right" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>


            <span>Disabled</span>
            <section>
                <div className="k-slider k-slider-horizontal k-slider-0 k-disabled">
                    <Button icon="caret-alt-left" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">5</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">10</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="caret-alt-right" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>
            <section>
                <div className="k-slider k-slider-horizontal k-slider-50 k-disabled">
                    <Button icon="caret-alt-left" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">5</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">10</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="caret-alt-right" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>
            <section>
                <div className="k-slider k-slider-horizontal k-slider-100 k-disabled">
                    <Button icon="caret-alt-left" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">5</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">10</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="caret-alt-right" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>

            <span>Readonly</span>
            <section>
                <div className="k-slider k-slider-horizontal k-slider-0 k-readonly">
                    <Button icon="caret-alt-left" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">5</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">10</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="caret-alt-right" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>
            <section>
                <div className="k-slider k-slider-horizontal k-slider-50 k-readonly">
                    <Button icon="caret-alt-left" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">5</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">10</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="caret-alt-right" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>
            <section>
                <div className="k-slider k-slider-horizontal k-slider-100 k-readonly">
                    <Button icon="caret-alt-left" rounded="full" className="k-button-decrease"></Button>
                    <div className="k-slider-track-wrap">
                        <ul className="k-reset k-slider-items">
                            <li className="k-tick k-tick-large">
                                <span className="k-label">0</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">5</span>
                            </li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick"></li>
                            <li className="k-tick k-tick-large">
                                <span className="k-label">10</span>
                            </li>
                        </ul>
                        <div className="k-slider-track">
                            <div className="k-slider-selection"></div>
                            <a href="#" className="k-draghandle k-draghandle-end"></a>
                        </div>
                    </div>
                    <Button icon="caret-alt-right" rounded="full" className="k-button-increase"></Button>
                </div>
            </section>

        </div>
    </>
);
