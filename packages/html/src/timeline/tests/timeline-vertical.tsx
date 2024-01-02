import { TimelineNormal, TimelineNormalCollapsible } from '../../timeline';

const style = `
    .k-timeline .k-timeline-card .k-card {
        width: 200px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Non-collapsible events</span>
            <span>Collapsible events</span>

            <TimelineNormal />
            <TimelineNormalCollapsible />
        </div>
    </>
);
