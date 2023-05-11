import * as ObjectPosition from "../../templates/layout/object-position";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(ObjectPosition).map((key) => {
                const Component = ObjectPosition[key];
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