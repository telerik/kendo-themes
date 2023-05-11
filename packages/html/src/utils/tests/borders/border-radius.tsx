import * as BorderRadius from "../../templates/borders/border-radius";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(BorderRadius).map((key) => {
                const Component = BorderRadius[key];
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