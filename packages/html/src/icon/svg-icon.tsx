import { classNames, optionClassNames, Size, ThemeColor, IconVariant } from '../misc';

export const SVGICON_CLASSNAME = `k-svg-icon`;

const states = [];

const options = {
    size: [ Size.undefined, Size.xsmall, Size.small, Size.medium, Size.large, Size.xlarge, Size.xxlarge, Size.xxxlarge ],
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.info
    ],
    variant: [ IconVariant.outline, IconVariant.solid, IconVariant.duotone ],
};

export type SvgIconOptions = {
    size?: (typeof options.size)[number];
    themeColor?: (typeof options.themeColor)[number];
    variant?: (typeof options.variant)[number];
};

export interface SVGIcon {
    name: string;
    content: string;
    viewBox: string;
    variants?: Record<string, string>;
}

export type SvgIconProps = SvgIconOptions & {
    rotate?: null | '0' | '45' | '90' | '135' | '180' | '225' | '270' | '315';
    flip?: null | 'v' | 'h' | 'both';
    viewBox?: string;
    icon?: SVGIcon | 'none';
}

const defaultOptions = {
    viewBox: '0 0 24 24',
    variant: IconVariant.outline
};

/**
 * SvgIcon component - renders decorative SVG-based icons.
 *
 * @aria {aria-hidden="true"} The SVG icon is decorative; hidden from assistive technologies.
 * @aria {focusable="false"} Prevents the SVG from receiving focus in IE/Edge.
 *
 * @see https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html WCAG 1.1.1 Non — text Content - decorative images hidden from AT
 */
export const SvgIcon = (
    props: SvgIconProps & React.HTMLAttributes<HTMLOrSVGElement>
) => {
    const {
        size,
        themeColor,
        rotate,
        flip,
        viewBox = defaultOptions.viewBox,
        variant = defaultOptions.variant,
        icon,
        ...other
    } = props;

    if (!icon) {
        return <></>;
    }

    if (icon === 'none') {
        return (
            <span
                {...other}
                className={classNames(
                    props.className,
                    SVGICON_CLASSNAME,
                    optionClassNames('k-icon', {
                        size,
                    }),
                    'k-none'
                )}
                aria-hidden="true"
            />
        );
    }

    const name = (typeof icon === "object" && icon.name) && icon.name;
    const resolvedContent = typeof icon === "object"
        ? (variant && icon.variants?.[variant]) || icon.variants?.outline || icon.content
        : undefined;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                SVGICON_CLASSNAME,
                optionClassNames('k-icon', {
                    size,
                }),
                {
                    [`k-svg-i-${name}`]: name,
                    [`k-color-${themeColor}`]: themeColor,
                    [`k-rotate-${rotate}`]: rotate,
                    'k-flip-h': flip === 'h' || flip === 'both',
                    'k-flip-v': flip === 'v' || flip === 'both'
                }
            )}
            aria-hidden="true"
        >
            <svg
                aria-hidden={true}
                focusable={false}
                xmlns="http://www.w3.org/2000/svg"
                viewBox={typeof icon === "object" ? icon.viewBox : viewBox}
                dangerouslySetInnerHTML={resolvedContent !== undefined ? { __html: resolvedContent } : undefined}
            >
                {icon ? undefined : props.children}
            </svg>
        </span>
    );
};

SvgIcon.states = states;
SvgIcon.options = options;
SvgIcon.className = SVGICON_CLASSNAME;
SvgIcon.defaultOptions = defaultOptions;

export default SvgIcon;
