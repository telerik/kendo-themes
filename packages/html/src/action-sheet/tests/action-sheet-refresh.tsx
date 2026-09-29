import { ActionSheet, ActionSheetFooter, ActionSheetGroupItem, ActionSheetHeader, ActionSheetItem, ActionSheetItems, ActionSheetLoading } from '../../action-sheet';
import { Button } from '../../button';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';

const styles = `
    #test-area > section {
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        height: 480px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Grouped items</span>
            <span>SegmentedControl header</span>

            <section>
                <ActionSheet id="actionsheet-refresh-grouping"
                    header={
                        <ActionSheetHeader title="Select item" />
                    }
                    children={[
                        <ActionSheetItems key="action-sheet-items">
                            <ActionSheetGroupItem>Frequently used</ActionSheetGroupItem>
                            <ActionSheetItem text="Edit Item" description="Click to edit" iconName="edit-tools" />
                            <ActionSheetItem text="Add to Favorites" iconName="heart" />
                            <ActionSheetGroupItem>More actions</ActionSheetGroupItem>
                            <ActionSheetItem text="Upload New" iconName="upload" />
                            <ActionSheetItem text="Action" iconName="cancel" />
                        </ActionSheetItems>
                    ]}
                >
                </ActionSheet>
            </section>

            <section>
                <ActionSheet id="actionsheet-refresh-segmented"
                    header={
                        <ActionSheetHeader>
                            <SegmentedControl thumbStyles={{ width: "50%" }}>
                                <SegmentedControlButton selected>Day</SegmentedControlButton>
                                <SegmentedControlButton>Week</SegmentedControlButton>
                            </SegmentedControl>
                        </ActionSheetHeader>
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Apply" themeColor="primary" />
                            <Button text="Cancel" />
                        </ActionSheetFooter>
                    }
                    children={[
                        <ActionSheetItems key="action-sheet-items">
                            <ActionSheetItem text="Monday" />
                            <ActionSheetItem text="Tuesday" />
                            <ActionSheetItem text="Wednesday" />
                        </ActionSheetItems>
                    ]}
                >
                </ActionSheet>
            </section>

            <span>Resizable, width-constrained</span>
            <span>Loading (Skeleton)</span>

            <section>
                <ActionSheet id="actionsheet-refresh-resizable" side="bottom" resizable constrained
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="x" fillMode="flat" aria-label="Close" />}
                            title="Select item"
                        />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Apply" themeColor="primary" />
                            <Button text="Cancel" />
                        </ActionSheetFooter>
                    }
                    style={{ width: "100%" }}
                    children={[
                        <ActionSheetItems key="action-sheet-items">
                            <ActionSheetItem text="Edit Item" description="Click to edit" iconName="edit-tools" />
                            <ActionSheetItem text="Add to Favorites" iconName="heart" />
                            <ActionSheetItem text="Upload New" iconName="upload" />
                        </ActionSheetItems>
                    ]}
                >
                </ActionSheet>
            </section>

            <section>
                <ActionSheetLoading id="actionsheet-refresh-loading" title="Loading" />
            </section>

        </div>
    </>
);
