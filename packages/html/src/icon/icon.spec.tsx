import { classNames, Size, ThemeColor, IconVariant } from '../misc';
import FontIcon from './font-icon';
import SvgIcon from './svg-icon';
import * as SVGIcons from '@progress/kendo-svg-icons';

import { KendoComponent } from '../_types/component';
import { ICON_FOLDER_NAME, ICON_MODULE_NAME } from './constants';
import { useContext } from 'react';
import { ConfigurationContext } from '../configuration/configuration-context';

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

export type IconState = { [K in (typeof states)[number]]?: boolean };

export type IconOptions = {
    size?: (typeof options.size)[number];
    themeColor?: (typeof options.themeColor)[number];
    variant?: (typeof options.variant)[number];
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
    type: 'svg',
    variant: IconVariant.outline
};

export const Icon: KendoComponent<IconProps & React.HTMLAttributes<HTMLSpanElement>> = (
    props: IconProps & React.HTMLAttributes<HTMLSpanElement>
) => {
    const { iconsType } = useContext(ConfigurationContext);

    const {
        size,
        themeColor,
        icon,
        type = iconsType || defaultOptions.type,
        rotate,
        flip,
        viewBox = defaultOptions.viewBox,
        variant = defaultOptions.variant,
        ...other
    } = props;

    if (!icon) {
        return <></>;
    }

    const iconType = iconsType || type;
    if (iconType === 'svg') {

        if (icon === 'none') {
            return (
                <SvgIcon {...other} className={classNames(props.className, ICON_CLASSNAME)} icon={icon} size={size} variant={variant} />
            );
        }

        const iconSVG = !SVGIcons[icon] ? snakeToCamel(`${icon}-icon`) : icon;

        if (!SVGIcons[iconSVG]) {
            return <></>;
        }

        return (
            <SvgIcon {...other} className={classNames(props.className, ICON_CLASSNAME)} icon={SVGIcons[iconSVG]} size={size} themeColor={themeColor} rotate={rotate} flip={flip} viewBox={viewBox} variant={variant} />
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

/**
 * Accessibility specification for Icon.
 */
Icon.ariaSpec = {
    selector: '.k-icon, .k-svg-icon',
    rules: [
        { selector: '.k-icon, .k-svg-icon', attribute: 'aria-hidden=true', usage: 'Hides the icon element and all its children from assistive technologies.' },
    ]
};

export default Icon;
