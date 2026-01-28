import { Icon } from '../icon';
import { classNames, stateClassNames, States} from '../misc';

import { KendoComponent } from '../_types/component';
import { SEGMENTED_CONTROL_BUTTON_FOLDER_NAME, SEGMENTED_CONTROL_BUTTON_MODULE_NAME } from './constants';
export const SEGMENTED_CONTROL_BUTTON_CLASSNAME = `k-segmented-control-button`;

const states = [
    States.selected,
    States.hover,
    States.focus,
    States.disabled,
] as const;

const options = {};

export type KendoSegmentedControlButtonOptions = {};

export type KendoSegmentedControlButtonProps = KendoSegmentedControlButtonOptions & {
  icon?: string;
  text?: string;
  iconClassName?: string;
  children?: string;
};

export type KendoSegmentedControlButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const SegmentedControlButton: KendoComponent<KendoSegmentedControlButtonProps & KendoSegmentedControlButtonState & Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'>> = (
    props: KendoSegmentedControlButtonProps &
        KendoSegmentedControlButtonState &
        Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'>
) => {
    const {
        hover,
        focus,
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
                SEGMENTED_CONTROL_BUTTON_CLASSNAME,
                stateClassNames(SEGMENTED_CONTROL_BUTTON_CLASSNAME, {
                    hover,
                    focus,
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

            {(text || props.children) && (
                <span className="k-segmented-control-button-text">{text || props.children}</span>
            )}
        </button>
    );
};

SegmentedControlButton.states = states;
SegmentedControlButton.options = options;
SegmentedControlButton.className = SEGMENTED_CONTROL_BUTTON_CLASSNAME;
SegmentedControlButton.defaultOptions = defaultOptions;
SegmentedControlButton.moduleName = SEGMENTED_CONTROL_BUTTON_MODULE_NAME;
SegmentedControlButton.folderName = SEGMENTED_CONTROL_BUTTON_FOLDER_NAME;

export default SegmentedControlButton;
