

const styles = `
    .k-tooltip {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>LTR</span>
            <span className="k-rtl">RTL</span>

            <section>
                <div className="k-tooltip k-gantt-tooltip-validation k-gantt-tooltip-valid">
                    <div className="k-gantt-tooltip-validation-row">
                        <span className="k-gantt-tooltip-validation-label">From:</span>
                        <span className="k-gantt-tooltip-validation-value">Task 1</span>
                    </div>
                    <div className="k-gantt-tooltip-validation-row">
                        <span className="k-gantt-tooltip-validation-label">To:</span>
                        <span className="k-gantt-tooltip-validation-value">Task 2</span>
                    </div>
                </div>
            </section>

            <section className="k-rtl">
                <div className="k-tooltip k-gantt-tooltip-validation k-gantt-tooltip-valid">
                    <div className="k-gantt-tooltip-validation-row">
                        <span className="k-gantt-tooltip-validation-label">From:</span>
                        <span className="k-gantt-tooltip-validation-value">Task 1</span>
                    </div>
                    <div className="k-gantt-tooltip-validation-row">
                        <span className="k-gantt-tooltip-validation-label">To:</span>
                        <span className="k-gantt-tooltip-validation-value">Task 2</span>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-tooltip k-gantt-tooltip-validation k-gantt-tooltip-invalid">
                    <div className="k-gantt-tooltip-validation-row">
                        <span className="k-gantt-tooltip-validation-label">From:</span>
                        <span className="k-gantt-tooltip-validation-value">Task 3</span>
                    </div>
                    <div className="k-gantt-tooltip-validation-row">
                        <span className="k-gantt-tooltip-validation-label">To:</span>
                        <span className="k-gantt-tooltip-validation-value">Task 4</span>
                    </div>
                </div>
            </section>

            <section className="k-rtl">
                <div className="k-tooltip k-gantt-tooltip-validation k-gantt-tooltip-invalid">
                    <div className="k-gantt-tooltip-validation-row">
                        <span className="k-gantt-tooltip-validation-label">From:</span>
                        <span className="k-gantt-tooltip-validation-value">Task 3</span>
                    </div>
                    <div className="k-gantt-tooltip-validation-row">
                        <span className="k-gantt-tooltip-validation-label">To:</span>
                        <span className="k-gantt-tooltip-validation-value">Task 4</span>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-tooltip k-gantt-tooltip-validation">
                    <div className="k-gantt-tooltip-validation-row">
                        <span className="k-gantt-tooltip-validation-label">From:</span>
                        <span className="k-gantt-tooltip-validation-value">Task 3</span>
                    </div>
                    <div className="k-gantt-tooltip-validation-row">
                        <span className="k-gantt-tooltip-validation-label">To:</span>
                        <span className="k-gantt-tooltip-validation-value">Task 4</span>
                    </div>
                </div>
            </section>

            <section className="k-rtl">
                <div className="k-tooltip k-gantt-tooltip-validation">
                    <div className="k-gantt-tooltip-validation-row">
                        <span className="k-gantt-tooltip-validation-label">From:</span>
                        <span className="k-gantt-tooltip-validation-value">Task 3</span>
                    </div>
                    <div className="k-gantt-tooltip-validation-row">
                        <span className="k-gantt-tooltip-validation-label">To:</span>
                        <span className="k-gantt-tooltip-validation-value">Task 4</span>
                    </div>
                </div>
            </section>

        </div>
    </>
);
