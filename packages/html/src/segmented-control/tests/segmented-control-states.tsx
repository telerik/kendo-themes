import { SegmentedControl } from '../segmented-control.spec';
import { SegmentedControlButton } from '../segmented-control-button.spec';


const styles = `
    #test-area>section {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        justify-items: start;
    }

    .k-segmented-control-thumb {
        width: 180px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <SegmentedControl>
                {SegmentedControlButton.states.map((state) => (
                    <SegmentedControlButton key={state} {...{ [state]: true }}>{state}</SegmentedControlButton>
                ))}
                <SegmentedControlButton>normal</SegmentedControlButton>
            </SegmentedControl>
        </div>

    </>
);
