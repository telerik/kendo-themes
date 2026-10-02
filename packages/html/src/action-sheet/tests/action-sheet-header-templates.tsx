import { ActionSheetItems, ActionSheetItem, ActionSheetGroupItem, ActionSheetHeader, ActionSheetFooter, ActionSheetNormal } from '..';
import { Button } from '../../button';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { Textbox } from '../../textbox';

const styles = `
    #test-area > section {
        height: 420px;
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

            <span>Header with Searchbox</span>
            <span>Header with SegmentedControl (Adaptive Smartbox)</span>

            <section>
                <ActionSheetNormal adaptive fullscreen
                    header={
                        <ActionSheetHeader
                            actionsStart={<Button icon="chevron-left" fillMode="flat" aria-label="Back" />}
                            actionsEnd={<Button icon="x" fillMode="flat" aria-label="Close" />}
                        >
                            <Textbox placeholder="Search Start & End" size="large" aria-label="Search Start & End" />
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
                        <ActionSheetGroupItem>Group 1</ActionSheetGroupItem>
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetGroupItem>Group 2</ActionSheetGroupItem>
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section>
                <ActionSheetNormal adaptive fullscreen
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
                        <ActionSheetItem text="Filter By Account Type" iconName="pencil" />
                        <ActionSheetItem text="Show Only Failed Transactions" iconName="pencil" />
                        <ActionSheetItem text="Hide Currency Column" iconName="pencil" />
                        <ActionSheetItem text="Sort By Customer Name Ascending" iconName="pencil" />
                        <ActionSheetGroupItem iconName="clock-arrow-rotate">Previously Asked</ActionSheetGroupItem>
                        <ActionSheetItem text="Sort By Amount Descending" description="03:07" iconName="pencil" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>
        </div>
    </>
);
