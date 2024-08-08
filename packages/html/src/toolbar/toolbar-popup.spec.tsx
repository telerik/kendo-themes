import { classNames } from '../misc';
import { Popup } from '../popup';

export const TOOLBARPOPUP_CLASSNAME = `k-toolbar-popup`;

const states = [];

const options = {};

const defaultOptions = {};

export const ToolbarPopup = (
    props: React.HTMLAttributes<HTMLElement>
) => {

    const { ...other } = props;

    return (
        <Popup
            {...other}
            className={classNames(
                props.className,
                TOOLBARPOPUP_CLASSNAME,
            )}>
            {props.children}
        </Popup>
    );
};

ToolbarPopup.states = states;
ToolbarPopup.options = options;
ToolbarPopup.className = TOOLBARPOPUP_CLASSNAME;
ToolbarPopup.defaultOptions = defaultOptions;

export default ToolbarPopup;
