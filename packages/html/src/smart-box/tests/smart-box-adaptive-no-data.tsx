import { SmartBoxAdaptive } from '..';

const styles = `
    #test-area {
        max-width: 767px;
    }
    #test-area > section {
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        height: 480px;
        transform: translateZ(0);
        --kendo-actionsheet-height: 288px;
        --kendo-actionsheet-max-height: 288px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Search + AI Prompt</span>
            <span>No Previous Prompts</span>

            <section>
                <SmartBoxAdaptive id="smart-box-adaptive-no-data-default" />
            </section>

            <section>
                <SmartBoxAdaptive id="smart-box-adaptive-no-data-empty" empty />
            </section>
        </div>
    </>
);
