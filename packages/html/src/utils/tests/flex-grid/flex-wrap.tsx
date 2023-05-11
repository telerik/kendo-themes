import * as FlexWrap from "../../templates/flex-grid/flex-wrap";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(FlexWrap).map((key) => {
                const Component = FlexWrap[key];
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