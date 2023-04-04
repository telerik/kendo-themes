import { classNames } from '../utils';

export const POPUP_CLASSNAME = `k-popup`;

const states = [];

const options = {};

export const Popup = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;


    return (
        <div {...other} className={classNames(props.className, POPUP_CLASSNAME)}>
            {props.children}
        </div>
    );
};

Popup.states = states;
Popup.options = options;
Popup.className = POPUP_CLASSNAME;

export default Popup;
