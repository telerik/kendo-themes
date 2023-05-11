import * as VerticalAlign from "../../templates/typography/vertical-align";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(VerticalAlign).map((key) => {
                const Component = VerticalAlign[key];
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