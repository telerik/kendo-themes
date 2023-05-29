import { Chip } from "../../chip";
import { ChipAvatar } from "../templates/chip-avatar";
import { ChipIcon } from "../templates/chip-icon";
import { ChipNormal } from "../templates/chip-normal";

const styles = `
    #test-area {
        gap: 10px;
        grid-template-columns: 120px repeat(3, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>
                <small>rounded / size</small>
            </span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            {[ null, ...Chip.options.rounded ].map((rounded) => (
                <>
                    <span>{rounded || "none"}</span>
                    {Chip.options.size.map((size) => (
                        <span>
                            <ChipNormal text="Text" size={size} rounded={rounded} />
                        </span>
                    ))}
                    <span>^ icon</span>
                    {Chip.options.size.map((size) => (
                        <span>
                            <ChipIcon text="Text" size={size} rounded={rounded} />
                        </span>
                    ))}
                    <span>^ avatar</span>
                    {Chip.options.size.map((size) => (
                        <span>
                            <ChipAvatar text="Text" size={size} rounded={rounded} />
                        </span>
                    ))}
                </>
            ))}
        </div>
    </>
);
