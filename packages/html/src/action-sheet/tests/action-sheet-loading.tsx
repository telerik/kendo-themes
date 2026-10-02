import { ActionSheetLoading } from '..';

const styles = `
    #test-area {
        --kendo-actionsheet-height: 511px;
        --kendo-actionsheet-max-height: 511px;
    }
    #test-area > section {
        height: 520px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Loading (title/subtitle + content skeleton)</span>
            <span>Loading (header actions + content + footer skeleton)</span>

            <section>
                <ActionSheetLoading id="actionsheet-loading-1" />
            </section>

            <section>
                <ActionSheetLoading id="actionsheet-loading-2" headerActions footer />
            </section>
        </div>
    </>
);
