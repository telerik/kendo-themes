import { classNames, stateClassNames, optionClassNames, FillMode, ThemeColor, States } from '../misc';

export const BOTTOM_NAV_CLASSNAME = 'k-bottom-nav';

const states = [
    States.disabled,
];

const options = {
    fillMode: [ FillMode.solid, FillMode.flat ],
    themeColor: [
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
        ThemeColor.info,
        ThemeColor.success,
        ThemeColor.warning,
        ThemeColor.error,
        ThemeColor.dark,
        ThemeColor.light,
        ThemeColor.inverse
    ]
};

export type KendoBottomNavOptions = {
    fillMode?: (typeof options.fillMode)[number] | null;
    themeColor?: (typeof options.themeColor)[number] | null;
};

export type KendoBottomNavProps = KendoBottomNavOptions & {
    flow?: string;
    border?: boolean;
    dir?: 'ltr' | 'rtl';
    positionMode?: 'fixed' | 'sticky' | 'absolute';
};

export type KendoBottomNavState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    fillMode: FillMode.flat,
    themeColor: ThemeColor.primary,
    flow: 'horizontal',
    border: false
};

export const BottomNav = (
    props: KendoBottomNavProps &
        KendoBottomNavState &
        React.HTMLAttributes<HTMLElement>
) => {
    const {
        disabled,
        fillMode = defaultProps.fillMode,
        themeColor = defaultProps.themeColor,
        flow = defaultProps.flow,
        border = defaultProps.border,
        positionMode,
        dir
    } = props;

    return (
        <nav className={classNames(
            props.className,
            BOTTOM_NAV_CLASSNAME,
            optionClassNames(BOTTOM_NAV_CLASSNAME, {
                fillMode,
                themeColor
            }),
            {
                [`k-bottom-nav-item-flow-${flow}`]: flow,
                'k-bottom-nav-border': border,
                [`k-pos-${positionMode}`]: positionMode,
            },
            stateClassNames(BOTTOM_NAV_CLASSNAME, {
                disabled,
            }),
        )} dir={dir}>
            {props.children}
        </nav>
    );
};

BottomNav.states = states;
BottomNav.options = options;
BottomNav.className = BOTTOM_NAV_CLASSNAME;
BottomNav.defaultProps = defaultProps;

export default BottomNav;
