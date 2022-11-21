
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
                        June 2020
                    </Button>
                    <span className="k-spacer"></span>
                    <span className="k-scheduler-views-wrapper">
                        <select className="k-views-dropdown k-picker k-dropdown-list k-dropdown k-rounded-md">
                            <option>Month</option>
                        </select>
                        <span className="k-button-group k-scheduler-views">
                            <Button>Day</Button>
                            <Button>Week</Button>
                            <Button selected>Month</Button>
                            <Button>Timeline</Button>
                            <Button>Agenda</Button>
                        </span>
                    </span>
                </div>
                <div className="k-scheduler-layout k-scheduler-layout-flex k-scheduler-monthview">
                    <div className="k-scheduler-head">
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-heading-cell">Meeting Room 101</div>
                                <div className="k-scheduler-cell k-heading-cell">Meeting Room 201</div>
                            </div>
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-heading-cell">Peter</div>
                                <div className="k-scheduler-cell k-heading-cell">Alex</div>
                                <div className="k-scheduler-cell k-heading-cell">Peter</div>
                                <div className="k-scheduler-cell k-heading-cell">Alex</div>
                            </div>
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Sunday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Monday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Tuesday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Wednesday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Thursday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Friday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Saturday</span></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Sunday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Monday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Tuesday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Wednesday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Thursday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Friday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Saturday</span></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Sunday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Monday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Tuesday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Wednesday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Thursday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Friday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Saturday</span></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Sunday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Monday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Tuesday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Wednesday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Thursday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Friday</span></div>
                                        <div className="k-scheduler-cell k-heading-cell"><span className="k-link k-nav-day">Saturday</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="k-scheduler-body">
                        <div className="k-scheduler-group k-group-horizontal">
                            <div className="k-scheduler-row">
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">31</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">01</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">02</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">03</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">04</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">05</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">06</span></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">07</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">08</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">09</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">10</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">11</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">12</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">13</span></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">14</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">15</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">16</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">17</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">18</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">19</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">20</span></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">21</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">22</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">23</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">24</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">25</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">26</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">27</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">28</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">29</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">30</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">01</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">02</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">03</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">04</span></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">31</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">01</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">02</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">03</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">04</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">05</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">06</span></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">07</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">08</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">09</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">10</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">11</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">12</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">13</span></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">14</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">15</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">16</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">17</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">18</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">19</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">20</span></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">21</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">22</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">23</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">24</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">25</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">26</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">27</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">28</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">29</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">30</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">01</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">02</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">03</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">04</span></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">31</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">01</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">02</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">03</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">04</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">05</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">06</span></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">07</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">08</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">09</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">10</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">11</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">12</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">13</span></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">14</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">15</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">16</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">17</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">18</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">19</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">20</span></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">21</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">22</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">23</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">24</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">25</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">26</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">27</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">28</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">29</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">30</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">01</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">02</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">03</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">04</span></div>
                                    </div>
                                </div>
                                <div className="k-scheduler-cell k-group-cell">
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">31</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">01</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">02</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">03</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">04</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">05</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">06</span></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">07</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">08</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">09</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">10</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">11</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">12</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">13</span></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">14</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">15</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">16</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">17</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">18</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">19</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">20</span></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">21</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">22</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">23</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">24</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">25</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">26</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">27</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                    </div>
                                    <div className="k-scheduler-row">
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">28</span><Button className="k-more-events" icon="more-horizontal"></Button></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">29</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">30</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">01</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">02</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">03</span></div>
                                        <div className="k-scheduler-cell k-slot-cell"><span className="k-link k-nav-day">04</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: '0px', left: "180px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: '0px', left: "599px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: '0px', left: "1019px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: '0px', left: "1438px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: '0px', left: "240px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:00 AM - 12:30 PM): Breakfast at Starbucks</div>
                                <div className="k-event-template">Breakfast at Starbucks</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: '0px', left: "659px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:00 AM - 12:30 PM): Breakfast at Starbucks</div>
                                <div className="k-event-template">Breakfast at Starbucks</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: '0px', left: "1079px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:00 AM - 12:30 PM): Breakfast at Starbucks</div>
                                <div className="k-event-template">Breakfast at Starbucks</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: '0px', left: "1498px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:00 AM - 12:30 PM): Breakfast at Starbucks</div>
                                <div className="k-event-template">Breakfast at Starbucks</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "26px", left: "240px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "26px", left: "659px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "26px", left: "1079px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "26px", left: "1498px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 3:00 PM): Software updates</div>
                                <div className="k-event-template">Software updates</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: '0px', left: "300px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): HR seminar preparation</div>
                                <div className="k-event-template">HR seminar preparation</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: '0px', left: "719px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): HR seminar preparation</div>
                                <div className="k-event-template">HR seminar preparation</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: '0px', left: "1139px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): HR seminar preparation</div>
                                <div className="k-event-template">HR seminar preparation</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: '0px', left: "1558px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): HR seminar preparation</div>
                                <div className="k-event-template">HR seminar preparation</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "97px", left: '0px', width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 AM - 11:30 AM): Website upload</div>
                                <div className="k-event-template">Website upload</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "97px", left: "420px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 AM - 11:30 AM): Website upload</div>
                                <div className="k-event-template">Website upload</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "97px", left: "839px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 AM - 11:30 AM): Website upload</div>
                                <div className="k-event-template">Website upload</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "97px", left: "1259px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 AM - 11:30 AM): Website upload</div>
                                <div className="k-event-template">Website upload</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "97px", left: "60px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "97px", left: "479px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "97px", left: "899px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "97px", left: "1318px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "97px", left: "120px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "97px", left: "539px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "97px", left: "959px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "97px", left: "1378px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "97px", left: "180px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 AM - 3:00 AM): Bowling tournament</div>
                                <div className="k-event-template">Bowling tournament</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "97px", left: "599px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 AM - 3:00 AM): Bowling tournament</div>
                                <div className="k-event-template">Bowling tournament</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "97px", left: "1019px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 AM - 3:00 AM): Bowling tournament</div>
                                <div className="k-event-template">Bowling tournament</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "97px", left: "1438px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 AM - 3:00 AM): Bowling tournament</div>
                                <div className="k-event-template">Bowling tournament</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "123px", left: "180px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 AM - 11:00 AM): Take the dog to the vet</div>
                                <div className="k-event-template">Take the dog to the vet</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "123px", left: "599px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 AM - 11:00 AM): Take the dog to the vet</div>
                                <div className="k-event-template">Take the dog to the vet</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "123px", left: "1019px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 AM - 11:00 AM): Take the dog to the vet</div>
                                <div className="k-event-template">Take the dog to the vet</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "123px", left: "1438px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 AM - 11:00 AM): Take the dog to the vet</div>
                                <div className="k-event-template">Take the dog to the vet</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "97px", left: "240px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:30 PM - 4:00 PM): Call Charlie about the project</div>
                                <div className="k-event-template">Call Charlie about the project</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "97px", left: "659px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:30 PM - 4:00 PM): Call Charlie about the project</div>
                                <div className="k-event-template">Call Charlie about the project</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "97px", left: "1079px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:30 PM - 4:00 PM): Call Charlie about the project</div>
                                <div className="k-event-template">Call Charlie about the project</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "97px", left: "1498px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:30 PM - 4:00 PM): Call Charlie about the project</div>
                                <div className="k-event-template">Call Charlie about the project</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "123px", left: "240px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "123px", left: "659px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "123px", left: "1079px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "123px", left: "1498px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "97px", left: "300px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:00 PM - 3:00 PM): Meeting with Alex</div>
                                <div className="k-event-template">Meeting with Alex</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "97px", left: "719px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:00 PM - 3:00 PM): Meeting with Alex</div>
                                <div className="k-event-template">Meeting with Alex</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "97px", left: "1139px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:00 PM - 3:00 PM): Meeting with Alex</div>
                                <div className="k-event-template">Meeting with Alex</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "97px", left: "1558px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(2:00 PM - 3:00 PM): Meeting with Alex</div>
                                <div className="k-event-template">Meeting with Alex</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "194px", left: "60px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "194px", left: "479px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "194px", left: "899px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "194px", left: "1318px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "194px", left: "120px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "194px", left: "539px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "194px", left: "959px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "194px", left: "1378px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "194px", left: "180px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(6:00 PM - 7:00 PM): Helpdesk weekly meeting</div>
                                <div className="k-event-template">Helpdesk weekly meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "194px", left: "599px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(6:00 PM - 7:00 PM): Helpdesk weekly meeting</div>
                                <div className="k-event-template">Helpdesk weekly meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "194px", left: "1019px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(6:00 PM - 7:00 PM): Helpdesk weekly meeting</div>
                                <div className="k-event-template">Helpdesk weekly meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "194px", left: "1438px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(6:00 PM - 7:00 PM): Helpdesk weekly meeting</div>
                                <div className="k-event-template">Helpdesk weekly meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "220px", left: "180px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "220px", left: "599px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "220px", left: "1019px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "220px", left: "1438px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "194px", left: "240px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "194px", left: "659px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "194px", left: "1079px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "194px", left: "1498px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "291px", left: "60px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "291px", left: "479px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "291px", left: "899px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "291px", left: "1318px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "291px", left: "120px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "291px", left: "539px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "291px", left: "959px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "291px", left: "1378px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "291px", left: "180px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "291px", left: "599px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "291px", left: "1019px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "291px", left: "1438px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                <div className="k-event-template">Car Service</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "317px", left: "180px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "317px", left: "599px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "317px", left: "1019px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "317px", left: "1438px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                <div className="k-event-template">Breakfast with Tom</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "291px", left: "240px", width: "119px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Attending HR Conference</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "291px", left: "659px", width: "119px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Attending HR Conference</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "291px", left: "1079px", width: "119px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Attending HR Conference</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "291px", left: "1498px", width: "119px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template">Attending HR Conference</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "317px", left: "240px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "317px", left: "659px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "317px", left: "1079px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "317px", left: "1498px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                <div className="k-event-template">Business breakfast with Caroline</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "317px", left: "300px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Banking</div>
                                <div className="k-event-template">Banking</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "317px", left: "719px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Banking</div>
                                <div className="k-event-template">Banking</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "317px", left: "1139px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Banking</div>
                                <div className="k-event-template">Banking</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "317px", left: "1558px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Banking</div>
                                <div className="k-event-template">Banking</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "291px", left: "360px", width: "58px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:30 AM - 11:30 AM): Website upload</div>
                                <div className="k-event-template">Website upload</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "291px", left: "779px", width: "58px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:30 AM - 11:30 AM): Website upload</div>
                                <div className="k-event-template">Website upload</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "291px", left: "1199px", width: "58px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:30 AM - 11:30 AM): Website upload</div>
                                <div className="k-event-template">Website upload</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "291px", left: "1618px", width: "58px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:30 AM - 11:30 AM): Website upload</div>
                                <div className="k-event-template">Website upload</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "317px", left: "360px", width: "58px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 12:30 PM): Breakfast with CFO and COO</div>
                                <div className="k-event-template">Breakfast with CFO and COO</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "317px", left: "779px", width: "58px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 12:30 PM): Breakfast with CFO and COO</div>
                                <div className="k-event-template">Breakfast with CFO and COO</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "317px", left: "1199px", width: "58px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 12:30 PM): Breakfast with CFO and COO</div>
                                <div className="k-event-template">Breakfast with CFO and COO</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "317px", left: "1618px", width: "58px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:30 AM - 12:30 PM): Breakfast with CFO and COO</div>
                                <div className="k-event-template">Breakfast with CFO and COO</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "388px", left: '0px', width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:00 AM - 12:00 PM): Dentist</div>
                                <div className="k-event-template">Dentist</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "388px", left: "420px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:00 AM - 12:00 PM): Dentist</div>
                                <div className="k-event-template">Dentist</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "388px", left: "839px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:00 AM - 12:00 PM): Dentist</div>
                                <div className="k-event-template">Dentist</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "388px", left: "1259px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div>
                                <div className="k-event-template k-event-time">(11:00 AM - 12:00 PM): Dentist</div>
                                <div className="k-event-template">Dentist</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "414px", left: '0px', width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Laura Bailey">
                                <div className="k-event-template k-event-time">(12:30 PM - 1:30 PM): Job Interview - Laura Bailey</div>
                                <div className="k-event-template">Job Interview - Laura Bailey</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "414px", left: "420px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Laura Bailey">
                                <div className="k-event-template k-event-time">(12:30 PM - 1:30 PM): Job Interview - Laura Bailey</div>
                                <div className="k-event-template">Job Interview - Laura Bailey</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "414px", left: "839px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Laura Bailey">
                                <div className="k-event-template k-event-time">(12:30 PM - 1:30 PM): Job Interview - Laura Bailey</div>
                                <div className="k-event-template">Job Interview - Laura Bailey</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "414px", left: "1259px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Job Interview - Laura Bailey">
                                <div className="k-event-template k-event-time">(12:30 PM - 1:30 PM): Job Interview - Laura Bailey</div>
                                <div className="k-event-template">Job Interview - Laura Bailey</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "388px", left: "60px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "388px", left: "479px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "388px", left: "899px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "388px", left: "1318px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "414px", left: "60px", width: "119px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Bob&apos;s Birthday Party">
                                <div className="k-event-template k-event-time">(11:00 PM - 2:30 AM): Bob&apos;s Birthday Party</div>
                                <div className="k-event-template">Bob&apos;s Birthday Party</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "414px", left: "479px", width: "119px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Bob&apos;s Birthday Party">
                                <div className="k-event-template k-event-time">(11:00 PM - 2:30 AM): Bob&apos;s Birthday Party</div>
                                <div className="k-event-template">Bob&apos;s Birthday Party</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "414px", left: "899px", width: "119px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Bob&apos;s Birthday Party">
                                <div className="k-event-template k-event-time">(11:00 PM - 2:30 AM): Bob&apos;s Birthday Party</div>
                                <div className="k-event-template">Bob&apos;s Birthday Party</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "414px", left: "1318px", width: "119px", height: "25px" }} >
                            <span className="k-event-actions"></span>
                            <div title="Bob&apos;s Birthday Party">
                                <div className="k-event-template k-event-time">(11:00 PM - 2:30 AM): Bob`&apos;`s Birthday Party</div>
                                <div className="k-event-template">Bob&apos;s Birthday Party</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "388px", left: "120px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "388px", left: "539px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "388px", left: "959px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "388px", left: "1378px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "388px", left: "180px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(6:00 PM - 7:00 PM): Helpdesk weekly meeting</div>
                                <div className="k-event-template">Helpdesk weekly meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "388px", left: "599px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(6:00 PM - 7:00 PM): Helpdesk weekly meeting</div>
                                <div className="k-event-template">Helpdesk weekly meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "388px", left: "1019px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(6:00 PM - 7:00 PM): Helpdesk weekly meeting</div>
                                <div className="k-event-template">Helpdesk weekly meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "388px", left: "1438px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(6:00 PM - 7:00 PM): Helpdesk weekly meeting</div>
                                <div className="k-event-template">Helpdesk weekly meeting</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "414px", left: "180px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "414px", left: "599px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "414px", left: "1019px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "414px", left: "1438px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(9:30 PM - 11:00 PM): Dance Practice</div>
                                <div className="k-event-template">Dance Practice</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "388px", left: "240px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', transform: "translateY(30px)", top: "388px", left: "659px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "388px", left: "1079px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                        <div className="k-event" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', transform: "translateY(30px)", top: "388px", left: "1498px", width: "59px", height: "25px" }} >
                            <span className="k-event-actions"><Icon name="arrow-rotate-cw"></Icon></span>
                            <div>
                                <div className="k-event-template k-event-time">(10:00 PM - 12:00 AM): HR Lecture</div>
                                <div className="k-event-template">HR Lecture</div>
                            </div>
                            <span className="k-event-actions"><a className="k-link k-event-delete"><Icon name="x"></Icon></a></span><span className="k-resize-handle k-resize-w"></span><span className="k-resize-handle k-resize-e"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
