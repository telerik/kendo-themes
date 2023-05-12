import * as BorderCollapse from "../../templates/table/border-collapse";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(BorderCollapse).map((key) => {
                const Component = BorderCollapse[key];
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