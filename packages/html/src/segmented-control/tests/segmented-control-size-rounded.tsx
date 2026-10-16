import { SegmentedControl, SegmentedControlNormal } from "..";

const styles = `
    #test-area {
        padding: 20px;
        display: grid;
        grid-template-columns: 80px repeat(4, auto);
        gap: 10px;
        align-items: center;
        justify-items: start;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span></span>
            {SegmentedControl.options.size.map((size: string) => (
                <span>{`${size}`}</span>
            ))}

            {SegmentedControl.options.rounded.map((rounded: string) => (
                <>
                    <span>{`${rounded}`}</span>
                    {SegmentedControl.options.size.map((size: string) => (
                        <SegmentedControlNormal size={size} rounded={rounded} thumbStyles={{ width: "50%" }} />
                    ))}
                </>
            ))}
        </div>
    </>
);
