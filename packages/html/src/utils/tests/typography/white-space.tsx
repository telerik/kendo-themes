import * as WhiteSpace from "../../templates/typography/white-space";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(WhiteSpace).map((key) => {
                const Component = WhiteSpace[key];
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