
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
            <div className="k-widget k-scheduler k-scheduler-flex" style={{ height: "400px" }} >
                <div className="k-scheduler-toolbar k-toolbar">
                    <span className="k-button-group k-scheduler-navigation">
                        <Button>Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button icon="caret-alt-right"></Button>
                    </span>
                    <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        Wednesday, June 24, 2020
                    </Button>
                    <span className="k-spacer"></span>
                    <span className="k-scheduler-views-wrapper">
                        <select className="k-views-dropdown k-picker k-dropdown-list k-dropdown k-rounded-md">
                            <option>Timeline</option>
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
                    <div className="k-scheduler-head" style={{ width: "7201px" }} >
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-sticky-cell">
                                    <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "66px" }} ></div>
                                </div>
                                <div className="k-scheduler-cell k-heading-cell">Meeting Room 101</div>
                                <div className="k-scheduler-cell k-heading-cell">Meeting Room 201</div>
                            </div>
                            <div className="k-scheduler-row">
                                <div className="k-sticky-cell">
                                    <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "66px" }} ></div>
                                </div>
                                <div className="k-scheduler-cell k-heading-cell">Peter</div>
                                <div className="k-scheduler-cell k-heading-cell">Alex</div>
                                <div className="k-scheduler-cell k-heading-cell">Peter</div>
                                <div className="k-scheduler-cell k-heading-cell">Alex</div>
                            </div>
                            <div className="k-scheduler-row">
                                <div className="k-sticky-cell">
                                    <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "66px" }} ></div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">Jun 24</div>
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
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">Jun 24</div>
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
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">Jun 24</div>
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
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">Jun 24</div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="k-scheduler-body" style={{ width: "7201px" }} >
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-sticky-cell">
                                    <div className="k-scheduler-cell k-heading-cell k-side-cell k-scheduler-times-all-day" style={{ minWidth: "66px" }} >All events</div>
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
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "66px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "66px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
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
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "66px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "66px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "772px", width: "296px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "2552px", width: "296px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "4332px", width: "296px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "6113px", width: "296px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "969px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "2750px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "4530px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "6311px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "1068px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "2849px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "4669px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "6410px", width: "395px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "52px", left: "1068px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "52px", left: "2849px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "52px", left: "4669px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "52px", left: "6410px", width: "197px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "1464px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "3244px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "5025px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "6805px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "1761px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "3541px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "5322px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "7102px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "1761px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "3541px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "5322px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "7102px", width: "98px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                    </div>
                </div>
                <div className="k-scheduler-footer k-toolbar">
                    <Button icon="clock" className="k-scheduler-fullday">Show full day</Button>
                </div>
            </div>
            <span></span>

            <span>Scheduler with Slot Templates</span>
            <div className="k-widget k-scheduler k-scheduler-flex" style={{ height: "400px" }} >
                <div className="k-scheduler-toolbar k-toolbar">
                    <span className="k-button-group k-scheduler-navigation">
                        <Button>Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button icon="caret-alt-right"></Button>
                    </span>
                    <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        Wednesday, June 24, 2020
                    </Button>
                    <span className="k-spacer"></span>
                    <span className="k-scheduler-views-wrapper">
                        <select className="k-views-dropdown k-picker k-dropdown-list k-dropdown k-rounded-md">
                            <option>Timeline</option>
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
                    <div className="k-scheduler-head" style={{ width: "7201px" }} >
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-sticky-cell">
                                    <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "66px" }} ></div>
                                </div>
                                <div className="k-scheduler-cell k-heading-cell">Meeting Room 101</div>
                                <div className="k-scheduler-cell k-heading-cell">Meeting Room 201</div>
                            </div>
                            <div className="k-scheduler-row">
                                <div className="k-sticky-cell">
                                    <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "66px" }} ></div>
                                </div>
                                <div className="k-scheduler-cell k-heading-cell">Peter</div>
                                <div className="k-scheduler-cell k-heading-cell">Alex</div>
                                <div className="k-scheduler-cell k-heading-cell">Peter</div>
                                <div className="k-scheduler-cell k-heading-cell">Alex</div>
                            </div>
                            <div className="k-scheduler-row">
                                <div className="k-sticky-cell">
                                    <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "66px" }} ></div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">Jun 24</div>
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
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">Jun 24</div>
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
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">Jun 24</div>
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
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell">Jun 24</div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="k-scheduler-body" style={{ width: "7201px" }} >
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-sticky-cell">
                                    <div className="k-scheduler-cell k-heading-cell k-side-cell k-scheduler-times-all-day" style={{ minWidth: "66px" }} >All events</div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell" style={{ backgroundColor: "#f5f5f5" }} >
                                            <div className="!k-pos-absolute">Start</div>
                                        </div>
                                        <div className="k-scheduler-cell k-slot-cell" ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ backgroundColor: "#f5f5f5" }} >
                                            <div className="!k-pos-absolute">Start</div>
                                        </div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ backgroundColor: "#f5f5f5" }} >
                                            <div className="!k-pos-absolute">End</div>
                                        </div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ backgroundColor: "#f5f5f5" }} >
                                            <div className="!k-pos-absolute">Start</div>
                                        </div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ backgroundColor: "#f5f5f5" }} >
                                            <div className="!k-pos-absolute">End</div>
                                        </div>
                                        <div className="k-scheduler-cell k-slot-cell" ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "62px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "62px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px", backgroundColor: "#f5f5f5" }} >
                                            <div className="!k-pos-absolute">Start</div>
                                        </div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
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
                                    </div>
                                </div>
                            </div>
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
