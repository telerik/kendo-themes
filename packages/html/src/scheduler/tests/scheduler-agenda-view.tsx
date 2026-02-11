import { SchedulerAgenda } from '../templates/scheduler-agenda';
import { SchedulerFlexAgenda } from '../templates/scheduler-flex-agenda';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Scheduler Table Layout</span>
            <SchedulerAgenda />

            <span>Scheduler Flex Layout</span>
            <SchedulerFlexAgenda />
        </div>
    </>
);
