import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Continuous</span>
            <span>Single</span>

            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item k-state-selected">
                            <Icon name="star"></Icon>
                        </span>
                        <span className="k-rating-item k-state-selected">
                            <Icon name="star"></Icon>
                        </span>
                        <span className="k-rating-item k-state-selected">
                            <Icon name="star"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                    </span>
                    <span className="k-rating-label">
                        <span>3 / 5</span>
                    </span>
                </span>
            </section>
            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item k-state-selected">
                            <Icon name="star"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                    </span>
                    <span className="k-rating-label">
                        <span>3 / 5</span>
                    </span>
                </span>
            </section>

            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item k-state-selected">
                            <Icon name="star"></Icon>
                        </span>
                        <span className="k-rating-item k-state-selected">
                            <Icon name="star"></Icon>
                        </span>
                        <span className="k-rating-item k-state-selected">
                            <Icon name="star-outline"></Icon>
                            <span className="k-rating-precision-part" style={{ width: "12px" }}>
                                <Icon name="star"></Icon>
                            </span>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                    </span>
                    <span className="k-rating-label">
                        <span>2.5 / 5</span>
                    </span>
                </span>
            </section>
            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item k-state-selected">
                            <Icon name="star-outline"></Icon>
                            <span className="k-rating-precision-part" style={{ width: "12px" }}>
                                <Icon name="star"></Icon>
                            </span>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                    </span>
                    <span className="k-rating-label">
                        <span>2.5 / 5</span>
                    </span>
                </span>
            </section>

            <span>Normal</span>
            <span>Focus</span>

            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                    </span>
                </span>
            </section>

            <section>
                <span className="k-rating k-widget k-state-focused">
                    <span className="k-rating-container">
                        <span className="k-rating-item k-state-selected">
                            <Icon name="star"></Icon>
                        </span>
                        <span className="k-rating-item k-state-selected">
                            <Icon name="star"></Icon>
                        </span>
                        <span className="k-rating-item k-state-selected k-state-focused">
                            <Icon name="star"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                    </span>
                    <span className="k-rating-label">
                        <span>3 / 5</span>
                    </span>
                </span>
            </section>

            <span>Nested</span>
            <span>SVG</span>

            <section>
                <div style={{ backgroundColor: "#656565" }}>
                    <span className="k-rating k-widget k-state-focused">
                        <span className="k-rating-container">
                            <span className="k-rating-item k-state-selected">
                                <Icon name="star"></Icon>
                            </span>
                            <span className="k-rating-item k-state-selected">
                                <Icon name="star"></Icon>
                            </span>
                            <span className="k-rating-item k-state-selected k-state-focused">
                                <Icon name="star"></Icon>
                            </span>
                            <span className="k-rating-item">
                                <Icon name="star-outline"></Icon>
                            </span>
                            <span className="k-rating-item">
                                <Icon name="star-outline"></Icon>
                            </span>
                        </span>
                        <span className="k-rating-label">
                            <span>3 / 5</span>
                        </span>
                    </span>
                </div>
            </section>
            <section>
                <span className="k-rating k-widget">
                    <span className="k-rating-container">
                        <span className="k-rating-item k-state-selected">
                            <svg width="50" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <rect className="k-i-rect" x="0" y="0" rx="5" ry="5" width="50" height="30"></rect>
                            </svg>
                        </span>
                        <span className="k-rating-item k-state-selected">
                            <span className="k-rating-precision-complement" style={{ width: '50px' }} >
                                <svg width="50" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0" y="0" rx="5" ry="5" width="50" height="30" fillOpacity="0" stroke="#e9e9e9" strokeWidth="2"></rect>
                                </svg>
                            </span>
                            <span className="k-rating-precision-part" style={{ width: "25px" }} >
                                <svg width="50" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <rect className="k-i-rect" x="0" y="0" rx="5" ry="5" width="50" height="30"></rect>
                                </svg>
                            </span>
                            <span style={{ width: '50px', height: "30px", display: "block" }} ></span>
                        </span>
                        <span className="k-rating-item k-state-selected k-state-focused">
                            <svg width="50" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0" y="0" rx="5" ry="5" width="50" height="30" fillOpacity="0" stroke="#e9e9e9" strokeWidth="2"></rect>
                            </svg>
                        </span>
                    </span>
                    <span className="k-rating-label">
                        <span>2 / 5</span>
                    </span>
                </span>
            </section>

            <span>Readonly</span>
            <span></span>

            <section>
                <span className="k-rating k-widget k-state-readonly">
                    <span className="k-rating-container">
                        <span className="k-rating-item k-state-selected">
                            <Icon name="star"></Icon>
                        </span>
                        <span className="k-rating-item k-state-selected">
                            <Icon name="star"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                        <span className="k-rating-item">
                            <Icon name="star-outline"></Icon>
                        </span>
                    </span>
                </span>
            </section>

            <section>
            </section>
        </div>
    </>
);
