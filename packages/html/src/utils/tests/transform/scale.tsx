import * as Scale from "../../templates/transform/scale";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Scale).map((key) => {
                const Component = Scale[key];
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