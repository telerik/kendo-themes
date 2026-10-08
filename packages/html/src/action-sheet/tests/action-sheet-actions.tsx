import { ActionSheetItems, ActionSheetItem, ActionSheetNormal, ActionSheetHeader } from '..';
import { Button } from '../../button';

const styles = `
    #test-area > section {
        height: 180px;
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

            <span className='k-colspan-3'>Header Actions - LTR</span>

            <section>
                <ActionSheetNormal id="actionsheet-actions-1" fullscreen
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" aria-label="Back" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" aria-label="Close" />} title="Start & End" subtitle="Subtitle" />
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section>
                <ActionSheetNormal id="actionsheet-actions-2" fullscreen
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" aria-label="Back" />} title="Start" subtitle="Subtitle" />
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section>
                <ActionSheetNormal id="actionsheet-actions-3" fullscreen
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" aria-label="Close" />} title="End" subtitle="Subtitle" />
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <span className='k-colspan-3'>Header Actions - RTL</span>

            <section className="k-rtl">
                <ActionSheetNormal id="actionsheet-actions-4" fullscreen
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-right" size="large" fillMode="flat" aria-label="Back" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" aria-label="Close" />} title="Start & End" subtitle="Subtitle" />
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section className="k-rtl">
                <ActionSheetNormal id="actionsheet-actions-5" fullscreen
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-right" size="large" fillMode="flat" aria-label="Back" />} title="Start" subtitle="Subtitle" />
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                        <ActionSheetItem text="Item Title" iconName="pencil" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section className="k-rtl">
                <ActionSheetNormal id="actionsheet-actions-6" fullscreen
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" aria-label="Close" />} title="End" subtitle="Subtitle" />
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
