import { classNames, optionClassNames, Size, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
import { LOADER_FOLDER_NAME, LOADER_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
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
 * @accessibility
 * - Uses `role="status"` to announce loading state to assistive technology
 * - Uses `aria-label` to provide accessible name (default: "Loading")
 * - The status role creates a live region that announces changes
 *
 * @example
 * ```tsx
 * // Basic loader with default label
 * <Loader />
 *
 * // Custom accessible label
 * <Loader aria-label="Loading user data" />
 * ```
 *
 * @wcag 4.1.3 Status Messages - loading states announced via live region
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

Loader.ariaSpec = a11ySpec.ariaSpec;

export default Loader;
