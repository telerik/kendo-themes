import { Size, ThemeColor } from '../misc';
import FontIcon from './font-icon.spec';
import SvgIcon from './svg-icon.spec';
import * as SVGIcons from '@progress/kendo-svg-icons';

const snakeToCamel = str =>
    str.toLowerCase().replace(/([-_][a-z])/g, group =>
        group
            .toUpperCase()
            .replace('-', '')
            .replace('_', '')
    );


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

export type IconState = { [K in (typeof states)[number]]?: boolean };

export type IconOptions = {
    size?: (typeof options.size)[number];
    themeColor?: (typeof options.themeColor)[number];
};

export type IconProps = IconOptions & {
    icon?: string;
    type?: 'svg' | 'font';
    rotate?: null | '0' | '45' | '90' | '135' | '180' | '225' | '270' | '315';
    flip?: null | 'v' | 'h' | 'both';
    viewBox?: string;
}

const defaultProps = {
    viewBox: '0 0 24 24',
    type: 'svg'
};

export const Icon = (
    props: IconProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        themeColor,
        icon,
        type = defaultProps.type,
        rotate,
        flip,
        viewBox = defaultProps.viewBox,
        ...other
    } = props;

    if (!icon) {
        return <></>;
    }

    if (type === 'svg') {

        if (icon === 'none') {
            return (
                <SvgIcon {...other} icon={icon} size={size} />
            );
        }

        const iconSVG = snakeToCamel(`${icon}-icon`);

        if (!SVGIcons[iconSVG]) {
            return <></>;
        }

        return (
            <SvgIcon {...other} icon={SVGIcons[iconSVG]} size={size} themeColor={themeColor} rotate={rotate} flip={flip} viewBox={viewBox} />
        );
    }

    return (
        <FontIcon {...other} icon={icon} size={size} themeColor={themeColor} rotate={rotate} flip={flip} />
    );
};

Icon.states = states;
Icon.options = options;
Icon.defaultProps = defaultProps;

export default Icon;
