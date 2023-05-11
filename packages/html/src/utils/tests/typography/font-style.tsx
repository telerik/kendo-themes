import * as FontStyle from "../../templates/typography/font-style";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(FontStyle).map((key) => {
                const Component = FontStyle[key];
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