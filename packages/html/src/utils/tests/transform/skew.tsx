import * as Skew from "../../templates/transform/skew";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Skew).map((key) => {
                const Component = Skew[key];
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