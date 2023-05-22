import * as Clear from "../../templates/layout/clear";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Clear).map((key) => {
                const Component = Clear[key];
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