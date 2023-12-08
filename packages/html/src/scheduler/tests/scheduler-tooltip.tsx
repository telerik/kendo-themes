import { AnimationContainer } from '../../animation-container';
import { TooltipNormal } from '../../tooltip';

const style = `
    /* rest position and visibility */
    .k-animation-container,
    .k-popup,
    .k-tooltip {
        position: relative;
        overflow: visible;
    }

    /* reset display and align */
    .k-animation-container {
        display: inline-flex;
        vertical-align: top;
    }

    .k-callout-w {
        top: 45px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Events List</span>
            <span>No Data</span>

            <section>
                <AnimationContainer style={{ width: "220px" }} >
                    <TooltipNormal className="k-scheduler-tooltip" style={{ width: "220px" }}
                        callout="left"
                        content={<>
                            <div className="k-tooltip-title k-text-center">
                                <div className="k-month">Jan</div>
                                <div className="k-link k-day !k-text-primary">02</div>
                            </div>
                            <div className="k-tooltip-events-container">
                                <div className="k-tooltip-events">
                                    <div className="k-tooltip-event k-event" >
                                        <div className="k-event-title k-text-ellipsis">Dance Practice</div>
                                        <span className="k-spacer"></span>
                                        <span className="k-event-time">6:30 PM</span>
                                    </div>
                                    <div className="k-tooltip-event k-event" style={{ backgroundColor: "rgb(17, 134, 64)", borderColor: "rgb(17, 134, 64)" }} >
                                        <div className="k-event-title k-text-ellipsis">Helpdesk weekly meeting</div>
                                        <span className="k-spacer"></span>
                                        <span className="k-event-time">12:30 PM</span>
                                    </div>
                                    <div className="k-tooltip-event k-event">
                                        <div className="k-event-title k-text-ellipsis">Regular Appointment</div>
                                        <span className="k-spacer"></span>
                                        <span className="k-event-time">13:30 PM</span>
                                    </div>
                                </div>
                            </div>
                        </>}>
                    </TooltipNormal>
                </AnimationContainer>
            </section>

            <section>
                <AnimationContainer style={{ width: "220px" }} >
                    <TooltipNormal className="k-scheduler-tooltip" style={{ width: "220px" }}
                        callout="left"
                        content={<>
                            <div className="k-tooltip-title k-text-center">
                                <div className="k-month">Jan</div>
                                <div className="k-link k-day !k-text-primary">29</div>
                            </div>
                            <div className="k-no-data k-text-center">No events on this date.</div>
                        </>}>
                    </TooltipNormal>
                </AnimationContainer>
            </section>
        </div>
    </>
);
