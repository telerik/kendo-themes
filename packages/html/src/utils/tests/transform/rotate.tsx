import * as Rotate from "../../templates/transform/rotate";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Rotate).map((key) => {
                const Component = Rotate[key];
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