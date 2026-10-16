import { ActionSheetItems, ActionSheetItem, ActionSheetNormal, ActionSheetHeader, ActionSheetFooter } from '..';
import { Button } from '../../button';

// The sections are wider than the 640px content max-width so the titlebar, content and footer alignment is visible.
const styles = `
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
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Max width - header with start and end actions</span>

            <section>
                <ActionSheetNormal id="actionsheet-max-width-1" fullscreen
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
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <span>Max width - header with end action only</span>

            <section>
                <ActionSheetNormal id="actionsheet-max-width-2" fullscreen
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="xsmall" fillMode="flat" aria-label="Close" />} title="End" subtitle="Subtitle" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" />
                            <Button text="Apply" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

        </div>
    </>
);
