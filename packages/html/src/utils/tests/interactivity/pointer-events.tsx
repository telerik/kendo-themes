import * as PointerEvents from "../../templates/interactivity/pointer-events";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(PointerEvents).map((key) => {
                const Component = PointerEvents[key];
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