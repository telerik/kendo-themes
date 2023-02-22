import { Icon } from '../icon';
import { Avatar } from '../avatar';
import { classNames, optionClassNames, stateClassNames, States } from '../utils-new';

export const CHIP_CLASSNAME = `k-chip`;

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
    fillMode: [ "solid", "outline" ],
    themeColor: [
        "base",
        "success",
        "warning",
        "error",
        "info",
    ],
};

export type KendoChipOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoChipProps = KendoChipOptions & {
    text?: string;
    icon?: string;
    actions?: JSX.Element | string;
    showAvatar?: boolean;
};

export type KendoChipState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    size: "medium",
    rounded: "medium",
    fillMode: "solid",
    themeColor: "base",
};

export const Chip = (
    props: KendoChipProps &
        KendoChipState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
        rounded = defaultProps.rounded,
        fillMode = defaultProps.fillMode,
        themeColor = defaultProps.themeColor,
        text,
        icon,
        actions,
        showAvatar,
        hover,
        focus,
        active,
        selected,
        disabled,
        ...other
    } = props;

    return (
        <div
            { ...other }
            className={classNames(
                props.className,
                CHIP_CLASSNAME,
                optionClassNames(CHIP_CLASSNAME, {
                    size,
                    rounded,
                    fillMode,
                    themeColor,
                }),
                stateClassNames(CHIP_CLASSNAME, {
                    hover,
                    focus,
                    active,
                    disabled,
                    selected,
                }),
            )}
        >
            {icon && <Icon className="k-chip-icon" name={icon} /> }
            {showAvatar && (
                <Avatar className="k-chip-avatar" type="image" >
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
            )}
            <span className="k-chip-content">
                { props.children
                    ? props.children
                    : text && <span className="k-chip-label k-text-ellipsis">{text}</span>
                }
            </span>
            { actions && (
                <span className="k-chip-actions">
                    {actions}
                </span>
            )}
        </div>
    );
};

Chip.states = states;
Chip.options = options;
Chip.className = CHIP_CLASSNAME;

export default Chip;
