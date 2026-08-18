import { SchedulerEvent } from "..";

const styles = `
    #test-area {
        padding: 20px;
        gap: 25px;
    }
`;

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-5">
      <span>Large</span>
      <span></span>
      <span>Medium</span>
      <span></span>
      <span>Small</span>

      <SchedulerEvent style={{ position: "relative", height: "120px" }} title="Event Title" time="10:00 AM – 10:30 AM" />

      <SchedulerEvent style={{ position: "relative", height: "71px" }} title="Event Title" time="10:00 AM – 10:30 AM" />

      <SchedulerEvent style={{ position: "relative", height: "40px" }} title="Event Title" time="10:00 AM – 10:30 AM" />

      <SchedulerEvent style={{ position: "relative", height: "25px" }} title="Event Title" time="10:00 AM – 10:30 AM" />

      <SchedulerEvent style={{ position: "relative", height: "12px" }} title="Event Title" time="10:00 AM – 10:30 AM" />

      <SchedulerEvent style={{ position: "relative", height: "120px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />

      <SchedulerEvent style={{ position: "relative", height: "71px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />

      <SchedulerEvent style={{ position: "relative", height: "40px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />

      <SchedulerEvent style={{ position: "relative", height: "25px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />

      <SchedulerEvent style={{ position: "relative", height: "12px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />

      <SchedulerEvent recurring="recurring" style={{ position: "relative", height: "120px" }} title="Event Title" time="10:00 AM – 10:30 AM" />

      <SchedulerEvent recurring="recurring" style={{ position: "relative", height: "71px" }} title="Event Title" time="10:00 AM – 10:30 AM" />

      <SchedulerEvent recurring="recurring" style={{ position: "relative", height: "40px" }} title="Event Title" time="10:00 AM – 10:30 AM" />

      <SchedulerEvent recurring="recurring" style={{ position: "relative", height: "25px" }} title="Event Title" time="10:00 AM – 10:30 AM" />

      <SchedulerEvent recurring="recurring" style={{ position: "relative", height: "12px" }} title="Event Title" time="10:00 AM – 10:30 AM" />

      <SchedulerEvent recurring="recurring" style={{ position: "relative", height: "120px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />

      <SchedulerEvent recurring="recurring" style={{ position: "relative", height: "71px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />

      <SchedulerEvent recurring="recurring" style={{ position: "relative", height: "40px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />

      <SchedulerEvent recurring="recurring" style={{ position: "relative", height: "25px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />

      <SchedulerEvent recurring="recurring" style={{ position: "relative", height: "12px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />

      <SchedulerEvent recurring="recurring" continuationTop continuationBottom style={{ position: "relative", height: "120px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />

      <SchedulerEvent recurring="recurring" continuationTop continuationBottom style={{ position: "relative", height: "71px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />

      <SchedulerEvent recurring="recurring" continuationTop continuationBottom style={{ position: "relative", height: "40px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />

      <SchedulerEvent recurring="recurring" continuationLeft continuationRight style={{ position: "relative", height: "25px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />

      <SchedulerEvent recurring="recurring" continuationLeft continuationRight style={{ position: "relative", height: "12px" }} title="Event Title Event Long Long Long Long Long Long Long Long" time="10:00 AM – 10:30 AM AM AM AM" />
    </div>
  </>
);
