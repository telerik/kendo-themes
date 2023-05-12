import { classNames, optionClassNames, Size, ThemeColor } from '../utils';

export const FONTICON_CLASSNAME = `k-icon`;

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

export type FontIconOptions = {
    size?: (typeof options.size)[number];
    themeColor?: (typeof options.themeColor)[number];
};

export type FontIconProps = FontIconOptions & {
    icon?: string;
    rotate?: null | '0' | '45' | '90' | '135' | '180' | '225' | '270' | '315';
    flip?: null | 'v' | 'h' | 'both';
}

const defaultProps = {};

export const FontIcon = (
    props: FontIconProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        themeColor,
        icon,
        rotate,
        flip,
        ...other
    } = props;

    if (!icon) {
        return <></>;
    }

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                FONTICON_CLASSNAME,
                optionClassNames(FONTICON_CLASSNAME, {
                    size,
                }),
                {
                    [`k-i-${icon}`]: icon,
                    [`k-color-${themeColor}`]: themeColor,
                    [`k-rotate-${rotate}`]: rotate,
                    'k-flip-h': flip === 'h' || flip === 'both',
                    'k-flip-v': flip === 'v' || flip === 'both'
                }
            )}
        />
    );
};

FontIcon.states = states;
FontIcon.options = options;
FontIcon.className = FONTICON_CLASSNAME;
FontIcon.defaultProps = defaultProps;

export default FontIcon;
