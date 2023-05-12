import * as PlaceContent from "../../templates/flex-grid/place-content";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(PlaceContent).map((key) => {
                const Component = PlaceContent[key];
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
