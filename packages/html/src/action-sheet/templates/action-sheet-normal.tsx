import { ActionSheet, ActionSheetItem, ActionSheetItems } from '../../action-sheet';

export const ActionSheetNormal = (props) => (
    <ActionSheet title="Select item" children={[
        <ActionSheetItems key="action-sheet-items">
            <ActionSheetItem text="Edit Item" description="Click to edit" iconName="edit-tools" />
            <ActionSheetItem text="Add to Favorites" iconName="heart" />
            <ActionSheetItem text="Upload New" iconName="upload" />
            <hr className="k-hr"></hr>
            <ActionSheetItem text="Action" iconName="cancel" />
        </ActionSheetItems>
    ]}
    {...props}>
    </ActionSheet>
);
