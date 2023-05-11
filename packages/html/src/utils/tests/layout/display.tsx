import * as Display from "../../templates/layout/display";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Display).map((key) => {
                const Component = Display[key];
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