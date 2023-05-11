import * as Margin from "../../templates/spacing/margin";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Margin).map((key) => {
                const Component = Margin[key];
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