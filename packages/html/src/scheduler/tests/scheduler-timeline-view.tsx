import { SchedulerTimeline } from '../templates/scheduler-timeline';
import { SchedulerFlexTimeline } from '../templates/scheduler-flex-timeline';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Scheduler Table Layout</span>
            <SchedulerTimeline />

            <span>Scheduler Flex Layout</span>
            <SchedulerFlexTimeline />
        </div>
    </>
);
