import { SegmentedControl, SegmentedControlButton } from '..';


const styles = `
    #test-area>section {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        justify-items: start;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <SegmentedControl thumbStyles={{ width: "20%" }}>
                {SegmentedControlButton.states.map((state) => (
                    <SegmentedControlButton key={state} {...{ [state]: true }}>{state}</SegmentedControlButton>
                ))}
                <SegmentedControlButton>normal</SegmentedControlButton>
            </SegmentedControl>
        </div>

    </>
);
