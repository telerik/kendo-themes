import { SchedulerMonth } from '../templates/scheduler-month';
import { SchedulerFlexMonth } from '../templates/scheduler-flex-month';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Scheduler Table Layout</span>
            <SchedulerMonth />

            <span>Scheduler Flex Layout</span>
            <SchedulerFlexMonth />
        </div>
    </>
);
