import ReactDOM from 'react-dom/client';
import { ActionSheet, ActionSheetItems, ActionSheetItem } from '../../action-sheet';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        --kendo-actionsheet-height: 300px;
        --kendo-actionsheet-max-height: 300px;
    }
    #test-area > section {
        height: 400px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <section>
                <ActionSheet side="left" title="Left action sheet">
                    <ActionSheetItems>
                        <ActionSheetItem text="Action" description="Action description" iconName="cog" />
                        <ActionSheetItem text="Hover action" description="Action description" iconName="cog" hover />
                        <ActionSheetItem text="Focus action" description="Action description" iconName="cog" focus />
                        <ActionSheetItem text="Disabled action" description="Action description" iconName="cog" disabled />
                    </ActionSheetItems>
                </ActionSheet>
            </section>
            <section>
                <ActionSheet side="right" title="Right action sheet">
                    <ActionSheetItems>
                        <ActionSheetItem text="Action" description="Action description" iconName="cog" />
                        <ActionSheetItem text="Hover action" description="Action description" iconName="cog" hover />
                        <ActionSheetItem text="Focus action" description="Action description" iconName="cog" focus />
                        <ActionSheetItem text="Disabled action" description="Action description" iconName="cog" disabled />
                    </ActionSheetItems>
                </ActionSheet>
            </section>
            <section>
                <ActionSheet side="top" title="Top action sheet">
                    <ActionSheetItems>
                        <ActionSheetItem text="Action" description="Action description" iconName="cog" />
                        <ActionSheetItem text="Hover action" description="Action description" iconName="cog" hover />
                        <ActionSheetItem text="Focus action" description="Action description" iconName="cog" focus />
                        <ActionSheetItem text="Disabled action" description="Action description" iconName="cog" disabled />
                    </ActionSheetItems>
                </ActionSheet>
            </section>
            <section>
                <ActionSheet side="bottom" title="Bottom action sheet">
                    <ActionSheetItems>
                        <ActionSheetItem text="Action" description="Action description" iconName="cog" />
                        <ActionSheetItem text="Hover action" description="Action description" iconName="cog" hover />
                        <ActionSheetItem text="Focus action" description="Action description" iconName="cog" focus />
                        <ActionSheetItem text="Disabled action" description="Action description" iconName="cog" disabled />
                    </ActionSheetItems>
                </ActionSheet>
            </section>
        </div>
    </>
);
