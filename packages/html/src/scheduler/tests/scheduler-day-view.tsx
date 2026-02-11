import { SchedulerDay } from '../templates/scheduler-day';
import { SchedulerFlexDay } from '../templates/scheduler-flex-day';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Scheduler Table Layout</span>
            <SchedulerDay />

            <span>Scheduler Flex Layout</span>
            <SchedulerFlexDay />
        </div>
    </>
);
