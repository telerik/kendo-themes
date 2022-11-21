
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
            <div className="k-widget k-scheduler k-scheduler-flex" style={{ height: "900px" }}>
                <div className="k-scheduler-toolbar k-toolbar">
                    <span className="k-button-group k-scheduler-navigation">
                        <Button>Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button icon="caret-alt-right"></Button>
                    </span>
                    <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        Sunday, June 21, 2020 - Saturday, June 27, 2020
                    </Button>
                    <span className="k-spacer"></span>
                    <span className="k-scheduler-views-wrapper">
                        <select className="k-views-dropdown k-picker k-dropdown-list k-dropdown k-rounded-md">
                            <option>Week</option>
                        </select>
                        <span className="k-button-group k-scheduler-views">
                            <Button>Day</Button>
                            <Button selected>Week</Button>
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
                                <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "61px" }}></div>
                                <div className="k-scheduler-cell k-heading-cell">Meeting Room 101</div>
                                <div className="k-scheduler-cell k-heading-cell">Meeting Room 201</div>
                            </div>
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "61px" }}></div>
                                <div className="k-scheduler-cell k-heading-cell">Peter</div>
                                <div className="k-scheduler-cell k-heading-cell">Alex</div>
                                <div className="k-scheduler-cell k-heading-cell">Peter</div>
                                <div className="k-scheduler-cell k-heading-cell">Alex</div>
                            </div>
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell" style={{ minWidth: "61px" }}></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Sun, 6/21</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Mon, 6/22</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Tue, 6/23</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Wed, 6/24</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Thu, 6/25</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Fri, 6/26</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Sat, 6/27</span></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Sun, 6/21</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Mon, 6/22</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Tue, 6/23</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Wed, 6/24</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Thu, 6/25</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Fri, 6/26</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Sat, 6/27</span></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Sun, 6/21</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Mon, 6/22</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Tue, 6/23</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Wed, 6/24</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Thu, 6/25</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Fri, 6/26</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Sat, 6/27</span></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Sun, 6/21</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Mon, 6/22</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Tue, 6/23</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Wed, 6/24</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Thu, 6/25</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Fri, 6/26</span></div>
                                        <div className="k-scheduler-cell k-heading-cell k-heading-cell"><span className="k-link k-nav-day">Sat, 6/27</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-heading-cell k-side-cell k-scheduler-times-all-day" style={{ minWidth: "61px" }}>all day</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "88px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "88px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "88px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "88px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "10px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell" style={{ userSelect: 'none', minHeight: "36px" }} ></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "135px", left: "249px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "135px", left: "649px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "135px", left: "1049px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "135px", left: "1449px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Team planning meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "161px", left: "249px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "161px", left: "649px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "161px", left: "1049px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "161px", left: "1449px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Replace the printer on the 1st floor</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "187px", left: "249px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "187px", left: "649px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "187px", left: "1049px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "187px", left: "1449px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Register new Access Cards</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "213px", left: "249px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Support Phone Call</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "213px", left: "649px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Support Phone Call</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "213px", left: "1049px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Support Phone Call</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "213px", left: "1449px", width: "57px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Support Phone Call</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "135px", left: "307px", width: "113px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Attending HR Conference</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "135px", left: "707px", width: "113px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Attending HR Conference</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "135px", left: "1107px", width: "113px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Attending HR Conference</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "135px", left: "1507px", width: "113px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Attending HR Conference</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "161px", left: "364px", width: "56px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Server maintenance</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "161px", left: "764px", width: "56px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Server maintenance</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "161px", left: "1164px", width: "56px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Server maintenance</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "161px", left: "1564px", width: "56px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Server maintenance</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                    </div>
                    <div className="k-scheduler-body">
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }}>8:00 AM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }}></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }}>9:00 AM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }}></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }}>10:00 AM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }}></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }}>11:00 AM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }}></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }}>12:00 PM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }}></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }}>1:00 PM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }}></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }}>2:00 PM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }}></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }}>3:00 PM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell" style={{ minWidth: "61px" }}></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-major-cell" style={{ minWidth: "61px" }}>4:00 PM</div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row k-middle-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-side-cell k-heading-cell k-last-slot-cell" style={{ minWidth: "61px" }}></div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell"></div>
                                        <div className="k-scheduler-cell k-slot-cell k-nonwork-hour"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "315px", left: "249px", width: "28px", height: "134px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "315px", left: "649px", width: "28px", height: "134px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "315px", left: "1049px", width: "28px", height: "134px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "315px", left: "1449px", width: "28px", height: "134px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "405px", left: "278px", width: "28px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "405px", left: "678px", width: "28px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "405px", left: "1078px", width: "28px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "405px", left: "1478px", width: "28px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "765px", left: "249px", width: "28px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "765px", left: "649px", width: "28px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "765px", left: "1049px", width: "28px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "765px", left: "1449px", width: "28px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                <div className="k-event-template">Install new laptops in conference rooms</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "765px", left: "278px", width: "28px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "765px", left: "678px", width: "28px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "765px", left: "1078px", width: "28px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "765px", left: "1478px", width: "28px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Bernard Atkins">
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                <div className="k-event-template">Job Interview - Bernard Atkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "360px", left: "307px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "360px", left: "707px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "360px", left: "1107px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "360px", left: "1507px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "450px", left: "307px", width: "27.5px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "450px", left: "707px", width: "27.5px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "450px", left: "1107px", width: "27.5px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "450px", left: "1507px", width: "27.5px", height: "179px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "540px", left: "335.5px", width: "27.5px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Discuss projects&apos; deadlines">
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                <div className="k-event-template">Discuss projects&apos; deadlines</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "540px", left: "735.5px", width: "27.5px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Discuss projects&apos; deadlines">
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                <div className="k-event-template">Discuss projects&apos; deadlines</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "540px", left: "1135.5px", width: "27.5px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Discuss projects&apos; deadlines">
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                <div className="k-event-template">Discuss projects&apos; deadlines</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "540px", left: "1535.5px", width: "27.5px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Discuss projects&apos; deadlines">
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                <div className="k-event-template">Discuss projects&apos; deadlines</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "630px", left: "307px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "630px", left: "707px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "630px", left: "1107px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "630px", left: "1507px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "360px", left: "364px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Banking</div>
                                <div className="k-event-template">Banking</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "360px", left: "764px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Banking</div>
                                <div className="k-event-template">Banking</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "360px", left: "1164px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Banking</div>
                                <div className="k-event-template">Banking</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "360px", left: "1564px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Banking</div>
                                <div className="k-event-template">Banking</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "585px", left: "364px", width: "56px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:30 PM - 3:00 PM): Support Call</div>
                                <div className="k-event-template">Support Call</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "585px", left: "764px", width: "56px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:30 PM - 3:00 PM): Support Call</div>
                                <div className="k-event-template">Support Call</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "585px", left: "1164px", width: "56px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:30 PM - 3:00 PM): Support Call</div>
                                <div className="k-event-template">Support Call</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "585px", left: "1564px", width: "56px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:30 PM - 3:00 PM): Support Call</div>
                                <div className="k-event-template">Support Call</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "765px", left: "364px", width: "56px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Phone Sync with NY office </div>
                                <div className="k-event-template">Phone Sync with NY office </div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "765px", left: "764px", width: "56px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Phone Sync with NY office </div>
                                <div className="k-event-template">Phone Sync with NY office </div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "765px", left: "1164px", width: "56px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Phone Sync with NY office </div>
                                <div className="k-event-template">Phone Sync with NY office </div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "765px", left: "1564px", width: "56px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Phone Sync with NY office </div>
                                <div className="k-event-template">Phone Sync with NY office </div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "225px", left: "421px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:30 AM - 11:30 AM): Website upload</div>
                                <div className="k-event-template">Website upload</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "225px", left: "821px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:30 AM - 11:30 AM): Website upload</div>
                                <div className="k-event-template">Website upload</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "225px", left: "1221px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:30 AM - 11:30 AM): Website upload</div>
                                <div className="k-event-template">Website upload</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "225px", left: "1621px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:30 AM - 11:30 AM): Website upload</div>
                                <div className="k-event-template">Website upload</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "315px", left: "421px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 12:30 PM): Breakfast with CFO and COO</div>
                                <div className="k-event-template">Breakfast with CFO and COO</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "315px", left: "821px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 12:30 PM): Breakfast with CFO and COO</div>
                                <div className="k-event-template">Breakfast with CFO and COO</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "315px", left: "1221px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 12:30 PM): Breakfast with CFO and COO</div>
                                <div className="k-event-template">Breakfast with CFO and COO</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "315px", left: "1621px", width: "56px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 12:30 PM): Breakfast with CFO and COO</div>
                                <div className="k-event-template">Breakfast with CFO and COO</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "450px", left: "421px", width: "27.5px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Mathew Stevens">
                                <div className="k-event-template k-event-time">(1:00 PM - 2:00 PM): Job Interview - Mathew Stevens</div>
                                <div className="k-event-template">Job Interview - Mathew Stevens</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "450px", left: "821px", width: "27.5px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Mathew Stevens">
                                <div className="k-event-template k-event-time">(1:00 PM - 2:00 PM): Job Interview - Mathew Stevens</div>
                                <div className="k-event-template">Job Interview - Mathew Stevens</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "450px", left: "1221px", width: "27.5px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Mathew Stevens">
                                <div className="k-event-template k-event-time">(1:00 PM - 2:00 PM): Job Interview - Mathew Stevens</div>
                                <div className="k-event-template">Job Interview - Mathew Stevens</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "450px", left: "1621px", width: "27.5px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Mathew Stevens">
                                <div className="k-event-template k-event-time">(1:00 PM - 2:00 PM): Job Interview - Mathew Stevens</div>
                                <div className="k-event-template">Job Interview - Mathew Stevens</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "495px", left: "449.5px", width: "27.5px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:30 PM - 2:30 PM): Helpdesk status meeting</div>
                                <div className="k-event-template">Helpdesk status meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "495px", left: "849.5px", width: "27.5px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:30 PM - 2:30 PM): Helpdesk status meeting</div>
                                <div className="k-event-template">Helpdesk status meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "495px", left: "1249.5px", width: "27.5px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:30 PM - 2:30 PM): Helpdesk status meeting</div>
                                <div className="k-event-template">Helpdesk status meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "495px", left: "1649.5px", width: "27.5px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:30 PM - 2:30 PM): Helpdesk status meeting</div>
                                <div className="k-event-template">Helpdesk status meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "540px", left: "421px", width: "27.5px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Review CVs with Tim</div>
                                <div className="k-event-template">Review CVs with Tim</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "540px", left: "821px", width: "27.5px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Review CVs with Tim</div>
                                <div className="k-event-template">Review CVs with Tim</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "540px", left: "1221px", width: "27.5px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Review CVs with Tim</div>
                                <div className="k-event-template">Review CVs with Tim</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "540px", left: "1621px", width: "27.5px", height: "44px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Review CVs with Tim</div>
                                <div className="k-event-template">Review CVs with Tim</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "630px", left: "421px", width: "27.5px", height: "134px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:30 PM): Lunch with Monica</div>
                                <div className="k-event-template">Lunch with Monica</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "630px", left: "821px", width: "27.5px", height: "134px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:30 PM): Lunch with Monica</div>
                                <div className="k-event-template">Lunch with Monica</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "630px", left: "1221px", width: "27.5px", height: "134px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:30 PM): Lunch with Monica</div>
                                <div className="k-event-template">Lunch with Monica</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "630px", left: "1621px", width: "27.5px", height: "134px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:30 PM): Lunch with Monica</div>
                                <div className="k-event-template">Lunch with Monica</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "630px", left: "449.5px", width: "27.5px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch</div>
                                <div className="k-event-template">Business Lunch</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "630px", left: "849.5px", width: "27.5px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch</div>
                                <div className="k-event-template">Business Lunch</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "630px", left: "1249.5px", width: "27.5px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch</div>
                                <div className="k-event-template">Business Lunch</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-n"></span><span className="k-resize-handle k-resize-s"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "630px", left: "1649.5px", width: "27.5px", height: "89px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch</div>
                                <div className="k-event-template">Business Lunch</div>
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
