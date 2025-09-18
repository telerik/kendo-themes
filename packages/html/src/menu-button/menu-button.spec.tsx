import { Button } from '../button';
import { classNames, States, Size, Roundness, FillMode, ThemeColor } from '../misc';
import { Popup } from '../popup';

import { KendoComponent } from '../_types/component';
import { MENU_BUTTON_FOLDER_NAME, MENU_BUTTON_MODULE_NAME } from './constants';
export const MENUBUTTON_CLASSNAME = `k-menu-button`;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline, FillMode.clear, FillMode.link ],
    themeColor: [
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

export type KendoMenuButtonOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoMenuButtonProps = KendoMenuButtonOptions & {
  icon?: string;
  text?: string;
  showArrow?: boolean;
  arrowIconName?: string;
  popup?: React.JSX.Element;
  opened?: boolean;
};

export type KendoMenuButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Size.medium,
    rounded: Roundness.medium,
    fillMode: FillMode.solid,
    themeColor: ThemeColor.base,
    showArrow: true,
    arrowIconName: "caret-alt-down"
};

export const MenuButton: KendoComponent<KendoMenuButtonProps & KendoMenuButtonState & React.HTMLAttributes<HTMLButtonElement>> = (
    props: KendoMenuButtonProps &
        KendoMenuButtonState &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        size = defaultOptions.size,
        rounded = defaultOptions.rounded,
        fillMode = defaultOptions.fillMode,
        themeColor = defaultOptions.themeColor,
        hover,
        focus,
        active,
        selected,
        disabled,
        icon,
        text,
        showArrow = defaultOptions.showArrow,
        arrowIconName = defaultOptions.arrowIconName,
        popup,
        opened,
        ...other
    } = props;

    return (
        <>
            <Button
                {...other}
                className={classNames(
                    props.className,
                    MENUBUTTON_CLASSNAME,
                )}
                text={text}
                size={size}
                rounded={rounded}
                fillMode={fillMode}
                themeColor={themeColor}
                hover={hover}
                focus={focus}
                active={active}
                selected={selected}
                disabled={disabled}
                icon={icon}
                showArrow={showArrow}
                arrowIconName={arrowIconName}
            >
            </Button>
            { opened && popup &&
                <Popup className="k-menu-popup">
                    {popup}
                </Popup>
            }
        </>
    );
};

MenuButton.states = states;
MenuButton.options = options;
MenuButton.className = MENUBUTTON_CLASSNAME;
MenuButton.defaultOptions = defaultOptions;
MenuButton.moduleName = MENU_BUTTON_MODULE_NAME;
MenuButton.folderName = MENU_BUTTON_FOLDER_NAME;

export default MenuButton;
