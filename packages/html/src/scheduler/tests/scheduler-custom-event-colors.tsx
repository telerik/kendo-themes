import { SchedulerEvent } from "..";

const styles = `
    #test-area {
        padding: 20px;
        gap: 25px;
    }
`;

const customEvents = [
  { label: "Red", color: "#f44336" },
  { label: "Orange", color: "#ff9800" },
  { label: "Green", color: "#4caf50" },
  { label: "Teal", color: "#009688" },
  { label: "Purple", color: "#9c27b0" },
  { label: "Yellow", color: "#ffeb3b" },
];

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-7">
      <span>Default</span>

      {customEvents.map(({ label }) => (
        <>
          <span>{label}</span>
        </>
      ))}

      <div></div>
      {customEvents.map(({ color }) => (
        <>
          <div
            style={
              {
                background: color,
                width: "25px",
                height: "25px",
              } as React.CSSProperties
            }
          />
        </>
      ))}

      <SchedulerEvent style={{ position: "relative", height: "71px" }} title="Event Title" time="10:00 AM – 10:30 AM" />
      {customEvents.map(({ color }) => (
        <>
          <SchedulerEvent
            style={
              {
                position: "relative",
                height: "71px",
                "--kendo-scheduler-event-color": color,
              } as React.CSSProperties
            }
            title="Normal"
            time="10:00 AM – 10:30 AM"
          />
        </>
      ))}

      <SchedulerEvent hover style={{ position: "relative", height: "71px" }} title="Event Title" time="10:00 AM – 10:30 AM" />
      {customEvents.map(({ color }) => (
        <>
          <SchedulerEvent
            hover
            style={
              {
                position: "relative",
                height: "71px",
                "--kendo-scheduler-event-color": color,
              } as React.CSSProperties
            }
            title="Hover"
            time="10:00 AM – 10:30 AM"
          />
        </>
      ))}

      <SchedulerEvent selected style={{ position: "relative", height: "71px" }} title="Event Title" time="10:00 AM – 10:30 AM" />
      {customEvents.map(({ color }) => (
        <>
          <SchedulerEvent
            selected
            style={
              {
                position: "relative",
                height: "71px",
                "--kendo-scheduler-event-color": color,
              } as React.CSSProperties
            }
            title="Selected"
            time="10:00 AM – 10:30 AM"
          />
        </>
      ))}
    </div>
  </>
);
