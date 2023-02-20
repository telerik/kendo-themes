import { Button } from '../button';
import { classNames, optionClassNames, States } from '../utils-new';

export const SPLITBUTTON_CLASSNAME = `k-split-button`;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.selected,
    States.disabled
];

const options = {
    size: [ "small", "medium", "large" ],
    rounded: [ "small", "medium", "large", "full" ],
    fillMode: [ "solid", "flat", "outline", "clear", "link" ],
    themeColor: [
        "primary",
        "secondary",
        "tertiary",
        "success",
        "warning",
        "error",
        "info",
        "light",
        "dark"
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
    size: "medium",
    rounded: "medium",
    fillMode: "solid",
    themeColor: "base",
    arrowIconName: "arrow-s"
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

export default SplitButton;
