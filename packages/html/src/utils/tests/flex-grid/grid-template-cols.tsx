import * as GridTemplateCols from "../../templates/flex-grid/grid-template-cols";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(GridTemplateCols).map((key) => {
                const Component = GridTemplateCols[key];
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