import * as JustifyContent from "../../templates/flex-grid/justify-content";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(JustifyContent).map((key) => {
                const Component = JustifyContent[key];
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