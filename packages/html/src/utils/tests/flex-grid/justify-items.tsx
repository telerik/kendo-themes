import * as JustifyItems from "../../templates/flex-grid/justify-items";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(JustifyItems).map((key) => {
                const Component = JustifyItems[key];
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