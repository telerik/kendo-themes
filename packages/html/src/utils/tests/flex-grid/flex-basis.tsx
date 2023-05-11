import * as FlexBasis from "../../templates/flex-grid/flex-basis";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(FlexBasis).map((key) => {
                const Component = FlexBasis[key];
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