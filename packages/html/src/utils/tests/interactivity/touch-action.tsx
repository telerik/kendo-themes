import * as TouchAction from "../../templates/interactivity/touch-action";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(TouchAction).map((key) => {
                const Component = TouchAction[key];
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