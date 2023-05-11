import * as Width from "../../templates/sizing/width";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Width).map((key) => {
                const Component = Width[key];
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