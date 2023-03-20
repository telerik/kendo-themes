import ReactDOM from 'react-dom/client';
import { ActionSheet, ActionSheetItems, ActionSheetItem } from '../../action-sheet';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

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

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>LTR</span>
            <span>RTL</span>

            <section>
                <ActionSheet title="Header">
                    <ActionSheetItems>
                        <ActionSheetItem text="Action" description="Action description" iconName="cog" />
                        <ActionSheetItem text="Hover action" description="Action description" iconName="cog" hover />
                        <ActionSheetItem text="Focus action" description="Action description" iconName="cog" focus />
                        <ActionSheetItem text="Disabled action" description="Action description" iconName="cog" disabled />
                        <ActionSheetItem text="Action" description="Some longer subtitle to break on multiple rows, for testing purposes" iconName="cog" />
                    </ActionSheetItems>
                    <hr className="k-hr" />
                    <ActionSheetItems>
                        <ActionSheetItem text="Cancel" description="Action in a second group" iconName="cog" />
                    </ActionSheetItems>
                </ActionSheet>
            </section>

            <section>
                <ActionSheet title="Header" className="k-rtl">
                    <ActionSheetItems>
                        <ActionSheetItem text="Action" description="Action description" iconName="cog" />
                        <ActionSheetItem text="Hover action" description="Action description" iconName="cog" hover />
                        <ActionSheetItem text="Focus action" description="Action description" iconName="cog" focus />
                        <ActionSheetItem text="Disabled action" description="Action description" iconName="cog" disabled />
                        <ActionSheetItem text="Action" description="Some longer subtitle to break on multiple rows, for testing purposes" iconName="cog" />
                    </ActionSheetItems>
                    <hr className="k-hr" />
                    <ActionSheetItems>
                        <ActionSheetItem text="Cancel" description="Action in a second group" iconName="cog" />
                    </ActionSheetItems>
                </ActionSheet>
            </section>
        </div>
    </>
);
