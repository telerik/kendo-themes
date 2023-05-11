import * as PlaceItems from "../../templates/flex-grid/place-items";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(PlaceItems).map((key) => {
                const Component = PlaceItems[key];
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