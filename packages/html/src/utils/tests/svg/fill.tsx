import * as Fill from "../../templates/svg/fill";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Fill).map((key) => {
                const Component = Fill[key];
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