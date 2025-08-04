import { classNames, optionClassNames, Size, ThemeColor } from '../misc';

export const SVGICON_CLASSNAME = `k-svg-icon`;

const states = [];

const options = {
    size: [ Size.xsmall, Size.small, Size.medium, Size.large, Size.xlarge, Size.xxlarge, Size.xxxlarge ],
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
        ThemeColor.dark
    ],
};

export type SvgIconOptions = {
    size?: (typeof options.size)[number];
    themeColor?: (typeof options.themeColor)[number];
};

export interface SVGIcon {
    name: string;
    content: string;
    viewBox: string;
}

export type SvgIconProps = SvgIconOptions & {
    rotate?: null | '0' | '45' | '90' | '135' | '180' | '225' | '270' | '315';
    flip?: null | 'v' | 'h' | 'both';
    viewBox?: string;
    icon?: SVGIcon | 'none';
}

const defaultOptions = {
    viewBox: '0 0 24 24'
};

export const SvgIcon = (
    props: SvgIconProps & React.HTMLAttributes<HTMLOrSVGElement>
) => {
    const {
        size,
        themeColor,
        rotate,
        flip,
        viewBox = defaultOptions.viewBox,
        icon,
        ...other
    } = props;

    if (!icon) {
        return <></>;
    }

    if (icon === 'none') {
        <span
            {...other}
            className={classNames(
                props.className,
                SVGICON_CLASSNAME,
                'k-none'
            )}
        />;
    }

    const name = (typeof icon === "object" && icon.name) && icon.name;

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
        >
            <svg
                aria-hidden={true}
                focusable={false}
                xmlns="http://www.w3.org/2000/svg"
                viewBox={typeof icon === "object" ? icon.viewBox : viewBox}
                dangerouslySetInnerHTML={typeof icon === "object" ? { __html: icon.content } : undefined}
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
