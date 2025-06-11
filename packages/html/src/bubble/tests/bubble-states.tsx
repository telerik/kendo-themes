import { BubbleNormal } from '..';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">
            <span>Normal</span>
            <span>Hover</span>
            <span>Active</span>
            <span>Focus</span>

            <span>
                <BubbleNormal />
            </span>
            <span>
                <BubbleNormal hover />
            </span>
            <span>
                <BubbleNormal active />
            </span>
            <span>
                <BubbleNormal focus />
            </span>
        </div>
    </>
);
