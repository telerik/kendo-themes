import { Popup } from "../../popup";
import { PromptMoreActions } from "../templates/prompt-more-actions";

const styles = `
    .k-animation-container {
        position: relative;
    }
    .k-popup {
        width: 400px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Output</span>

            <div>
                <Popup className="k-prompt-popup">
                    <PromptMoreActions />
                </Popup>
            </div>
        </div>
    </>
);
