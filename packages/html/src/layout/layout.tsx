import { classNames, kendoThemeMaps } from '../misc';

const states = [];

const options = {};

export type KendoLayoutProps = {
    gap?: string;
    orientation?: null | 'horizontal' | 'vertical';
    alignItems?: null | 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: null | 'start' | 'center' | 'end' | 'stretch';
    justifyItems?: null | 'start' | 'center' | 'end' | 'stretch';
    wrap?: boolean;
};

const defaultOptions = {
    orientation: null,
    alignItems: null,
    justifyContent: null,
    justifyItems: null,
    wrap: false
};

export const Layout = (
    props: KendoLayoutProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        gap,
        orientation = defaultOptions.orientation,
        alignItems = defaultOptions.alignItems,
        justifyContent = defaultOptions.justifyContent,
        justifyItems = defaultOptions.justifyItems,
        wrap = defaultOptions.wrap,
        style,
        ...other
    } = props;

    return (
        <div
            {...other}
            style={{ gap: gap, ...style }}
            className={classNames(
                props.className,
                {
                    [`k-${kendoThemeMaps.orientationMap[orientation!] || orientation}`]: orientation,
                    [`k-align-items-${alignItems}`]: alignItems,
                    [`k-justify-content-${justifyContent}`]: justifyContent,
                    [`k-justify-items-${justifyItems}`]: justifyItems,
                    [`k-flex-wrap`]: wrap
                },
            )}>
            {props.children}
        </div>
    );
};

Layout.states = states;
Layout.options = options;

export default Layout;
