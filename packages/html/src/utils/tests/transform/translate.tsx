import * as Translate from "../../templates/transform/translate";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Translate).map((key) => {
                const Component = Translate[key];
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