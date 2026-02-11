import { PromptBoxLineModeSingle } from '../templates/prompt-box-single';
import { PromptBoxLineModeMulti } from '../templates/prompt-box-multi';
import { PromptBoxLineModeAuto } from '../templates/prompt-box-auto';
import { PromptBoxLineModeAutoExpanded } from '../templates/prompt-box-auto-expandend';

const styles = ``;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>lineMode - auto</span>
            <span>lineMode - auto + expanded</span>
            <span>lineMode - single</span>
            <span>lineMode - multi</span>

            <div>
                <PromptBoxLineModeAuto placeholder="Type a message" />
            </div>
            <div>
                <PromptBoxLineModeAutoExpanded placeholder="Type a message" />
            </div>
            <div>
                <PromptBoxLineModeSingle placeholder="Type a message" />
            </div>
             <div>
                <PromptBoxLineModeMulti placeholder="Type a message" />
            </div>

        </div>
    </>
);
