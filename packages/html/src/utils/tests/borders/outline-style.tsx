import * as OutlineStyle from "../../templates/borders/outline-style";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(OutlineStyle).map((key) => {
                const Component = OutlineStyle[key];
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