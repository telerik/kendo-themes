import { SchedulerWeekHorizontalGrouping, SchedulerFlexWeekHorizontalGrouping } from '../';

const style = `
    #test-area {
        max-width: 1080px;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Scheduler Table Layout, Week View, Horizontal Grouping</span>
            <SchedulerWeekHorizontalGrouping />

            <span>Scheduler Flex Layout, Week View, Horizontal Grouping</span>
            <SchedulerFlexWeekHorizontalGrouping today />
        </div>
    </>
);
