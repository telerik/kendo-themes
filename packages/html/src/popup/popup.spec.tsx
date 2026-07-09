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
    /**
     * Class name for the animation container (e.g., "k-combobox-popup-container").
     * Used when popup is appended to body and needs a landmark role.
     */
    containerClassName?: string;
    /**
     * Role for the animation container. Use "region" when appended to body.
     */
    containerRole?: string;
    /**
     * Aria label for the animation container when it has role="region".
     */
    containerAriaLabel?: string;
};

const defaultOptions = {
    positionMode: "absolute"
} as const;

/**
 * @aria {role="region"} Required when popup container is appended to document body
 * @aria {aria-label} Required when container has role="region"
 */
export const Popup: KendoComponent<KendoPopupProps & React.HTMLAttributes<HTMLDivElement>> = (
    props:
        KendoPopupProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        offset,
        positionMode = defaultOptions.positionMode,
        animationStyle,
        containerClassName,
        containerRole,
        containerAriaLabel,
        ...other
    } = props;

    return (
        <AnimationContainer
            positionMode={positionMode}
            offset={offset}
            animationStyle={animationStyle}
            className={containerClassName}
            role={containerRole}
            aria-label={containerAriaLabel}
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
