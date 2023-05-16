import { classNames } from '../misc';
import { AnimationContainer } from '../animation-container';

export const POPUP_CLASSNAME = `k-popup`;

const states = [];

const options = {};

export type KendoPopupProps = {
    positionMode: "absolute" | "fixed";
    offset?: {
        top: number | string;
        left: number | string;
    };
};

const defaultProps = {
    positionMode: "absolute"
};

export const Popup = (
    props:
        KendoPopupProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        offset,
        positionMode,
        ...other
    } = props;


    return (
        <AnimationContainer
            positionMode={positionMode}
            offset={offset}
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
Popup.defaultProps = defaultProps;

export default Popup;
