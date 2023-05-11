import * as GridAutoRows from "../../templates/flex-grid/grid-auto-rows";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(GridAutoRows).map((key) => {
                const Component = GridAutoRows[key];
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