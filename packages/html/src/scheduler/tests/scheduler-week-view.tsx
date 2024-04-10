import { SchedulerWeek, SchedulerFlexWeek } from '../';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Scheduler Table Layout</span>
            <SchedulerWeek />

            <span>Scheduler Flex Layout</span>
            <SchedulerFlexWeek />
        </div>
    </>
);
