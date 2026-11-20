import { ActionSheetItems, ActionSheetItem, ActionSheetNormal, ActionSheetFooter } from '..';
import { Button } from '../../button';

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
                <ActionSheetNormal id="actionsheet-buttons-start" fullscreen title="Action Buttons Start"
                    footer={
                        <ActionSheetFooter alignment='start'>
                            <Button text="Cancel" icon="cancel" size="large" />
                            <Button text="Apply" icon="check" size="large" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item Title" />
                        <ActionSheetItem text="Item Title" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section>
                <ActionSheetNormal id="actionsheet-buttons-end" fullscreen title="Action Buttons End"
                    footer={
                        <ActionSheetFooter alignment='end'>
                            <Button text="Cancel" icon="cancel" size="large" />
                            <Button text="Apply" icon="check" size="large" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item Title" />
                        <ActionSheetItem text="Item Title" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section>
                <ActionSheetNormal id="actionsheet-buttons-center" fullscreen title="Action Buttons Center"
                    footer={
                        <ActionSheetFooter alignment='center'>
                            <Button text="Cancel" icon="cancel" size="large" />
                            <Button text="Apply" icon="check" size="large" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item Title" />
                        <ActionSheetItem text="Item Title" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section>
                <ActionSheetNormal id="actionsheet-buttons-stretch" fullscreen title="Action Buttons Stretch"
                    footer={
                        <ActionSheetFooter alignment='stretched'>
                            <Button text="Cancel" icon="cancel" size="large" />
                            <Button text="Apply" icon="check" size="large" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item Title" />
                        <ActionSheetItem text="Item Title" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section>
                <ActionSheetNormal id="actionsheet-buttons-justify" fullscreen title="Action Buttons Justify"
                    footer={
                        <ActionSheetFooter alignment='justify'>
                            <Button text="Cancel" icon="cancel" size="large" />
                            <Button text="Apply" icon="check" size="large" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item Title" />
                        <ActionSheetItem text="Item Title" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>

            <section>
                <ActionSheetNormal id="actionsheet-buttons-vertical" fullscreen title="Action Buttons Vertical"
                    footer={
                        <ActionSheetFooter orientation="vertical" alignment='start'>
                            <Button text="Cancel" icon="cancel" size="large" />
                            <Button text="Apply" icon="check" size="large" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <ActionSheetItems>
                        <ActionSheetItem text="Item Title" />
                        <ActionSheetItem text="Item Title" />
                    </ActionSheetItems>
                </ActionSheetNormal>
            </section>
        </div>
    </>
);
