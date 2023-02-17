import { classNames, optionClassNames } from '../utils-new';

export const ICON_CLASSNAME = `k-icon`;

export const states = [];

export const options = {
    size: [ "xsmall", "small", "medium", "large", "xlarge", "xxlarge", "xxxlarge" ],
    themeColor: [
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

const defaultProps = {
    size: "medium",
    themeColor: "base",
};

export const Icon = (
    props: IconProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size = defaultProps.themeColor,
        themeColor = defaultProps.themeColor,
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
