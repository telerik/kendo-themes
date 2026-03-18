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
  /** @aria aria-expanded="true" when popup is visible */
  opened?: boolean;
  /** @aria aria-controls references the popup menu group id */
  popupId?: string;
};

export type KendoSplitButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    arrowIconName: "caret-alt-down"
};

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
                    aria-label="Toggle dropdown"
                    aria-expanded={opened ? 'true' : 'false'}
                    aria-controls={opened ? popupId : undefined}
                    tabIndex={-1}
                    {...(disabled && { 'aria-disabled': 'true' })}
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
 * @ariaSpec
 * SplitButton follows the DropDownButton accessibility specification.
 *
 * - Arrow button: role="button" (implicit), aria-expanded, aria-controls, aria-label, tabIndex={-1}
 * - When disabled: aria-disabled="true"
 * - Popup list: role="list", items: role="listitem"
 */
SplitButton.ariaSpec = {
    selector: '.k-split-button',
    rules: [
        { selector: '.k-split-button-arrow', attribute: 'role=button or nodeName=button', usage: 'Omitted if the <button> DOM element is used.' },
        { selector: '.k-split-button-arrow', attribute: 'aria-label', usage: 'The attribute must be present when no text is initially visible in the button.' },
        { selector: '.k-split-button-arrow', attribute: 'aria-expanded=true/false', usage: 'Announces the state of the popup visibility.' },
        { selector: '.k-split-button-arrow', attribute: 'aria-controls=.k-menu-group id (when open)', usage: 'Points to the popup element. Builds a relationship between the button and the popup.' },
        { selector: '.k-split-button-arrow', attribute: 'tabindex=-1', usage: 'The arrow button is removed from the tab sequence.' },
        { selector: '.k-split-button-arrow.k-disabled', attribute: 'aria-disabled=true', usage: 'Rendered only when the button is disabled.' },
        { selector: '.k-menu-group', attribute: 'role=list', usage: 'Announces the list role of the popup.' },
        { selector: '.k-menu-item', attribute: 'role=listitem', usage: 'Announces the listitem role of the popup items.' },
    ]
};

export default SplitButton;
