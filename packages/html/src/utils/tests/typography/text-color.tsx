import * as TextColor from "../../templates/typography/text-color";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(TextColor).map((key) => {
                const Component = TextColor[key];
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