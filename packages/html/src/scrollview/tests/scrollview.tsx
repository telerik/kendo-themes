import { Icon } from '../../icon';


const style = `
    .k-scrollview {
        width: 100%;
        height: 300px;
    }

    .k-scrollview { background: gray !important; }
    .k-scrollview-dark { background: white !important; }
    .k-scrollview-light { background: black !important; }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span className="k-colspan-all k-col-span-full">jQuery scrollview</span>

            <span>Light mode</span>
            <span>Normal</span>
            <span>Dark mode</span>

            <div className="k-scrollview k-scrollview-light">
                <div className="k-scrollview-wrap" style={{ transform: "translateX(0px)" }}>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="k-scrollview-elements">
                    <a className="k-scrollview-prev">
                        <Icon icon="chevron-left" size="xxxlarge"></Icon>
                    </a>
                    <a className="k-scrollview-next">
                        <Icon icon="chevron-right" size="xxxlarge"></Icon>
                    </a>
                    <div className="k-scrollview-nav-wrap">
                        <ul className="k-scrollview-nav">
                            <li className="k-link"></li>
                            <li className="k-link k-primary"></li>
                            <li className="k-link k-primary k-focus"></li>
                            <li className="k-link k-focus"></li>
                            <li className="k-link"></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="k-scrollview">
                <div className="k-scrollview-wrap" style={{ transform: "translateX(0px)" }}>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="k-scrollview-elements">
                    <a className="k-scrollview-prev">
                        <Icon icon="chevron-left" size="xxxlarge"></Icon>
                    </a>
                    <a className="k-scrollview-next">
                        <Icon icon="chevron-right" size="xxxlarge"></Icon>
                    </a>
                    <div className="k-scrollview-nav-wrap">
                        <ul className="k-scrollview-nav">
                            <li className="k-link" style={{ transform: "scale(0.5)" }}></li>
                            <li className="k-link" style={{ transform: "scale(0.65)" }}></li>
                            <li className="k-link" style={{ transform: "scale(0.8)" }}></li>
                            <li className="k-link"></li>
                            <li className="k-link k-primary"></li>
                            <li className="k-link"></li>
                            <li className="k-link" style={{ transform: "scale(0.8)" }}></li>
                            <li className="k-link" style={{ transform: "scale(0.65)" }}></li>
                            <li className="k-link" style={{ transform: "scale(0.5)" }}></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="k-scrollview k-scrollview-dark">
                <div className="k-scrollview-wrap" style={{ transform: "translateX(0px)" }}>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="k-scrollview-elements">
                    <a className="k-scrollview-prev">
                        <Icon icon="chevron-left" size="xxxlarge"></Icon>
                    </a>
                    <a className="k-scrollview-next">
                        <Icon icon="chevron-right" size="xxxlarge"></Icon>
                    </a>
                    <div className="k-scrollview-nav-wrap">
                        <ul className="k-scrollview-nav">
                            <li className="k-link" style={{ transform: "scale(0.5)" }}></li>
                            <li className="k-link" style={{ transform: "scale(0.65)" }}></li>
                            <li className="k-link"></li>
                            <li className="k-link k-primary"></li>
                            <li className="k-link"></li>
                            <li className="k-link" style={{ transform: "scale(0.65)" }}></li>
                            <li className="k-link" style={{ transform: "scale(0.5)" }}></li>
                        </ul>
                    </div>
                </div>
            </div>

            <span>RTL</span>
            <span></span>
            <span></span>

            <div className="k-scrollview k-rtl">
                <div className="k-scrollview-wrap" style={{ transform: "translateX(0px)" }}>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="k-scrollview-elements">
                    <a className="k-scrollview-prev">
                        <Icon icon="chevron-right" size="xxxlarge"></Icon>
                    </a>
                    <a className="k-scrollview-next">
                        <Icon icon="chevron-left" size="xxxlarge"></Icon>
                    </a>
                    <div className="k-scrollview-nav-wrap">
                        <ul className="k-scrollview-nav">
                            <li className="k-link"></li>
                            <li className="k-link k-primary"></li>
                            <li className="k-link k-primary k-focus"></li>
                            <li className="k-link k-focus"></li>
                            <li className="k-link"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
);
