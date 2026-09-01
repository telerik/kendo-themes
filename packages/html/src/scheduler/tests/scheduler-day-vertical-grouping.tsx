import { SchedulerDayVerticalGrouping, SchedulerFlexDayVerticalGrouping } from '../';

const style = `
    #test-area {
        max-width: 1080px;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Scheduler Table Layout, Day View, Vertical Grouping</span>
            <SchedulerDayVerticalGrouping />

            <span>Scheduler Flex Layout, Day View, Vertical Grouping</span>
            <SchedulerFlexDayVerticalGrouping today />
        </div>
    </>
);
