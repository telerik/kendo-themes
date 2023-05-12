import * as Height from "../../templates/sizing/height";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Height).map((key) => {
                const Component = Height[key];
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