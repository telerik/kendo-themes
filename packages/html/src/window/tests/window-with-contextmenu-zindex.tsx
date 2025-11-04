import { WindowNormal } from '..';


const styles = `
    .k-window {
        position: relative;
        width: 500px;
        height: 300px;
    }

    section {
        height: 400px;
        position: relative;
    }

    /* Simulate a context menu popup */
    .k-context-menu-popup {
        position: absolute;
        z-index: 12001; /* modal + 1 */
        top: 150px;
        left: 100px;
    }

    .k-context-menu {
        width: 180px;
        padding: 4px 0;
        background: white;
        border: 1px solid #ccc;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .k-menu-item {
        padding: 8px 16px;
        cursor: pointer;
    }

    .k-menu-item:hover {
        background: #f0f0f0;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area">
            <section>
                {/* Window with modal z-index */}
                <WindowNormal title="Window with Context Menu">
                    <p>Right-click to open context menu.</p>
                    <p>The context menu should appear ABOVE the window.</p>
                    <p><strong>Expected z-index values:</strong></p>
                    <ul>
                        <li>k-window: 12000 (modal layer)</li>
                        <li>k-context-menu-popup: 12001 (modal + 1)</li>
                        <li>k-animation-container (popup): 11500 (popup layer)</li>
                    </ul>
                </WindowNormal>

                {/* Simulated context menu - should appear ABOVE the window */}
                <div className="k-context-menu-popup">
                    <div className="k-context-menu k-menu-vertical">
                        <div className="k-menu-item">Cut</div>
                        <div className="k-menu-item">Copy</div>
                        <div className="k-menu-item">Paste</div>
                        <div className="k-menu-item">Delete</div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
