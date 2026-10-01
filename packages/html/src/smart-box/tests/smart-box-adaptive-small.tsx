import { SmartBoxAdaptive } from '..';

const styles = `
    #test-area {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }
    #test-area > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    #test-area section {
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        width: 360px;
        height: 800px;
        container-type: size;
        transform: translateZ(0);
        --kendo-actionsheet-width: 100%;
        --kendo-actionsheet-height: 60cqh;
        --kendo-actionsheet-max-height: 60cqh;
    }
`;

export default () => (
    <>
        <style>{styles}</style>

        <div id="test-area">
            <div>
                <span>Mobile / Search + AI Prompt</span>
                <section>
                    <SmartBoxAdaptive id="smart-box-adaptive-small-prompt" />
                </section>
            </div>

            <div>
                <span>Mobile / Search Selected</span>
                <section>
                    <SmartBoxAdaptive id="smart-box-adaptive-small-search" scenario="search" />
                </section>
            </div>

            <div>
                <span>Mobile / Semantic Search Selected</span>
                <section>
                    <SmartBoxAdaptive id="smart-box-adaptive-small-semantic" scenario="semantic" />
                </section>
            </div>

            <div>
                <span>Mobile / No Previous Prompts</span>
                <section>
                    <SmartBoxAdaptive id="smart-box-adaptive-small-no-data" empty />
                </section>
            </div>
        </div>
    </>
);
