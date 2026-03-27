import { Button } from '../button';
import { classNames } from '../misc';
import MenuScrollableWrapper from './menu-scrollable-wrapper.spec';

import { KendoComponent } from '../_types/component';
import { MENU_FOLDER_NAME, MENU_MODULE_NAME } from './constants';
export const MENU_CLASSNAME = `k-menu`;

const states = [];

const options = {};

export type KendoMenuProps = {
    orientation?: 'horizontal' | 'vertical';
    header?: boolean | null;
    scrollable?: boolean;
    scrollButtonsPosition?: "around" | "start" | "end";
    wrapperStyles?: React.CSSProperties;
    dir?: "rtl" | "ltr";
    popup?: React.JSX.Element;
    /** @aria When true, renders as context menu with role="menu" instead of role="menubar" */
    contextMenu?: boolean;
};

const defaultOptions = {
    orientation: 'horizontal',
    header: true,
    scrollButtonsPosition: "around"
};

export const Menu: KendoComponent<KendoMenuProps & React.HTMLAttributes<HTMLUListElement>> = (
    props: KendoMenuProps &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        children,
        orientation = defaultOptions.orientation,
        header = defaultOptions.header,
        scrollable,
        scrollButtonsPosition = defaultOptions.scrollButtonsPosition,
        wrapperStyles,
        dir,
        popup,
        contextMenu,
        ...other
    } = props;

    const caretMap = {
        horizontal: { prev: dir !== "rtl" ? "left" : "right", next:  dir !== "rtl" ? "right" : "left" },
        vertical: { prev: "up", next: "down" },
    };

    const ulMenu = (
        <ul
            dir={dir}
            {...other}
            className={classNames(
                props.className,
                "k-reset",
                MENU_CLASSNAME,
                {
                    [`${MENU_CLASSNAME}-${orientation}`]: orientation,
                    ["k-header"]: header
                }
            )}
            role={contextMenu ? 'menu' : 'menubar'}
            {...(orientation === 'vertical' && { 'aria-orientation': 'vertical' as React.AriaAttributes['aria-orientation'] })}
        >
            {children}
        </ul>
    )

    return (
        <>
            {scrollable ?
                (<MenuScrollableWrapper orientation={orientation} style={wrapperStyles} dir={props.dir}>
                    {scrollButtonsPosition === 'start' &&
                        <>
                            <Button fillMode="flat"
                                icon={`chevron-${caretMap[orientation]["prev"]}`} className="k-menu-scroll-button k-menu-scroll-button-prev" tabIndex={-1} aria-label="Scroll previous"></Button>
                            <Button fillMode="flat"
                                icon={`chevron-${caretMap[orientation]["next"]}`} className="k-menu-scroll-button k-menu-scroll-button-next" tabIndex={-1} aria-label="Scroll next"></Button>
                        </>
                    }
                    {scrollButtonsPosition === 'around' &&
                        <Button fillMode="flat"
                            icon={`chevron-${caretMap[orientation]["prev"]}`} className="k-menu-scroll-button k-menu-scroll-button-prev" tabIndex={-1} aria-label="Scroll previous"></Button>}
                    {ulMenu}
                    {scrollButtonsPosition === 'end' &&
                        <>
                            <Button fillMode="flat"
                                icon={`chevron-${caretMap[orientation]["prev"]}`} className="k-menu-scroll-button k-menu-scroll-button-prev" tabIndex={-1} aria-label="Scroll previous"></Button>
                            <Button fillMode="flat"
                                icon={`chevron-${caretMap[orientation]["next"]}`} className="k-menu-scroll-button k-menu-scroll-button-next" tabIndex={-1} aria-label="Scroll next"></Button>
                        </>
                    }
                    {scrollButtonsPosition === 'around' &&
                        <Button fillMode="flat"
                            icon={`chevron-${caretMap[orientation]["next"]}`} className="k-menu-scroll-button k-menu-scroll-button-next" tabIndex={-1} aria-label="Scroll next"></Button>}
                </MenuScrollableWrapper>) :
                ulMenu
            }
            {popup}
        </>
    );
};

Menu.states = states;
Menu.options = options;
Menu.className = MENU_CLASSNAME;
Menu.defaultOptions = defaultOptions;
Menu.moduleName = MENU_MODULE_NAME;
Menu.folderName = MENU_FOLDER_NAME;

/**
 * @ariaSpec
 * Menu implements the WAI-ARIA menubar pattern.
 *
 * - Horizontal menu: role="menubar"
 * - Vertical menu: role="menubar" + aria-orientation="vertical"
 * - Menu items: role="menuitem" with aria-haspopup and aria-expanded for expandable items
 * - Expand arrows: aria-hidden="true"
 * - Scroll buttons: tabIndex={-1}, aria-label for accessible name
 * - Nested menu groups: role="menu" with id linked to parent's aria-controls
 */
Menu.ariaSpec = {
    selector: '.k-menu',
    rules: [
        { selector: '.k-menu:not(.k-context-menu)', attribute: 'role=menubar', usage: 'Announces the Menu menubar role.' },
        { selector: '.k-menu.k-menu-vertical', attribute: 'aria-orientation=vertical', usage: 'Announces the Menu orientation when vertical.' },
        { selector: '.k-menu-item', attribute: 'role=menuitem', usage: 'Announces the Menu item role.' },
        { selector: '.k-menu-item', attribute: 'aria-haspopup=menu (when present)', usage: 'Indicates a popup menu is associated with the item.' },
        { selector: '.k-menu-item', attribute: 'aria-expanded=true/false (when present)', usage: 'Indicates whether the submenu is expanded.' },
        { selector: '.k-menu-item.k-disabled', attribute: 'aria-disabled=true', usage: 'Informs assistive technologies that a Menu item is disabled.' },
        { selector: '.k-menu-expand-arrow', attribute: 'aria-hidden=true', usage: 'Expand arrow elements are hidden from assistive technologies.' },
        { selector: '.k-menu-popup .k-menu-group', attribute: 'role=menu', usage: 'The role of the nested menu displayed in a popup.' },
        { selector: '.k-menu-scroll-button', attribute: 'tabindex=-1', usage: 'Scroll buttons are removed from the tab sequence.' },
        { selector: '.k-menu-scroll-button', attribute: 'aria-label', usage: 'Scroll buttons have an accessible label.' },
        { selector: '.k-menu-item.k-focus', attribute: 'tabindex=0', usage: 'The focused item has tabindex 0.' },
        { selector: '.k-menu-item', attribute: 'aria-controls=ul.k-menu-group id (when present)', usage: 'Points to the ID of the submenu. Only present when the item controls a submenu element.' },
        { selector: '.k-menu-popup .k-menu-group', attribute: 'id', usage: 'Each nested menu has a deterministic id linked to the parent aria-controls.' },
    ]
};

export default Menu;
