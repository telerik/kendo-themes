import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { ANIMATION_CONTAINER_FOLDER_NAME, ANIMATION_CONTAINER_MODULE_NAME } from './constants';
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
    role?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
};

const defaultOptions = {
    positionMode: "absolute"
};

export const AnimationContainer: KendoComponent<KendoAnimationContainerProps & React.HTMLAttributes<HTMLDivElement>> = (
    props:
        KendoAnimationContainerProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        positionMode = defaultOptions.positionMode,
        animationStyle,
        offset,
        role,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        ...other
    } = props;


    return (
        <div
            {...other}
            style={{ ...offset, ...props.style }}
            className={classNames(
                props.className,
                ANIMATION_CONTAINER_CLASSNAME,
                "k-animation-container-shown",
                {
                    ["k-animation-container-fixed"]: positionMode === "fixed"
                }
            )}
            {...(role && { role })}
            {...(ariaLabel && { 'aria-label': ariaLabel })}
            {...(ariaLabelledby && { 'aria-labelledby': ariaLabelledby })}
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
AnimationContainer.moduleName = ANIMATION_CONTAINER_MODULE_NAME;
AnimationContainer.folderName = ANIMATION_CONTAINER_FOLDER_NAME;

export default AnimationContainer;
