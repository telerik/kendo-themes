import { PromptBoxLineModeSingle } from '../templates/prompt-box-single';
import { PromptBoxStopResponse } from '../templates/prompt-box-stop-response';

const styles = ``;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Normal</span>
            <span>Stop response Button</span>

            <div>
                <PromptBoxLineModeSingle endAffix placeholder="Type a message" />
            </div>
            <div>
                <PromptBoxStopResponse endAffix placeholder="Type a message" />
            </div>
        </div>
    </>
);
