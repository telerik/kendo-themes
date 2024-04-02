import { SchedulerDay, SchedulerFlexDay } from '../';

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
