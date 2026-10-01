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
        width: 768px;
        height: 1024px;
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
                <span>Tablet / Search + AI Prompt</span>
                <section>
                    <SmartBoxAdaptive id="smart-box-adaptive-medium-prompt" />
                </section>
            </div>

            <div>
                <span>Tablet / Search Selected</span>
                <section>
                    <SmartBoxAdaptive id="smart-box-adaptive-medium-search" scenario="search" />
                </section>
            </div>

            <div>
                <span>Tablet / Semantic Search Selected</span>
                <section>
                    <SmartBoxAdaptive id="smart-box-adaptive-medium-semantic" scenario="semantic" />
                </section>
            </div>

            <div>
                <span>Tablet / No Previous Prompts</span>
                <section>
                    <SmartBoxAdaptive id="smart-box-adaptive-medium-no-data" empty />
                </section>
            </div>
        </div>
    </>
);
