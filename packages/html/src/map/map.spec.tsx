import { Navigator, ZoomControl } from '.';
import { Icon } from '../icon';
import { classNames } from '../misc';

export const MAP_CLASSNAME = `k-map`;

const states = [];

const options = {};

export type KendoMapProps = {
    attribution?: JSX.Element;
    markerStyle?: React.CSSProperties;
    scrollContainerStyle?: React.CSSProperties;
    horizontalScrollbarStyle?: React.CSSProperties;
    verticalScrollbarStyle?: React.CSSProperties;
};

export type KendoMapState = { [K in (typeof states)[number]]?: boolean };

const defaultAttribution = (
    <>
        &copy; <a href="#">Attribution</a>
    </>
);

const defaultProps = {
    attribution: defaultAttribution,
    markerStyle: { zIndex: "1000", left: "500px", top: "300px" },
    scrollContainerStyle: { transformOrigin: "left top 0px" },
    horizontalScrollbarStyle: { transformOrigin: "left top 0px", width: "24px" },
    verticalScrollbarStyle: { transformOrigin: "left top 0px", height: "239px" }
};

export const Map = (
    props: KendoMapProps &
        KendoMapState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        attribution = defaultProps.attribution,
        markerStyle,
        scrollContainerStyle,
        horizontalScrollbarStyle,
        verticalScrollbarStyle,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                MAP_CLASSNAME
            )}
        >
            <div className="km-scroll-wrapper" style={{ overflow: 'hidden' }}>
                <div className="km-scroll-header"></div>
                <div className="km-scroll-container" style={scrollContainerStyle}>
                    <div className="k-layer" style={{ zIndex: "1000" }}>
                        <Icon className="k-marker" icon="map-marker-target" size="xxlarge" style={markerStyle} />
                    </div>
                    <div className="k-layer">
                        {children}
                    </div>
                </div>
                <div className="km-touch-scrollbar km-horizontal-scrollbar" style={horizontalScrollbarStyle}></div>
                <div className="km-touch-scrollbar km-vertical-scrollbar" style={verticalScrollbarStyle}></div>
            </div>
            <div className="k-map-controls k-pos-bottom k-pos-right">
                <div className="k-attribution">{attribution}</div>
            </div>
            <div className="k-map-controls k-pos-top k-pos-left">
                <Navigator />
                <ZoomControl />
            </div>
        </div>
    );
};

Map.states = states;
Map.options = options;
Map.className = MAP_CLASSNAME;
Map.defaultProps = defaultProps;

export default Map;
