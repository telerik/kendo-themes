import { classNames, optionClassNames, Size, ThemeColor } from '../misc';
import Loader from './loader.spec';

import { KendoComponent } from '../_types/component';
import { LOADER_FOLDER_NAME, LOADER_MODULE_NAME } from './constants';
export const LOADERCONTAINER_CLASSNAME = `k-loader-container`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.info,
        ThemeColor.inverse
    ],
};

export type KendoLoaderContainerOptions = {
  size?: (typeof options.size)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoLoaderContainerProps = KendoLoaderContainerOptions & {
    loaderType?: 'pulsing' | 'infinite-spinner' | 'converging-spinner';
    position?: 'top' | 'end' | 'start';
    overlay?: 'inverse';
    panel?: boolean;
};

const defaultOptions = {
    loaderType: 'pulsing',
    position: 'top',
    overlay: 'inverse',
    panel: false
} as const;

/**
 * LoaderContainer component - displays a loader with optional overlay and label.
 *
 * @accessibility
 * - Uses `role="status"` with `aria-live="polite"` to announce loading state politely
 * - The "Loading..." label provides visible text for the loading state
 * - Overlay prevents interaction with content behind the loader
 *
 * @example
 * ```tsx
 * <LoaderContainer aria-label="Loading page content" />
 * ```
 *
 * @wcag 4.1.3 Status Messages - loading states announced via live region
 */
export const LoaderContainer: KendoComponent<KendoLoaderContainerProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoLoaderContainerProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        themeColor,
        loaderType = defaultOptions.loaderType,
        position = defaultOptions.position,
        overlay = defaultOptions.overlay,
        panel = defaultOptions.panel,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                LOADERCONTAINER_CLASSNAME,
                optionClassNames(LOADERCONTAINER_CLASSNAME, {
                    size,
                }),
                {
                    [`k-loader-${position}`]: position,
                },
            )}
            role="status"
            aria-live="polite"
            aria-label={other['aria-label'] || 'Loading'}
        >
            <div className={`k-loader-container-overlay k-overlay-${overlay}`}></div>
            <div className={classNames(
                'k-loader-container-inner',
                {
                    [`k-loader-container-panel`]: panel
                }
            )}>
                <Loader size={size} themeColor={themeColor} animation={loaderType} />
                <div className={`k-loader-container-label`}>
                    Loading...
                </div>
            </div>
        </div>
    );
};

LoaderContainer.states = states;
LoaderContainer.options = options;
LoaderContainer.className = LOADERCONTAINER_CLASSNAME;
LoaderContainer.defaultOptions = defaultOptions;
LoaderContainer.moduleName = LOADER_MODULE_NAME;
LoaderContainer.folderName = LOADER_FOLDER_NAME;

/**
 * Accessibility specification for LoaderContainer.
 */
LoaderContainer.ariaSpec = {
    selector: '.k-loader-container',
    rules: [
        { selector: '.k-loader-container', attribute: 'role=status', usage: 'Live region for loading state.' },
        { selector: '.k-loader-container', attribute: 'aria-live=polite', usage: 'Polite announcements of loading state changes.' },
        { selector: '.k-loader-container', attribute: 'aria-label', usage: 'Accessible name for the loader container.' },
    ]
};

export default LoaderContainer;
