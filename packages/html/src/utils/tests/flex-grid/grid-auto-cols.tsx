import * as GridAutoCols from "../../templates/flex-grid/grid-auto-cols";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(GridAutoCols).map((key) => {
                const Component = GridAutoCols[key];
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