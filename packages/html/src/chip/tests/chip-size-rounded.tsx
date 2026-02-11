import { Chip } from "../../chip/chip.spec";
import { ChipAvatar } from "../templates/chip-avatar";
import { ChipIcon } from "../templates/chip-icon";
import { ChipNormal } from "../templates/chip-normal";

const styles = `
    #test-area {
        gap: 10px;
        grid-template-columns: 120px repeat(4, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>
                <small>rounded / size</small>
            </span>
            <span>undefined</span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            {Chip.options.rounded.map((rounded) => (
                <>
                    <span>{`${rounded}`}</span>
                    {Chip.options.size.map((size) => (
                        <span>
                            <ChipNormal text="Text" size={size} rounded={rounded} />
                        </span>
                    ))}
                    <span></span>
                    {Chip.options.size.map((size) => (
                        <span>
                            <ChipIcon text="Text + Icon" size={size} rounded={rounded} />
                        </span>
                    ))}
                    <span></span>
                    {Chip.options.size.map((size) => (
                        <span>
                            <ChipAvatar text="Text + Avatar" size={size} rounded={rounded} />
                        </span>
                    ))}
                </>
            ))}
        </div>
    </>
);
