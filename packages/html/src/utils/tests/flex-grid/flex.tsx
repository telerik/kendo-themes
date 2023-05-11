import * as Flex from "../../templates/flex-grid/flex";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(Flex).map((key) => {
                const Component = Flex[key];
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