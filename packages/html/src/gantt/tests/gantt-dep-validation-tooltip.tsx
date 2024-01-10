import { TooltipNormal } from '../../tooltip';

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
                <TooltipNormal className="k-gantt-tooltip-validation k-gantt-tooltip-valid" content={
                    <>
                        <div className="k-gantt-tooltip-validation-row">
                            <span className="k-gantt-tooltip-validation-label">From:</span>
                            <span className="k-gantt-tooltip-validation-value">Task 1</span>
                        </div>
                        <div className="k-gantt-tooltip-validation-row">
                            <span className="k-gantt-tooltip-validation-label">To:</span>
                            <span className="k-gantt-tooltip-validation-value">Task 2</span>
                        </div>
                    </>
                }>
                </TooltipNormal>
            </section>

            <section className="k-rtl">
                <TooltipNormal className="k-gantt-tooltip-validation k-gantt-tooltip-valid" content={
                    <>
                        <div className="k-gantt-tooltip-validation-row">
                            <span className="k-gantt-tooltip-validation-label">From:</span>
                            <span className="k-gantt-tooltip-validation-value">Task 1</span>
                        </div>
                        <div className="k-gantt-tooltip-validation-row">
                            <span className="k-gantt-tooltip-validation-label">To:</span>
                            <span className="k-gantt-tooltip-validation-value">Task 2</span>
                        </div>
                    </>
                }>
                </TooltipNormal>
            </section>

            <section>
                <TooltipNormal className="k-gantt-tooltip-validation k-gantt-tooltip-invalid" content={
                    <>
                        <div className="k-gantt-tooltip-validation-row">
                            <span className="k-gantt-tooltip-validation-label">From:</span>
                            <span className="k-gantt-tooltip-validation-value">Task 3</span>
                        </div>
                        <div className="k-gantt-tooltip-validation-row">
                            <span className="k-gantt-tooltip-validation-label">To:</span>
                            <span className="k-gantt-tooltip-validation-value">Task 4</span>
                        </div>
                    </>
                }>
                </TooltipNormal>
            </section>

            <section className="k-rtl">
                <TooltipNormal className="k-gantt-tooltip-validation k-gantt-tooltip-invalid" content={
                    <>
                        <div className="k-gantt-tooltip-validation-row">
                            <span className="k-gantt-tooltip-validation-label">From:</span>
                            <span className="k-gantt-tooltip-validation-value">Task 3</span>
                        </div>
                        <div className="k-gantt-tooltip-validation-row">
                            <span className="k-gantt-tooltip-validation-label">To:</span>
                            <span className="k-gantt-tooltip-validation-value">Task 4</span>
                        </div>
                    </>
                }>
                </TooltipNormal>
            </section>

            <section>
                <TooltipNormal className="k-gantt-tooltip-validation" content={
                    <>
                        <div className="k-gantt-tooltip-validation-row">
                            <span className="k-gantt-tooltip-validation-label">From:</span>
                            <span className="k-gantt-tooltip-validation-value">Task 3</span>
                        </div>
                        <div className="k-gantt-tooltip-validation-row">
                            <span className="k-gantt-tooltip-validation-label">To:</span>
                            <span className="k-gantt-tooltip-validation-value">Task 4</span>
                        </div>
                    </>
                }>
                </TooltipNormal>
            </section>

            <section className="k-rtl">
                <TooltipNormal className="k-gantt-tooltip-validation" content={
                    <>
                        <div className="k-gantt-tooltip-validation-row">
                            <span className="k-gantt-tooltip-validation-label">From:</span>
                            <span className="k-gantt-tooltip-validation-value">Task 3</span>
                        </div>
                        <div className="k-gantt-tooltip-validation-row">
                            <span className="k-gantt-tooltip-validation-label">To:</span>
                            <span className="k-gantt-tooltip-validation-value">Task 4</span>
                        </div>
                    </>
                }>
                </TooltipNormal>
            </section>

        </div>
    </>
);
