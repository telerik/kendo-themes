import { FloatingActionButton, FloatingActionButtonItems, FloatingActionButtonItem } from '../../fab';


const styles = `
    #test-area {
        grid-template-columns: 150px repeat(3, 1fr);
        grid-template-rows: 30px repeat(5, 320px)
    }
    .relative-container {
        position: relative;
        border: 1px solid #ccc;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>

            <span>Downward - Left Labels</span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="small" position="top-end" style={{ top: "16px", right: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: "calc(16px + 36px)", right: "calc(16px + calc(36px / 2) - calc(36px /2))" }}>
                    <FloatingActionButtonItems position="bottom">
                        <FloatingActionButtonItem text="Normal" icon="pencil" align="right" />
                        <FloatingActionButtonItem text="Hover long text" icon="pencil" align="right" hover />
                        <FloatingActionButtonItem text="Focus" icon="pencil" align="right" focus />
                        <FloatingActionButtonItem text="Active" icon="pencil" align="right" active />
                        <FloatingActionButtonItem text="Disabled" icon="cancel" align="right" disabled />
                    </FloatingActionButtonItems>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="medium" position="top-end" style={{ top: "16px", right: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: "calc(16px + 52px)", right: "calc(16px + calc(52px / 2) - calc(36px /2))" }}>
                    <FloatingActionButtonItems position="bottom">
                        <FloatingActionButtonItem text="Hover long text" icon="pencil" align="right" hover />
                        <FloatingActionButtonItem text="Focus" icon="pencil" align="right" focus />
                        <FloatingActionButtonItem text="Active" icon="pencil" align="right" active />
                        <FloatingActionButtonItem text="Disabled & Focus" icon="cancel" align="right" disabled focus />
                    </FloatingActionButtonItems>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="large" position="top-end" style={{ top: "16px", right: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: "calc(16px + 68px)", right: "calc(16px + calc(68px / 2) - calc(36px /2))" }}>
                    <FloatingActionButtonItems position="bottom">
                        <FloatingActionButtonItem text="Hover long text" icon="pencil" align="right" hover />
                        <FloatingActionButtonItem text="Focus" icon="pencil" align="right" focus />
                        <FloatingActionButtonItem text="Active" icon="pencil" align="right" active />
                        <FloatingActionButtonItem text="Disabled" icon="cancel" align="right" disabled />
                    </FloatingActionButtonItems>
                </div>
            </span>

            <span>Downward - Right Labels</span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="small" position="top-start" style={{ top: "16px", left: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: "calc(16px + 36px)", left: "calc(16px + calc(36px / 2) - calc(36px /2))" }}>
                    <FloatingActionButtonItems position="bottom">
                        <FloatingActionButtonItem text="Hover long text" icon="pencil" align="left" hover />
                        <FloatingActionButtonItem text="Focus" icon="pencil" align="left" focus />
                        <FloatingActionButtonItem text="Active" icon="pencil" align="left" active />
                    </FloatingActionButtonItems>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="medium" position="top-start" style={{ top: "16px", left: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: "calc(16px + 52px)", left: "calc(16px + calc(52px / 2) - calc(36px /2))" }}>
                    <FloatingActionButtonItems position="bottom">
                        <FloatingActionButtonItem text="Hover long text" icon="pencil" align="left" hover />
                        <FloatingActionButtonItem text="Focus" icon="pencil" align="left" focus />
                        <FloatingActionButtonItem text="Active" icon="pencil" align="left" active />
                    </FloatingActionButtonItems>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="large" position="top-start" style={{ top: "16px", left: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", top: "calc(16px + 68px)", left: "calc(16px + calc(68px / 2) - calc(36px /2))" }}>
                    <FloatingActionButtonItems position="bottom">
                        <FloatingActionButtonItem text="Hover long text" icon="pencil" align="left" hover />
                        <FloatingActionButtonItem text="Focus" icon="pencil" align="left" focus />
                        <FloatingActionButtonItem text="Active" icon="pencil" align="left" active />
                    </FloatingActionButtonItems>
                </div>
            </span>

            <span>Upward - Left Labels</span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="small" position="bottom-end" style={{ bottom: "16px", right: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "calc(16px + 36px)", right: "calc(16px + calc(36px / 2) - calc(36px /2))" }}>
                    <FloatingActionButtonItems position="top">
                        <FloatingActionButtonItem text="Hover long text" icon="pencil" align="right" hover />
                        <FloatingActionButtonItem text="Focus" icon="pencil" align="right" focus />
                        <FloatingActionButtonItem text="Active" icon="pencil" align="right" active />
                    </FloatingActionButtonItems>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="medium" position="bottom-end" style={{ bottom: "16px", right: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "calc(16px + 52px)", right: "calc(16px + calc(52px / 2) - calc(36px /2))" }}>
                    <FloatingActionButtonItems position="top">
                        <FloatingActionButtonItem text="Hover long text" icon="pencil" align="right" hover />
                        <FloatingActionButtonItem text="Focus" icon="pencil" align="right" focus />
                        <FloatingActionButtonItem text="Active" icon="pencil" align="right" active />
                    </FloatingActionButtonItems>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="large" position="bottom-end" style={{ bottom: "16px", right: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "calc(16px + 68px)", right: "calc(16px + calc(68px / 2) - calc(36px /2))" }}>
                    <FloatingActionButtonItems position="top">
                        <FloatingActionButtonItem text="Hover long text" icon="pencil" align="right" hover />
                        <FloatingActionButtonItem text="Focus" icon="pencil" align="right" focus />
                        <FloatingActionButtonItem text="Active" icon="pencil" align="right" active />
                    </FloatingActionButtonItems>
                </div>
            </span>

            <span>Upward - Right Labels</span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="small" position="bottom-start" style={{ bottom: "16px", left: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "calc(16px + 36px)", left: "calc(16px + calc(36px / 2) - calc(36px /2))" }}>
                    <FloatingActionButtonItems position="top">
                        <FloatingActionButtonItem text="Hover long text" icon="pencil" align="left" hover />
                        <FloatingActionButtonItem text="Focus" icon="pencil" align="left" focus />
                        <FloatingActionButtonItem text="Active" icon="pencil" align="left" active />
                    </FloatingActionButtonItems>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="medium" position="bottom-start" style={{ bottom: "16px", left: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "calc(16px + 52px)", left: "calc(16px + calc(52px / 2) - calc(36px /2))" }}>
                    <FloatingActionButtonItems position="top">
                        <FloatingActionButtonItem text="Hover long text" icon="pencil" align="left" hover />
                        <FloatingActionButtonItem text="Focus" icon="pencil" align="left" focus />
                        <FloatingActionButtonItem text="Active" icon="pencil" align="left" active />
                    </FloatingActionButtonItems>
                </div>
            </span>
            <span className="relative-container">
                <FloatingActionButton icon="plus" size="large" position="bottom-start" style={{ bottom: "16px", left: "16px" }} />
                <div className="k-fab-popup k-popup k-popup-transparent" style={{ position: "absolute", bottom: "calc(16px + 68px)", left: "calc(16px + calc(68px / 2) - calc(36px /2))" }}>
                    <FloatingActionButtonItems position="top">
                        <FloatingActionButtonItem text="Hover long text" icon="pencil" align="left" hover />
                        <FloatingActionButtonItem text="Focus" icon="pencil" align="left" focus />
                        <FloatingActionButtonItem text="Active" icon="pencil" align="left" active />
                    </FloatingActionButtonItems>
                </div>
            </span>
        </div>
    </>
);
