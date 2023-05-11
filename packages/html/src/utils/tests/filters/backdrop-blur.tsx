import * as BackdropBlur from "../../templates/filters/backdrop-blur";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(BackdropBlur).map((key) => {
                const Component = BackdropBlur[key];
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