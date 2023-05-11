import * as BorderStyle from "../../templates/borders/border-style";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(BorderStyle).map((key) => {
                const Component = BorderStyle[key];
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