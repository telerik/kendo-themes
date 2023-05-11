import * as Order from "../../templates/flex-grid/order";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Order).map((key) => {
                const Component = Order[key];
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