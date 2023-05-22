import { classNames } from '../misc';

export const POPUP_CLASSNAME = `k-popup`;

const states = [];

const options = {};

const defaultProps = {};

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
Popup.defaultProps = defaultProps;

export default Popup;
