import * as BorderColor from "../../templates/borders/border-color";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(BorderColor).map((key) => {
                const Component = BorderColor[key];
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