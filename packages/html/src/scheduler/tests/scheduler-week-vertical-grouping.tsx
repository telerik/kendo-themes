import { SchedulerWeekVerticalGrouping, SchedulerFlexWeekVerticalGrouping } from '../';

const style = `
    #test-area {
        max-width: 1080px;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Scheduler Table Layout, Week View, Vertical Grouping</span>
            <SchedulerWeekVerticalGrouping />

            <span>Scheduler Flex Layout, Week View, Vertical Grouping</span>
            <SchedulerFlexWeekVerticalGrouping today />
        </div>
    </>
);
