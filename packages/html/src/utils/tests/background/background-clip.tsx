import * as BackgroundClip from "../../templates/background/background-clip";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(BackgroundClip).map((key) => {
                const Component = BackgroundClip[key];
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