import { SchedulerTimelineVerticalGrouping, SchedulerFlexTimelineVerticalGrouping } from '../';

const style = `
    #test-area {
        max-width: 1080px;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Scheduler Table Layout, Timeline View, Vertical Grouping</span>
            <SchedulerTimelineVerticalGrouping />

            <span>Scheduler Flex Layout, Timeline View, Vertical Grouping</span>
            <SchedulerFlexTimelineVerticalGrouping />
        </div>
    </>
);
