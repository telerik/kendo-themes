import * as ListStyleType from "../../templates/typography/list-style-type";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(ListStyleType).map((key) => {
                const Component = ListStyleType[key];
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