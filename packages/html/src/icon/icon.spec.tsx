import { classNames, optionClassNames, Size, ThemeColor } from '../utils-new';

export const ICON_CLASSNAME = `k-icon`;

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
        ThemeColor.dark,
    ],
};

export type IconState = { [K in (typeof states)[number]]?: boolean };

export type IconOptions = {
    size?: (typeof options.size)[number];
    themeColor?: (typeof options.themeColor)[number];
};

export type IconProps = IconOptions & {
    name?: string;
    rotate?: null | '0' | '45' | '90' | '135' | '180' | '225' | '270' | '315';
    flip?: null | 'v' | 'h';
}

export const Icon = (
    props: IconProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        themeColor,
        name,
        rotate,
        flip,
        ...other
    } = props;

    if (!name) {
        return <></>;
    }

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                ICON_CLASSNAME,
                optionClassNames(ICON_CLASSNAME, {
                    size,
                    themeColor,
                }),
                {
                    [`k-i-${name}`]: name,
                    [`k-rotate-${rotate}`]: rotate,
                    [`k-flip-${flip}`]: flip,
                }
            )}
        />
    );
};

Icon.states = states;
Icon.options = options;
Icon.className = ICON_CLASSNAME;

export default Icon;
