import { classNames, optionClassNames, Size, Roundness, FillMode, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
import { BADGE_FOLDER_NAME, BADGE_MODULE_NAME } from './constants';
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

const defaultOptions = {
    size: Size.medium,
    fillMode: FillMode.solid,
    themeColor: ThemeColor.primary,
    cutoutBorder: false,
};

export const Badge: KendoComponent<KendoBadgeProps & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoBadgeProps &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size = defaultOptions.size,
        fillMode = defaultOptions.fillMode,
        themeColor = defaultOptions.themeColor,
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

export default Badge;
