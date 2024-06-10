const styles = `
    #test-area {
        max-width: none;
        text-align: center;
    }

    #test-area [class^="k-col"] > * {
        padding: 1rem;
        background-color: var(--kendo-color-primary-subtle);
        border: 1px solid var(--kendo-color-primary);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span>Equal Width</span>
            <section className="k-container k-gap-4">
                <div className="k-row">
                    <div className="k-col">
                        <div>k-col</div>
                    </div>
                    <div className="k-col">
                        <div>k-col</div>
                    </div>
                </div>

                <div className="k-row">
                    <div className="k-col">
                        <div>k-col</div>
                    </div>
                    <div className="k-col">
                        <div>k-col</div>
                    </div>
                    <div className="k-col">
                        <div>k-col</div>
                    </div>
                </div>
            </section>

            <br />

            <span>Setting one column width</span>
            <section className="k-container k-gap-4">
                <div className="k-row">
                    <div className="k-col">
                        <div>k-col</div>
                    </div>
                    <div className="k-col-size-66-6">
                        <div>k-col-size-66-6</div>
                    </div>
                    <div className="k-col">
                        <div>k-col</div>
                    </div>
                </div>

                <div className="k-row">
                    <div className="k-col">
                        <div>k-col</div>
                    </div>
                    <div className="k-col-size-50">
                        <div>k-col-size-50</div>
                    </div>
                    <div className="k-col">
                        <div>k-col</div>
                    </div>
                </div>
            </section>

            <br />

            <span>Breakpoint-specific classes (stacked horizontally on Phone, Portrait orientation)</span>
            <section className="k-container k-gap-4">
                <div className="k-row">
                    <div className="k-col-sm-size-75">
                        <div>k-col-sm-75</div>
                    </div>
                    <div className="k-col-sm-size-25">
                        <div>k-col-sm-25</div>
                    </div>
                </div>

                <div className="k-row">
                    <div className="k-col-sm">
                        <div>k-col-sm</div>
                    </div>
                    <div className="k-col-sm">
                        <div>k-col-sm</div>
                    </div>
                    <div className="k-col-sm">
                        <div>k-col-sm</div>
                    </div>
                </div>
            </section>

            <br />

            <span>Row/Column Gutter ("3" on Phone, and "6" on everything else)</span>
            <section className="k-container k-gap-3 k-gap-md-6">
                <div className="k-row k-col-gap-3 k-col-gap-md-6">
                    <div className="k-col-sm-size-60">
                        <div>k-col-sm-size-60</div>
                    </div>
                    <div className="k-col-sm-size-40">
                        <div>k-col-sm-size-40</div>
                    </div>
                </div>

                <div className="k-row k-col-gap-3 k-col-gap-md-6">
                    <div className="k-col">
                        <div>k-col</div>
                    </div>
                    <div className="k-col">
                        <div>k-col</div>
                    </div>
                    <div className="k-col">
                        <div>k-col</div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
