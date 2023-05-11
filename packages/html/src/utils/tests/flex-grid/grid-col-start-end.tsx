import * as GridColStartEnd from "../../templates/flex-grid/grid-col-start-end";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(GridColStartEnd).map((key) => {
                const Component = GridColStartEnd[key];
                 return (
                    <div key={key}>
                        <span>{key}</span>
                        <section>
                            <Component />
                        </section>
                    </div>
                );
            })}
        </div>
    </>
);