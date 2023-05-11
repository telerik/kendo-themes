import * as GridAutoFlow from "../../templates/flex-grid/grid-auto-flow";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(GridAutoFlow).map((key) => {
                const Component = GridAutoFlow[key];
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