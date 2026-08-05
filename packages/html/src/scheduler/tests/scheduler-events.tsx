import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";
import { SchedulerBody, SchedulerCell, SchedulerContent, SchedulerEvent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerTimes, SchedulerToolbar, SchedulerWeek } from "..";

const style = `
    #test-area {
        max-width: 1080px;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-1">
      <SchedulerWeek
        toolbar={
          <SchedulerToolbar>
            <Button themeColor="primary" icon="plus" aria-label="Add new event">
              New Event
            </Button>
            <Button fillMode="flat">Today</Button>
            <ButtonGroup fillMode="flat">
              <Button icon="chevron-left" fillMode="flat" aria-label="Navigate to previous period"></Button>
              <Button icon="chevron-right" fillMode="flat" aria-label="Navigate to next period"></Button>
            </ButtonGroup>
            <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
              10 June – 14 June
            </Button>
            <span className="k-spacer"></span>
            <SegmentedControl thumbStyles={{ width: "18%", left: "16%" }} className="k-scheduler-views">
              <SegmentedControlButton>Day</SegmentedControlButton>
              <SegmentedControlButton selected>Week</SegmentedControlButton>
              <SegmentedControlButton>Month</SegmentedControlButton>
              <SegmentedControlButton>Timeline</SegmentedControlButton>
              <SegmentedControlButton>Agenda</SegmentedControlButton>
            </SegmentedControl>
          </SchedulerToolbar>
        }
        footer={
          <>
            <SchedulerToolbar footer>
              <Button icon="clock" className="k-scheduler-fullday">
                Show business hours
              </Button>
            </SchedulerToolbar>
          </>
        }
        children={
          <>
            <tbody>
              <SchedulerHead as="tr">
                <td>
                  <SchedulerTimes>
                    <SchedulerTable>
                      <tbody>
                        <tr style={{ height: "55px" }}>
                          <SchedulerCell as="th" />
                        </tr>
                        <tr style={{ height: "72px" }}>
                          <SchedulerCell as="th" allDay>
                            all day
                          </SchedulerCell>
                        </tr>
                      </tbody>
                    </SchedulerTable>
                  </SchedulerTimes>
                </td>
                <td>
                  <SchedulerHeader>
                    <SchedulerTable>
                      <tbody>
                        <tr>
                          <SchedulerCell as="th" dayText="Mon" text="10" colspan={1} />
                          <SchedulerCell as="th" dayText="Tue" text="11" colspan={1} />
                          <SchedulerCell as="th" className="k-today" dayText="Wed" text="12" colspan={1} />
                          <SchedulerCell as="th" dayText="Thu" text="13" colspan={1} />
                          <SchedulerCell as="th" dayText="Fri" text="14" colspan={1} />
                        </tr>
                      </tbody>
                    </SchedulerTable>
                    <div style={{ position: "relative" }}>
                      <SchedulerTable className="k-scheduler-header-all-day">
                        <tbody>
                          <tr style={{ height: "72px" }}>
                            <SchedulerCell as="td" />
                            <SchedulerCell as="td" />
                            <SchedulerCell as="td" />
                            <SchedulerCell as="td" />
                            <SchedulerCell as="td" />
                          </tr>
                        </tbody>
                      </SchedulerTable>
                      <SchedulerEvent resizable="horizontal" title="Two Weeks in NZ" />
                    </div>
                  </SchedulerHeader>
                </td>
              </SchedulerHead>
              <SchedulerBody as="tr">
                <td>
                  <SchedulerTimes style={{ height: "195px" }}>
                    <SchedulerTable style={{ height: "1258px" }}>
                      <tbody>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            7:00 AM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            8:00 AM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            9:00 AM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            10:00 AM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            11:00 AM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            12:00 PM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            1:00 PM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            2:00 PM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            3:00 PM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            4:00 PM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            5:00 PM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            6:00 PM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            7:00 PM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            8:00 PM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            9:00 PM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            10:00 PM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1}>
                            11:00 PM
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" rowspan={1} cellType={["slot"]} />
                        </tr>
                      </tbody>
                    </SchedulerTable>
                  </SchedulerTimes>
                </td>
                <td>
                  <SchedulerContent style={{ height: "195px" }}>
                    <SchedulerTable>
                      <tbody>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" className="k-nonwork-hour" />
                          <SchedulerCell as="td" className="k-nonwork-hour" />
                          <SchedulerCell as="td" className="k-nonwork-hour" />
                          <SchedulerCell as="td" className="k-nonwork-hour" />
                          <SchedulerCell as="td" className="k-nonwork-hour" />
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" className="k-nonwork-hour" />
                          <SchedulerCell as="td" className="k-nonwork-hour" />
                          <SchedulerCell as="td" className="k-nonwork-hour" />
                          <SchedulerCell as="td" className="k-nonwork-hour" />
                          <SchedulerCell as="td" className="k-nonwork-hour k-selected" />
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" className="k-selected" />
                        </tr>
                        <tr>
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr>
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr>
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr>
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr>
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr>
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr>
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr>
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr>
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                          <SchedulerCell as="td" />
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                          <SchedulerCell as="td" className="k-nonwork-hour"></SchedulerCell>
                        </tr>
                      </tbody>
                    </SchedulerTable>
                    <SchedulerEvent style={{ top: "0px", height: "71px", width: "166px", left: "2px" }} title="Event title" time="7:00 AM - 8:00 AM" />
                    <SchedulerEvent style={{ top: "111px", height: "71px", width: "166px", left: "2px" }} ongoing title="Event title that is ongoing" time="8:30 AM - 9:00 AM" />
                    <SchedulerEvent style={{ top: "0px", height: "71px", width: "166px", left: "348px" }} hover recurring="recurring" title="Hovered Recurring event" time="7:30 AM - 9:00 AM" />
                    <SchedulerEvent style={{ top: "80px", height: "71px", width: "166px", left: "348px" }} recurring="non-recurring" title="Non-Recurring event" time="7:30 AM - 9:00 AM" />
                    <SchedulerEvent style={{ top: "110px", height: "71px", width: "166px", left: "520px" }} selected title="Selected event" time="8:30 AM - 9:30 AM" />
                    <SchedulerEvent style={{ top: "0px", height: "71px", width: "166px", left: "520px", color: "#333", backgroundColor: "#ddf", borderColor: "#fff" }} title="Custom color event" time="7:00 AM - 8:00 AM" />
                    <SchedulerEvent className="k-event-drag-hint" style={{ left: "175px", top: "0px", height: "71px", width: "166px" }} title="Drag hint" time="8:00 AM - 9:00 AM" />
                    <SchedulerEvent style={{ backgroundColor: "rgb(248, 163, 152)", borderColor: "rgb(248, 163, 152)", left: "175px", top: "100px", height: "71px", width: "166px" }} inverse ongoing title="Inverse Background" time="10:00 AM - 11:00 AM" />
                    <SchedulerEvent style={{ top: "0px", height: "70px", width: "166px", left: "760px" }} readonly title="Read-only event" time="7:30 AM - 9:00 AM" />
                    <SchedulerEvent style={{ top: "110px", height: "71px", width: "166px", left: "708px" }} continuationBottom title="Multi-Day event" time="8:30 AM - 9:30 AM" />
                  </SchedulerContent>
                </td>
              </SchedulerBody>
            </tbody>
          </>
        }
      />
    </div>
  </>
);
