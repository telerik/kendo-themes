const styles = `
    #test-area {
        max-width: none;
        text-align: center;
    }

    #test-area .k-row > *,
    #test-area .k-d-grid > * {
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
                <div className="k-d-grid k-grid-cols-2">
                    <div>Column 1</div>
                    <div>Column 2</div>
                </div>

                <div className="k-d-grid k-grid-cols-3">
                    <div>Column 1</div>
                    <div>Column 2</div>
                    <div>Column 3</div>
                </div>
            </section>

            <br />

            <span>Setting one column to be wider than the others</span>
            <section className="k-container k-gap-4">
                <div className="k-d-grid k-grid-cols-12">
                    <div className="k-col-span-2">k-col-span-2</div>
                    <div className="k-col-span-8">k-col-span-8</div>
                    <div className="k-col-span-2">k-col-span-2</div>
                </div>

                <div className="k-d-grid k-grid-cols-12">
                    <div className="k-col-span-3">k-col-span-3</div>
                    <div className="k-col-span-6">k-col-span-6</div>
                    <div className="k-col-span-3">k-col-span-3</div>
                </div>
            </section>

            <br />

            <span>Breakpoint-specific classes (stacked horizontally on Phone, Portrait orientation)</span>
            <section className="k-container k-gap-4">
                <div className="k-d-grid k-grid-cols-12">
                    <div className="k-col-span-12 k-col-span-sm-9">k-col-span-12 k-col-span-sm-9</div>
                    <div className="k-col-span-12 k-col-span-sm-3">k-col-span-12 k-col-span-sm-9</div>
                </div>

                <div className="k-d-grid k-grid-cols-sm-3">
                    <div>Column 1</div>
                    <div>Column 2</div>
                    <div>Column 3</div>
                </div>
            </section>

            <br />

            <span>Row/Column Gutter ("3" on Phone, and "6" on everything else)</span>
            <section className="k-container k-gap-3 k-gap-md-6">
                <div className="k-d-grid k-grid-cols-2 k-gap-3 k-gap-md-6">
                    <div>Column 1</div>
                    <div>Column 2</div>
                </div>

                <div className="k-d-grid k-grid-cols-3 k-gap-3 k-gap-md-6">
                    <div>Column 1</div>
                    <div>Column 2</div>
                    <div>Column 3</div>
                </div>
            </section>

        </div>
    </>
);
