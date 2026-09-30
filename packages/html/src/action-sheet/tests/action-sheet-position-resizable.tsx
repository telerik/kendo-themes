import { ActionSheet, ActionSheetFooter, ActionSheetHeader, ActionSheetItem, ActionSheetItems } from '..';
import { Button } from '../../button';

const styles = `
    #test-area > section {
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        height: 480px;
        transform: translateZ(0);
    }
    #test-area > section:nth-of-type(1),
    #test-area > section:nth-of-type(2) {
        --kendo-actionsheet-height: 288px;
        --kendo-actionsheet-max-height: 288px;
        --kendo-actionsheet-width: 100%;
    }
    #test-area > section:nth-of-type(3),
    #test-area > section:nth-of-type(4) {
        --kendo-actionsheet-width: 288px;
        --kendo-actionsheet-max-width: 288px;
        --kendo-actionsheet-height: 100%;
    }
`;

const items = (
    <ActionSheetItems key="action-sheet-items">
        <ActionSheetItem text="Item Title" description="Subtitle" iconName="pencil" />
        <ActionSheetItem text="Item Title" description="Subtitle" iconName="pencil" />
        <ActionSheetItem text="Item Title" description="Subtitle" iconName="pencil" />
        <ActionSheetItem text="Item Title" description="Subtitle" iconName="pencil" />
        <ActionSheetItem text="Item Title" description="Subtitle" iconName="pencil" />
        <ActionSheetItem text="Item Title" iconName="pencil" />
    </ActionSheetItems>
);

const header = (
    <ActionSheetHeader
        actionsStart={<Button icon="chevron-left" fillMode="flat" aria-label="Back" />}
        actionsEnd={<Button icon="x" fillMode="flat" aria-label="Close" />}
        title="Title"
        subtitle="Subtitle"
    />
);

const footer = (
    <ActionSheetFooter>
        <Button text="Cancel" icon="cancel" />
        <Button text="Apply" icon="check" themeColor="primary" />
    </ActionSheetFooter>
);

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Position Bottom</span>
            <span>Position Top</span>

            <section>
                <ActionSheet id="actionsheet-position-resizable-bottom" side="bottom" resizable constrained
                    header={header}
                    footer={footer}
                    style={{ width: "100%" }}
                    children={items}
                >
                </ActionSheet>
            </section>

            <section>
                <ActionSheet id="actionsheet-position-resizable-top" side="top" resizable constrained
                    header={header}
                    footer={footer}
                    style={{ width: "100%" }}
                    children={items}
                >
                </ActionSheet>
            </section>

            <span>Position Left</span>
            <span>Position Right</span>

            <section>
                <ActionSheet id="actionsheet-position-resizable-left" side="left" resizable constrained
                    header={header}
                    footer={footer}
                    style={{ height: "100%" }}
                    children={items}
                >
                </ActionSheet>
            </section>

            <section>
                <ActionSheet id="actionsheet-position-resizable-right" side="right" resizable constrained
                    header={header}
                    footer={footer}
                    style={{ height: "100%" }}
                    children={items}
                >
                </ActionSheet>
            </section>

            <span className="k-colspan-2">Position Fullscreen</span>

            <section>
                <ActionSheet id="actionsheet-position-resizable-fullscreen" fullscreen
                    header={header}
                    footer={footer}
                    children={items}
                >
                </ActionSheet>
            </section>
        </div>
    </>
);
