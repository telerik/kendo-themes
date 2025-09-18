import { classNames, optionClassNames, Size, ThemeColor } from '../misc';

import { KendoComponent } from '../_types/component';
export const LOADER_CLASSNAME = `k-loader`;

export const LoaderAnimationMap = {
    'pulsing': 'pulsing-2',
    'infinite-spinner': 'spinner-3',
    'converging-spinner': 'spinner-4'
};

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

export type KendoLoaderOptions = {
  size?: (typeof options.size)[number] | null;
  themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoLoaderProps = KendoLoaderOptions & {
    animation?: 'pulsing' | 'infinite-spinner' | 'converging-spinner';
};

const defaultOptions = {
    size: Size.medium,
    themeColor: ThemeColor.primary,
    animation: 'pulsing'
} as const;

export const Loader: KendoComponent<KendoLoaderProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoLoaderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        themeColor = defaultOptions.themeColor,
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
Loader.moduleName = "loader";
Loader.folderName = Loader.moduleName;

export default Loader;
