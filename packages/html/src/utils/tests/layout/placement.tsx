import * as Placement from "../../templates/layout/placement";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Placement).map((key) => {
                const Component = Placement[key];
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