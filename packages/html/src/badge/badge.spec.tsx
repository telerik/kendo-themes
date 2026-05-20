import { classNames, optionClassNames, Size, Roundness, FillMode, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
import { BADGE_FOLDER_NAME, BADGE_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';

/**
 * Badge component specification.
 *
 * @accessibility
 * - Badges render as `<span>` elements containing text or counts
 * - Content is accessible to screen readers via the text content
 * - When used as a notification indicator on another element, ensure
 *   the parent element has appropriate `aria-describedby` or `aria-label`
 *   to communicate the badge meaning to assistive technologies
 * - Empty/dot badges that convey status should be accompanied by visually
 *   hidden text for screen reader users
 *
 * @example
 * ```tsx
 * // Badge with visible text - accessible by default
 * <Badge>5 new messages</Badge>
 *
 * // Empty badge on button - needs aria context on parent
 * <button aria-label="Notifications, 3 unread">
 *   <span>Notifications</span>
 *   <Badge>3</Badge>
 * </button>
 * ```
 */
export const BADGE_CLASSNAME = `k-badge`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.outline ],
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
        ThemeColor.info,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error
    ],
};

export type KendoBadgeOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
    themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoBadgeProps = KendoBadgeOptions & {
    cutoutBorder?: boolean;
    position?: null | 'edge' | 'inside' | 'outside';
    align?: null | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
};

const defaultOptions = {
    cutoutBorder: false,
};

export const Badge: KendoComponent<KendoBadgeProps & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoBadgeProps &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        fillMode,
        themeColor,
        cutoutBorder = defaultOptions.cutoutBorder,
        rounded,
        position,
        align,
        ...other
    } = props;

    return (
        <span
            { ...other }
            className={classNames(
                props.className,
                BADGE_CLASSNAME,
                optionClassNames(BADGE_CLASSNAME, {
                    size,
                    rounded,
                    fillMode,
                    themeColor,
                }),
                {
                    [`${BADGE_CLASSNAME}-${position}`]: position,
                    [`k-${align}`]: align,
                    [`${BADGE_CLASSNAME}-border-cutout`]: cutoutBorder,
                }
            )}
        >
            {props.children}
        </span>
    );
};

Badge.states = states;
Badge.options = options;
Badge.className = BADGE_CLASSNAME;
Badge.defaultOptions = defaultOptions;
Badge.moduleName = BADGE_MODULE_NAME;
Badge.folderName = BADGE_FOLDER_NAME;
Badge.ariaSpec = a11ySpec.ariaSpec;

export default Badge;
