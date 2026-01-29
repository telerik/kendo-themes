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
        ThemeColor.light,
        ThemeColor.dark,
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
    id?: string;
  icon?: string;
  text?: string;
  iconClassName?: string;
  showArrow?: boolean;
  arrowIconName?: string;
  popup?: React.JSX.Element;
  opened?: boolean;
    menuButtonAriaLabel?: string;
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
        id = 'split-button',
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
        menuButtonAriaLabel,
        'aria-label': ariaLabel,
        ...other
    } = props;

    const menuId = `${id}-menu`;
    const textLabel = text || (typeof props.children === 'string' ? props.children : undefined);
    const resolvedMenuButtonAriaLabel = menuButtonAriaLabel || (textLabel ? `Split button menu, ${textLabel}` : 'Split button menu');
    const menuButtonStyle = size === Size.small ? { minWidth: '24px', minHeight: '24px' } : undefined;

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
                    aria-label={ariaLabel}
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
                >
                    {props.children}
                </Button>
                <Button
                    className={classNames("k-split-button-arrow", "k-menu-button")}
                    aria-label={resolvedMenuButtonAriaLabel}
                    aria-expanded={opened ? 'true' : 'false'}
                    aria-controls={menuId}
                    aria-disabled={disabled ? 'true' : undefined}
                    style={menuButtonStyle}
                    icon={arrowIconName}
                    size={size}
                    rounded={rounded}
                    fillMode={fillMode}
                    disabled={disabled}
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

export default SplitButton;
