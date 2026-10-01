import {
    SmartBoxAdaptiveNoData,
    SmartBoxAdaptivePrompt,
    SmartBoxAdaptiveSearch,
    SmartBoxAdaptiveSemantic
} from '..';

const styles = `
    #test-area {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    #test-area .row {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        align-items: flex-start;
    }
    #test-area .row > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    #test-area section {
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        container-type: size;
        transform: translateZ(0);
        --kendo-actionsheet-width: 100%;
        --kendo-actionsheet-height: 60cqh;
        --kendo-actionsheet-max-height: 60cqh;
    }
    #test-area .small { width: 360px; height: 800px; }
    #test-area .medium { width: 768px; height: 1024px; }
    #test-area .large { width: 1025px; height: 768px; }
`;

const Scenarios = ({ size }: { size: 'small' | 'medium' | 'large' }) => (
    <>
        <div>
            <span>{size} / Search + AI Prompt</span>
            <section className={size}>
                <SmartBoxAdaptivePrompt id={`smart-box-adaptive-${size}-prompt`} />
            </section>
        </div>
        <div>
            <span>{size} / Search Selected</span>
            <section className={size}>
                <SmartBoxAdaptiveSearch id={`smart-box-adaptive-${size}-search`} />
            </section>
        </div>
        <div>
            <span>{size} / Semantic Search Selected</span>
            <section className={size}>
                <SmartBoxAdaptiveSemantic id={`smart-box-adaptive-${size}-semantic`} />
            </section>
        </div>
        <div>
            <span>{size} / No Previous Prompts</span>
            <section className={size}>
                <SmartBoxAdaptiveNoData id={`smart-box-adaptive-${size}-no-data`} />
            </section>
        </div>
    </>
);

export default () => (
    <>
        <style>{styles}</style>

        <div id="test-area">
            <div className="row">
                <Scenarios size="small" />
            </div>
            <div className="row">
                <Scenarios size="medium" />
                <Scenarios size="large" />
            </div>
        </div>
    </>
);
