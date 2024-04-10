
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { SchedulerBody, SchedulerCell, SchedulerEvent, SchedulerFlexTimeline, SchedulerGroup, SchedulerHead, SchedulerRow, SchedulerStickyCell, SchedulerToolbar } from '../';


const style = `
    #test-area {
        max-width: 1400px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <SchedulerFlexTimeline style={{ height: "900px" }}
                toolbar={
                    <>
                        <SchedulerToolbar>
                            <ButtonGroup className="k-scheduler-navigation">
                                <Button className="k-group-start">Today</Button>
                                <Button icon="caret-alt-left"></Button>
                                <Button className="k-group-end" icon="caret-alt-right"></Button>
                            </ButtonGroup>
                            <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                                Wednesday, June 24, 2020 - Thursday, June 25, 2020
                            </Button>
                            <span className="k-spacer"></span>
                            <ButtonGroup className="k-scheduler-views">
                                <Button className="k-group-start">Day</Button>
                                <Button>Week</Button>
                                <Button>Month</Button>
                                <Button selected>Timeline</Button>
                                <Button className="k-group-end">Agenda</Button>
                            </ButtonGroup>
                        </SchedulerToolbar>
                    </>
                }
                children={
                    <>
                        <SchedulerHead as="div" style={{ width: "14401px" }}>
                            <SchedulerGroup>
                                <SchedulerRow>
                                    <SchedulerStickyCell>
                                        <SchedulerCell as="div" cellType={[ "side" ]} style={{ minWidth: "62px" }}/>
                                    </SchedulerStickyCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]}>Meeting Room 101</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]}>Meeting Room 201</SchedulerCell>
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerStickyCell>
                                        <SchedulerCell as="div" cellType={[ "side" ]} style={{ minWidth: "62px" }}/>
                                    </SchedulerStickyCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]}>Peter</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]}>Alex</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]}>Peter</SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "heading" ]}>Alex</SchedulerCell>
                                </SchedulerRow>
                                <SchedulerRow>
                                    <SchedulerStickyCell>
                                        <SchedulerCell as="div" cellType={[ "side" ]} style={{ minWidth: "62px" }}/>
                                    </SchedulerStickyCell>
                                    <SchedulerCell as="div" cellType={[ "group" ]}>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>Jun 24</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>Jun 25</SchedulerCell>
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>8:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>9:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>10:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>11:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>12:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>1:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>2:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>3:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>4:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>8:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>9:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>10:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>11:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>12:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>1:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>2:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>3:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>4:00 PM</SchedulerCell>
                                        </SchedulerRow>
                                    </SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "group" ]}>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>Jun 24</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>Jun 25</SchedulerCell>
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>8:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>9:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>10:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>11:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>12:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>1:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>2:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>3:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>4:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>8:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>9:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>10:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>11:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>12:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>1:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>2:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>3:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>4:00 PM</SchedulerCell>
                                        </SchedulerRow>
                                    </SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "group" ]}>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>Jun 24</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>Jun 25</SchedulerCell>
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>8:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>9:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>10:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>11:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>12:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>1:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>2:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>3:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>4:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>8:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>9:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>10:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>11:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>12:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>1:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>2:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>3:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>4:00 PM</SchedulerCell>
                                        </SchedulerRow>
                                    </SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "group" ]}>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>Jun 24</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>Jun 25</SchedulerCell>
                                        </SchedulerRow>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>8:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>9:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>10:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>11:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>12:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>1:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>2:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>3:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>4:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>8:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>9:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>10:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>11:00 AM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>12:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>1:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>2:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>3:00 PM</SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "heading" ]}>4:00 PM</SchedulerCell>
                                        </SchedulerRow>
                                    </SchedulerCell>
                                </SchedulerRow>
                            </SchedulerGroup>
                        </SchedulerHead>
                        <SchedulerBody as="div" style={{ width: "14401px" }}>
                            <SchedulerGroup>
                                <SchedulerRow>
                                    <SchedulerStickyCell>
                                        <SchedulerCell as="div" cellType={[ "heading", "side" ]} allDay style={{ minWidth: "62px" }}>
                                            All events
                                        </SchedulerCell>
                                    </SchedulerStickyCell>
                                    <SchedulerCell as="div" cellType={[ "group" ]}>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "62px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "62px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                        </SchedulerRow>
                                    </SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "group" ]}>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "62px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "62px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                        </SchedulerRow>
                                    </SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "group" ]}>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "62px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "62px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                        </SchedulerRow>
                                    </SchedulerCell>
                                    <SchedulerCell as="div" cellType={[ "group" ]}>
                                        <SchedulerRow>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "62px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "62px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }} />
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "36px" }}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]} style={{ userSelect: 'none', minHeight: "10px" }} ></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                            <SchedulerCell as="div" cellType={[ "slot" ]}></SchedulerCell>
                                        </SchedulerRow>
                                    </SchedulerCell>
                                </SchedulerRow>
                            </SchedulerGroup>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "775px", width: "299px", height: "25px" }} >
                                <div>
                                    <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                    <div className="k-event-template">Car Service</div>
                                </div>
                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "4356px", width: "299px", height: "25px" }} >
                                <div>
                                    <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                    <div className="k-event-template">Car Service</div>
                                </div>
                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "7936px", width: "299px", height: "25px" }} >
                                <div>
                                    <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                    <div className="k-event-template">Car Service</div>
                                </div>
                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "11517px", width: "299px", height: "25px" }} >
                                <div>
                                    <div className="k-event-template k-event-time">(11:30 AM - 1:00 PM): Car Service</div>
                                    <div className="k-event-template">Car Service</div>
                                </div>
                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "974px", width: "399px", height: "25px" }} >
                                <div>
                                    <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                    <div className="k-event-template">Breakfast with Tom</div>
                                </div>
                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "4555px", width: "399px", height: "25px" }} >
                                <div>
                                    <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                    <div className="k-event-template">Breakfast with Tom</div>
                                </div>
                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "8135px", width: "399px", height: "25px" }} >
                                <div>
                                    <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                    <div className="k-event-template">Breakfast with Tom</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "11716px", width: "399px", height: "25px" }} >
                                <div>
                                    <div className="k-event-template k-event-time">(12:45 PM - 2:30 PM): Breakfast with Tom</div>
                                    <div className="k-event-template">Breakfast with Tom</div>
                                </div>
                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "1074px", width: "395px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template">Team planning meeting</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "4654px", width: "395px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template">Team planning meeting</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "8235px", width: "395px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template">Team planning meeting</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "11815px", width: "395px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template">Team planning meeting</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "52px", left: "1074px", width: "197px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template">Replace the printer on the 1st floor</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "52px", left: "4654px", width: "197px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template">Replace the printer on the 1st floor</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "52px", left: "8235px", width: "197px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template">Replace the printer on the 1st floor</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "52px", left: "11815px", width: "197px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template">Replace the printer on the 1st floor</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "1472px", width: "99px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template">Register new Access Cards</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "5052px", width: "99px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template">Register new Access Cards</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "8632px", width: "99px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template">Register new Access Cards</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "12213px", width: "99px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template">Register new Access Cards</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "1770px", width: "98px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                    <div className="k-event-template">Install new laptops in conference rooms</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "5350px", width: "98px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                    <div className="k-event-template">Install new laptops in conference rooms</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "8931px", width: "98px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                    <div className="k-event-template">Install new laptops in conference rooms</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "12511px", width: "98px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(4:30 PM - 6:00 PM): Install new laptops in conference rooms</div>
                                    <div className="k-event-template">Install new laptops in conference rooms</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "1770px", width: "98px", height: "25px" }} >

                                <div title="Job Interview - Bernard Atkins">
                                    <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                    <div className="k-event-template">Job Interview - Bernard Atkins</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "5350px", width: "98px", height: "25px" }} >

                                <div title="Job Interview - Bernard Atkins">
                                    <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                    <div className="k-event-template">Job Interview - Bernard Atkins</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "8931px", width: "98px", height: "25px" }} >

                                <div title="Job Interview - Bernard Atkins">
                                    <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                    <div className="k-event-template">Job Interview - Bernard Atkins</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "12511px", width: "98px", height: "25px" }} >

                                <div title="Job Interview - Bernard Atkins">
                                    <div className="k-event-template k-event-time">(4:30 PM - 5:30 PM): Job Interview - Bernard Atkins</div>
                                    <div className="k-event-template">Job Interview - Bernard Atkins</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "2665px", width: "197px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                    <div className="k-event-template">Business breakfast with Caroline</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "6245px", width: "197px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                    <div className="k-event-template">Business breakfast with Caroline</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "9826px", width: "197px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                    <div className="k-event-template">Business breakfast with Caroline</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "13406px", width: "197px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(12:00 PM - 1:00 PM): Business breakfast with Caroline</div>
                                    <div className="k-event-template">Business breakfast with Caroline</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "2864px", width: "395px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                    <div className="k-event-template">Software updates</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "6444px", width: "395px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                    <div className="k-event-template">Software updates</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "10025px", width: "395px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                    <div className="k-event-template">Software updates</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "13605px", width: "395px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(1:00 PM - 3:00 PM): Software updates</div>
                                    <div className="k-event-template">Software updates</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "3063px", width: "98px", height: "25px" }} >

                                <div title="Discuss projects&apos; deadlines">
                                    <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                    <div className="k-event-template">Discuss projects&apos; deadlines</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: "26px", left: "6643px", width: "98px", height: "25px" }} >

                                <div title="Discuss projects&apos; deadlines">
                                    <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                    <div className="k-event-template">Discuss projects&apos; deadlines</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "10224px", width: "98px", height: "25px" }} >

                                <div title="Discuss projects&apos; deadlines">
                                    <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                    <div className="k-event-template">Discuss projects&apos; deadlines</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: "26px", left: "13804px", width: "98px", height: "25px" }} >

                                <div title="Discuss projects&apos; deadlines">
                                    <div className="k-event-template k-event-time">(2:00 PM - 2:30 PM): Discuss projects&apos; deadlines</div>
                                    <div className="k-event-template">Discuss projects&apos; deadlines</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "3262px", width: "197px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                    <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'darkred', backgroundColor: 'darkred', top: '0px', left: "6842px", width: "197px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                    <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "10423px", width: "197px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                    <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                                </div>

                            </SchedulerEvent>
                            <SchedulerEvent eventPrefix={null} resizable="horizontal" style={{ cursor: 'pointer', userSelect: 'none', borderColor: 'green', backgroundColor: 'green', top: '0px', left: "14003px", width: "197px", height: "25px" }} >

                                <div>
                                    <div className="k-event-template k-event-time">(3:00 PM - 4:00 PM): Business Lunch with Gregory Watkins</div>
                                    <div className="k-event-template">Business Lunch with Gregory Watkins</div>
                                </div>

                            </SchedulerEvent>
                        </SchedulerBody>
                    </>
                }
                footer={
                    <>
                        <SchedulerToolbar footer>
                            <Button icon="clock" className="k-scheduler-fullday">Show full day</Button>
                        </SchedulerToolbar>
                    </>
                }
            />
        </div>
    </>
);
