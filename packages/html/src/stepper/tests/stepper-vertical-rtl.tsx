import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';
import { ProgressBar } from '../../progressbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area hr {
        width: 100%;
        grid-column: 1 / -1;
        visibility: hidden;
    }
    .k-progressbar {
        grid-row-start: 1;
        grid-row-end: 3;
        top: 17px;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span className="col-4">RTL</span>
            <span>Indicator</span>
            <span>Indicator + label</span>
            <span>Icons</span>
            <span>Labels</span>

            <section>
                <nav dir="rtl" className="k-stepper k-widget" style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
                    <ol className="k-step-list k-step-list-vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="check"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">2</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">3</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBar orientation="vertical" value="40" label={false} reverse={true} />
                </nav>
            </section>
            <section>
                <nav dir="rtl" className="k-stepper k-widget" style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
                    <ol className="k-step-list k-step-list-vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done k-step-success" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">1</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Account Info with too long text</span>
                                    <Icon name="check"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus k-step-error" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <span className="k-step-indicator-text">2</span>
                                </span>
                                <span className="k-step-label">
                                    <span className="k-step-text">Personal Info</span>
                                    <Icon className="k-validation-icon" name="warning"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last k-step-optional" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link" >
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
                    <ProgressBar orientation="vertical" value="40" label={false} reverse={true} />
                </nav>
            </section>
            <section>
                <nav dir="rtl" className="k-stepper k-widget" style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
                    <ol className="k-step-list k-step-list-vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="lock"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="user"></Icon>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-indicator">
                                    <Icon className="k-step-indicator-icon" name="track-changes"></Icon>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBar orientation="vertical" value="40" label={false} reverse={true} />
                </nav>
            </section>
            <section>
                <nav dir="rtl" className="k-stepper k-widget" style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
                    <ol className="k-step-list k-step-list-vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                        <li className="k-step k-step-first k-step-done" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Account Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-current k-focus" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Personal Info</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-step k-step-last" style={{ maxHeight: "33.333%" }}>
                            <a href="#" className="k-step-link">
                                <span className="k-step-label">
                                    <span className="k-step-text">Payment Details</span>
                                </span>
                            </a>
                        </li>
                    </ol>
                    <ProgressBar orientation="vertical" value="40" label={false} reverse={true} />
                </nav>
            </section>

        </div>
    </>
);
