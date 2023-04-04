import { Button } from '../button';
import { classNames, States, Size, Roundness, FillMode, ThemeColor } from '../utils';

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
    ],
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
};

export type KendoMenuButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    size: Size.medium,
    rounded: Roundness.medium,
    fillMode: FillMode.solid,
    themeColor: ThemeColor.base,
    showArrow: true,
    arrowIconName: "arrow-s"
};

export const MenuButton = (
    props: KendoMenuButtonProps &
        KendoMenuButtonState &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        size = defaultProps.size,
        rounded = defaultProps.rounded,
        fillMode = defaultProps.fillMode,
        themeColor = defaultProps.themeColor,
        hover,
        focus,
        active,
        selected,
        disabled,
        icon,
        text,
        showArrow = defaultProps.showArrow,
        arrowIconName = defaultProps.arrowIconName,
        ...other
    } = props;

    return (
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
    );
};

MenuButton.states = states;
MenuButton.options = options;
MenuButton.className = MENUBUTTON_CLASSNAME;

export default MenuButton;
