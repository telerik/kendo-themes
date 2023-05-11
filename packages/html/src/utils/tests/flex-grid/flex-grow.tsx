import * as FlexGrow from "../../templates/flex-grid/flex-grow";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(FlexGrow).map((key) => {
                const Component = FlexGrow[key];
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