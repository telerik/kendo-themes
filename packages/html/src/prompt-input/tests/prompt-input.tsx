import { PromptInputLineModeSingle, PromptInputLineModeMulti, PromptInputLineModeAuto, PromptInputLineModeAutoExpanded } from '../../prompt-input';

const styles = `
    #test-area {
        max-width: 660px;
    }

    .k-prompt-input {
        padding: 4px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>lineMode - single</span>
            <span>lineMode - multi</span>
            <span>lineMode - auto</span>
            <span>lineMode - auto + expanded</span>

            <div>
                <PromptInputLineModeSingle />
            </div>
             <div>
                <PromptInputLineModeMulti />
            </div>
             <div>
                <PromptInputLineModeAuto />
            </div>
             <div>
                <PromptInputLineModeAutoExpanded />
            </div>


        </div>
    </>
);
