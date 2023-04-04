import { classNames, optionClassNames, Size, Roundness, FillMode, ThemeColor } from '../utils';

export const BADGE_CLASSNAME = `k-badge`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.outline ],
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

const defaultProps = {
    size: Size.medium,
    fillMode: FillMode.solid,
    themeColor: ThemeColor.primary,
    cutoutBorder: false,
};

export const Badge = (
    props: KendoBadgeProps &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size = defaultProps.size,
        rounded,
        fillMode = defaultProps.fillMode,
        themeColor = defaultProps.themeColor,
        cutoutBorder = defaultProps.cutoutBorder,
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

export default Badge;
