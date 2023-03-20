import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-map .k-layer:last-child {
        background-color: #f0f0f0;
        top: 0; right: 0; bottom: 0; left: 0;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area">

            <div id="map" className="k-map" style={{ position: "relative" }}>
                <div className="km-widget km-scroll-wrapper" style={{ overflow: 'hidden' }}>
                    <div className="km-scroll-header"></div>
                    <div className="km-scroll-container" style={{ transformOrigin: "left top 0px" }}>
                        <div className="k-layer" style={{ zIndex: "1000" }}>
                            <Icon className="k-marker" name="map-marker-target" style={{ zIndex: "1000", left: "500px", top: "300px" }} />
                        </div>
                        <div className="k-layer"></div>
                    </div>
                    <div className="km-touch-scrollbar km-horizontal-scrollbar" style={{ transformOrigin: "left top 0px", width: "24px" }}></div>
                    <div className="km-touch-scrollbar km-vertical-scrollbar" style={{ transformOrigin: "left top 0px", height: "239px" }}></div>
                </div>
                <div className="k-map-controls k-pos-bottom k-pos-right">
                    <div className="k-widget k-attribution" style={{ display: "block" }}>&copy; <a href="http://example.com/">Attribution</a></div>
                </div>
                <div className="k-map-controls k-pos-top k-pos-left">
                    <div className="k-widget k-navigator">
                        <Button className="k-navigator-n" icon="caret-alt-up" fillMode="flat" rounded="full" size={null}></Button>
                        <Button className="k-navigator-e" icon="caret-alt-right" fillMode="flat" rounded="full" size={null}></Button>
                        <Button className="k-navigator-s" icon="caret-alt-down" fillMode="flat" rounded="full" size={null}></Button>
                        <Button className="k-navigator-w" icon="caret-alt-left" fillMode="flat" rounded="full" size={null}></Button>
                    </div>
                    <div className="k-widget k-zoom-control k-button-group k-group-horizontal">
                        <Button icon="plus" className="k-zoom-in"></Button>
                        <Button icon="minus" className="k-zoom-out"></Button>
                    </div>
                </div>
            </div>

        </div>
    </>
);
