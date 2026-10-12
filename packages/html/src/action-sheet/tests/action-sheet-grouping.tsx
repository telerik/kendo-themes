import { ActionSheetItems, ActionSheetItem, ActionSheetGroupItem, ActionSheetNormal, ActionSheetHeader, ActionSheetFooter } from '..';
import { Button } from '../../button';

const styles = `
    #test-area > section {
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
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Grouping in List</span>
            <span>Grouping in List (no icons — group labels stay flush)</span>

            <section>
                <ActionSheetNormal id="actionsheet-grouping-1"
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="xsmall" fillMode="flat" aria-label="Back" />} actionsEnd={<Button icon="x" size="xsmall" fillMode="flat" aria-label="Close" />} title="Start & End" subtitle="Subtitle" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" />
                            <Button text="Apply" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetGroupItem>Group 1</ActionSheetGroupItem>
                        <ActionSheetItem text="Item Title" iconName="edit-tools" />
                        <ActionSheetItem text="Item Title" iconName="edit-tools" />
                        <ActionSheetGroupItem>Group 2</ActionSheetGroupItem>
                        <ActionSheetItem text="Item Title" iconName="edit-tools" />
                        <ActionSheetItem text="Item Title" iconName="edit-tools" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section>
                <ActionSheetNormal id="actionsheet-grouping-2"
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="xsmall" fillMode="flat" aria-label="Back" />} actionsEnd={<Button icon="x" size="xsmall" fillMode="flat" aria-label="Close" />} title="Start & End" subtitle="Subtitle" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" />
                            <Button text="Apply" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetGroupItem>Group 1</ActionSheetGroupItem>
                        <ActionSheetItem text="Item Title" />
                        <ActionSheetItem text="Item Title" />
                        <ActionSheetGroupItem>Group 2</ActionSheetGroupItem>
                        <ActionSheetItem text="Item Title" />
                        <ActionSheetItem text="Item Title" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>
        </div>
    </>
);
