import { Icon } from '../../icon';

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
                <div className="k-dock-indicator">
                    <Icon icon="position-top" size="xlarge" />
                </div>
                <div className="k-dock-indicator k-hover">
                    <Icon icon="position-top" size="xlarge" />
                </div>
                <div className="k-dock-indicator k-disabled">
                    <Icon icon="position-top" size="xlarge" />
                </div>
            </section>

            <section className="k-col-span-1">
                <div className="k-dock-navigator" style={{ position: "relative" }}>
                    <div className="k-dock-indicator k-dock-indicator-top">
                        <Icon icon="position-top" size="xlarge" />
                    </div>
                    <div className="k-dock-indicator k-dock-indicator-right">
                        <Icon icon="position-right" size="xlarge" />
                    </div>
                    <div className="k-dock-indicator k-dock-indicator-bottom">
                        <Icon icon="position-bottom" size="xlarge" />
                    </div>
                    <div className="k-dock-indicator k-dock-indicator-left">
                        <Icon icon="position-left" size="xlarge" />
                    </div>
                    <div className="k-dock-indicator k-dock-indicator-middle">
                        <Icon icon="window" size="xlarge" />
                    </div>
                </div>
                <div style={{ position: "relative", width: "200px", height: "100px" }}>
                    <div className="k-docking-preview">Droppping Area</div>
                </div>
            </section>
        </div>
    </>
);
