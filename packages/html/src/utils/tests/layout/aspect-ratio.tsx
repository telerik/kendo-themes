import * as AspectRatio from "../../templates/layout/aspect-ratio";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(AspectRatio).map((key) => {
                const Component = AspectRatio[key];
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