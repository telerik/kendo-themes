import { ActionSheetItems, ActionSheetItem, ActionSheetGroupItem, ActionSheetNormal, ActionSheetHeader } from '..';

const styles = `
    #test-area {
        --kendo-actionsheet-height: 352px;
        --kendo-actionsheet-max-height: 352px;
    }
    #test-area > section {
        height: 360px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>No icons</span>
            <span>Icons on group items</span>
            <span>One icon (first item only)</span>

            <section>
                <ActionSheetNormal id="actionsheet-icons-none"
                    header={<ActionSheetHeader title="Title" subtitle="Subtitle" />}
                >
                    <ActionSheetItems>
                        <ActionSheetGroupItem>Group 1</ActionSheetGroupItem>
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                        <ActionSheetGroupItem>Group 2</ActionSheetGroupItem>
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section>
                <ActionSheetNormal id="actionsheet-icons-group"
                    header={<ActionSheetHeader title="Title" subtitle="Subtitle" />}
                >
                    <ActionSheetItems>
                        <ActionSheetGroupItem iconName="folder">Group 1</ActionSheetGroupItem>
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                        <ActionSheetGroupItem iconName="folder">Group 2</ActionSheetGroupItem>
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section>
                <ActionSheetNormal id="actionsheet-icons-item"
                    header={<ActionSheetHeader title="Title" subtitle="Subtitle" />}
                >
                    <ActionSheetItems>
                        <ActionSheetGroupItem>Group 1</ActionSheetGroupItem>
                        <ActionSheetItem text="Item" iconName="folder" />
                        <ActionSheetItem text="Item" />
                        <ActionSheetGroupItem>Group 2</ActionSheetGroupItem>
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>
        </div>
    </>
);
