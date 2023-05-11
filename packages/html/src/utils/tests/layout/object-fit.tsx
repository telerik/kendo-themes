import * as ObjectFit from "../../templates/layout/object-fit";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(ObjectFit).map((key) => {
                const Component = ObjectFit[key];
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