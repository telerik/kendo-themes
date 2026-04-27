import { classNames, optionClassNames, States, Size, Roundness, FillMode, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
import { AVATAR_FOLDER_NAME, AVATAR_MODULE_NAME } from './constants';
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
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.outline ],
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary
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

const defaultOptions = {
    type: avatarType.TEXT,
    border: false
};

/**
 * Avatar component - displays user profile images, icons, or initials.
 *
 * @accessibility
 * - When using `type="image"` with an `<img>` child, the image MUST have an `alt` attribute
 * - For decorative avatars, use `alt=""`
 * - For meaningful avatars, use descriptive alt text: `alt="John Doe's profile picture"`
 *
 * @wcag 1.1.1 Non-text Content - images must have text alternatives
 */
export const Avatar: KendoComponent<KendoAvatarProps & KendoAvatarState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoAvatarProps &
        KendoAvatarState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        rounded,
        fillMode,
        themeColor,
        type = defaultOptions.type,
        border = defaultOptions.border,
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
Avatar.defaultOptions = defaultOptions;
Avatar.moduleName = AVATAR_MODULE_NAME;
Avatar.folderName = AVATAR_FOLDER_NAME;

Avatar.ariaSpec = {
    selector: '.k-avatar',
    rules: [
        { selector: '.k-avatar img', attribute: 'alt', usage: 'Images inside Avatar must have alt text for screen readers.' },
    ]
};

export default Avatar;
