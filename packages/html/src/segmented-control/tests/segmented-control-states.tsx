import { SegmentedControl, SegmentedControlButton } from '..';


const styles = `
    #test-area {
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
            <div>text</div>
            <SegmentedControl thumbStyles={{ width: "20%" }}>
                {SegmentedControlButton.states.map((state) => (
                    <SegmentedControlButton key={state} {...{ [state]: true }}>{state}</SegmentedControlButton>
                ))}
                <SegmentedControlButton>normal</SegmentedControlButton>
            </SegmentedControl>

            <div>icon</div>
            <SegmentedControl thumbStyles={{ width: "20%" }}>
                {SegmentedControlButton.states.map((state) => (
                    <SegmentedControlButton key={state} icon="folder" aria-label={state} {...{ [state]: true }} />
                ))}
                <SegmentedControlButton icon="folder" aria-label="normal" />
            </SegmentedControl>

            <div>text + icon</div>
            <SegmentedControl thumbStyles={{ width: "20%" }}>
                {SegmentedControlButton.states.map((state) => (
                    <SegmentedControlButton key={state} endIcon="folder" {...{ [state]: true }}>{state}</SegmentedControlButton>
                ))}
                <SegmentedControlButton endIcon="folder">normal</SegmentedControlButton>
            </SegmentedControl>

            <div>icon + text</div>
            <SegmentedControl thumbStyles={{ width: "20%" }}>
                {SegmentedControlButton.states.map((state) => (
                    <SegmentedControlButton key={state} icon="folder" {...{ [state]: true }}>{state}</SegmentedControlButton>
                ))}
                <SegmentedControlButton icon="folder">normal</SegmentedControlButton>
            </SegmentedControl>

            <div>icon + text + icon</div>
            <SegmentedControl thumbStyles={{ width: "20%" }}>
                {SegmentedControlButton.states.map((state) => (
                    <SegmentedControlButton key={state} icon="folder" endIcon="folder" {...{ [state]: true }}>{state}</SegmentedControlButton>
                ))}
                <SegmentedControlButton icon="folder" endIcon="folder">normal</SegmentedControlButton>
            </SegmentedControl>
        </div>

    </>
);
