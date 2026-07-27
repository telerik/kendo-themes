import { SchedulerFlexYear } from '../../scheduler';

const styles = `
    #test-area {
        max-width: 1080px;
    }
    .k-scheduler-body {
        height: 500px;
        overflow: auto;
    }
`;


export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <SchedulerFlexYear/>
        </div>
    </>
);
