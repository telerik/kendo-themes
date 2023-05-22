import * as ZIndex from "../../templates/layout/z-index";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(ZIndex).map((key) => {
                const Component = ZIndex[key];
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