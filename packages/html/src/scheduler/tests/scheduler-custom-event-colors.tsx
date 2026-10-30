import { SchedulerEvent } from "..";

const styles = `
    #test-area {
        padding: 20px;
        gap: 25px;
        grid-template-columns: 60px repeat(7, 1fr);
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
    <div id="test-area" className="k-d-grid">
      <span></span>
      <span>Default</span>

      {customEvents.map(({ label }) => (
        <>
          <span>{label}</span>
        </>
      ))}

      <span>Mark</span>
      <div className="k-scheduler-mark" />
      {customEvents.map(({ color }) => (
        <>
          <div
            className="k-scheduler-mark"
            style={{ background: color }}
          />
        </>
      ))}

      <span>Event</span>
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

      <span>Event Hovered</span>
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

      <span>Event Selected</span>
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

      <span>Marquee</span>
      <div className="k-marquee k-scheduler-marquee k-first k-last" style={{ position: "relative", height: "71px" }}>
        <div className="k-marquee-color"></div>
        <div className="k-marquee-text">
          <div className="k-label-top">7:00 AM</div>
          <div className="k-label-bottom">10:30 AM</div>
        </div>
      </div>
      {customEvents.map(({ color }) => (
        <>
          <div className="k-marquee k-scheduler-marquee k-first k-last" style={{ position: "relative", height: "71px", "--kendo-marquee-color": color } as React.CSSProperties}>
            <div className="k-marquee-color"></div>
            <div className="k-marquee-text">
              <div className="k-label-top">7:00 AM</div>
              <div className="k-label-bottom">10:30 AM</div>
            </div>
          </div>
        </>
      ))}
    </div>
  </>
);
