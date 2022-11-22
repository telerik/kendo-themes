
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
                        Wednesday, June 24, 2020
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
                <div className="k-scheduler-layout k-scheduler-layout-flex k-scheduler-day-view">
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
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Wed, 6/24</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Thu, 6/25</span></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Wed, 6/24</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Thu, 6/25</span></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Wed, 6/24</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Thu, 6/25</span></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Wed, 6/24</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Thu, 6/25</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-heading-cell k-side-cell k-scheduler-times-all-day" style={{ minWidth: "61px" }} >all day</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "88px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "88px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "88px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "88px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "135px", left: "78px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "135px", left: "478px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "135px", left: "878px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "135px", left: "1278px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "161px", left: "78px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "161px", left: "478px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "161px", left: "878px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "161px", left: "1278px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "187px", left: "78px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "187px", left: "478px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "187px", left: "878px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "187px", left: "1278px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "213px", left: "78px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Support Phone Call</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "213px", left: "478px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Support Phone Call</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "213px", left: "878px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Support Phone Call</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "213px", left: "1278px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Support Phone Call</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "135px", left: "278px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Attending HR Conference</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a><Icon name="arrow-e"></Icon></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "135px", left: "678px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Attending HR Conference</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a><Icon name="arrow-e"></Icon></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "135px", left: "1078px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Attending HR Conference</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a><Icon name="arrow-e"></Icon></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "135px", left: "1478px", width: "199px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Attending HR Conference</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a><Icon name="arrow-e"></Icon></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                    </div>
                    <div className="k-scheduler-body">
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >8:00 AM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >9:00 AM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >10:00 AM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >11:00 AM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >12:00 PM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >1:00 PM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >2:00 PM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >3:00 PM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }} >4:00 PM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-last-slot-cell" style={{ minWidth: "61px" }} ></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "315px", left: "78px", width: "99px", height: "134px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "315px", left: "478px", width: "99px", height: "134px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "315px", left: "878px", width: "99px", height: "134px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "315px", left: "1278px", width: "99px", height: "134px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "405px", left: "178px", width: "99px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "405px", left: "578px", width: "99px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "405px", left: "978px", width: "99px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "405px", left: "1378px", width: "99px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "765px", left: "78px", width: "99px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "765px", left: "478px", width: "99px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "765px", left: "878px", width: "99px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "765px", left: "1278px", width: "99px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "765px", left: "178px", width: "99px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "765px", left: "578px", width: "99px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "765px", left: "978px", width: "99px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "765px", left: "1378px", width: "99px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "360px", left: "278px", width: "199px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "360px", left: "678px", width: "199px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "360px", left: "1078px", width: "199px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "360px", left: "1478px", width: "199px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "450px", left: "278px", width: "99px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "450px", left: "678px", width: "99px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "450px", left: "1078px", width: "99px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "450px", left: "1478px", width: "99px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "540px", left: "378px", width: "99px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Discuss projects&apos; deadlines">
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                <div className="k-event-template">Discuss projects&apos; deadlines</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "540px", left: "778px", width: "99px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Discuss projects&apos; deadlines">
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                <div className="k-event-template">Discuss projects&apos; deadlines</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "540px", left: "1178px", width: "99px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Discuss projects&apos; deadlines">
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                <div className="k-event-template">Discuss projects&apos; deadlines</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "540px", left: "1578px", width: "99px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Discuss projects&apos; deadlines">
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                <div className="k-event-template">Discuss projects&apos; deadlines</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "630px", left: "278px", width: "199px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "630px", left: "678px", width: "199px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "630px", left: "1078px", width: "199px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "630px", left: "1478px", width: "199px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
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
