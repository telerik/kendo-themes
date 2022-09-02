import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionSheet, ActionSheetFooter, ActionSheetHeader } from '../../action-sheet';
import { List, ListItem } from '../../list';

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
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>partial</span>
            <span>full screen</span>

            <section>
                <ActionSheet adaptive={true}>
                    <ActionSheetHeader title="Dropdownlist label" className="k-text-center" actions={[ "x" ]} filter={true} />
                    <div className="k-list-container">
                        <List size="large">
                            <ListItem text="List item" />
                            <ListItem text="Hover" hover />
                            <ListItem text="Focus" focus />
                            <ListItem text="Selected" selected />
                            <ListItem text="Hover selected" hover selected />
                            <ListItem text="Disabled" disabled />
                            <ListItem text="List item with very long text, that spans on multiple lines" />
                            <ListItem text="Checkbox" showCheckbox />
                            <ListItem text="Icon" showIcon iconName="cog" />
                            <ListItem text="Checkbox icon" showCheckbox showIcon iconName="cog" />
                        </List>
                    </div>
                    <ActionSheetFooter actions={[ "Cancel", "!Select" ]} />
                </ActionSheet>
            </section>

            <section>
                <ActionSheet adaptive={true} fullscreen={true}>
                    <ActionSheetHeader title="Dropdownlist label" className="k-text-center" actions={[ "x" ]} filter={true} />
                    <div className="k-list-container">
                        <List size="large">
                            <ListItem text="List item" />
                            <ListItem text="Hover" hover />
                            <ListItem text="Focus" focus />
                            <ListItem text="Selected" selected />
                            <ListItem text="Hover selected" hover selected />
                            <ListItem text="Disabled" disabled />
                            <ListItem text="List item with very long text, that spans on multiple lines" />
                            <ListItem text="Checkbox" showCheckbox />
                            <ListItem text="Icon" showIcon iconName="cog" />
                            <ListItem text="Checkbox icon" showCheckbox showIcon iconName="cog" />
                        </List>
                    </div>
                    <ActionSheetFooter actions={[ "Cancel", "!Select" ]} />
                </ActionSheet>
            </section>
        </div>

    </>
);
