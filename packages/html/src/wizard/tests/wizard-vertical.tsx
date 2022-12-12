/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';
import { Button } from '../../button';
import { ProgressBar } from '../../progressbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .wrapper {
        border: 1px solid #6c757d4f;
        margin-bottom: 16px;
    }

    .wrapper p {
        background-color:  #6c757d4f;
    }

    .k-progressbar {
        grid-row-start: 1;
        grid-row-end: 3;
        top: 17px;
    }
`;

const stepperStyle = {
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)"
};

const stepListStyle = {
    gridRowStart: "1",
    gridRowEnd: "-1",
};

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <section>
                <div className="wrapper">
                    <p>Vertical wizard; Content is placed to the right (Default)</p>
                    <div id="wizard" className="k-widget k-wizard k-wizard-vertical k-wizard-right">
                        <nav className="k-stepper k-widget" style={stepperStyle}>
                            <ol className="k-step-list k-step-list-vertical" style={stepListStyle}>
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
                                <li className="k-step k-step-last k-step-optional">
                                    <a href="#" className="k-step-link" style={{ maxHeight: "33.333%" }}>
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
                            <ProgressBar orientation="vertical" label={false} reverse={true} value="50" />
                        </nav>
                        <div className="k-wizard-steps">
                            <div className="k-wizard-step k-focus">
                                <div className="k-wizard-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </div>
                                <div className="k-wizard-buttons">
                                    <span className="k-wizard-buttons-left">
                                        <Button>Reset</Button>
                                        <span className="k-wizard-pager">Step 1 of 2</span>
                                    </span>
                                    <span className="k-wizard-buttons-right">
                                        <Button>Previous</Button>
                                        <Button themeColor="primary">Next</Button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <p>Small height set</p>
                    <div id="wizard" style={{ height: "350px" }} className="k-widget k-wizard k-wizard-vertical k-wizard-right">
                        <nav className="k-stepper k-widget" style={stepperStyle}>
                            <ol className="k-step-list k-step-list-vertical" style={stepListStyle}>
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
                                <li className="k-step k-step-last k-step-optional">
                                    <a href="#" className="k-step-link" style={{ maxHeight: "33.333%" }}>
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
                            <ProgressBar orientation="vertical" label={false} reverse={true} value="50" />
                        </nav>
                        <div className="k-wizard-steps">
                            <div className="k-wizard-step">
                                <div className="k-wizard-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </div>
                                <div className="k-wizard-buttons">
                                    <span className="k-wizard-buttons-left">
                                        <Button>Reset</Button>
                                        <span className="k-wizard-pager">Step 1 of 2</span>
                                    </span>
                                    <span className="k-wizard-buttons-right">
                                        <Button>Previous</Button>
                                        <Button themeColor="primary">Next</Button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <p>Short content</p>
                    <div id="wizard" className="k-widget k-wizard k-wizard-vertical k-wizard-right">
                        <nav className="k-stepper k-widget" style={stepperStyle}>
                            <ol className="k-step-list k-step-list-vertical" style={stepListStyle}>
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
                            <ProgressBar orientation="vertical" label={false} reverse={true} value="50" />
                        </nav>
                        <div className="k-wizard-steps">
                            <div className="k-wizard-step">
                                <div className="k-wizard-content">
                                Short content
                                </div>
                                <div className="k-wizard-buttons">
                                    <span className="k-wizard-buttons-left">
                                        <Button>Reset</Button>
                                        <span className="k-wizard-pager">Step 1 of 2</span>
                                    </span>
                                    <span className="k-wizard-buttons-right">
                                        <Button>Previous</Button>
                                        <Button themeColor="primary">Next</Button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <p>Short content; Big height set</p>
                    <div id="wizard" style={{ height: "300px" }} className="k-widget k-wizard k-wizard-vertical k-wizard-right">
                        <nav className="k-stepper k-widget" style={stepperStyle}>
                            <ol className="k-step-list k-step-list-vertical" style={stepListStyle}>
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
                            <ProgressBar orientation="vertical" label={false} reverse={true} value="50" />
                        </nav>
                        <div className="k-wizard-steps">
                            <div className="k-wizard-step">
                                <div className="k-wizard-content">
                                Short content
                                </div>
                                <div className="k-wizard-buttons">
                                    <span className="k-wizard-buttons-left">
                                        <Button>Reset</Button>
                                        <span className="k-wizard-pager">Step 1 of 2</span>
                                    </span>
                                    <span className="k-wizard-buttons-right">
                                        <Button>Previous</Button>
                                        <Button themeColor="primary">Next</Button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper">
                    <p>Vertical wizard; Content is placed to the left</p>
                    <div id="wizard" className="k-widget k-wizard k-wizard-vertical k-wizard-left">
                        <nav className="k-stepper k-widget" style={stepperStyle}>
                            <ol className="k-step-list k-step-list-vertical" style={stepListStyle}>
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
                            <ProgressBar orientation="vertical" label={false} reverse={true} value="50" />
                        </nav>
                        <div className="k-wizard-steps">
                            <div className="k-wizard-step">
                                <div className="k-wizard-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </div>
                                <div className="k-wizard-buttons">
                                    <span className="k-wizard-buttons-left">
                                        <Button>Reset</Button>
                                        <span className="k-wizard-pager">Step 1 of 2</span>
                                    </span>
                                    <span className="k-wizard-buttons-right">
                                        <Button>Previous</Button>
                                        <Button themeColor="primary">Next</Button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <p>Small height set</p>
                    <div id="wizard" style={{ height: "350px" }} className="k-widget k-wizard k-wizard-vertical k-wizard-left">
                        <nav className="k-stepper k-widget" style={stepperStyle}>
                            <ol className="k-step-list k-step-list-vertical" style={stepListStyle}>
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
                            <ProgressBar orientation="vertical" label={false} reverse={true} value="50" />
                        </nav>
                        <div className="k-wizard-steps">
                            <div className="k-wizard-step">
                                <div className="k-wizard-content">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </div>
                                <div className="k-wizard-buttons">
                                    <span className="k-wizard-buttons-left">
                                        <Button>Reset</Button>
                                        <span className="k-wizard-pager">Step 1 of 2</span>
                                    </span>
                                    <span className="k-wizard-buttons-right">
                                        <Button>Previous</Button>
                                        <Button themeColor="primary">Next</Button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <p>Short content</p>
                    <div id="wizard" className="k-widget k-wizard k-wizard-vertical k-wizard-left">
                        <nav className="k-stepper k-widget" style={stepperStyle}>
                            <ol className="k-step-list k-step-list-vertical" style={stepListStyle}>
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
                            <ProgressBar orientation="vertical" label={false} reverse={true} value="50" />
                        </nav>
                        <div className="k-wizard-steps">
                            <div className="k-wizard-step">
                                <div className="k-wizard-content">
                                Short content
                                </div>
                                <div className="k-wizard-buttons">
                                    <span className="k-wizard-buttons-left">
                                        <Button>Reset</Button>
                                        <span className="k-wizard-pager">Step 1 of 2</span>
                                    </span>
                                    <span className="k-wizard-buttons-right">
                                        <Button>Previous</Button>
                                        <Button themeColor="primary">Next</Button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <p>Short content; Big height set</p>
                    <div id="wizard" style={{ height: "300px" }} className="k-widget k-wizard k-wizard-vertical k-wizard-left">
                        <nav className="k-stepper k-widget" style={stepperStyle}>
                            <ol className="k-step-list k-step-list-vertical" style={stepListStyle}>
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
                            <ProgressBar orientation="vertical" label={false} reverse={true} value="50" />
                        </nav>
                        <div className="k-wizard-steps">
                            <div className="k-wizard-step">
                                <div className="k-wizard-content">
                                Short content
                                </div>
                                <div className="k-wizard-buttons">
                                    <span className="k-wizard-buttons-left">
                                        <Button>Reset</Button>
                                        <span className="k-wizard-pager">Step 1 of 2</span>
                                    </span>
                                    <span className="k-wizard-buttons-right">
                                        <Button>Previous</Button>
                                        <Button themeColor="primary">Next</Button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
