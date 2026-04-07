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
 * @ariaSpec
 * BottomNav uses nav landmark with navigation items.
 *
 * - nav: aria-label="Bottom navigation"
 * - Items: implicit link role via <a> or explicit role="link"
 * - Selected item: aria-current="true"
 */
BottomNav.ariaSpec = {
    selector: '.k-bottom-nav',
    rules: [
        { selector: '.k-bottom-nav', attribute: 'role=navigation or nodeName=nav', usage: 'The landmark role navigation must be assigned to the bottom navigation.' },
        { selector: '.k-bottom-nav-item', attribute: 'role=link or nodeName=a', usage: 'Associate the link purpose of the bottom navigation items.' },
        { selector: '.k-bottom-nav-item.k-selected', attribute: 'aria-current=true', usage: 'Indicates the selected navigation item.' },
    ]
};

export default BottomNav;
