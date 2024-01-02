import { Popup } from "../../popup";
import { PromptNormal } from "../templates/prompt-normal";
import { PromptSettings } from "../templates/prompt-settings";
import { PromptSuggestions } from "../templates/prompt-suggestions";

const styles = `
    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Search</span>
            <span>Suggestions</span>
            <span>Settings</span>

            <div>
                <Popup className="k-prompt-popup">
                    <PromptNormal />
                </Popup>
            </div>
            <div>
                <Popup className="k-prompt-popup">
                    <PromptSuggestions />
                </Popup>
            </div>
            <div>
                <Popup className="k-prompt-popup">
                    <PromptSettings />
                </Popup>
            </div>
        </div>
    </>
);
