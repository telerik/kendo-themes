import { NoData } from "../../nodata";
import { Popover } from "../../popover";

const style = `
    #test-area {
        max-width: 1080px;
    }
    /* reset position and visibility */
    .k-animation-container,
    .k-popup,
    .k-popover {
        position: relative;
        overflow: visible;
    }

    /* reset display and align */
    .k-animation-container {
        display: inline-flex;
        vertical-align: top;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-3">
      <span>Events List</span>
      <span>Events List Long</span>
      <span>No Data</span>

      <section>
        <Popover className="k-scheduler-popover" style={{ width: "220px" }} callout="left">
          <div className="k-popover-header">
            <div className="k-month">Jan</div>
            <div className="k-link k-day">02</div>
          </div>
          <div className="k-popover-body">
              <div className="k-popover-events" role="list" aria-label="Events">
                <div className="k-popover-event k-event" role="listitem">
                  <div className="k-event-title">Dance Practice</div>
                  <span className="k-event-time">6:30 PM</span>
                </div>
                <div className="k-popover-event k-event" role="listitem">
                  <div className="k-event-title">Helpdesk weekly meeting</div>
                  <span className="k-event-time">12:30 PM</span>
                </div>
                <div className="k-popover-event k-event" role="listitem">
                  <div className="k-event-title">Regular Appointment</div>
                  <span className="k-event-time">13:30 PM</span>
                </div>
              </div>
            </div>
        </Popover>
      </section>

      <section>
        <Popover className="k-scheduler-popover" style={{ width: "220px" }} callout="left">
          <div className="k-popover-header">
            <div className="k-month">Jan</div>
            <div className="k-link k-day">02</div>
          </div>
          <div className="k-popover-body">
              <div className="k-popover-events" role="list" aria-label="Events">
                <div className="k-popover-event k-event" role="listitem">
                  <div className="k-event-title">Dance Practice</div>
                  <span className="k-event-time">6:30 PM</span>
                </div>
                <div className="k-popover-event k-event" role="listitem">
                  <div className="k-event-title">Helpdesk weekly meeting</div>
                  <span className="k-event-time">12:30 PM</span>
                </div>
                <div className="k-popover-event k-event" role="listitem">
                  <div className="k-event-title">Regular Appointment</div>
                  <span className="k-event-time">13:30 PM</span>
                </div>
                <div className="k-popover-event k-event" role="listitem">
                  <div className="k-event-title">Dance Practice</div>
                  <span className="k-event-time">6:30 PM</span>
                </div>
                <div className="k-popover-event k-event" role="listitem">
                  <div className="k-event-title">Dance Practice</div>
                  <span className="k-event-time">6:30 PM</span>
                </div>
                <div className="k-popover-event k-event" role="listitem">
                  <div className="k-event-title">Dance Practice</div>
                  <span className="k-event-time">6:30 PM</span>
                </div>
                <div className="k-popover-event k-event" role="listitem">
                  <div className="k-event-title">Dance Practice</div>
                  <span className="k-event-time">6:30 PM</span>
                </div>
                <div className="k-popover-event k-event" role="listitem">
                  <div className="k-event-title">Dance Practice</div>
                  <span className="k-event-time">6:30 PM</span>
                </div>
                <div className="k-popover-event k-event" role="listitem">
                  <div className="k-event-title">Dance Practice</div>
                  <span className="k-event-time">6:30 PM</span>
                </div>
                <div className="k-popover-event k-event" role="listitem">
                  <div className="k-event-title">Dance Practice</div>
                  <span className="k-event-time">6:30 PM</span>
                </div>
              </div>
            </div>
        </Popover>
      </section>

      <section>
        <Popover className="k-scheduler-popover" style={{ width: "220px" }} callout="left">
          <div className="k-popover-header">
            <div className="k-month">Jan</div>
            <div className="k-link k-day">29</div>
          </div>
          <div className="k-popover-body">
            <NoData>No events on this date.</NoData>
          </div>
        </Popover>
      </section>
    </div>
  </>
);
