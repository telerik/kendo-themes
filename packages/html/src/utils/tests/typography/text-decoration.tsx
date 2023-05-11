import * as TextDecoration from "../../templates/typography/text-decoration";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(TextDecoration).map((key) => {
                const Component = TextDecoration[key];
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