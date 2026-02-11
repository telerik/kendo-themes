import { ActionSheetItem } from '../actionsheet-item';
import { ActionSheetItems } from '../actionsheet-items';
import { ActionSheetHeader } from '../actionsheet-header';
import { ActionSheetNormal } from '../templates/action-sheet-normal';
import { Button } from '../../button/button.spec';

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
                <ActionSheetNormal adaptive fullscreen
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" />} title="Start" />
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
                <ActionSheetNormal adaptive fullscreen
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="End" />
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
                <ActionSheetNormal adaptive fullscreen
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Start & End" />
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
                <ActionSheetNormal adaptive fullscreen
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-right" size="large" fillMode="flat" />} title="Start" />
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
                <ActionSheetNormal adaptive fullscreen
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="End" />
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
                <ActionSheetNormal adaptive fullscreen
                    header={
                        <ActionSheetHeader actionsStart={<Button icon="chevron-right" size="large" fillMode="flat" />} actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Start & End" />
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
