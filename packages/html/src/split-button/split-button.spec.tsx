import { Button } from '../button';
import { classNames, optionClassNames, States, Size, Roundness, FillMode, ThemeColor } from '../utils';

export const SPLITBUTTON_CLASSNAME = `k-split-button`;

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
};

export type KendoSplitButtonState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    size: Size.medium,
    rounded: Roundness.medium,
    fillMode: FillMode.solid,
    themeColor: ThemeColor.base,
    arrowIconName: "caret-alt-down"
};

export const SplitButton = (
    props: KendoSplitButtonProps &
        KendoSplitButtonState &
        React.HTMLAttributes<HTMLDivElement>
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
        arrowIconName = defaultProps.arrowIconName,
        ...other
    } = props;

    return (
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
            >
            </Button>
        </div>
    );
};

SplitButton.states = states;
SplitButton.options = options;
SplitButton.className = SPLITBUTTON_CLASSNAME;
SplitButton.defaultProps = defaultProps;

export default SplitButton;
