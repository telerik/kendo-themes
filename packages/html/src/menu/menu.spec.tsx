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
    id?: string;
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
        id,
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
            {...(!props.className?.includes('k-context-menu') && { role: 'menubar' })}
            {...(orientation === 'vertical' && { 'aria-orientation': 'vertical' })}
            {...(id && { id })}>
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
                                icon={`caret-alt-${caretMap[orientation]["prev"]}`} className="k-menu-scroll-button k-menu-scroll-button-prev" aria-label="Scroll to previous"></Button>
                            <Button fillMode="flat"
                                icon={`caret-alt-${caretMap[orientation]["next"]}`} className="k-menu-scroll-button k-menu-scroll-button-next" aria-label="Scroll to next"></Button>
                        </>
                    }
                    {scrollButtonsPosition === 'around' &&
                        <Button fillMode="flat"
                            icon={`caret-alt-${caretMap[orientation]["prev"]}`} className="k-menu-scroll-button k-menu-scroll-button-prev" aria-label="Scroll to previous"></Button>}
                    {ulMenu}
                    {scrollButtonsPosition === 'end' &&
                        <>
                            <Button fillMode="flat"
                                icon={`caret-alt-${caretMap[orientation]["prev"]}`} className="k-menu-scroll-button k-menu-scroll-button-prev" aria-label="Scroll to previous"></Button>
                            <Button fillMode="flat"
                                icon={`caret-alt-${caretMap[orientation]["next"]}`} className="k-menu-scroll-button k-menu-scroll-button-next" aria-label="Scroll to next"></Button>
                        </>
                    }
                    {scrollButtonsPosition === 'around' &&
                        <Button fillMode="flat"
                            icon={`caret-alt-${caretMap[orientation]["next"]}`} className="k-menu-scroll-button k-menu-scroll-button-next" aria-label="Scroll to next"></Button>}
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

export default Menu;
