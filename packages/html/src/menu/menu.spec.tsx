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
    contextMenu?: boolean;
};

const defaultOptions = {
    orientation: 'horizontal',
    header: true,
    scrollButtonsPosition: "around"
};

/**
 * @aria {aria-orientation="vertical"} Announces the Menu orientation when vertical.
 * @aria {aria-hidden="true"} Expand arrow elements are hidden from assistive technologies.
 * @aria {tabindex="-1"} Scroll buttons are removed from the tab sequence.
 * @aria {aria-label} Scroll buttons have an accessible label.
 * @aria {role="menu"|"menubar"} When true, renders as context menu (role="menu"); otherwise role="menubar".
 * @ux {Horizontal / Vertical} Can be rendered as a horizontal menu bar or a vertical sidebar.
 * @ux {Submenus} Items with children open a flyout submenu on hover or click.
 * @ux {Popup positioning} Submenus automatically flip when they would overflow the viewport.
 * @ux {Disabled items} Individual items can be disabled and are skipped during keyboard navigation.
 */
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
 * @keyboard {ArrowUp} (For root items) Opens the item and focuses the last child.; (For child items) Focuses the previous item.
 * @keyboard {ArrowDown} (For root items) Opens the item and focuses the first child.; (For child items) Focuses the next item.
 * @keyboard {ArrowLeft} (For root items) Focuses the previous item.; (For child items) For direct children of a root item, focuses and opens the previous root item. Otherwise, closes and focuses the parent.
 * @keyboard {ArrowRight} (For root items) Focuses the next item.; (For child items) If the item has children, opens the item and focuses the first child. Otherwise, focuses and opens the next root item.
 * @keyboard {Home} Focuses the first item.
 * @keyboard {End} Focuses the last item.
 * @keyboard {Enter} Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL.
 * @keyboard {Space} Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL.
 * @keyboard {Escape} (For child items) Closes and focuses the parent.
 * @keyboard {Alphanumeric character} Focuses the next item with text starting with the character.
 * @keyboard {ArrowUp} Focuses the previous item.
 * @keyboard {ArrowDown} Focuses the next item.
 * @keyboard {ArrowLeft} (For root items) opens the item and focuses the last child.; (For child items) closes and focuses the parent.
 * @keyboard {ArrowRight} If the item has children, opens the item and focuses the first child. For child items without children, focuses and opens the next root item.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/menu/ ARIA patterns Menu
 */

export default Menu;
