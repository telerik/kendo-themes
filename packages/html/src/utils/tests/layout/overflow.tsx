import * as Overflow from "../../templates/layout/overflow";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Overflow).map((key) => {
                const Component = Overflow[key];
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