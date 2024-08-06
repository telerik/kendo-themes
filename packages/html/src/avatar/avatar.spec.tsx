import { classNames, optionClassNames, States, Size, Roundness, FillMode, ThemeColor } from '../misc';

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
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ],
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

export const Avatar = (
    props: KendoAvatarProps &
        KendoAvatarState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = Size.medium,
        rounded = Roundness.full,
        fillMode = FillMode.solid,
        themeColor = ThemeColor.primary,
        type = avatarType.TEXT,
        border = false,
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
