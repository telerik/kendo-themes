import * as Cursor from "../../templates/interactivity/cursor";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Cursor).map((key) => {
                const Component = Cursor[key];
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