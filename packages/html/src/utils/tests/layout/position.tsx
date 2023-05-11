import * as Position from "../../templates/layout/position";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Position).map((key) => {
                const Component = Position[key];
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