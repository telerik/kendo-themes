import { ActionSheet, ActionSheetFooter, ActionSheetHeader } from '../../action-sheet';
import { Button } from '../../button';
import { ColorEditor } from '../../coloreditor';

const styles = `
    #test-area {
        --kendo-actionsheet-height: 650px;
        --kendo-actionsheet-max-height: 650px;
    }
    #test-area > section {
        height: 750px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

const sheet = (id: string, fullscreen: boolean) => (
    <ActionSheet id={id} adaptive={true} fullscreen={fullscreen}
        header={
            <ActionSheetHeader
                actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" aria-label="Apply" />}
                title="Label"
            />
        }
        footer={
            <ActionSheetFooter>
                <Button text="Cancel" size="large" />
                <Button text="Set" size="large" themeColor="primary" />
            </ActionSheetFooter>
        }
    >
        <ColorEditor canvasOrientation="vertical" size="large" actionButtons={false} group />
    </ActionSheet>
);

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>partial</span>
            <span>full screen</span>
            <section>{sheet('actionsheet-legacy-coloreditor-1', false)}</section>
            <section>{sheet('actionsheet-legacy-coloreditor-2', true)}</section>
        </div>
    </>
);
