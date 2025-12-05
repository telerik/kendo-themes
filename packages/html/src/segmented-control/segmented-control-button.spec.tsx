import { Icon } from '../icon';
import { classNames, stateClassNames, variantClassNames, States} from '../misc';

import { KendoComponent } from '../_types/component';
import { SEGMENTEDCONTROLBUTTON_FOLDER_NAME, SEGMENTEDCONTROLBUTTON_MODULE_NAME } from './constants';
export const SEGMENTEDCONTROLBUTTON_CLASSNAME = `k-segmented-control-button`;

const SEGMENTEDCONTROLBUTTON_VARIANTS = ["icon-button"] as const;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled,
] as const;

const options = {};

export type KendoSegmentedControlButtonOptions = {
  variant?: (typeof SEGMENTEDCONTROLBUTTON_VARIANTS)[number] | null;
};

export type KendoSegmentedControlButtonProps = KendoSegmentedControlButtonOptions & {
  icon?: string;
  text?: string;
  iconClassName?: string;
  showArrow?: boolean;
  arrowIconName?: string;
};

export type KendoSegmentedControlButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const SegmentedControlButton: KendoComponent<KendoSegmentedControlButtonProps & KendoSegmentedControlButtonState & React.HTMLAttributes<HTMLButtonElement>> = (
    props: KendoSegmentedControlButtonProps &
        KendoSegmentedControlButtonState &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        variant,
        hover,
        focus,
        active,
        selected,
        disabled,
        icon,
        text,
        iconClassName,
        ...other
    } = props;

    return (
        <button
            {...other}
            className={classNames(
                props.className,
                SEGMENTEDCONTROLBUTTON_CLASSNAME,
                variantClassNames(SEGMENTEDCONTROLBUTTON_CLASSNAME, variant),
                stateClassNames(SEGMENTEDCONTROLBUTTON_CLASSNAME, {
                    hover,
                    focus,
                    active,
                    disabled,
                    selected,
                }),
            )}
        >
            {icon && (
                <Icon
                    className={classNames(iconClassName, 'k-segmented-control-button-icon')}
                    icon= {icon}
                />
            )}

            {text
                ?
                <>
                    {text && <span className="k-segmented-control-button-text">{text}</span>}
                    {props.children}
                </>
                : props.children && <span className="k-segmented-control-button-text">{props.children}</span>
            }
        </button>
    );
};

SegmentedControlButton.states = states;
SegmentedControlButton.options = options;
SegmentedControlButton.variants = SEGMENTEDCONTROLBUTTON_VARIANTS;
SegmentedControlButton.className = SEGMENTEDCONTROLBUTTON_CLASSNAME;
SegmentedControlButton.defaultOptions = defaultOptions;
SegmentedControlButton.moduleName = SEGMENTEDCONTROLBUTTON_MODULE_NAME;
SegmentedControlButton.folderName = SEGMENTEDCONTROLBUTTON_FOLDER_NAME;

export default SegmentedControlButton;
