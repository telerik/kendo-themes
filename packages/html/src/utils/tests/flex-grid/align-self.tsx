import * as AlignSelf from "../../templates/flex-grid/align-self";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(AlignSelf).map((key) => {
                const Component = AlignSelf[key];
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