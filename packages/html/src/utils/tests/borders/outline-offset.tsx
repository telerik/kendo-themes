import * as OutlineOffset from "../../templates/borders/outline-offset";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(OutlineOffset).map((key) => {
                const Component = OutlineOffset[key];
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