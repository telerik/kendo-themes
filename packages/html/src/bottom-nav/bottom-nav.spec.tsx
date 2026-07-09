import { classNames, stateClassNames, optionClassNames, FillMode, ThemeColor, States } from '../misc';

import { KendoComponent } from '../_types/component';
import { BOTTOM_NAV_FOLDER_NAME, BOTTOM_NAV_MODULE_NAME } from './constants';
export const BOTTOM_NAV_CLASSNAME = 'k-bottom-nav';

const states = [
    States.disabled,
];

const options = {
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.flat ],
    themeColor: [
        ThemeColor.undefined,
        ThemeColor.base,
        ThemeColor.primary,
        ThemeColor.secondary,
        ThemeColor.tertiary,
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

const defaultOptions = {
    flow: 'horizontal',
    border: false
};

/**
 * @aria {role="navigation"} The landmark role navigation must be assigned to the bottom navigation.
 */
export const BottomNav: KendoComponent<KendoBottomNavProps & KendoBottomNavState & React.HTMLAttributes<HTMLElement>> = (
    props: KendoBottomNavProps &
        KendoBottomNavState &
        React.HTMLAttributes<HTMLElement>
) => {
    const {
        disabled,
        fillMode,
        themeColor,
        flow = defaultOptions.flow,
        border = defaultOptions.border,
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
        )} dir={dir}
            aria-label="Bottom navigation"
        >
            {props.children}
        </nav>
    );
};

BottomNav.states = states;
BottomNav.options = options;
BottomNav.className = BOTTOM_NAV_CLASSNAME;
BottomNav.defaultOptions = defaultOptions;
BottomNav.moduleName = BOTTOM_NAV_MODULE_NAME;
BottomNav.folderName = BOTTOM_NAV_FOLDER_NAME;

/**
 * @ux {Fixed position} Rendered at the bottom of the viewport and stays visible while the user scrolls.
 * @ux {Sticky position} Sticks to the bottom edge of its scroll container when the user scrolls past it.
 * @ux {Absolute position} Positioned at the bottom of its nearest positioned ancestor, scrolls with the page.
 * @ux {Item selection} The active item receives the `k-selected` class. Clicking another item transfers selection to it.
 * @ux {Disabled state} When disabled, the component and all its items are non-interactive and visually dimmed.
 * @ux {Border} An optional top border separates the navigation from the page content above it.
 *
 * @keyboard {Shift + Tab} Focuses previous link.
 * @keyboard {Tab} Focuses next link.
 * @keyboard {Space or Enter} Activates the currently focused link.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#navigation ARIA practices Navigation
 */

export default BottomNav;
