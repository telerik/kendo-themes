import * as UserSelect from "../../templates/interactivity/user-select";

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            {Object.keys(UserSelect).map((key) => {
                const Component = UserSelect[key];
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