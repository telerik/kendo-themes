import * as FontWeight from "../../templates/typography/font-weight";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(FontWeight).map((key) => {
                const Component = FontWeight[key];
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