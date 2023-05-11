import * as FlexSrink from "../../templates/flex-grid/flex-srink";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(FlexSrink).map((key) => {
                const Component = FlexSrink[key];
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