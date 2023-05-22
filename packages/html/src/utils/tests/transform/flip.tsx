import * as Flip from "../../templates/transform/flip";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Flip).map((key) => {
                const Component = Flip[key];
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