import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Calendar } from '../../calendar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-animation-container {
        width: min-content;
        max-width: 100%;
        position: relative;
        overflow: visible;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Date tab</span>
            <span>Time tab</span>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-reset k-datetime-container">
                        <div className="k-datetime-wrap k-date-tab">
                            <div className="k-datetime-buttongroup">
                                <div className="k-button-group k-button-group-stretched">
                                    <Button className="k-group-start" selected>Date</Button>
                                    <Button className="k-group-end">Time</Button>
                                </div>
                            </div>
                            <div className="k-datetime-selector">
                                <div className="k-datetime-calendar-wrap">

                                    <Calendar calendarView="month" showOtherMonth></Calendar>

                                </div>
                                <div className="k-datetime-time-wrap">
                                </div>
                            </div>

                            <ActionButtons className="k-datetime-footer" alignment="stretched">
                                <Button className="k-time-cancel">Cancel</Button>
                                <Button themeColor="primary" className="k-time-accept">Set</Button>
                            </ActionButtons>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-reset k-datetime-container">
                        <div className="k-datetime-wrap k-time-tab">
                            <div className="k-datetime-buttongroup">
                                <div className="k-button-group k-button-group-stretched">
                                    <Button className="k-group-start">Date</Button>
                                    <Button className="k-group-end" selected>Time</Button>
                                </div>
                            </div>
                            <div className="k-datetime-selector">
                                <div className="k-datetime-calendar-wrap">
                                </div>
                                <div className="k-datetime-time-wrap">
                                    <div className="k-timeselector k-reset">
                                        <div className="k-time-part">
                                            <div className="k-time-header">
                                                <span className="k-title">10:00:00 AM</span>
                                                <Button fillMode="flat" className="k-time-now">Now</Button>
                                            </div>
                                            <div className="k-time-list-container">
                                                <span className="k-time-highlight"></span>
                                                <div className="k-time-list-wrapper">
                                                    <span className="k-title">Hour</span>
                                                    <div className="k-time-list">
                                                        <div className="k-content k-scrollable k-time-container">
                                                            <ul className="k-reset" style={{ transform: "translateY(97px)" }}>
                                                                <li className="k-item">
                                                                    <span>0</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>1</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>2</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>3</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>4</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>5</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>6</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>7</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>8</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>9</span>
                                                                </li>
                                                            </ul>
                                                            <div className="k-scrollable-placeholder"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="k-time-separator">:</div>
                                                <div className="k-time-list-wrapper k-focus">
                                                    <span className="k-title">Minute</span>
                                                    <div className="k-time-list">
                                                        <div className="k-content k-scrollable k-time-container">
                                                            <ul className="k-reset" style={{ transform: "translateY(97px)" }}>
                                                                <li className="k-item">
                                                                    <span>0</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>1</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>2</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>3</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>4</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>5</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>6</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>7</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>8</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>9</span>
                                                                </li>
                                                            </ul>
                                                            <div className="k-scrollable-placeholder"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="k-time-separator">:</div>
                                                <div className="k-time-list-wrapper">
                                                    <span className="k-title">Second</span>
                                                    <div className="k-time-list">
                                                        <div className="k-content k-scrollable k-time-container">
                                                            <ul className="k-reset" style={{ transform: "translateY(97px)" }}>
                                                                <li className="k-item">
                                                                    <span>0</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>1</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>2</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>3</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>4</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>5</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>6</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>7</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>8</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>9</span>
                                                                </li>
                                                            </ul>
                                                            <div className="k-scrollable-placeholder"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="k-time-separator">:</div>
                                                <div className="k-time-list-wrapper">
                                                    <span className="k-title">AM/PM</span>
                                                    <div className="k-time-list">
                                                        <div className="k-content k-scrollable k-time-container">
                                                            <ul className="k-reset" style={{ transform: "translateY(97px)" }}>
                                                                <li className="k-item">
                                                                    <span>AM</span>
                                                                </li>
                                                                <li className="k-item">
                                                                    <span>PM</span>
                                                                </li>
                                                            </ul>
                                                            <div className="k-scrollable-placeholder"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ActionButtons className="k-datetime-footer" alignment="stretched">
                                <Button className="k-time-cancel">Cancel</Button>
                                <Button themeColor="primary" className="k-time-accept">Set</Button>
                            </ActionButtons>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
