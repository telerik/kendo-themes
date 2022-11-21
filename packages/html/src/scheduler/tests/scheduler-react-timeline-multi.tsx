
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        max-width: 1400px;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <div className="k-widget k-scheduler k-scheduler-flex" style={{ height: "900px" }} >
                <div className="k-scheduler-toolbar k-toolbar">
                    <span className="k-button-group k-scheduler-navigation">
                        <Button>Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button icon="caret-alt-right"></Button>
                    </span>
                    <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        Wednesday, June 24, 2020 - Thursday, June 25, 2020
                    </Button>
                    <span className="k-spacer"></span>
                    <span className="k-scheduler-views-wrapper">
                        <select className="k-views-dropdown k-picker k-dropdown-list k-dropdown k-rounded-md">
                            <option>Timeline Multiday</option>
                        </select>
                        <span className="k-button-group k-scheduler-views">
                            <Button>Day</Button>
                            <Button>Week</Button>
                            <Button>Month</Button>
                            <Button selected>Timeline</Button>
                            <Button>Agenda</Button>
                        </span>
                    </span>
                </div>
                <div className="k-scheduler-layout k-scheduler-layout-flex k-scheduler-timeline-view">
                    <div className="k-scheduler-head" style={{ width: "14401px" }} >
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-sticky-cell">
                                    <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "62px" }} ></div>
                                </div>
                                <div className="k-scheduler-cell k-heading-cell">Meeting Room 101</div>
                                <div className="k-scheduler-cell k-heading-cell">Meeting Room 201</div>
                            </div>
                            <div className="k-scheduler-row">
                                <div className="k-sticky-cell">
                                    <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "62px" }} ></div>
                                </div>
                                <div className="k-scheduler-cell k-heading-cell">Peter</div>
                                <div className="k-scheduler-cell k-heading-cell">Alex</div>
                                <div className="k-scheduler-cell k-heading-cell">Peter</div>
                                <div className="k-scheduler-cell k-heading-cell">Alex</div>
                            </div>
                            <div className="k-scheduler-row">
                                <div className="k-sticky-cell">
                                    <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "62px" }} ></div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">Jun 24</div>
                                        <div className="k-scheduler-cell k-heading-cell">Jun 25</div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">8:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">9:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">10:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">11:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">12:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">1:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">2:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">3:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">4:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">8:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">9:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">10:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">11:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">12:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">1:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">2:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">3:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">4:00 PM</div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">Jun 24</div>
                                        <div className="k-scheduler-cell k-heading-cell">Jun 25</div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">8:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">9:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">10:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">11:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">12:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">1:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">2:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">3:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">4:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">8:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">9:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">10:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">11:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">12:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">1:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">2:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">3:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">4:00 PM</div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">Jun 24</div>
                                        <div className="k-scheduler-cell k-heading-cell">Jun 25</div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">8:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">9:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">10:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">11:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">12:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">1:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">2:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">3:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">4:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">8:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">9:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">10:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">11:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">12:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">1:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">2:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">3:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">4:00 PM</div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">Jun 24</div>
                                        <div className="k-scheduler-cell k-heading-cell">Jun 25</div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">8:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">9:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">10:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">11:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">12:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">1:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">2:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">3:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">4:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">8:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">9:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">10:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">11:00 AM</div>
                                        <div className="k-scheduler-cell k-heading-cell">12:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">1:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">2:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">3:00 PM</div>
                                        <div className="k-scheduler-cell k-heading-cell">4:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="k-scheduler-body" style={{ width: "14401px" }} >
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-sticky-cell">
                                    <div className="k-scheduler-cell k-heading-cell k-side-cell k-scheduler-times-all-day" style={{ minWidth: "62px" }} >All events</div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "62px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "62px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "62px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "62px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "62px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "62px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "62px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "62px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "775px", width: "299px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "4356px", width: "299px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "7936px", width: "299px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "11517px", width: "299px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "974px", width: "399px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "4555px", width: "399px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "8135px", width: "399px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "11716px", width: "399px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "1074px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "4654px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "8235px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "11815px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "52px", left: "1074px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "52px", left: "4654px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "52px", left: "8235px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "52px", left: "11815px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "1472px", width: "99px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "5052px", width: "99px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "8632px", width: "99px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "12213px", width: "99px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "1770px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "5350px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "8931px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "12511px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "1770px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "5350px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "8931px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "12511px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "2665px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "6245px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "9826px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "13406px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "2864px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "6444px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "10025px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "13605px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "3063px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Discuss projects&apos; deadlines">
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                <div className="k-event-template">Discuss projects&apos; deadlines</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "6643px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Discuss projects&apos; deadlines">
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                <div className="k-event-template">Discuss projects&apos; deadlines</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "10224px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Discuss projects&apos; deadlines">
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                <div className="k-event-template">Discuss projects&apos; deadlines</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "13804px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Discuss projects&apos; deadlines">
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                <div className="k-event-template">Discuss projects&apos; deadlines</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "3262px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "6842px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "10423px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "14003px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                    </div>
                </div>
                <div className="k-scheduler-footer k-toolbar">
                    <Button icon="clock" className="k-scheduler-fullday">Show full day</Button>
                </div>
            </div>
        </div>
    </>
);
