import * as Padding from "../../templates/spacing/padding";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Padding).map((key) => {
                const Component = Padding[key];
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