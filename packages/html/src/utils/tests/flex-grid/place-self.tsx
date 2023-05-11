import * as PlaceSelf from "../../templates/flex-grid/place-self";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(PlaceSelf).map((key) => {
                const Component = PlaceSelf[key];
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