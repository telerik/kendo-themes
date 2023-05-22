import * as Stroke from "../../templates/svg/stroke";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Stroke).map((key) => {
                const Component = Stroke[key];
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