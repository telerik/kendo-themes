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

            <span className="k-colspan-all k-col-span-full">Angular scrollview</span>

            <span>Light mode</span>
            <span>Normal</span>
            <span>Dark mode</span>

            <div className="k-widget k-scrollview k-scrollview-light">
                <ul className="k-scrollview-wrap">
                    <li style={{ transform: "translateX(-100%)" }}></li>
                    <li style={{ transform: "translateX(0%)" }}></li>
                    <li style={{ transform: "translateX(100%)" }}></li>
                </ul>
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

            <div className="k-widget k-scrollview">
                <ul className="k-scrollview-wrap">
                    <li style={{ transform: "translateX(-100%)" }}></li>
                    <li style={{ transform: "translateX(0%)" }}></li>
                    <li style={{ transform: "translateX(100%)" }}></li>
                </ul>
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

            <div className="k-widget k-scrollview k-scrollview-dark">
                <ul className="k-scrollview-wrap">
                    <li style={{ transform: "translateX(-100%)" }}></li>
                    <li style={{ transform: "translateX(0%)" }}></li>
                    <li style={{ transform: "translateX(100%)" }}></li>
                </ul>
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

        </div>
    </>
);
