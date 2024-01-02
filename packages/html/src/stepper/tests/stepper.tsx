import { Icon } from '../../icon';
import { ProgressBarNormal } from '../../progressbar';


const style = `
    body {
        background: #fcfcfc;
    }
    #test-area {
        grid-template-columns: 100px 500px;
    }
    #test-area hr {
        width: 100%;
        grid-column: 1 / -1;
        visibility: hidden;
    }
    .k-progressbar {
        grid-column-start: 2;
        grid-column-end: 6;
    }
    section:last-of-type .k-progressbar {
        grid-column-end: 16;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">

            <span className="col-2">LTR</span>

            <span>Indicator</span>
            <section>
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" icon="check"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">2</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last k-step-optional" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">3</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-label-optional">(Optional)</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBarNormal label={false} value="50" />
                </nav>
            </section>

            <span>^ + label</span>
            <section>
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done k-step-success" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">1</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Account Info with too long label</span>
                                    <Icon icon="check-circle"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus k-step-error" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">2</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Personal Info</span>
                                    <Icon className="k-validation-icon" icon="warning-circle"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last k-step-optional" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">3</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                    <span className="k-step-label-optional">(Optional)</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBarNormal label={false} value="50" />
                </nav>
            </section>

            <span>Icons</span>
            <section>
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" icon="lock"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" icon="user"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last k-step-optional" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" icon="track-changes"></Icon>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-label-optional">(Optional)</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBarNormal label={false} value="50" />
                </nav>
            </section>

            <span>^ + label</span>
            <section>
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" icon="lock"></Icon>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Account Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" icon="user"></Icon>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Personal Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last k-step-optional" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" icon="track-changes"></Icon>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                    <span className="k-step-label-optional">(Optional)</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBarNormal label={false} value="50" />
                </nav>
            </section>

            <span>Labels</span>
            <section>
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Account Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Personal Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last k-step-optional" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                    <span className="k-step-label-optional">(Optional)</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBarNormal label={false} value="50" />
                </nav>
            </section>

            <hr />

            <span>Many steps</span>
            <section className="col-2">
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(16, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-done k-step-first" style={{ maxWidth: "12.5%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">1</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Step one</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-done" style={{ maxWidth: "12.5%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">2</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Step two</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-done" style={{ maxWidth: "12.5%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">3</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Step three with extremely long label</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-done" style={{ maxWidth: "12.5%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">4</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Step four</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus" style={{ maxWidth: "12.5%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">5</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Step five</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step" style={{ maxWidth: "12.5%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">6</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Step six</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step" style={{ maxWidth: "12.5%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">7</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Step seven</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last" style={{ maxWidth: "12.5%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">8</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Step eight</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBarNormal label={false} value="60" />
                </nav>
            </section>

        </div>
    </>
);
