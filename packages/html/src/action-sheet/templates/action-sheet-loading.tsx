import { ActionSheet, ActionSheetFooter, ActionSheetHeader } from '../../action-sheet';
import { SkeletonNormal, SkeletonRectangle } from '../../skeleton';

const LoadingGroup = () => (
    <div style={{ display: "flex", flexFlow: "column nowrap", gap: "var( --kendo-spacing-2 )" }}>
        <SkeletonNormal style={{ width: "100%", height: "20px" }} />
        <SkeletonRectangle style={{ width: "100%", height: "32px" }} />
        <SkeletonRectangle style={{ width: "100%", height: "32px" }} />
    </div>
);

/**
 * ActionSheet loading state, composed from the generic Skeleton component.
 * Header title/subtitle and action buttons, content groups, and footer actions are all placeholders.
 */
export const ActionSheetLoading = ({ headerActions = false, footer = false, id = "actionsheet-loading", ...other }) => (
    <ActionSheet
        id={id}
        header={
            <ActionSheetHeader
                actionsStart={headerActions ? <SkeletonRectangle style={{ width: "24px", height: "24px" }} /> : undefined}
                actionsEnd={headerActions ? <SkeletonRectangle style={{ width: "24px", height: "24px" }} /> : undefined}
            >
                <div style={{ display: "flex", flexFlow: "column nowrap", gap: "var( --kendo-spacing-2 )" }}>
                    <SkeletonNormal style={{ width: "100%", height: "22px" }} />
                    <SkeletonNormal style={{ width: "100%", height: "20px" }} />
                </div>
            </ActionSheetHeader>
        }
        footer={
            footer ? (
                <ActionSheetFooter>
                    <SkeletonRectangle style={{ flex: "1 1 0", height: "38px" }} />
                    <SkeletonRectangle style={{ flex: "1 1 0", height: "38px" }} />
                </ActionSheetFooter>
            ) : undefined
        }
        children={[
            <div key="action-sheet-loading-skeleton" className="k-skeleton-container" style={{ display: "flex", flexFlow: "column nowrap", gap: "var( --kendo-spacing-2 )", padding: "var( --kendo-spacing-2 )" }}>
                <LoadingGroup />
                <hr className="k-hr" />
                <LoadingGroup />
            </div>
        ]}
        {...other}>
    </ActionSheet>
);
