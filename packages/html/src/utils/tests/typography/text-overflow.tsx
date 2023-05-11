import * as TextOverflow from "../../templates/typography/text-overflow";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(TextOverflow).map((key) => {
                const Component = TextOverflow[key];
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