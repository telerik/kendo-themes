import { classNames, optionClassNames, Size, FillMode } from '../misc';
import { Popup } from '../popup';

export const TOOLBARPOPUP_CLASSNAME = `k-toolbar-popup`;

const states = [];

const options = {
    size: [Size.small, Size.medium, Size.large],
    fillMode: [FillMode.solid, FillMode.outline, FillMode.flat ]
};

export type KendoToolbarPopupOptions = {
    size?: (typeof options.size)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoToolbarPopupProps = KendoToolbarPopupOptions & {
    section?: boolean;
};

const defaultOptions = {
    size: Size.medium,
    fillMode: FillMode.solid
};

export const ToolbarPopup = (
    props: KendoToolbarPopupProps &
    React.HTMLAttributes<HTMLElement>
) => {

    const {
        size=defaultOptions.size,
        fillMode=defaultOptions.fillMode,
        section,
        ...other
    } = props;

    return (
        <Popup
            {...other}
            className={classNames(
                props.className,
                TOOLBARPOPUP_CLASSNAME
            )}>
             {section
                ? <span className={classNames(
                    'k-toolbar-items-list',
                    optionClassNames('k-toolbar-items-list', {
                        size,
                        fillMode
                    })
                )}>{props.children}</span>
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
