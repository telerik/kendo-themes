import { SchedulerDayHorizontalGrouping, SchedulerFlexDayHorizontalGrouping } from '../';

const style = `
    #test-area {
        max-width: 1080px;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Scheduler Table Layout, Day View, Horizontal Grouping</span>
            <SchedulerDayHorizontalGrouping />

            <span>Scheduler Flex Layout, Day View, Horizontal Grouping</span>
            <SchedulerFlexDayHorizontalGrouping today />
        </div>
    </>
);
