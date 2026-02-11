import { TimelineNormalAlternating } from '../../timeline/templates/timeline-normal-alternating';

const style = ``;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">
            <span>Vertical timeline with alternating events</span>
            <TimelineNormalAlternating />
        </div>
    </>
);
