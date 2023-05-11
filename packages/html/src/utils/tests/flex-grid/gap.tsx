import * as Gap from "../../templates/flex-grid/gap";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Gap).map((key) => {
                const Component = Gap[key];
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