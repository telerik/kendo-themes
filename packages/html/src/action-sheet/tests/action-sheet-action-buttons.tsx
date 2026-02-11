import { ActionSheetItem } from '../actionsheet-item';
import { ActionSheetItems } from '../actionsheet-items';
import { ActionSheetFooter } from '../actionsheet-footer';
import { ActionSheetNormal } from '../templates/action-sheet-normal';
import { Button } from '../../button/button.spec';

const styles = `
    #test-area > section {
        height: 230px;
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

            <section>
                <ActionSheetNormal adaptive fullscreen title="Action Buttons Start"
                    footer={
                        <ActionSheetFooter alignment='start'>
                            <Button text="Cancel" size="large" />
                            <Button text="Apply" size="large" themeColor="primary" />
                        </ActionSheetFooter>
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
                <ActionSheetNormal adaptive fullscreen title="Action Buttons End"
                    footer={
                        <ActionSheetFooter alignment='end'>
                            <Button text="Cancel" size="large" />
                            <Button text="Apply" size="large" themeColor="primary" />
                        </ActionSheetFooter>
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
                <ActionSheetNormal adaptive fullscreen title="Action Buttons Center"
                    footer={
                        <ActionSheetFooter alignment='center'>
                            <Button text="Cancel" size="large" />
                            <Button text="Apply" size="large" themeColor="primary" />
                        </ActionSheetFooter>
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
                <ActionSheetNormal adaptive fullscreen title="Action Buttons Stretch"
                    footer={
                        <ActionSheetFooter alignment='stretched'>
                            <Button text="Cancel" size="large" />
                            <Button text="Apply" size="large" themeColor="primary" />
                        </ActionSheetFooter>
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
                <ActionSheetNormal adaptive fullscreen title="Action Buttons Justify"
                    footer={
                        <ActionSheetFooter alignment='justify'>
                            <Button text="Cancel" size="large" />
                            <Button text="Apply" size="large" themeColor="primary" />
                        </ActionSheetFooter>
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
                <ActionSheetNormal adaptive fullscreen title="Action Buttons Vertical"
                    footer={
                        <ActionSheetFooter orientation="vertical" alignment='start'>
                            <Button text="Cancel" size="large" />
                            <Button text="Apply" size="large" themeColor="primary" />
                        </ActionSheetFooter>
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
