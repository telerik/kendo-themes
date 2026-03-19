const options = {};
const states = [];
const variants = [];
const defaults = {};
const modifiers = [];

export const ChartDemo = () => {
    return (
        <div className="k-chart" style={{ position: "relative", width: "660px", height: "400px" }}>
            <div
                className="k-chart-surface"
                tabIndex={0}
                role="graphics-document document"
                aria-roledescription="Units sold"
                style={{ position: "relative", touchAction: "none" }}
            >
                {areaChartSVG}
            </div>
        </div>
    );
}

const areaChartSVG: React.ReactElement = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            left: "-0.999998px",
            top: "-0.999998px"
        }}
    >
        <defs>
            <clipPath clipRule="evenodd" id="kdef108">
                <path
                    d="M34.5 50.5 L 648.5 50.5 648.5 347.5 34.5 347.5Z"
                    stroke="#000"
                    strokeLinejoin="miter"
                    fill="none"
                ></path>
            </clipPath>
        </defs>
        <g>
            <path
                d="M0 0 L 660 0 660 400 0 400Z"
                stroke="none"
                fill="rgb(255, 255, 255)"
            ></path>
            <path
                d="M34 49.5 L 647.5 49.5 647.5 347 34 347Z"
                stroke="none"
                fill="#fff"
                fillOpacity={0}
            ></path>
            <g>
                <g>
                    <path
                        d="M136.5 50.5 L 136.5 347.5"
                        stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                        strokeWidth={1}
                        fill="none"
                    ></path>
                    <path
                        d="M239.5 50.5 L 239.5 347.5"
                        stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                        strokeWidth={1}
                        fill="none"
                    ></path>
                    <path
                        d="M341.5 50.5 L 341.5 347.5"
                        stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                        strokeWidth={1}
                        fill="none"
                    ></path>
                    <path
                        d="M443.5 50.5 L 443.5 347.5"
                        stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                        strokeWidth={1}
                        fill="none"
                    ></path>
                    <path
                        d="M545.5 50.5 L 545.5 347.5"
                        stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                        strokeWidth={1}
                        fill="none"
                    ></path>
                    <path
                        d="M648.5 50.5 L 648.5 347.5"
                        stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                        strokeWidth={1}
                        fill="none"
                    ></path>
                </g>
                <g>
                    <path
                        d="M34.5 305.5 L 648.5 305.5"
                        stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                        strokeWidth={1}
                        fill="none"
                    ></path>
                    <path
                        d="M34.5 262.5 L 648.5 262.5"
                        stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                        strokeWidth={1}
                        fill="none"
                    ></path>
                    <path
                        d="M34.5 220.5 L 648.5 220.5"
                        stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                        strokeWidth={1}
                        fill="none"
                    ></path>
                    <path
                        d="M34.5 177.5 L 648.5 177.5"
                        stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                        strokeWidth={1}
                        fill="none"
                    ></path>
                    <path
                        d="M34.5 135.5 L 648.5 135.5"
                        stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                        strokeWidth={1}
                        fill="none"
                    ></path>
                    <path
                        d="M34.5 92.5 L 648.5 92.5"
                        stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                        strokeWidth={1}
                        fill="none"
                    ></path>
                    <path
                        d="M34.5 50.5 L 648.5 50.5"
                        stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                        strokeWidth={1}
                        fill="none"
                    ></path>
                </g>
                <g>
                    <g>
                        <g>
                            <path
                                d="M34.5 347.5 L 648.5 347.5"
                                stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                                strokeWidth={1}
                                fill="none"
                            ></path>
                            <path
                                d="M34.5 347.5 L 34.5 351.5"
                                stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                                strokeWidth={1}
                                fill="none"
                            ></path>
                            <path
                                d="M136.5 347.5 L 136.5 351.5"
                                stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                                strokeWidth={1}
                                fill="none"
                            ></path>
                            <path
                                d="M239.5 347.5 L 239.5 351.5"
                                stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                                strokeWidth={1}
                                fill="none"
                            ></path>
                            <path
                                d="M341.5 347.5 L 341.5 351.5"
                                stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                                strokeWidth={1}
                                fill="none"
                            ></path>
                            <path
                                d="M443.5 347.5 L 443.5 351.5"
                                stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                                strokeWidth={1}
                                fill="none"
                            ></path>
                            <path
                                d="M545.5 347.5 L 545.5 351.5"
                                stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                                strokeWidth={1}
                                fill="none"
                            ></path>
                            <path
                                d="M648.5 347.5 L 648.5 351.5"
                                stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                                strokeWidth={1}
                                fill="none"
                            ></path>
                        </g>
                    </g>
                </g>
                <g clipPath="url(#kdef108)">
                    <g>
                        <g>
                            <path
                                d="M34 242.45 L 136.25 112.4 238.5 83.5 340.75 166.8 443 143 545.25 214.4 647.5 263.7 647.5 347 34 347"
                                stroke="none"
                                fill="rgb(18, 116, 172)"
                                fillOpacity="0.6"
                            ></path>
                        </g>
                        <g>
                            <path
                                d="M34 206.75 L 136.25 168.5 238.5 103.05 340.75 224.6 443 185.5 545.25 205.05 647.5 166.8 647.5 347 34 347"
                                stroke="none"
                                fill="rgb(255, 225, 98)"
                                fillOpacity="0.6"
                            ></path>
                        </g>
                        <g>
                            <path
                                d="M34 299.4 L 136.25 228 238.5 181.25 340.75 307.9 443 242.45 545.25 280.7 647.5 266.25 647.5 347 34 347"
                                stroke="none"
                                fill="rgb(76, 209, 128)"
                                fillOpacity="0.6"
                            ></path>
                        </g>
                    </g>
                </g>
                <g>
                    <text
                        x="318.25"
                        y={387}
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 14px sans-serif", whiteSpace: "pre" }}
                    >
                        Months
                    </text>
                </g>
                <g>
                    <text
                        x="24.5"
                        y={367}
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        Jan
                    </text>
                </g>
                <g>
                    <text
                        x="125.75"
                        y={367}
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        Feb
                    </text>
                </g>
                <g>
                    <text
                        x={228}
                        y={367}
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        Mar
                    </text>
                </g>
                <g>
                    <text
                        x="331.25"
                        y={367}
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        Apr
                    </text>
                </g>
                <g>
                    <text
                        x="431.5"
                        y={367}
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        May
                    </text>
                </g>
                <g>
                    <text
                        x="535.75"
                        y={367}
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        Jun
                    </text>
                </g>
                <g>
                    <text
                        x={640}
                        y={367}
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        Jul
                    </text>
                </g>
                <g>
                    <g>
                        <path
                            d="M34.5 50.5 L 34.5 347.5"
                            stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                            strokeWidth={1}
                            fill="none"
                        ></path>
                        <path
                            d="M30.5 347.5 L 34.5 347.5"
                            stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                            strokeWidth={1}
                            fill="none"
                        ></path>
                        <path
                            d="M30.5 305.5 L 34.5 305.5"
                            stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                            strokeWidth={1}
                            fill="none"
                        ></path>
                        <path
                            d="M30.5 262.5 L 34.5 262.5"
                            stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                            strokeWidth={1}
                            fill="none"
                        ></path>
                        <path
                            d="M30.5 220.5 L 34.5 220.5"
                            stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                            strokeWidth={1}
                            fill="none"
                        ></path>
                        <path
                            d="M30.5 177.5 L 34.5 177.5"
                            stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                            strokeWidth={1}
                            fill="none"
                        ></path>
                        <path
                            d="M30.5 135.5 L 34.5 135.5"
                            stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                            strokeWidth={1}
                            fill="none"
                        ></path>
                        <path
                            d="M30.5 92.5 L 34.5 92.5"
                            stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                            strokeWidth={1}
                            fill="none"
                        ></path>
                        <path
                            d="M30.5 50.5 L 34.5 50.5"
                            stroke="color(srgb 0.258824 0.258824 0.258824 / 0.08)"
                            strokeWidth={1}
                            fill="none"
                        ></path>
                    </g>
                </g>
                <g>
                    <text
                        x={18}
                        y="351.5"
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        0
                    </text>
                </g>
                <g>
                    <text
                        x={12}
                        y={309}
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        50
                    </text>
                </g>
                <g>
                    <text
                        x={5}
                        y="266.5"
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        100
                    </text>
                </g>
                <g>
                    <text
                        x={5}
                        y={224}
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        150
                    </text>
                </g>
                <g>
                    <text
                        x={5}
                        y="181.5"
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        200
                    </text>
                </g>
                <g>
                    <text
                        x={5}
                        y={139}
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        250
                    </text>
                </g>
                <g>
                    <text
                        x={5}
                        y="96.5"
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        300
                    </text>
                </g>
                <g>
                    <text
                        x={5}
                        y={54}
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 11.998px sans-serif", whiteSpace: "pre" }}
                    >
                        350
                    </text>
                </g>
            </g>
            <g>
                <g>
                    <text
                        x={295}
                        y={29}
                        stroke="none"
                        fill="rgb(66, 66, 66)"
                        fillOpacity={1}
                        style={{ font: "400 16.002px sans-serif", whiteSpace: "pre" }}
                    >
                        Units sold
                    </text>
                </g>
            </g>
            <g></g>
        </g>
    </svg>
);


ChartDemo.options = options;
ChartDemo.states = states;
ChartDemo.variants = variants;
ChartDemo.defaultOptions = defaults;
ChartDemo.modifiers = modifiers;

export default ChartDemo;

