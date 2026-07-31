import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import MenuButton from "../../menu-button/menu-button.spec";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";
import { SchedulerToolbar } from "../scheduler-toolbar.spec";

const styles = `
    #test-area {
        gap: 20px;
        max-width: unset;
        grid-template-columns: 20px 1fr;
    }

    /* These styles are used to test the pager items hiding order threshold */
    #test-area > .k-toolbar {
        width: fit-content;
    }
`;

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area" className="k-d-grid">
      <span className="k-colspan-2">Scheduler Toolbar — Day view</span>

      <span>0</span>
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
          3 February
        </Button>
        <span className="k-spacer"></span>
        <SegmentedControl thumbStyles={{ width: "15%" }} className="k-scheduler-views">
          <SegmentedControlButton selected>Day</SegmentedControlButton>
          <SegmentedControlButton>Week</SegmentedControlButton>
          <SegmentedControlButton>Month</SegmentedControlButton>
          <SegmentedControlButton>Timeline</SegmentedControlButton>
          <SegmentedControlButton>Agenda</SegmentedControlButton>
        </SegmentedControl>
      </SchedulerToolbar>

      <span>1</span>
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
          3 February
        </Button>
        <span className="k-spacer"></span>
        <span className="k-separator"></span>
        <MenuButton fillMode="flat">Day</MenuButton>
      </SchedulerToolbar>

      <span>2</span>
      <SchedulerToolbar>
        <Button themeColor="primary" icon="plus" aria-label="Add new event"></Button>
        <ButtonGroup fillMode="flat">
          <Button icon="chevron-left" fillMode="flat" aria-label="Navigate to previous period"></Button>
          <Button icon="chevron-right" fillMode="flat" aria-label="Navigate to next period"></Button>
        </ButtonGroup>
        <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
          3 Feb
        </Button>
        <span className="k-spacer"></span>
        <MenuButton fillMode="flat">Day</MenuButton>
      </SchedulerToolbar>

      <span>3</span>
      <SchedulerToolbar>
        <Button themeColor="primary" icon="plus" aria-label="Add new event"></Button>
        <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
          3 Feb
        </Button>
        <span className="k-spacer"></span>
        <MenuButton fillMode="flat">Day</MenuButton>
      </SchedulerToolbar>

      <span className="k-colspan-2">Scheduler Toolbar — Week view</span>

      <span>0</span>
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
          31 May – 6 June
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

      <span>1</span>
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
          31 May – 6 June
        </Button>
        <span className="k-spacer"></span>
        <span className="k-separator"></span>
        <MenuButton fillMode="flat">Week</MenuButton>
      </SchedulerToolbar>

      <span>2</span>
      <SchedulerToolbar>
        <Button themeColor="primary" icon="plus" aria-label="Add new event"></Button>
        <ButtonGroup fillMode="flat">
          <Button icon="chevron-left" fillMode="flat" aria-label="Navigate to previous period"></Button>
          <Button icon="chevron-right" fillMode="flat" aria-label="Navigate to next period"></Button>
        </ButtonGroup>
        <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
          31 May
        </Button>
        <span className="k-spacer"></span>
        <MenuButton fillMode="flat">Week</MenuButton>
      </SchedulerToolbar>

      <span>3</span>
      <SchedulerToolbar>
        <Button themeColor="primary" icon="plus" aria-label="Add new event"></Button>
        <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
          31 May
        </Button>
        <span className="k-spacer"></span>
        <MenuButton fillMode="flat">Week</MenuButton>
      </SchedulerToolbar>

      <span className="k-colspan-2">Scheduler Toolbar — Month view</span>

      <span>0</span>
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

      <span>1</span>
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
        <span className="k-separator"></span>
        <MenuButton fillMode="flat">Month</MenuButton>
      </SchedulerToolbar>

      <span>2</span>
      <SchedulerToolbar>
        <Button themeColor="primary" icon="plus" aria-label="Add new event"></Button>
        <ButtonGroup fillMode="flat">
          <Button icon="chevron-left" fillMode="flat" aria-label="Navigate to previous period"></Button>
          <Button icon="chevron-right" fillMode="flat" aria-label="Navigate to next period"></Button>
        </ButtonGroup>
        <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
          Feb 2026
        </Button>
        <span className="k-spacer"></span>
        <MenuButton fillMode="flat">Month</MenuButton>
      </SchedulerToolbar>

      <span>3</span>
      <SchedulerToolbar>
        <Button themeColor="primary" icon="plus" aria-label="Add new event"></Button>
        <Button icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
          Feb 2026
        </Button>
        <span className="k-spacer"></span>
        <MenuButton fillMode="flat">Month</MenuButton>
      </SchedulerToolbar>
    </div>
  </>
);
