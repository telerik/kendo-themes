import { SegmentedControl, SegmentedControlNormal } from "../../segmented-control";

const styles = `
    #test-area {
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 10px;
        align-items: center;
        justify-items: start;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">
            {SegmentedControl.options.rounded.map((rounded) => (
                <div>
                    <div>{`${rounded}`}</div>
                    <SegmentedControlNormal rounded={rounded} thumbStyles={{ width: "50%" }} />
                </div>
            ))}
        </div>
    </>
);
