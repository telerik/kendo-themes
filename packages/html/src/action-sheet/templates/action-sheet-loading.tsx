import { ActionSheet, ActionSheetFooter, ActionSheetHeader } from '../../action-sheet';
import { SkeletonRectangle } from '../../skeleton';

const Row = ({ height, skeletonHeight }: { height: string; skeletonHeight: string }) => (
    <div style={{ flex: "none", height, display: "flex", alignItems: "center", paddingInline: "var( --kendo-spacing-4 )" }}>
        <SkeletonRectangle style={{ width: "100%", height: skeletonHeight }} />
    </div>
);

const GroupRow = () => <Row height="44px" skeletonHeight="28px" />;
const ItemRow = () => <Row height="60px" skeletonHeight="44px" />;

/**
 * ActionSheet loading state, composed from the generic Skeleton component.
 * Header (title/subtitle between start/end actions), two groups of items, and footer actions are placeholders.
 */
export const ActionSheetLoading = ({ id = "actionsheet-loading", ...other }) => (
    <ActionSheet
        id={id}
        aria-busy="true"
        header={
            <ActionSheetHeader>
                <span className="k-sr-only">Loading</span>
                <div style={{ display: "flex", alignItems: "center", gap: "var( --kendo-spacing-2 )" }}>
                    <SkeletonRectangle style={{ flex: "none", width: "24px", height: "24px" }} />
                    <div style={{ flex: "1 1 0", minWidth: 0, display: "flex", flexFlow: "column nowrap", gap: "6px" }}>
                        <SkeletonRectangle style={{ width: "100%", height: "22px" }} />
                        <SkeletonRectangle style={{ width: "100%", height: "20px" }} />
                    </div>
                    <SkeletonRectangle style={{ flex: "none", width: "24px", height: "24px" }} />
                </div>
            </ActionSheetHeader>
        }
        footer={
            <ActionSheetFooter>
                <SkeletonRectangle style={{ flex: "1 1 0", height: "38px" }} />
                <SkeletonRectangle style={{ flex: "1 1 0", height: "38px" }} />
            </ActionSheetFooter>
        }
        children={[
            <div key="action-sheet-loading-skeleton" className="k-skeleton-container" style={{ display: "flex", flexFlow: "column nowrap", gap: "2px", padding: "var( --kendo-spacing-2 )" }}>
                <GroupRow />
                <ItemRow />
                <ItemRow />
                <hr className="k-hr" />
                <GroupRow />
                <ItemRow />
                <ItemRow />
            </div>
        ]}
        {...other}>
    </ActionSheet>
);
