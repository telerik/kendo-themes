import * as Columns from "../../templates/layout/columns";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Columns).map((key) => {
                const Component = Columns[key];
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