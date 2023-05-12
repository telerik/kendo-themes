import * as Origin from "../../templates/transform/origin";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Origin).map((key) => {
                const Component = Origin[key];
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