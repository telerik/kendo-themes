import { PromptBoxLineModeSingle, PromptBoxLineModeMulti, PromptBoxLineModeAuto, PromptBoxLineModeAutoExpanded } from '..';

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
                <PromptBoxLineModeAuto endAffix placeholder="Type a message" />
            </div>
            <div>
                <PromptBoxLineModeAutoExpanded endAffix placeholder="Type a message" />
            </div>
            <div>
                <PromptBoxLineModeSingle endAffix placeholder="Type a message" />
            </div>
             <div>
                <PromptBoxLineModeMulti endAffix placeholder="Type a message" />
            </div>

        </div>
    </>
);
