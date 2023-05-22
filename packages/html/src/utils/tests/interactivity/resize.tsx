import * as Resize from "../../templates/interactivity/resize";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Resize).map((key) => {
                const Component = Resize[key];
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