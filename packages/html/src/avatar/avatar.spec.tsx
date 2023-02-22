import { classNames, optionClassNames, States } from '../utils-new';

export const AVATAR_CLASSNAME = `k-avatar`;

enum avatarType {
    TEXT = 'text',
    IMAGE = 'image',
    ICON = 'icon'
}

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
        "base",
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

export type KendoAvatarOptions = {
  size?: (typeof options.size)[number] | null;
  rounded?: (typeof options.rounded)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoAvatarProps = KendoAvatarOptions & {
    type?: avatarType | string;
    border?: boolean;
};

export type KendoAvatarState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    type: avatarType.TEXT,
    size: "medium",
    rounded: "full",
    fillMode: "solid",
    themeColor: "primary",
    border: false
};

export const Avatar = (
    props: KendoAvatarProps &
        KendoAvatarState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
        rounded = defaultProps.rounded,
        fillMode = defaultProps.fillMode,
        themeColor = defaultProps.themeColor,
        type = defaultProps.type,
        border = defaultProps.border,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                AVATAR_CLASSNAME,
                optionClassNames(AVATAR_CLASSNAME, {
                    size,
                    rounded,
                    fillMode,
                    themeColor,
                }),
                {
                    [`${AVATAR_CLASSNAME}-bordered`]: border,
                }
            )}
        >
            <span className={`${AVATAR_CLASSNAME}-${type}`}>
                {props.children}
            </span>
        </div>
    );
};

Avatar.states = states;
Avatar.options = options;
Avatar.className = AVATAR_CLASSNAME;

export default Avatar;
