import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";
import { SchedulerBody, SchedulerCell, SchedulerEvent, SchedulerFlexTimeline, SchedulerGroup, SchedulerHead, SchedulerRow, SchedulerStickyCell, SchedulerToolbar } from "../";

const style = `
    #test-area {
        max-width: 1080px;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-1">
      <SchedulerFlexTimeline
        style={{ height: "900px" }}
        toolbar={
          <>
            <SchedulerToolbar>
              <Button themeColor="primary" icon="plus" aria-label="Add new event">
                New Event
              </Button>
               <ButtonGroup fillMode="flat">
                <Button icon="chevron-left" fillMode="flat" aria-label="Navigate to previous period"></Button>
                <Button icon="chevron-right" fillMode="flat" aria-label="Navigate to next period"></Button>
              </ButtonGroup>
              <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
                24 June – 25 June
              </Button>
              <Button fillMode="flat">Today</Button>
              <span className="k-spacer"></span>
              <SegmentedControl thumbStyles={{ width: "23%", left: "54%" }} className="k-scheduler-views">
                <SegmentedControlButton>Day</SegmentedControlButton>
                <SegmentedControlButton>Week</SegmentedControlButton>
                <SegmentedControlButton>Month</SegmentedControlButton>
                <SegmentedControlButton selected>Timeline</SegmentedControlButton>
                <SegmentedControlButton>Agenda</SegmentedControlButton>
              </SegmentedControl>
            </SchedulerToolbar>
          </>
        }
        children={
          <>
            <SchedulerHead as="div" style={{ width: "14401px" }}>
              <SchedulerGroup>
                <SchedulerRow>
                  <SchedulerStickyCell>
                    <SchedulerCell as="div" cellType={["side"]} style={{ minWidth: "62px" }} />
                  </SchedulerStickyCell>
                  <SchedulerCell as="div" cellType={["heading"]}>
                    Meeting Room 101
                  </SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]}>
                    Meeting Room 201
                  </SchedulerCell>
                </SchedulerRow>
                <SchedulerRow>
                  <SchedulerStickyCell>
                    <SchedulerCell as="div" cellType={["side"]} style={{ minWidth: "62px" }} />
                  </SchedulerStickyCell>
                  <SchedulerCell as="div" cellType={["heading"]}>
                    Peter
                  </SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]}>
                    Alex
                  </SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]}>
                    Peter
                  </SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]}>
                    Alex
                  </SchedulerCell>
                </SchedulerRow>
                <SchedulerRow>
                  <SchedulerStickyCell>
                    <SchedulerCell as="div" cellType={["side"]} style={{ minWidth: "62px" }} />
                  </SchedulerStickyCell>
                  <SchedulerCell as="div" cellType={["group"]}>
                    <SchedulerRow>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        Jun 24
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        Jun 25
                      </SchedulerCell>
                    </SchedulerRow>
                    <SchedulerRow>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        8:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        9:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        10:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        11:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        12:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        1:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        2:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        3:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        4:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        8:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        9:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        10:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        11:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        12:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        1:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        2:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        3:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        4:00 PM
                      </SchedulerCell>
                    </SchedulerRow>
                  </SchedulerCell>
                  <SchedulerCell as="div" cellType={["group"]}>
                    <SchedulerRow>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        Jun 24
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        Jun 25
                      </SchedulerCell>
                    </SchedulerRow>
                    <SchedulerRow>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        8:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        9:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        10:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        11:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        12:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        1:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        2:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        3:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        4:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        8:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        9:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        10:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        11:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        12:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        1:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        2:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        3:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        4:00 PM
                      </SchedulerCell>
                    </SchedulerRow>
                  </SchedulerCell>
                  <SchedulerCell as="div" cellType={["group"]}>
                    <SchedulerRow>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        Jun 24
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        Jun 25
                      </SchedulerCell>
                    </SchedulerRow>
                    <SchedulerRow>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        8:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        9:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        10:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        11:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        12:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        1:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        2:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        3:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        4:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        8:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        9:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        10:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        11:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        12:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        1:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        2:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        3:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        4:00 PM
                      </SchedulerCell>
                    </SchedulerRow>
                  </SchedulerCell>
                  <SchedulerCell as="div" cellType={["group"]}>
                    <SchedulerRow>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        Jun 24
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        Jun 25
                      </SchedulerCell>
                    </SchedulerRow>
                    <SchedulerRow>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        8:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        9:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        10:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        11:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        12:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        1:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        2:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        3:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        4:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        8:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        9:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        10:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        11:00 AM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        12:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        1:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        2:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        3:00 PM
                      </SchedulerCell>
                      <SchedulerCell as="div" cellType={["heading"]}>
                        4:00 PM
                      </SchedulerCell>
                    </SchedulerRow>
                  </SchedulerCell>
                </SchedulerRow>
              </SchedulerGroup>
            </SchedulerHead>
            <SchedulerBody as="div" style={{ width: "14401px" }}>
              <SchedulerGroup>
                <SchedulerRow>
                  <SchedulerStickyCell>
                    <SchedulerCell as="div" cellType={["heading", "side"]} allDay style={{ minWidth: "62px" }}>
                      All events
                    </SchedulerCell>
                  </SchedulerStickyCell>
                  <SchedulerCell as="div" cellType={["group"]}>
                    <SchedulerRow>
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "62px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "62px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }} />
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                    </SchedulerRow>
                  </SchedulerCell>
                  <SchedulerCell as="div" cellType={["group"]}>
                    <SchedulerRow>
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "62px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "62px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }} />
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                    </SchedulerRow>
                  </SchedulerCell>
                  <SchedulerCell as="div" cellType={["group"]}>
                    <SchedulerRow>
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "62px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "62px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }} />
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                    </SchedulerRow>
                  </SchedulerCell>
                  <SchedulerCell as="div" cellType={["group"]}>
                    <SchedulerRow>
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "62px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "62px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} />
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }} />
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "36px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]} style={{ userSelect: "none", minHeight: "10px" }}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                      <SchedulerCell as="div" cellType={["slot"]}></SchedulerCell>
                    </SchedulerRow>
                  </SchedulerCell>
                </SchedulerRow>
              </SchedulerGroup>
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "0px", left: "775px", width: "299px", height: "25px" }} title="Car Service" time="11:30 AM - 1:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "0px", left: "4356px", width: "299px", height: "25px" }} title="Car Service" time="11:30 AM - 1:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "0px", left: "7936px", width: "299px", height: "25px" }} title="Car Service" time="11:30 AM - 1:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "0px", left: "11517px", width: "299px", height: "25px" }} title="Car Service" time="11:30 AM - 1:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "26px", left: "974px", width: "399px", height: "25px" }} title="Breakfast with Tom" time="12:45 PM - 2:30 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "26px", left: "4555px", width: "399px", height: "25px" }} title="Breakfast with Tom" time="12:45 PM - 2:30 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "26px", left: "8135px", width: "399px", height: "25px" }} title="Breakfast with Tom" time="12:45 PM - 2:30 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "26px", left: "11716px", width: "399px", height: "25px" }} title="Breakfast with Tom" time="12:45 PM - 2:30 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "0px", left: "1074px", width: "395px", height: "25px" }} title="Team planning meeting" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "0px", left: "4654px", width: "395px", height: "25px" }} title="Team planning meeting" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "0px", left: "8235px", width: "395px", height: "25px" }} title="Team planning meeting" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "0px", left: "11815px", width: "395px", height: "25px" }} title="Team planning meeting" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "52px", left: "1074px", width: "197px", height: "25px" }} title="Replace the printer on the 1st floor" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "52px", left: "4654px", width: "197px", height: "25px" }} title="Replace the printer on the 1st floor" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "52px", left: "8235px", width: "197px", height: "25px" }} title="Replace the printer on the 1st floor" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "52px", left: "11815px", width: "197px", height: "25px" }} title="Replace the printer on the 1st floor" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "0px", left: "1472px", width: "99px", height: "25px" }} title="Register new Access Cards" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "0px", left: "5052px", width: "99px", height: "25px" }} title="Register new Access Cards" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "0px", left: "8632px", width: "99px", height: "25px" }} title="Register new Access Cards" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "0px", left: "12213px", width: "99px", height: "25px" }} title="Register new Access Cards" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "0px", left: "1770px", width: "98px", height: "25px" }} title="Install new laptops in conference rooms" time="4:30 PM - 6:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "0px", left: "5350px", width: "98px", height: "25px" }} title="Install new laptops in conference rooms" time="4:30 PM - 6:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "0px", left: "8931px", width: "98px", height: "25px" }} title="Install new laptops in conference rooms" time="4:30 PM - 6:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "0px", left: "12511px", width: "98px", height: "25px" }} title="Install new laptops in conference rooms" time="4:30 PM - 6:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "26px", left: "1770px", width: "98px", height: "25px" }} title="Job Interview - Bernard Atkins" time="4:30 PM - 5:30 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "26px", left: "5350px", width: "98px", height: "25px" }} title="Job Interview - Bernard Atkins" time="4:30 PM - 5:30 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "26px", left: "8931px", width: "98px", height: "25px" }} title="Job Interview - Bernard Atkins" time="4:30 PM - 5:30 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "26px", left: "12511px", width: "98px", height: "25px" }} title="Job Interview - Bernard Atkins" time="4:30 PM - 5:30 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "0px", left: "2665px", width: "197px", height: "25px" }} title="Business breakfast with Caroline" time="12:00 PM - 1:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "0px", left: "6245px", width: "197px", height: "25px" }} title="Business breakfast with Caroline" time="12:00 PM - 1:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "0px", left: "9826px", width: "197px", height: "25px" }} title="Business breakfast with Caroline" time="12:00 PM - 1:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "0px", left: "13406px", width: "197px", height: "25px" }} title="Business breakfast with Caroline" time="12:00 PM - 1:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "0px", left: "2864px", width: "395px", height: "25px" }} title="Software updates" time="1:00 PM - 3:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "0px", left: "6444px", width: "395px", height: "25px" }} title="Software updates" time="1:00 PM - 3:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "0px", left: "10025px", width: "395px", height: "25px" }} title="Software updates" time="1:00 PM - 3:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "0px", left: "13605px", width: "395px", height: "25px" }} title="Software updates" time="1:00 PM - 3:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "26px", left: "3063px", width: "98px", height: "25px" }} title="Discuss projects&apos; deadlines" time="2:00 PM - 2:30 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "26px", left: "6643px", width: "98px", height: "25px" }} title="Discuss projects&apos; deadlines" time="2:00 PM - 2:30 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "26px", left: "10224px", width: "98px", height: "25px" }} title="Discuss projects&apos; deadlines" time="2:00 PM - 2:30 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "26px", left: "13804px", width: "98px", height: "25px" }} title="Discuss projects&apos; deadlines" time="2:00 PM - 2:30 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "0px", left: "3262px", width: "197px", height: "25px" }} title="Business Lunch with Gregory Watkins" time="3:00 PM - 4:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "darkred", backgroundColor: "darkred", top: "0px", left: "6842px", width: "197px", height: "25px" }} title="Business Lunch with Gregory Watkins" time="3:00 PM - 4:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "0px", left: "10423px", width: "197px", height: "25px" }} title="Business Lunch with Gregory Watkins" time="3:00 PM - 4:00 PM" />
              <SchedulerEvent resizable="horizontal" style={{ cursor: "pointer", userSelect: "none", borderColor: "green", backgroundColor: "green", top: "0px", left: "14003px", width: "197px", height: "25px" }} title="Business Lunch with Gregory Watkins" time="3:00 PM - 4:00 PM" />
            </SchedulerBody>
          </>
        }
        footer={
          <>
            <SchedulerToolbar footer>
              <Button icon="clock" className="k-scheduler-fullday">
                Show full day
              </Button>
            </SchedulerToolbar>
          </>
        }
      />
    </div>
  </>
);
