import * as GridTemplateRows from "../../templates/flex-grid/grid-template-rows";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(GridTemplateRows).map((key) => {
                const Component = GridTemplateRows[key];
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