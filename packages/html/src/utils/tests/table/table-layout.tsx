import * as TableLayout from "../../templates/table/table-layout";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(TableLayout).map((key) => {
                const Component = TableLayout[key];
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