import * as GridRowStartEnd from "../../templates/flex-grid/grid-row-start-end";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(GridRowStartEnd).map((key) => {
                const Component = GridRowStartEnd[key];
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