import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <div className="k-widget k-scheduler k-scheduler-flex">
                <div className="k-scheduler-toolbar k-toolbar">
                    <span className="k-button-group k-scheduler-navigation">
                        <Button>Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button icon="caret-alt-right"></Button>
                    </span>
                    <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        Monday, June 24, 2019
                    </Button>
                    <span className="k-spacer"></span>
                    <span className="k-scheduler-views-wrapper">
                        <select className="k-views-dropdown k-picker k-dropdown-list k-dropdown k-rounded-md">
                            <option>Day</option>
                        </select>
                        <span className="k-button-group k-scheduler-views">
                            <Button selected>Day</Button>
                            <Button>Week</Button>
                            <Button>Month</Button>
                            <Button>Timeline</Button>
                            <Button>Agenda</Button>
                        </span>
                    </span>
                </div>
                <div className="k-scheduler-layout k-scheduler-layout-flex k-scheduler-day-view" style={{ height: "600px" }} >
                    <div className="k-scheduler-head">
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-heading-cell">Meeting Room 101</div>
                                <div className="k-scheduler-cell k-heading-cell">Meeting Room 201</div>
                            </div>
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-heading-cell">Peter</div>
                                <div className="k-scheduler-cell k-heading-cell">Alex</div>
                                <div className="k-scheduler-cell k-heading-cell">Peter</div>
                                <div className="k-scheduler-cell k-heading-cell">Alex</div>
                            </div>
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell">
                                            <span className="k-link k-nav-day">Mon, 6/24</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell">
                                            <span className="k-link k-nav-day">Mon, 6/24</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell">
                                            <span className="k-link k-nav-day">Mon, 6/24</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell">
                                            <span className="k-link k-nav-day">Mon, 6/24</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-heading-cell k-side-cell k-scheduler-times-all-day" style={{ minWidth: "61px" }} >all day</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell" data-slot-id="0:0:0" style={{ minHeight: "36px" }} ></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell" data-slot-id="1:0:0" style={{ minHeight: "36px" }} ></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell" data-slot-id="2:0:0"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell" data-slot-id="3:0:0"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-event" style={{ top: "115px", left: "300px", width: "220px", height: "25px", borderColor: "rgb(84, 103, 123)", backgroundColor: "rgb(84, 103, 123)", cursor: 'pointer', userSelect: "auto", pointerEvents: "auto" }} >
                            <span className="k-event-actions"></span>
                            <div title="(1:00 PM): Team planning meeting">
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions">
                                <a href="#" className="k-link k-event-delete">
                                    <Icon name="x"></Icon>
                                </a>
                            </span>
                            <span className="k-resize-handle k-resize-w"></span>
                            <span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ top: "141px", left: "300px", width: "220px", height: "25px", borderColor: "rgb(84, 103, 123)", backgroundColor: "rgb(84, 103, 123)", cursor: 'pointer', userSelect: "auto", pointerEvents: "auto" }} >
                            <span className="k-event-actions"></span>
                            <div title="(1:00 PM): Replace the printer on the 1st floor">
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions">
                                <a href="#" className="k-link k-event-delete">
                                    <Icon name="x"></Icon>
                                </a>
                            </span>
                            <span className="k-resize-handle k-resize-w"></span>
                            <span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ top: "115px", left: "79px", width: "220px", height: "25px", cursor: 'pointer', userSelect: "auto", pointerEvents: "auto" }} >
                            <span className="k-event-actions"></span>
                            <div title="(3:00 PM): Register new Access Cards">
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions">
                                <a href="#" className="k-link k-event-delete">
                                    <Icon name="x"></Icon>
                                </a>
                            </span>
                            <span className="k-resize-handle k-resize-w"></span>
                            <span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ top: "141px", left: "79px", width: "220px", height: "25px", cursor: 'pointer', userSelect: "auto", pointerEvents: "auto" }} >
                            <span className="k-event-actions"></span>
                            <div title="(7:00 PM): Support Phone Call">
                                <div className="k-event-template">Support Phone Call</div>
                            </div>
                            <span className="k-event-actions">
                                <a href="#" className="k-link k-event-delete">
                                    <Icon name="x"></Icon>
                                </a>
                            </span>
                            <span className="k-resize-handle k-resize-w"></span>
                            <span className="k-resize-handle k-resize-e"></span>
                        </div>
                    </div>
                    <div className="k-scheduler-body">
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >8:00 AM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell" data-slot-id="0:0:16"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell" data-slot-id="1:0:16"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell" data-slot-id="2:0:16"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell" data-slot-id="3:0:16"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >9:00 AM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >10:00 AM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }} ></div><div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >11:00 AM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >12:00 PM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >1:00 PM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="k-event" style={{ top: "37px", left: "523px", width: "220px", height: "115px", cursor: 'pointer', userSelect: "auto", pointerEvents: "auto" }} >
                            <span className="k-event-actions"></span>
                            <div title="8:30 AM - 10:00 AM">
                                <div className="k-event-template k-event-time">8:30 AM - 10:00 AM</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions">
                                <a href="#" className="k-link k-event-delete">
                                    <Icon name="x"></Icon>
                                </a>
                            </span>
                            <span className="k-resize-handle k-resize-n"></span>
                            <span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ top: "114px", left: "78px", width: "220px", height: "150px", cursor: 'pointer', userSelect: "auto", pointerEvents: "auto" }} >
                            <span className="k-event-actions"></span>
                            <div title="9:45 AM - 11:30 AM">
                                <div className="k-event-template k-event-time">9:45 AM - 11:30 AM</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions">
                                <a href="#" className="k-link k-event-delete">
                                    <Icon name="x"></Icon>
                                </a>
                            </span>
                            <span className="k-resize-handle k-resize-n"></span>
                            <span className="k-resize-handle k-resize-s"></span>
                        </div>
                    </div>
                </div>
                <div className="k-scheduler-footer k-toolbar">
                    <Button icon="clock" className="k-scheduler-fullday">Show business hours</Button>
                </div>
            </div>
        </div>
    </>
);
