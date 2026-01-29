import { Button } from '../button';
import { classNames, States, Size, Roundness, FillMode, ThemeColor } from '../misc';

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

export type KendoMenuButtonOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoMenuButtonProps = KendoMenuButtonOptions & {
    id?: string;
  icon?: string;
  text?: string;
  showArrow?: boolean;
  arrowIconName?: string;
    opened?: boolean;
};

export type KendoMenuButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    showArrow: true,
    arrowIconName: "caret-alt-down"
};

export const MenuButton: KendoComponent<KendoMenuButtonProps & KendoMenuButtonState & React.HTMLAttributes<HTMLButtonElement>> = (
    props: KendoMenuButtonProps &
        KendoMenuButtonState &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        id = 'menu-button',
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
        showArrow = defaultOptions.showArrow,
        arrowIconName = defaultOptions.arrowIconName,
        opened,
        ...other
    } = props;

    const menuId = `${id}-menu`;
    const textLabel = text || (typeof props.children === 'string' ? props.children : undefined);
    const ariaLabel = textLabel ? `Menu button, ${textLabel}` : 'Menu button';

    return (
        <Button
            {...other}
            className={classNames(
                props.className,
                MENUBUTTON_CLASSNAME,
            )}
            text={text}
            aria-label={ariaLabel}
            aria-expanded={opened ? 'true' : 'false'}
            aria-controls={menuId}
            aria-disabled={disabled ? 'true' : undefined}
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
        />
    );
};

MenuButton.states = states;
MenuButton.options = options;
MenuButton.className = MENUBUTTON_CLASSNAME;
MenuButton.defaultOptions = defaultOptions;
MenuButton.moduleName = MENU_BUTTON_MODULE_NAME;
MenuButton.folderName = MENU_BUTTON_FOLDER_NAME;

export default MenuButton;
