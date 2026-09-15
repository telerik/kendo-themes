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
              June 21 - June 27
            </Button>
            <span className="k-spacer"></span>
            <SegmentedControl thumbStyles={{ width: "19%", left: "15%" }} className="k-scheduler-views">
              <SegmentedControlButton>Day</SegmentedControlButton>
              <SegmentedControlButton selected>Week</SegmentedControlButton>
              <SegmentedControlButton>Month</SegmentedControlButton>
              <SegmentedControlButton>Timeline</SegmentedControlButton>
              <SegmentedControlButton>Agenda</SegmentedControlButton>
            </SegmentedControl>
          </SchedulerToolbar>
        }
        footer={
          <SchedulerToolbar footer>
            <Button icon="clock" className="k-scheduler-fullday">
              Show business hours
            </Button>
          </SchedulerToolbar>
        }
        children={
          <>
            <tbody>
              <SchedulerHead as="tr">
                <td>
                  <SchedulerTimes>
                    <SchedulerTable role="none">
                      <tbody>
                        <tr style={{ height: "55px" }}>
                          <SchedulerCell as="th" />
                        </tr>
                        <tr style={{ height: "64px" }}>
                          <SchedulerCell as="th" allDay text="all day" />
                        </tr>
                      </tbody>
                    </SchedulerTable>
                  </SchedulerTimes>
                </td>
                <td>
                  <SchedulerHeader style={{ paddingRight: "16px" }}>
                    <SchedulerTable>
                      <tbody>
                        <tr className="k-scheduler-date-group">
                          <SchedulerCell as="th" dayText="Sun" text="21" />
                          <SchedulerCell as="th" dayText="Mon" text="22" />
                          <SchedulerCell as="th" dayText="Tue" text="23" />
                          <SchedulerCell as="th" today dayText="Wed" text="24" />
                          <SchedulerCell as="th" dayText="Thu" text="25" />
                          <SchedulerCell as="th" dayText="Fri" text="26" />
                          <SchedulerCell as="th" dayText="Sat" text="27" />
                        </tr>
                      </tbody>
                    </SchedulerTable>
                    <div style={{ position: "relative" }}>
                      <SchedulerTable className="k-scheduler-header-all-day">
                        <tbody>
                          <tr style={{ height: "64px" }}>
                            <SchedulerCell as="td" />
                            <SchedulerCell as="td" />
                            <SchedulerCell as="td" />
                            <SchedulerCell as="td" />
                            <SchedulerCell as="td" />
                            <SchedulerCell as="td" />
                            <SchedulerCell as="td" />
                          </tr>
                        </tbody>
                      </SchedulerTable>
                      <SchedulerEvent continuationLeft endTime="9:00 AM" resizable="horizontal" style={{ top: "0px", left: "0%", width: "260px", height: "25px" }} title="Global IT Conference" />
                      <SchedulerEvent resizable="horizontal" style={{ top: "0px", left: "57.143%", width: "130px", height: "25px" }} title="Public Holiday" />
                      <SchedulerEvent startTime="8:00 AM" endTime="5:00 PM" resizable="horizontal" style={{ top: "28px", left: "14.286%", width: "260px", height: "25px" }} title="Team Offsite Long Event Long Event" />
                      <SchedulerEvent startTime="9:00 AM" continuationRight resizable="horizontal" style={{ top: "28px", left: "57%", width: "390px", height: "25px" }} title="Annual Company Retreat" />
                    </div>
                  </SchedulerHeader>
                </td>
              </SchedulerHead>
              <SchedulerBody as="tr">
                <td>
                  <SchedulerTimes style={{ height: "195px" }}>
                    <SchedulerTable role="none" style={{ height: "400px" }}>
                      <tbody>
                        <tr>
                          <SchedulerCell as="th">
                            <span>7:00 AM</span>
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th">
                            <span>8:00 AM</span>
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th">
                            <span>9:00 AM</span>
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" cellType={["slot"]} />
                        </tr>
                        <tr>
                          <SchedulerCell as="th">
                            <span>10:00 AM</span>
                          </SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="th" cellType={["slot"]} />
                        </tr>
                      </tbody>
                    </SchedulerTable>
                  </SchedulerTimes>
                </td>
                <td>
                  <SchedulerContent style={{ height: "195px" }} tabIndex={0}>
                    <SchedulerTable>
                      <tbody>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                        </tr>
                        <tr className="k-middle-row">
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                        </tr>
                        <tr>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                          <SchedulerCell as="td">&nbsp;</SchedulerCell>
                        </tr>
                      </tbody>
                    </SchedulerTable>
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
