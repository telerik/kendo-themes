import * as Visibility from "../../templates/layout/visibility";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Visibility).map((key) => {
                const Component = Visibility[key];
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