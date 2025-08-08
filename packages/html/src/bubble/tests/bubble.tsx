import { BubbleNormal, BubbleExpandable, BubbleExpanded } from '../../bubble';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Bubble</span>
            <span>Expandable bubble</span>
            <span>Expanded bubble</span>

            <span>
                <BubbleNormal />
            </span>
             <span>
                <BubbleExpandable />
            </span>
             <span>
                <BubbleExpanded />
            </span>
        </div>
    </>
);
