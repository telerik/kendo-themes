import * as OutlineColor from "../../templates/borders/outline-color";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(OutlineColor).map((key) => {
                const Component = OutlineColor[key];
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