import { ActionSheet, ActionSheetHeader } from '../../action-sheet';
import { Treeview, TreeviewItem } from '../../treeview';


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

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>partial</span>
            <span>full screen</span>

            <section>
                <ActionSheet adaptive={true}>
                    <ActionSheetHeader actions={[ 'x' ]}>
                        <div className="k-text-center">Select value</div>
                    </ActionSheetHeader>
                    <Treeview size="large">
                        <TreeviewItem top text="Normal" />
                        <TreeviewItem text="Hover" hover />
                        <TreeviewItem text="Focus" focus/>
                        <TreeviewItem text="Selected" selected/>
                        <TreeviewItem text="Selected focus" selected focus/>
                        <TreeviewItem text="Disabled" disabled/>
                        <TreeviewItem text="Disabled focus" disabled focus/>
                        <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more..."/>
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem text="Normal Content" />
                        <TreeviewItem bottom text="Normal Content" />
                    </Treeview>
                </ActionSheet>
            </section>

            <section>
                <ActionSheet adaptive={true} fullscreen={true}>
                    <ActionSheetHeader actions={[ 'x' ]}>
                        <div className="k-text-center">Select time</div>
                    </ActionSheetHeader>
                    <Treeview size="large">
                        <TreeviewItem top text="Normal" />
                        <TreeviewItem text="Hover" hover />
                        <TreeviewItem text="Focus" focus/>
                        <TreeviewItem text="Selected" selected/>
                        <TreeviewItem text="Selected focus" selected focus/>
                        <TreeviewItem text="Disabled" disabled/>
                        <TreeviewItem text="Disabled focus" disabled focus/>
                        <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more..."/>
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
                        <TreeviewItem bottom text="Normal Content" />
                    </Treeview>
                </ActionSheet>
            </section>
        </div>
    </>
);
