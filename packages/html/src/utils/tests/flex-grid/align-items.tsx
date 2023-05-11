import * as AlignItems from "../../templates/flex-grid/align-items";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(AlignItems).map((key) => {
                const Component = AlignItems[key];
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