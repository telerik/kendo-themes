import { ActionSheetLeft, ActionSheetRight, ActionSheetTop, ActionSheetNormal } from '../../action-sheet';


const styles = `
    #test-area {
        --kendo-actionsheet-height: 300px;
        --kendo-actionsheet-max-height: 300px;
    }
    #test-area > section {
        height: 400px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <section>
                <ActionSheetLeft title="Left action sheet" />
            </section>
            <section>
                <ActionSheetRight title="Right action sheet" />
            </section>
            <section>
                <ActionSheetTop title="Top action sheet" />
            </section>
            <section>
                <ActionSheetNormal title="Bottom action sheet" />
            </section>
        </div>
    </>
);
