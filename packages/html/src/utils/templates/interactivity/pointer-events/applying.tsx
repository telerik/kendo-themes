export function PointerEventsApplyingUtils() {
    
    return (
        <div className="k-d-flex k-justify-content-center k-gap-10 k-w-full">
            <div className="k-d-flex k-flex-col k-align-items-center k-gap-5">
                <span className="k-font-size-md k-text-dark">k-pointer-events-none</span>
                <button className="k-pointer-events-none k-button k-button-md k-button-solid-primary">Button</button>
            </div>
            <div className="k-d-flex k-flex-col k-align-items-center k-gap-5">
                <span className="k-font-size-md k-text-dark">k-pointer-events-auto</span>
                <button className="k-pointer-events-auto k-button k-button-md k-button-solid-primary">Button</button>
            </div>
        </div>
    );
}
