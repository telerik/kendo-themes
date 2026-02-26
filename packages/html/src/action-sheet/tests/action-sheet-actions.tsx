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
                <ActionSheetNormal id="actionsheet-actions-1" adaptive fullscreen
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" aria-label="Back" />} title="Start" />
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section>
                <ActionSheetNormal id="actionsheet-actions-2" adaptive fullscreen
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" aria-label="Close" />} title="End" />
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section>
                <ActionSheetNormal id="actionsheet-actions-3" adaptive fullscreen
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" aria-label="Back" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" aria-label="Close" />} title="Start & End" />
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <span className='k-colspan-3'>Header Actions - RTL</span>

            <section className="k-rtl">
                <ActionSheetNormal id="actionsheet-actions-4" adaptive fullscreen
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-right" size="large" fillMode="flat" aria-label="Back" />} title="Start" />
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section className="k-rtl">
                <ActionSheetNormal id="actionsheet-actions-5" adaptive fullscreen
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" aria-label="Close" />} title="End" />
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section className="k-rtl">
                <ActionSheetNormal id="actionsheet-actions-6" adaptive fullscreen
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-right" size="large" fillMode="flat" aria-label="Back" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" aria-label="Close" />} title="Start & End" />
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                        <ActionSheetItem text="Item" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>
        </div>
    </>
);
