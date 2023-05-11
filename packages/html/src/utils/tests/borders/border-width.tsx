import * as BorderWidth from "../../templates/borders/border-width";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(BorderWidth).map((key) => {
                const Component = BorderWidth[key];
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