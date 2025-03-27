import { ActionSheetItems, ActionSheetItem, ActionSheetNormal, ActionSheetFooter, ActionSheetHeader } from '..';
import { Button } from '../../button';


const styles = `
    #test-area {
        --kendo-actionsheet-height: 400px;
        --kendo-actionsheet-max-height: 400px;
    }
    #test-area > section {
        height: 600px;
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

            <span>LTR</span>
            <span>RTL</span>

            <section>
                <ActionSheetNormal
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-left" fillMode="flat" />} actionsEnd={<Button icon="x" fillMode="flat" />} title="Title" subtitle="Subtitle" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Primary" themeColor="primary" />
                            <Button text="Secondary" themeColor="base" />
                        </ActionSheetFooter>
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Action" description="Action description" iconName="gear" />
                        <ActionSheetItem text="Hover action" description="Action description" iconName="gear" hover />
                        <ActionSheetItem text="Focus action" description="Action description" iconName="gear" focus />
                        <ActionSheetItem text="Disabled action" description="Action description" iconName="gear" disabled />
                        <ActionSheetItem text="Action" description="Some longer subtitle to break on multiple rows, for testing purposes" iconName="gear" />
                    </ActionSheetItems>
                    <hr className="k-hr" />
                    <ActionSheetItems>
                        <ActionSheetItem text="Cancel" description="Action in a second group" iconName="gear" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section className="k-rtl">
                <ActionSheetNormal
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-right" fillMode="flat" />} actionsEnd={<Button icon="x" fillMode="flat" />} title="Title" subtitle="Subtitle" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Primary" themeColor="primary" />
                            <Button text="Secondary" themeColor="base" />
                        </ActionSheetFooter>
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Action" description="Action description" iconName="gear" />
                        <ActionSheetItem text="Hover action" description="Action description" iconName="gear" hover />
                        <ActionSheetItem text="Focus action" description="Action description" iconName="gear" focus />
                        <ActionSheetItem text="Disabled action" description="Action description" iconName="gear" disabled />
                        <ActionSheetItem text="Action" description="Some longer subtitle to break on multiple rows, for testing purposes" iconName="gear" />
                    </ActionSheetItems>
                    <hr className="k-hr" />
                    <ActionSheetItems>
                        <ActionSheetItem text="Cancel" description="Action in a second group" iconName="gear" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>
        </div>
    </>
);
