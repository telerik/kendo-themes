import { ActionSheet, ActionSheetFooter, ActionSheetHeader, ActionSheetItem, ActionSheetItems } from '..';
import { Button } from '../../button';

const styles = `
    #test-area > section {
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        width: 1025px;
        height: 480px;
        --kendo-actionsheet-height: 60cqh;
        --kendo-actionsheet-max-height: 60cqh;
        container-type: size;
        transform: translateZ(0);
    }
    #test-area > section:nth-of-type(2) {
        --kendo-actionsheet-height: 90cqh;
        --kendo-actionsheet-max-height: 90cqh;
    }
`;

const items = (
    <ActionSheetItems key="action-sheet-items">
        <ActionSheetItem text="Item Title" description="Subtitle" iconName="pencil" />
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
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Large / Desktop (1024px and above) - initial height 60vh</span>

            <section>
                <ActionSheet id="actionsheet-resizable-large-initial" resizable
                    header={header}
                    footer={footer}
                    style={{ width: "100%" }}
                    children={items}
                >
                </ActionSheet>
            </section>

            <span>Large / Desktop (1024px and above) - maximum height 90vh</span>

            <section>
                <ActionSheet id="actionsheet-resizable-large-full" resizable
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
