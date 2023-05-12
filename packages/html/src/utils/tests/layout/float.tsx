import * as Float from "../../templates/layout/float";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Float).map((key) => {
                const Component = Float[key];
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