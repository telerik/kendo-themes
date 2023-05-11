import * as Appearance from "../../templates/interactivity/appearance";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Appearance).map((key) => {
                const Component = Appearance[key];
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