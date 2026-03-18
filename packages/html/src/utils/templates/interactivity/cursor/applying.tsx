export function CursorApplyingUtils() {

    return (
        <div className="k-d-flex k-justify-content-center k-gap-10 k-w-full">
            <div className="k-d-flex k-flex-col k-align-items-center k-gap-5">
                <span className="k-font-size-md k-text-on-app-surface">k-cursor-move</span>
                <div className="k-cursor-move k-w-20 k-h-20 k-bg-primary"></div>
            </div>
            <div className="k-d-flex k-flex-col k-align-items-center k-gap-5">
                <span className="k-font-size-md k-text-on-app-surface">k-cursor-copy</span>
                <div className="k-cursor-copy k-w-20 k-h-20 k-bg-primary"></div>
            </div>
            <div className="k-d-flex k-flex-col k-align-items-center k-gap-5">
                <span className="k-font-size-md k-text-on-app-surface">k-cursor-crosshair</span>
                <div className="k-cursor-crosshair k-w-20 k-h-20 k-bg-primary"></div>
            </div>
        </div>
    );
}
