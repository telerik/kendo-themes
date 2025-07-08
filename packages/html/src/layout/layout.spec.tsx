import { classNames, kendoThemeMaps } from '../misc';

import { KendoComponent } from '../_types/component';
const states = [];

const options = {};

export type KendoLayoutProps = {
    gap?: string;
    type?: null | 'stack' | 'flex' | 'grid';
    orientation?: null | 'horizontal' | 'vertical';
    alignItems?: null | 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: null | 'start' | 'center' | 'end' | 'stretch';
    justifyItems?: null | 'start' | 'center' | 'end' | 'stretch';
    wrap?: boolean;
};

const defaultOptions = {
    type: null,
    orientation: null,
    alignItems: null,
    justifyContent: null,
    justifyItems: null,
    wrap: false
};

export const Layout: KendoComponent<KendoLayoutProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoLayoutProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        gap,
        type = defaultOptions.type,
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
                    [`k-${type}-layout`]: type,
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
Layout.className = 'k-layout';

export default Layout;
