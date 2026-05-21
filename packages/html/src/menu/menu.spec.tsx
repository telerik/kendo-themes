import { Button } from '../button';
import { classNames } from '../misc';
import MenuScrollableWrapper from './menu-scrollable-wrapper.spec';

import { KendoComponent } from '../_types/component';
import { MENU_FOLDER_NAME, MENU_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
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

Menu.ariaSpec = a11ySpec.ariaSpec;

export default Menu;
