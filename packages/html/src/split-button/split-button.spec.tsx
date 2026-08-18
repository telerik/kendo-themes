import { Button } from '../button';
import { classNames, optionClassNames, States, Size, Roundness, FillMode, ThemeColor } from '../misc';
import { Popup } from '../popup';

import { KendoComponent } from '../_types/component';
import { SPLIT_BUTTON_FOLDER_NAME, SPLIT_BUTTON_MODULE_NAME } from './constants';
export const SPLITBUTTON_CLASSNAME = `k-split-button`;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline, FillMode.clear, FillMode.link ],
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.info,
        ThemeColor.inverse
    ]
};

export type KendoSplitButtonOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoSplitButtonProps = KendoSplitButtonOptions & {
  icon?: string;
  text?: string;
  iconClassName?: string;
  showArrow?: boolean;
  arrowIconName?: string;
  popup?: React.JSX.Element;
  opened?: boolean;
  popupId?: string;
};

export type KendoSplitButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    arrowIconName: "chevron-down"
};

/**
 * @aria {role="button"} Omitted if the <button> DOM element is used.
 * @aria {aria-label} The attribute must be present when no text is initially visible in the button.
 * @aria {tabindex="-1"} The arrow button is removed from the tab sequence.
 * @aria {aria-disabled="true"} Rendered only when the button is disabled.
 * @aria {role="list"} Announces the list role of the popup.
 * @aria {role="listitem"} Announces the listitem role of the popup items.
 * @aria {aria-expanded="true"} when popup is visible
 * @aria {aria-controls} references the popup menu group id
 * @ux {Primary action} The main button area triggers the default action.
 * @ux {Dropdown} The arrow button opens a popup with additional actions.
 * @ux {Disabled state} When disabled, both the main button and dropdown are non-interactive.
 */
export const SplitButton: KendoComponent<KendoSplitButtonProps & KendoSplitButtonState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoSplitButtonProps &
        KendoSplitButtonState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        rounded,
        fillMode,
        themeColor,
        hover,
        focus,
        active,
        selected,
        disabled,
        icon,
        text,
        arrowIconName = defaultOptions.arrowIconName,
        popup,
        opened,
        popupId,
        ...other
    } = props;

    return (
        <>
            <div
                {...other}
                className={classNames(
                    props.className,
                    SPLITBUTTON_CLASSNAME,
                    'k-button-group',
                    optionClassNames(SPLITBUTTON_CLASSNAME, {
                        rounded,
                    })
                )}>
                <Button
                    text={text}
                    icon={icon}
                    size={size}
                    rounded={rounded}
                    fillMode={fillMode}
                    themeColor={themeColor}
                    hover={hover}
                    focus={focus}
                    active={active}
                    selected={selected}
                    disabled={disabled}
                    {...(!text && !props.children && icon && { 'aria-label': 'Action' })}
                >
                    {props.children}
                </Button>
                <Button
                    className="k-split-button-arrow"
                    icon={arrowIconName}
                    size={size}
                    rounded={rounded}
                    fillMode={fillMode}
                    disabled={disabled}
                    ariaDisabled={disabled || undefined}
                    aria-label="Toggle dropdown"
                    aria-expanded={opened ? 'true' : 'false'}
                    aria-controls={opened ? popupId : undefined}
                    tabIndex={-1}
                >
                </Button>
            </div>
            { opened && popup &&
                <Popup className="k-menu-popup">
                    {popup}
                </Popup>
            }
        </>
    );
};

SplitButton.states = states;
SplitButton.options = options;
SplitButton.className = SPLITBUTTON_CLASSNAME;
SplitButton.defaultOptions = defaultOptions;
SplitButton.moduleName = SPLIT_BUTTON_MODULE_NAME;
SplitButton.folderName = SPLIT_BUTTON_FOLDER_NAME;

/**
 * @keyboard {Enter} Clicks (activates) the main button action.
 * @keyboard {Space} Clicks (activates) the main button action.
 */

export default SplitButton;
