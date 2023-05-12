

const style = `
    .k-skeleton-container {
        width: 300px;
        height: 300px;
        grid-template-rows: repeat(10, 1fr);
        grid-template-columns: repeat(10, 1fr);
        gap: 10px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span className="k-skeleton k-skeleton-text" style={{ width: "300px" }}></span>
            <span className="k-skeleton k-skeleton-circle" style={{ width: '50px', height: '50px' }}></span>
            <span className="k-skeleton k-skeleton-rect" style={{ width: "300px", height: "200px" }}></span>

            <div className="k-skeleton-container k-d-grid">
                <span className="k-skeleton k-skeleton-circle" style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}></span>

                <span className="k-skeleton k-skeleton-text" style={{ gridColumn: "3 / 10", gridRow: "1 / 2" }}></span>
                <span className="k-skeleton k-skeleton-text" style={{ gridColumn: "3 / 7", gridRow: "2 / 3" }}></span>

                <span className="k-skeleton k-skeleton-rect" style={{ gridColumn: "1 / 11", gridRow: "3 / 8" }}></span>

                <span className="k-skeleton k-skeleton-text" style={{ gridColumn: "1 / 11", gridRow: "9 / 10" }}></span>
                <span className="k-skeleton k-skeleton-text" style={{ gridColumn: "1 / 11", gridRow: "10 / 10" }}></span>
            </div>

        </div>
    </>
);
