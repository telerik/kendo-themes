import { ActionSheetLoading } from '..';

const styles = `
    #test-area {
        --kendo-actionsheet-height: 511px;
        --kendo-actionsheet-max-height: 511px;
    }
    #test-area > section {
        width: 360px;
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
        <div id="test-area">
            <section>
                <ActionSheetLoading id="actionsheet-loading" />
            </section>
        </div>
    </>
);
