import { classNames } from '../misc';

export const ANIMATION_CONTAINER_CLASSNAME = `k-animation-container`;

const states = [];

const options = {};

export type KendoAnimationContainerProps = {
    positionMode?: "absolute" | "fixed";
    offset?: {
        top: number | string;
        left: number | string;
    };
    animationStyle?: React.CSSProperties;
};

const defaultOptions = {
    positionMode: "absolute"
};

export const AnimationContainer = (
    props:
        KendoAnimationContainerProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        positionMode = defaultOptions.positionMode,
        animationStyle,
        offset,
        ...other
    } = props;


    return (
        <div
            {...other}
            style={{ ...offset, ...props.style }}
            className={classNames(
                ANIMATION_CONTAINER_CLASSNAME,
                "k-animation-container-shown",
                {
                    ["k-animation-container-fixed"]: positionMode === "fixed"
                }
            )}
        >
            <div className="k-child-animation-container" style={animationStyle}>
                {props.children}
            </div>
        </div>
    );
};

AnimationContainer.states = states;
AnimationContainer.options = options;
AnimationContainer.className = ANIMATION_CONTAINER_CLASSNAME;
AnimationContainer.defaultOptions = defaultOptions;

export default AnimationContainer;
