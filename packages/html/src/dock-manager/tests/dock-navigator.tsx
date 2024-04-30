import { DockNavigator, DockIndicator } from '..';

const styles = `

section {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
}
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <section className="k-col-span-1" style={{ gap: "30px" }} >
                <span>Normal</span>
                <span>Hover</span>
                <span>Disabled</span>
            </section>

            <section className="k-col-span-1">
                {[ "normal", ...DockIndicator.states ].map((state) =>(
                    <DockIndicator position="top" {...{ [state]: true }} />
                ))}
            </section>

            <section className="k-col-span-1">
                <DockNavigator style={{ position: "relative" }} />
                <div style={{ position: "relative", width: "200px", height: "100px" }}>
                    <div className="k-docking-preview">Droppping Area</div>
                </div>
            </section>
        </div>
    </>
);
