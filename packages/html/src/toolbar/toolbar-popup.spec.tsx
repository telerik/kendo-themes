import { classNames, optionClassNames, Size } from '../misc';
import { Popup } from '../popup';

export const TOOLBARPOPUP_CLASSNAME = `k-toolbar-popup`;

const states = [];

const options = {
    size: [Size.small, Size.medium, Size.large],
};

export type KendoToolbarPopupProps = {
    size?: (typeof options.size)[number] | null;
    section?: boolean;
};

const defaultOptions = {
    size: Size.medium,
};

export const ToolbarPopup = (
    props: KendoToolbarPopupProps &
    React.HTMLAttributes<HTMLElement>
) => {

    const {
        size=defaultOptions.size,
        section,
        ...other
    } = props;

    return (
        <Popup
            {...other}
            className={classNames(
                props.className,
                TOOLBARPOPUP_CLASSNAME,
                optionClassNames(TOOLBARPOPUP_CLASSNAME, {
                    size
                })
            )}>
             {section
                ? <span className='k-toolbar-items'>{props.children}</span>
                : props.children
            }

        </Popup>
    );
};

ToolbarPopup.states = states;
ToolbarPopup.options = options;
ToolbarPopup.className = TOOLBARPOPUP_CLASSNAME;
ToolbarPopup.defaultOptions = defaultOptions;

export default ToolbarPopup;
