import { ActionSheet, ActionSheetFooter, ActionSheetHeader, ActionSheetItem, ActionSheetItems } from '..';
import { Button } from '../../button';

const styles = `
    #test-area {
        max-width: 1024px;
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
        --kendo-actionsheet-width: 100%;
    }
    #test-area > section:nth-of-type(2) {
        --kendo-actionsheet-height: 432px;
        --kendo-actionsheet-max-height: 432px;
        --kendo-actionsheet-width: 100%;
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

            <span>Medium / Tablet (768px&ndash;1024px), from 60vh...</span>
            <span>...to 90vh (full screen)</span>

            <section>
                <ActionSheet id="actionsheet-resizable-medium-initial" resizable
                    header={header}
                    footer={footer}
                    style={{ width: "100%" }}
                    children={items}
                >
                </ActionSheet>
            </section>

            <section>
                <ActionSheet id="actionsheet-resizable-medium-full" resizable
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
