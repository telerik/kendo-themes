import { classNames, Size, ThemeColor } from '../misc';
import FontIcon from './font-icon';
import SvgIcon from './svg-icon';
import * as SVGIcons from '@progress/kendo-svg-icons';

import { KendoComponent } from '../_types/component';
import { ICON_FOLDER_NAME, ICON_MODULE_NAME } from './constants';

export const ICON_CLASSNAME = `k-icon`;

const snakeToCamel = str =>
    str.replace(/([-_][a-z0-9])/gi, group =>
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

const defaultOptions = {
    viewBox: '0 0 24 24',
    type: 'svg'
};

export const Icon: KendoComponent<IconProps & React.HTMLAttributes<HTMLSpanElement>> = (
    props: IconProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        themeColor,
        icon,
        type = defaultOptions.type,
        rotate,
        flip,
        viewBox = defaultOptions.viewBox,
        ...other
    } = props;

    if (!icon) {
        return <></>;
    }

    if (type === 'svg') {

        if (icon === 'none') {
            return (
                <SvgIcon {...other} className={classNames(props.className, ICON_CLASSNAME)} icon={icon} size={size} />
            );
        }

        const iconSVG = !SVGIcons[icon] ? snakeToCamel(`${icon}-icon`) : icon;

        if (!SVGIcons[iconSVG]) {
            return <></>;
        }

        return (
            <SvgIcon {...other} className={classNames(props.className, ICON_CLASSNAME)} icon={SVGIcons[iconSVG]} size={size} themeColor={themeColor} rotate={rotate} flip={flip} viewBox={viewBox} />
        );
    }

    return (
        <FontIcon {...other} className={classNames(props.className, ICON_CLASSNAME)} icon={icon} size={size} themeColor={themeColor} rotate={rotate} flip={flip} />
    );
};

Icon.states = states;
Icon.options = options;
Icon.defaultOptions = defaultOptions;
Icon.className = ICON_CLASSNAME;
Icon.moduleName = ICON_MODULE_NAME;
Icon.folderName = ICON_FOLDER_NAME;

export default Icon;
