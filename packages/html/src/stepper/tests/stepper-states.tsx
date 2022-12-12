import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';
import { ProgressBar } from '../../progressbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        grid-template-columns: auto 1fr 1fr 1fr 1fr;
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
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">

            <span>Default</span>
            <section className="col-4">
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="check"></Icon>
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
                    <ProgressBar label={false} value="50" />
                </nav>
            </section>

            <span>^ + label</span>
            <section className="col-4">
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="check"></Icon>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Account Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">2</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Personal Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">3</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBar label={false} value="50" />
                </nav>
            </section>

            <span>^ only labels</span>
            <section className="col-4">
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
                        <li className="k-step k-step-last" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBar label={false} value="50" />
                </nav>
            </section>

            <hr/>

            <span>Hover</span>
            <section className="col-4">
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done k-hover" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="check"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus k-hover" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">2</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last k-step-optional k-hover" style={{ maxWidth: "33.333%" }}>
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
                    <ProgressBar label={false} value="50" />
                </nav>
            </section>

            <span>^ + label</span>
            <section className="col-4">
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done k-hover" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="check"></Icon>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Account Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus k-hover" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">2</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Personal Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last k-hover" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">3</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBar label={false} value="50" />
                </nav>
            </section>

            <span>^ only labels</span>
            <section className="col-4">
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done k-hover" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Account Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus k-hover" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Personal Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last k-hover" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBar label={false} value="50" />
                </nav>
            </section>

            <span>Focus</span>
            <section className="col-4">
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done k-focus" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="check"></Icon>
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
                        <li className="k-step k-step-last k-step-optional k-focus" style={{ maxWidth: "33.333%" }}>
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
                    <ProgressBar label={false} value="50" />
                </nav>
            </section>

            <span>^ + label</span>
            <section className="col-4">
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done k-focus" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="check"></Icon>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Account Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">2</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Personal Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last k-focus" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">3</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBar label={false} value="50" />
                </nav>
            </section>

            <span>^ only labels</span>
            <section className="col-4">
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done k-focus" style={{ maxWidth: "33.333%" }}>
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
                        <li className="k-step k-step-last k-focus" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBar label={false} value="50" />
                </nav>
            </section>

            <hr/>

            <span>Disabled</span>
            <section className="col-4">
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done k-disabled" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="check"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus k-disabled" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">2</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last k-step-optional k-disabled" style={{ maxWidth: "33.333%" }}>
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
                    <ProgressBar label={false} disabled={true} value="50" />
                </nav>
            </section>

            <span>^ + label</span>
            <section className="col-4">
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done k-disabled" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="check"></Icon>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Account Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus k-disabled" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">2</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Personal Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last k-disabled" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">3</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBar label={false} disabled={true} value="50" />
                </nav>
            </section>

            <span>^ only labels</span>
            <section className="col-4">
                <nav className="k-stepper k-widget" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                    <ol className="k-step-list k-step-list-horizontal" style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done k-disabled" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Account Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus k-disabled" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Personal Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last k-disabled" style={{ maxWidth: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBar label={false} disabled={true} value="50" />
                </nav>
            </section>
        </div>
    </>
);
