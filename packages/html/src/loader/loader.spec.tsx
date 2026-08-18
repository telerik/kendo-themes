import { classNames, optionClassNames, Size, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
import { LOADER_FOLDER_NAME, LOADER_MODULE_NAME } from './constants';
export const LOADER_CLASSNAME = `k-loader`;

export const LoaderAnimationMap = {
    'pulsing': 'pulsing-2',
    'infinite-spinner': 'spinner-3',
    'converging-spinner': 'spinner-4'
};

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary
    ],
};

export type KendoLoaderOptions = {
  size?: (typeof options.size)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoLoaderProps = KendoLoaderOptions & {
    animation?: 'pulsing' | 'infinite-spinner' | 'converging-spinner';
};

const defaultOptions = {
    animation: 'pulsing'
} as const;

/**
 * Loader component - displays animated loading indicators.
 *
 * @aria {role="status"} Live region that announces the loading state to assistive technologies.
 * @aria {aria-label} Accessible name for the loader (default: "Loading").
 * @aria {aria-live="polite"} Polite announcements of loading state changes.

 * @ux {Indeterminate progress} Displays a looping animation to signal ongoing background work.
 * @ux {Sizes} Available in small, medium, and large sizes.
 * @ux {Theme colors} Can be styled with any of the theme palette colors.
 */
export const Loader: KendoComponent<KendoLoaderProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoLoaderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        themeColor,
        animation = defaultOptions.animation,
        ...other
    } = props;

    const animationElement = <span className="k-loader-segment"></span>;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                LOADER_CLASSNAME,
                {
                    [`k-loader-${LoaderAnimationMap[animation!] || animation}`]: animation,
                },
                optionClassNames(LOADER_CLASSNAME, {
                    size,
                    themeColor,
                })
            )}
            role="status"
            aria-label={other['aria-label'] || 'Loading'}
        >
            <div className="k-loader-canvas">
                {
                    animation === 'pulsing' &&
                    <>
                        {animationElement}
                        {animationElement}
                    </>
                }
                {
                    animation === 'infinite-spinner' &&
                    <>
                        {animationElement}
                        {animationElement}
                        {animationElement}
                    </>
                }
                {
                    animation === 'converging-spinner' &&
                    <>
                        {animationElement}
                        {animationElement}
                        {animationElement}
                        {animationElement}
                    </>
                }
            </div>
        </div>
    );
};

Loader.states = states;
Loader.options = options;
Loader.className = LOADER_CLASSNAME;
Loader.defaultOptions = defaultOptions;
Loader.moduleName = LOADER_MODULE_NAME;
Loader.folderName = LOADER_FOLDER_NAME;

/**
 * @see https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html WCAG 4.1.3 Status Messages — loading states announced via live region
 */
export default Loader;
