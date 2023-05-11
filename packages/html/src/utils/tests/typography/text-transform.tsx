import * as TextTransform from "../../templates/typography/text-transform";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(TextTransform).map((key) => {
                const Component = TextTransform[key];
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