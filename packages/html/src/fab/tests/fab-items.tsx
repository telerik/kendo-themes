import { FloatingActionButtonItems, FloatingActionButtonItem, IconFloatingActionButton, FloatingActionButton } from '../../fab';


const styles = `
    #test-area {
        grid-template-columns: 150px repeat(3, 1fr);
        grid-template-rows: 30px repeat(3, 320px)
    }
    .relative-container {
        position: relative;
        border: 1px solid #ccc;
    }
`;

const indexMap = {
    0: 36,
    1: 52,
    2: 68,
};

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>

            <span>Downward - Left Labels</span>
            {FloatingActionButton.options.size.map((size, index) => (
                <span className="relative-container">
                    <IconFloatingActionButton size={size} themeColor="primary" position="top-end" style={{ top: "16px", right: "16px" }} />
                    <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: `calc(16px + ${indexMap[index]}px)`, right: `calc(16px + calc(${indexMap[index]}px / 2) - calc(36px /2))` }}>
                        <FloatingActionButtonItems position="bottom">
                            {[ "normal", ...FloatingActionButtonItem.states ].map((state) => (
                                <FloatingActionButtonItem text={state} icon={state === "disabled" ? "cancel" : "pencil"} align="right" {...{ [state]: true }}/>
                            ))}
                        </FloatingActionButtonItems>
                    </div>
                </span>
            ))}

            <span>Downward - Right Labels</span>
            {FloatingActionButton.options.size.map((size, index) => (
                <span className="relative-container">
                    <IconFloatingActionButton size={size} position="top-start" themeColor="primary" style={{ top: "16px", left: "16px" }} />
                    <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: `calc(16px + ${indexMap[index]}px)`, left: `calc(16px + calc(${indexMap[index]}px / 2) - calc(36px /2))` }}>
                        <FloatingActionButtonItems position="bottom">
                            {[ "normal", ...FloatingActionButtonItem.states ].map((state) => (
                                <FloatingActionButtonItem text={state} icon={state === "disabled" ? "cancel" : "pencil"} align="left" {...{ [state]: true }}/>
                            ))}
                        </FloatingActionButtonItems>
                    </div>
                </span>
            ))}

            <span>Upward - Left Labels</span>
            {FloatingActionButton.options.size.map((size, index) => (
                <span className="relative-container">
                    <IconFloatingActionButton size={size} position="bottom-end" themeColor="primary" style={{ bottom: "16px", right: "16px" }} />
                    <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: `calc(16px + ${indexMap[index]}px)`, right: `calc(16px + calc(${indexMap[index]}px / 2) - calc(36px /2))` }}>
                        <FloatingActionButtonItems position="top">
                            {[ "normal", ...FloatingActionButtonItem.states ].map((state) => (
                                <FloatingActionButtonItem text={state} icon={state === "disabled" ? "cancel" : "pencil"} align="right" {...{ [state]: true }}/>
                            ))}
                        </FloatingActionButtonItems>
                    </div>
                </span>
            ))}

            <span>Upward - Right Labels</span>
            {FloatingActionButton.options.size.map((size, index) => (
                <span className="relative-container">
                    <IconFloatingActionButton size={size} position="bottom-start" themeColor="primary" style={{ bottom: "16px", left: "16px" }} />
                    <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: `calc(16px + ${indexMap[index]}px)`, left: `calc(16px + calc(${indexMap[index]}px / 2) - calc(36px /2))` }}>
                        <FloatingActionButtonItems position="top">
                            {[ "normal", ...FloatingActionButtonItem.states ].map((state) => (
                                <FloatingActionButtonItem text={state} icon={state === "disabled" ? "cancel" : "pencil"} align="left" {...{ [state]: true }}/>
                            ))}
                        </FloatingActionButtonItems>
                    </div>
                </span>
            ))}
        </div>
    </>
);
