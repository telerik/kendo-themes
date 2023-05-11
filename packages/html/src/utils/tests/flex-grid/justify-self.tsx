import * as JustifySelf from "../../templates/flex-grid/justify-self";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(JustifySelf).map((key) => {
                const Component = JustifySelf[key];
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