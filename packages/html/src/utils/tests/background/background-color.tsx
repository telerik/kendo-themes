import * as BackgroundColor from "../../templates/background/background-color";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(BackgroundColor).map((key) => {
                const Component = BackgroundColor[key];
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