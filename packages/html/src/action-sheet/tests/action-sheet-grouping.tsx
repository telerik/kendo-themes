import { ActionSheetItems, ActionSheetItem, ActionSheetGroupItem, ActionSheetNormal, ActionSheetHeader, ActionSheetFooter } from '..';
import { Button } from '../../button';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';

const styles = `
    #test-area {
        --kendo-actionsheet-height: 432px;
        --kendo-actionsheet-max-height: 432px;
    }
    #test-area > section {
        height: 440px;
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

            <span className="k-colspan-2">Grouping in SmartBox (SegmentedControl header template)</span>

            <section className="k-colspan-2">
                <ActionSheetNormal id="actionsheet-grouping-3"
                    header={
                        <ActionSheetHeader>
                            <SegmentedControl stretched thumbStyles={{ left: "50%", right: "2px" }}>
                                <SegmentedControlButton icon="search">Search</SegmentedControlButton>
                                <SegmentedControlButton icon="sparkles" iconClassName="k-accent-icon" selected> AI Assistant</SegmentedControlButton>
                            </SegmentedControl>
                        </ActionSheetHeader>
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" />
                            <Button text="Apply" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetGroupItem iconName="lightbulb">Suggested Prompts</ActionSheetGroupItem>
                        <ActionSheetItem text="Filter By Account Type" iconName="edit-tools" />
                        <ActionSheetItem text="Show Only Failed Transactions" iconName="edit-tools" />
                        <ActionSheetItem text="Hide Currency Column" iconName="edit-tools" />
                        <ActionSheetItem text="Sort By Customer Name Ascending" iconName="edit-tools" />
                        <ActionSheetGroupItem iconName="clock-arrow-rotate">Previously Asked</ActionSheetGroupItem>
                        <ActionSheetItem text="Sort By Amount Descending" description="03:07" iconName="edit-tools" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>
        </div>
    </>
);
