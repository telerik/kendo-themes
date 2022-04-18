import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';

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
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>HH:mm:ss:fff tt</span>
            <span>HH:mm:ss tt</span>
            <span>HH</span>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-reset">
                        <div className="k-timeselector">
                            <div className="k-time-header">
                                <span className="k-title"> 13:14:07:189 PM </span>
                                <Button fillMode="flat" className="k-time-now">Now</Button>
                            </div>
                            <div className="k-time-list-container">
                                <span className="k-time-highlight"></span>
                                <div className="k-time-list-wrapper k-state-focused">
                                    <span className="k-title">hour</span>
                                    <div className="k-time-list">
                                        <div className="k-time-container k-content k-scrollable">
                                            <ul className="k-reset" style={{ transform: "translateY(97px)" }}>
                                                <li className="k-item">
                                                    <span>00</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>01</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>02</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>03</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>04</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>05</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>06</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>07</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>08</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>09</span>
                                                </li>
                                            </ul>
                                            <div className="k-scrollable-placeholder"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="k-time-separator">:</div>
                                <div className="k-time-list-wrapper">
                                    <span className="k-title">minute</span>
                                    <div className="k-time-list">
                                        <div className="k-time-container k-content k-scrollable">
                                            <ul className="k-reset" style={{ transform: "translateY(97px)" }}>
                                                <li className="k-item">
                                                    <span>00</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>01</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>02</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>03</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>04</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>05</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>06</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>07</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>08</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>09</span>
                                                </li>
                                            </ul>
                                            <div className="k-scrollable-placeholder"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="k-time-separator">:</div>
                                <div className="k-time-list-wrapper">
                                    <span className="k-title">second</span>
                                    <div className="k-time-list">
                                        <div className="k-time-container k-content k-scrollable">
                                            <ul className="k-reset" style={{ transform: "translateY(97px)" }}>
                                                <li className="k-item">
                                                    <span>00</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>01</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>02</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>03</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>04</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>05</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>06</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>07</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>08</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>09</span>
                                                </li>
                                            </ul>
                                            <div className="k-scrollable-placeholder"></div>
                                        </div>
                                    </div>
                                </div><div className="k-time-separator">:</div>
                                <div className="k-time-list-wrapper">
                                    <span className="k-title">millisecond</span>
                                    <div className="k-time-list">
                                        <div className="k-time-container k-content k-scrollable" >
                                            <ul className="k-reset" style={{ transform: "translateY(97px)" }}>
                                                <li className="k-item">
                                                    <span>000</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>001</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>002</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>003</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>004</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>005</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>006</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>007</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>008</span>
                                                </li>
                                                <li className="k-item">
                                                    <span>009</span>
                                                </li>
                                            </ul>
                                            <div className="k-scrollable-placeholder"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="k-time-separator"></div>
                                <div className="k-time-list-wrapper">
                                    <span className="k-title">AM/PM</span>
                                    <div className="k-time-list">
                                        <div className="k-time-container k-content k-scrollable">
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
                            <ActionButtons alignment="stretched" className="k-time-footer">
                                <Button className="k-time-cancel">Cancel</Button>
                                <Button themeColor="primary" className="k-time-accept">Set</Button>
                            </ActionButtons>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-reset">
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
                                    <div className="k-time-list-wrapper k-state-focused">
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
                            <ActionButtons alignment="stretched" className="k-time-footer">
                                <Button className="k-time-cancel">Cancel</Button>
                                <Button themeColor="primary" className="k-time-accept">Set</Button>
                            </ActionButtons>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-reset">
                        <div className="k-timeselector">
                            <div className="k-time-part">
                                <div className="k-time-header">
                                    <span className="k-title">10</span>
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
                                </div>
                            </div>
                            <ActionButtons alignment="stretched" className="k-time-footer">
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
