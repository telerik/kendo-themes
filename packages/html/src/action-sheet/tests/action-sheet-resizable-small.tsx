import { ActionSheet, ActionSheetFooter, ActionSheetHeader, ActionSheetItem, ActionSheetItems } from '..';
import { Button } from '../../button';

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
    }
    #test-area > section:nth-of-type(1) {
        --kendo-actionsheet-height: 288px;
        --kendo-actionsheet-max-height: 288px;
    }
    #test-area > section:nth-of-type(2) {
        --kendo-actionsheet-height: 480px;
        --kendo-actionsheet-max-height: 480px;
    }
`;

const items = (
    <ActionSheetItems key="action-sheet-items">
        <ActionSheetItem text="Item Title" description="Subtitle" iconName="pencil" />
        <ActionSheetItem text="Item Title" description="Subtitle" iconName="pencil" />
        <ActionSheetItem text="Item Title" description="Subtitle" iconName="pencil" />
        <ActionSheetItem text="Item Title" description="Subtitle" iconName="pencil" />
        <ActionSheetItem text="Item Title" iconName="pencil" />
    </ActionSheetItems>
);

const header = (
    <ActionSheetHeader
        actionsStart={<Button icon="chevron-left" size="xsmall" fillMode="flat" aria-label="Back" />}
        actionsEnd={<Button icon="x" size="xsmall" fillMode="flat" aria-label="Close" />}
        title="Title"
        subtitle="Subtitle"
    />
);

const footer = (
    <ActionSheetFooter>
        <Button text="Cancel" />
        <Button text="Apply" themeColor="primary" />
    </ActionSheetFooter>
);

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Small / Mobile (&lt;768px), from 60vh...</span>
            <span>...to 100vh (full screen)</span>

            <section>
                <ActionSheet id="actionsheet-resizable-small-initial" resizable
                    header={header}
                    footer={footer}
                    style={{ width: "100%" }}
                    children={items}
                >
                </ActionSheet>
            </section>

            <section>
                <ActionSheet id="actionsheet-resizable-small-full" resizable maximized
                    header={header}
                    footer={footer}
                    style={{ width: "100%" }}
                    children={items}
                >
                </ActionSheet>
            </section>
        </div>
    </>
);
