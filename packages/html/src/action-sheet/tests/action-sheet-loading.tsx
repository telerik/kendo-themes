import { ActionSheetLoading } from '..';

const styles = `
    #test-area > section {
        width: 360px;
        height: 720px;
        --kendo-actionsheet-height: 60cqh;
        --kendo-actionsheet-max-height: 60cqh;
        container-type: size;
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
