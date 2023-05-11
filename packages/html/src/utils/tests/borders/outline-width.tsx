import * as OutlineWidth from "../../templates/borders/outline-width";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(OutlineWidth).map((key) => {
                const Component = OutlineWidth[key];
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