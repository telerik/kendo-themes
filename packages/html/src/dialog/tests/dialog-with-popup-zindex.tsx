import { DialogNormal } from '../../dialog';


const styles = `
    .k-dialog {
        width: 400px;
        height: 250px;
    }

    section {
        height: 350px;
        transform: translate( 0, 0 );
        position: relative;
    }

    /* Position the fake popup at top-left so it's visible */
    .fake-split-button {
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 1;
    }

    /* Simulate the k-animation-container with a popup */
    .k-animation-container {
        position: absolute;
        /* Using literal value for demonstration purposes in test */
        z-index: 11500; /* popup layer - matches k-z-index('popup') */
        top: 60px;
        left: 20px;
    }

    .k-popup {
        width: 200px;
        padding: 8px;
        background: white;
        border: 1px solid #ccc;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .k-list-item {
        padding: 4px 8px;
        cursor: pointer;
    }

    .k-list-item:hover {
        background: #f0f0f0;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area">
            <section>
                {/* Fake split button for context */}
                <div className="fake-split-button">
                    <button className="k-button k-button-solid k-button-solid-primary">
                        <span className="k-button-text">Reply</span>
                    </button>
                </div>

                {/* Simulated animation container with popup - should be BELOW dialog overlay */}
                <div className="k-animation-container">
                    <div className="k-popup">
                        <div className="k-list-item">Reply All</div>
                        <div className="k-list-item">Forward</div>
                        <div className="k-list-item">Reply & Delete</div>
                    </div>
                </div>

                {/* Dialog with overlay - should appear ABOVE the popup */}
                <DialogNormal actionButtonsAlign="end">
                    <p>Dialog should appear above the popup.</p>
                    <p>The popup dropdown should be hidden behind the dialog overlay.</p>
                    <p><strong>Expected z-index values:</strong></p>
                    <ul>
                        <li>k-animation-container: 11500 (popup layer)</li>
                        <li>k-dialog-wrapper: 12000 (modal layer)</li>
                        <li>k-overlay: 10000 (overlay layer)</li>
                    </ul>
                </DialogNormal>
            </section>
        </div>
    </>
);
