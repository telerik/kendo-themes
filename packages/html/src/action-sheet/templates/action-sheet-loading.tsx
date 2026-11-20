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
 * Header (start/end actions around a title/subtitle), two groups of items, and footer actions are placeholders.
 */
export const ActionSheetLoading = ({ id = "actionsheet-loading", ...other }) => (
    <ActionSheet
        id={id}
        aria-busy="true"
        aria-label="Loading"
        header={
            <ActionSheetHeader
                actionsStart={<SkeletonRectangle style={{ width: "24px", height: "24px" }} />}
                actionsEnd={<SkeletonRectangle style={{ width: "24px", height: "24px" }} />}
            >
                <div style={{ width: "160px", display: "flex", flexFlow: "column nowrap", gap: "6px" }}>
                    <SkeletonRectangle style={{ width: "100%", height: "22px" }} />
                    <SkeletonRectangle style={{ width: "100%", height: "20px" }} />
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
