import * as FlexDirection from "../../templates/flex-grid/flex-direction";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(FlexDirection).map((key) => {
                const Component = FlexDirection[key];
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