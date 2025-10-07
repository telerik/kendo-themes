import { classNames } from '../misc';
import { AnimationContainer } from '../animation-container';

import { KendoComponent } from '../_types/component';
import { POPUP_FOLDER_NAME, POPUP_MODULE_NAME } from './constants';
export const POPUP_CLASSNAME = `k-popup`;

const states = [];

const options = {};

export type KendoPopupProps = {
    positionMode?: "absolute" | "fixed";
    offset?: {
        top: number | string;
        left: number | string;
    };
    animationStyle?: React.CSSProperties;
};

const defaultOptions = {
    positionMode: "absolute"
} as const;

export const Popup: KendoComponent<KendoPopupProps & React.HTMLAttributes<HTMLDivElement>> = (
    props:
        KendoPopupProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        offset,
        positionMode = defaultOptions.positionMode,
        animationStyle,
        ...other
    } = props;


    return (
        <AnimationContainer
            positionMode={positionMode}
            offset={offset}
            animationStyle={animationStyle}
        >
            <div {...other} className={classNames(props.className, POPUP_CLASSNAME)}>
                {props.children}
            </div>
        </AnimationContainer>
    );
};

Popup.states = states;
Popup.options = options;
Popup.className = POPUP_CLASSNAME;
Popup.defaultOptions = defaultOptions;
Popup.moduleName = POPUP_MODULE_NAME;
Popup.folderName = POPUP_FOLDER_NAME;

export default Popup;
