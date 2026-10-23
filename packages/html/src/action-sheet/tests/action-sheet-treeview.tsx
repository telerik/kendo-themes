import { ActionSheet, ActionSheetHeader } from '../../action-sheet';
import { Button } from '../../button';
import { Treeview, TreeviewItem } from '../../treeview';


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

            <span>partial</span>
            <span>full screen</span>

            <section>
                <ActionSheet id="actionsheet-treeview-1"
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="xsmall" fillMode="flat" aria-label="Close" />} title="Select value" />
                    }
                >
                    <Treeview size="large">
                        <TreeviewItem text="Normal" />
                        <TreeviewItem text="Hover" hover />
                        <TreeviewItem text="Focus" focus />
                        <TreeviewItem text="Selected" selected />
                        <TreeviewItem text="Selected focus" selected focus />
                        <TreeviewItem text="Disabled" disabled />
                        <TreeviewItem text="Disabled focus" disabled focus />
                        <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more..." />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                    </Treeview>
                </ActionSheet>
            </section>

            <section>
                <ActionSheet id="actionsheet-treeview-2" fullscreen={true}
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="xsmall" fillMode="flat" aria-label="Close" />} title="Select time" />
                    }
                >
                    <Treeview size="large">
                        <TreeviewItem text="Normal" />
                        <TreeviewItem text="Hover" hover />
                        <TreeviewItem text="Focus" focus />
                        <TreeviewItem text="Selected" selected />
                        <TreeviewItem text="Selected focus" selected focus />
                        <TreeviewItem text="Disabled" disabled />
                        <TreeviewItem text="Disabled focus" disabled focus />
                        <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more..." />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                    </Treeview>
                </ActionSheet>
            </section>
        </div>
    </>
);
