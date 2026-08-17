import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";
import { Scheduler, SchedulerHead, SchedulerBody, SchedulerRow, SchedulerToolbar, SchedulerCell, SchedulerGroup, SchedulerEvent } from "../index";

export const SchedulerFlexMonthHorizontalGrouping = ({ style, ...props }: any) => (
  <Scheduler
    style={style}
    layout="flex"
    view="month"
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
          February 2026
        </Button>
        <span className="k-spacer"></span>
        <SegmentedControl thumbStyles={{ width: "19%", left: "34%" }} className="k-scheduler-views">
          <SegmentedControlButton>Day</SegmentedControlButton>
          <SegmentedControlButton>Week</SegmentedControlButton>
          <SegmentedControlButton selected>Month</SegmentedControlButton>
          <SegmentedControlButton>Timeline</SegmentedControlButton>
          <SegmentedControlButton>Agenda</SegmentedControlButton>
        </SegmentedControl>
      </SchedulerToolbar>
    }
    children={
      <>
        <SchedulerHead as="div">
          <SchedulerGroup>
            <SchedulerRow>
              <SchedulerCell as="div" cellType={["heading"]}>
                Meeting Room 101
              </SchedulerCell>
              <SchedulerCell as="div" cellType={["heading"]}>
                Meeting Room 201
              </SchedulerCell>
            </SchedulerRow>
            <SchedulerRow>
              <SchedulerCell as="div" cellType={["group"]}>
                <SchedulerRow>
                  <SchedulerCell as="div" cellType={["heading"]} text="Sunday"></SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]} text="Monday"></SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]} text="Tuesday"></SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]} text="Wednesday"></SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]} text="Thursday"></SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]} text="Friday"></SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]} text="Saturday"></SchedulerCell>
                </SchedulerRow>
              </SchedulerCell>
              <SchedulerCell as="div" cellType={["group"]}>
                <SchedulerRow>
                  <SchedulerCell as="div" cellType={["heading"]} text="Sunday"></SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]} text="Monday"></SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]} text="Tuesday"></SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]} text="Wednesday"></SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]} text="Thursday"></SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]} text="Friday"></SchedulerCell>
                  <SchedulerCell as="div" cellType={["heading"]} text="Saturday"></SchedulerCell>
                </SchedulerRow>
              </SchedulerCell>
            </SchedulerRow>
          </SchedulerGroup>
        </SchedulerHead>
        <SchedulerBody as="div">
          <SchedulerGroup>
            <SchedulerRow>
              <SchedulerCell as="div" cellType={["group"]}>
                <SchedulerRow>
                  <SchedulerCell as="div" cellType={["slot"]} text="26" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="27" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="28" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="29" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="30" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="31" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="01" />
                </SchedulerRow>
                <SchedulerRow>
                  <SchedulerCell as="div" cellType={["slot"]}>
                    <span className="k-link k-nav-day">02</span>
                    <Button className="k-more-events" size="xsmall" fillMode="flat" themeColor="primary" aria-label="1 more event">
                      1 more
                    </Button>
                  </SchedulerCell>
                  <SchedulerCell as="div" cellType={["slot"]} text="03" />
                  <SchedulerCell as="div" cellType={["slot"]} text="04" />
                  <SchedulerCell as="div" cellType={["slot"]} text="05" />
                  <SchedulerCell as="div" cellType={["slot"]} text="06" />
                  <SchedulerCell as="div" cellType={["slot"]} text="07" />
                  <SchedulerCell as="div" cellType={["slot"]} text="08" />
                </SchedulerRow>
                <SchedulerRow>
                  <SchedulerCell as="div" cellType={["slot"]} text="09" />
                  <SchedulerCell as="div" cellType={["slot"]} text="10" />
                  <SchedulerCell as="div" cellType={["slot"]} text="11" />
                  <SchedulerCell as="div" cellType={["slot"]} text="12" />
                  <SchedulerCell as="div" cellType={["slot"]} text="13" />
                  <SchedulerCell as="div" cellType={["slot"]} text="14" />
                  <SchedulerCell as="div" cellType={["slot"]} text="15" />
                </SchedulerRow>
                <SchedulerRow>
                  <SchedulerCell as="div" cellType={["slot"]} text="16" />
                  <SchedulerCell as="div" cellType={["slot"]} text="17" />
                  <SchedulerCell as="div" cellType={["slot"]} text="18" />
                  <SchedulerCell as="div" cellType={["slot"]} text="19" />
                  <SchedulerCell as="div" cellType={["slot"]} text="20" />
                  <SchedulerCell as="div" cellType={["slot"]} text="21" />
                  <SchedulerCell as="div" cellType={["slot"]} text="22" />
                </SchedulerRow>
                <SchedulerRow>
                  <SchedulerCell as="div" cellType={["slot"]} text="23" />
                  <SchedulerCell as="div" cellType={["slot"]} text="24" />
                  <SchedulerCell as="div" cellType={["slot"]} text="25" />
                  <SchedulerCell as="div" cellType={["slot"]} text="26" />
                  <SchedulerCell as="div" cellType={["slot"]} text="27" />
                  <SchedulerCell as="div" cellType={["slot"]} text="28" />
                  <SchedulerCell as="div" cellType={["slot"]} text="29" />
                </SchedulerRow>
                <SchedulerRow>
                  <SchedulerCell as="div" cellType={["slot"]} text="30" />
                  <SchedulerCell as="div" cellType={["slot"]} text="31" />
                  <SchedulerCell as="div" cellType={["slot"]} text="01" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="02" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="03" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="04" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="05" className="k-other-month" />
                </SchedulerRow>
              </SchedulerCell>
              <SchedulerCell as="div" cellType={["group"]}>
                <SchedulerRow>
                  <SchedulerCell as="div" cellType={["slot"]} text="26" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="27" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="28" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="29" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="30" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="31" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="01" />
                </SchedulerRow>
                <SchedulerRow>
                  <SchedulerCell as="div" cellType={["slot"]} text="02" />
                  <SchedulerCell as="div" cellType={["slot"]} text="03" />
                  <SchedulerCell as="div" cellType={["slot"]} text="04" />
                  <SchedulerCell as="div" cellType={["slot"]} text="05" />
                  <SchedulerCell as="div" cellType={["slot"]} text="06" />
                  <SchedulerCell as="div" cellType={["slot"]} text="07" />
                  <SchedulerCell as="div" cellType={["slot"]} text="08" />
                </SchedulerRow>
                <SchedulerRow>
                  <SchedulerCell as="div" cellType={["slot"]} text="09" />
                  <SchedulerCell as="div" cellType={["slot"]} text="10" />
                  <SchedulerCell as="div" cellType={["slot"]} text="11" />
                  <SchedulerCell as="div" cellType={["slot"]} text="12" />
                  <SchedulerCell as="div" cellType={["slot"]} text="13" />
                  <SchedulerCell as="div" cellType={["slot"]} text="14" />
                  <SchedulerCell as="div" cellType={["slot"]} text="15" />
                </SchedulerRow>
                <SchedulerRow>
                  <SchedulerCell as="div" cellType={["slot"]} text="16" />
                  <SchedulerCell as="div" cellType={["slot"]} text="17" />
                  <SchedulerCell as="div" cellType={["slot"]} text="18" />
                  <SchedulerCell as="div" cellType={["slot"]} text="19" />
                  <SchedulerCell as="div" cellType={["slot"]} text="20" />
                  <SchedulerCell as="div" cellType={["slot"]} text="21" />
                  <SchedulerCell as="div" cellType={["slot"]} text="22" />
                </SchedulerRow>
                <SchedulerRow>
                  <SchedulerCell as="div" cellType={["slot"]} text="23" />
                  <SchedulerCell as="div" cellType={["slot"]} text="24" />
                  <SchedulerCell as="div" cellType={["slot"]} text="25" />
                  <SchedulerCell as="div" cellType={["slot"]} text="26" />
                  <SchedulerCell as="div" cellType={["slot"]} text="27" />
                  <SchedulerCell as="div" cellType={["slot"]} text="28" />
                  <SchedulerCell as="div" cellType={["slot"]} text="29" />
                </SchedulerRow>
                <SchedulerRow>
                  <SchedulerCell as="div" cellType={["slot"]} text="30" />
                  <SchedulerCell as="div" cellType={["slot"]} text="31" />
                  <SchedulerCell as="div" cellType={["slot"]} text="01" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="02" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="03" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="04" className="k-other-month" />
                  <SchedulerCell as="div" cellType={["slot"]} text="05" className="k-other-month" />
                </SchedulerRow>
              </SchedulerCell>
            </SchedulerRow>
          </SchedulerGroup>
          <SchedulerEvent resizable="none" style={{ top: "137px", left: "1px", height: "25px", width: "70px" }} title="Event 1 Title" time="9:00 AM - 10:00 AM" />
        </SchedulerBody>
      </>
    }
    {...props}
  ></Scheduler>
);
