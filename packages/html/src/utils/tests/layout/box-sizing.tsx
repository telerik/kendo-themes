import * as BoxSizing from "../../templates/layout/box-sizing";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(BoxSizing).map((key) => {
                const Component = BoxSizing[key];
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