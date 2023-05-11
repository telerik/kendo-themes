import * as Opacity from "../../templates/effects/opacity";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Opacity).map((key) => {
                const Component = Opacity[key];
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