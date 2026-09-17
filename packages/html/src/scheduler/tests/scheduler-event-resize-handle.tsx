import { SchedulerEvent } from "../scheduler-event.spec";

const style = `
    #test-area {
        width: 320px;
    }

    .scheduler-event-resize-handle-test {
        position: relative;
        width: 520px;
        height: 190px;
        padding: 24px;
    }

    .scheduler-event-resize-handle-test .k-event {
        position: relative;
        width: 220px;
        height: 96px;
    }

    .scheduler-event-resize-handle-test .k-event-min-height {
        position: absolute;
        top: 132px;
        left: 24px;
        width: 220px;
        min-height: 12px;
        height: 12px;
    }

    .scheduler-event-resize-handle-test .k-event-min-height .k-event-title {
        height: 12px;
        padding-block: 0;
        line-height: 12px;
    }

    .scheduler-event-resize-handle-test .k-event-horizontal {
        position: absolute;
        top: 24px;
        left: 268px;
        width: 220px;
        height: 25px;
    }

    .scheduler-event-resize-handle-test .k-resize-n,
    .scheduler-event-resize-handle-test .k-resize-s {
        top: 0;
        height: 8px;
    }

    .scheduler-event-resize-handle-test .k-resize-s {
        top: auto;
        bottom: 0;
    }

    .scheduler-event-resize-handle-test .k-resize-w,
    .scheduler-event-resize-handle-test .k-resize-e {
        left: 0;
        width: 8px;
    }

    .scheduler-event-resize-handle-test .k-resize-w {
        right: auto;
    }

    .scheduler-event-resize-handle-test .k-resize-e {
        left: auto;
        right: 0;
    }

    .scheduler-event-resize-handle-test .k-resize-handle::before {
        border: 0;
        border-radius: 1px;
        background-color: color-mix(in srgb, var(--kendo-color-on-primary) 70%, transparent);
    }

    .scheduler-event-resize-handle-test .k-resize-n::before,
    .scheduler-event-resize-handle-test .k-resize-s::before {
        width: 12px;
        height: 1px;
    }

    .scheduler-event-resize-handle-test .k-resize-w::before,
    .scheduler-event-resize-handle-test .k-resize-e::before {
        width: 1px;
        height: 12px;
    }

    .scheduler-event-resize-handle-test .k-resize-n,
    .scheduler-event-resize-handle-test .k-resize-s,
    .scheduler-event-resize-handle-test .k-resize-w,
    .scheduler-event-resize-handle-test .k-resize-e {
        background: transparent;
    }

    .scheduler-event-resize-handle-test.meridian .k-resize-handle::before {
        background-color: color-mix(in srgb, var(--kendo-color-secondary-on-subtle) 70%, transparent);
    }

`;

export default () => {
    const isMeridian = new URLSearchParams(window.location.search).get("theme") === "meridian";

    return (
        <>
            <style>{style}</style>
            <div id="test-area">
                <span>Scheduler events - active resize handles</span>
                <div className={`scheduler-event-resize-handle-test${isMeridian ? " meridian" : ""}`}>
                <SchedulerEvent
                    hover
                    resizable="vertical"
                    title="Event title"
                    time="11:00 AM - 11:30 AM"
                    aria-label="Event title, 11:00 AM - 11:30 AM"
                />
                <SchedulerEvent
                    className="k-event-min-height"
                    hover
                    resizable="vertical"
                    title="Minimum-height event"
                    time="11:30 AM - 11:45 AM"
                    aria-label="Minimum-height event, 11:30 AM - 11:45 AM"
                />
                <SchedulerEvent
                    className="k-event-horizontal"
                    hover
                    resizable="horizontal"
                    title="All-day event"
                    time="All day"
                    aria-label="All-day event"
                />
                </div>
            </div>
        </>
    );
};
