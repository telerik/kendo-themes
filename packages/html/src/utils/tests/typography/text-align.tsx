import * as TextAlign from "../../templates/typography/text-align";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(TextAlign).map((key) => {
                const Component = TextAlign[key];
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