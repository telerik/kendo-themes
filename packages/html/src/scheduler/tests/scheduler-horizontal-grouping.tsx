import { SchedulerHorizontalGrouping, SchedulerFlexHorizontalGrouping } from '../';

const style = `
    #test-area {
        max-width: 1080px;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Scheduler Table Layout</span>
            <SchedulerHorizontalGrouping />

            <span>Scheduler Flex Layout</span>
            <SchedulerFlexHorizontalGrouping today />
        </div>
    </>
);
