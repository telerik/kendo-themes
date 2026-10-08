import { SmartBoxAdaptive } from '..';

const styles = `
    #test-area {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    #test-area > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        width: 100%;
    }
    #test-area > .row-small {
        max-width: 767px;
    }
    #test-area > .row-medium {
        max-width: 1024px;
    }
    #test-area > div > section {
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        height: 480px;
        transform: translateZ(0);
    }
    #test-area > .row-small > section:nth-of-type(1) {
        --kendo-actionsheet-height: 288px;
        --kendo-actionsheet-max-height: 288px;
    }
    #test-area > .row-small > section:nth-of-type(2) {
        --kendo-actionsheet-height: 480px;
        --kendo-actionsheet-max-height: 480px;
    }
    #test-area > .row-medium > section:nth-of-type(1) {
        --kendo-actionsheet-height: 288px;
        --kendo-actionsheet-max-height: 288px;
    }
    #test-area > .row-medium > section:nth-of-type(2) {
        --kendo-actionsheet-height: 432px;
        --kendo-actionsheet-max-height: 432px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>

        <div id="test-area">
            <div className="row-small">
                <span>Small / Mobile (&lt;768px), from 60vh...</span>
                <span>...to 100vh (full screen)</span>

                <section>
                    <SmartBoxAdaptive id="smart-box-adaptive-small-initial" />
                </section>

                <section>
                    <SmartBoxAdaptive id="smart-box-adaptive-small-full" />
                </section>
            </div>

            <div className="row-medium">
                <span>Medium / Tablet &amp; Large / Desktop (&gt;768px), from 60vh...</span>
                <span>...to 90vh (max)</span>

                <section>
                    <SmartBoxAdaptive id="smart-box-adaptive-medium-initial" />
                </section>

                <section>
                    <SmartBoxAdaptive id="smart-box-adaptive-medium-full" />
                </section>
            </div>
        </div>
    </>
);
