import { classNames, optionClassNames, Size, ThemeColor } from '../misc';
import Loader from './loader.spec';

export const LOADERCONTAINER_CLASSNAME = `k-loader-container`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
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

export type KendoLoaderContainerOptions = {
  size?: (typeof options.size)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoLoaderContainerProps = KendoLoaderContainerOptions & {
    loaderType?: 'pulsing' | 'infinite-spinner' | 'converging-spinner';
    position?: 'top' | 'end' | 'start';
    overlay?: 'dark' | 'light';
    panel?: boolean;
};

const defaultOptions = {
    size: Size.medium,
    themeColor: ThemeColor.primary,
    loaderType: 'pulsing',
    position: 'top',
    overlay: 'dark',
    panel: false
} as const;

export const LoaderContainer = (
    props: KendoLoaderContainerProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        themeColor = defaultOptions.themeColor,
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
        >
            <div className={`k-loader-container-overlay k-overlay-${overlay}`}></div>
            <div className={classNames(
                'k-loader-container-inner',
                {
                    [`k-loader-container-panel`]: panel
                }
            )}>
                <Loader size={size} themeColor={themeColor} animation={loaderType} />
                <div className={`k-loader-container-label !k-text-${themeColor}`}>
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

export default LoaderContainer;
