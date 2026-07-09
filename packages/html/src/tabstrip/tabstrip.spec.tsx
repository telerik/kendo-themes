import { Icon } from '../icon';
import { MenuButton } from '../menu-button';
import { classNames, FillMode, optionClassNames, Size } from '../misc';
import TabStripItems from './tabstrip-items.spec';
import TabStripItemsWrapper from './tabstrip-items-wrapper';
import { KendoComponent } from '../_types/component';
import { TABSTRIP_FOLDER_NAME, TABSTRIP_MODULE_NAME } from './constants';
export const TABSTRIP_CLASSNAME = `k-tabstrip`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

export type KendoTabStripOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoTabStripProps = KendoTabStripOptions & {
    position?: "top" | "bottom" | "left" | "right";
    tabAlignment?: "start" | "center" | "end" | "justify" | "stretched";
    tabStripItems?: React.JSX.Element | React.JSX.Element[];
    tabStripItemsId?: string;
    scrollable?: boolean;
    scrollButtons?: "around" | "start" | "end" | "hidden";
    scrollingPosition?: "start" | "end" | "both";
    dir?: "rtl" | "ltr";
    overflow?: boolean;
};

const defaultOptions = {
    position: "top",
    tabAlignment: "start",
    scrollButtons: "around"
};

/**
 * @aria {aria-hidden="true"} Scroll buttons are hidden from assistive technologies.
 * @aria {id} Optional; applied to the TabStripItems element, referenced by tab aria-controls.
 */
export const TabStrip: KendoComponent<KendoTabStripProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoTabStripProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        scrollable,
        children,
        tabStripItems,
        tabStripItemsId,
        position = defaultOptions.position,
        tabAlignment = defaultOptions.tabAlignment,
        scrollButtons = defaultOptions.scrollButtons,
        dir,
        scrollingPosition,
        overflow,
        ...other
    } = props;

    const caretMap = {
        top: { prev: dir !== "rtl" ? "left" : "right", next: dir !== "rtl" ? "right" : "left" },
        bottom: { prev: dir !== "rtl" ? "left" : "right", next: dir !== "rtl" ? "right" : "left" },
        right: { prev: "up", next: "down" },
        left: { prev: "up", next: "down" },
    };

    const orientationMap = {
        top: 'horizontal',
        bottom: 'horizontal',
        left: 'vertical',
        right: 'vertical'
    };

    const tabAlignmentMap = {
        start: "start",
        center: "center",
        end: "end",
        justify: "justify",
        stretched: "stretched"
    }

    return (
        <div
            dir={dir}
            {...other}
            className={classNames(
                TABSTRIP_CLASSNAME,
                props.className,
                {
                    [`${TABSTRIP_CLASSNAME}-${position}`]: position,
                    [`${TABSTRIP_CLASSNAME}-scrollable`]: scrollable,
                    [`${TABSTRIP_CLASSNAME}-scrollable-overlay`]: (scrollable && (scrollButtons === 'hidden' || !scrollButtons) ),
                    [`${TABSTRIP_CLASSNAME}-scrollable-${scrollingPosition}`]: scrollingPosition  && scrollingPosition !== 'both',
                    [`${TABSTRIP_CLASSNAME}-overflow`]: overflow,
                },
                optionClassNames(TABSTRIP_CLASSNAME, {size})
            )}>
            {position === "bottom" && children}
            <TabStripItemsWrapper orientation={orientationMap[position]}>
                {scrollable &&
                    (scrollButtons === 'around' || scrollButtons === 'start') &&
                    <span className={classNames(
                        'k-tabstrip-prev',
                        'k-button',
                        optionClassNames('k-button', {
                            size,
                            fillMode: FillMode.flat
                        }),
                        'k-icon-button',
                    )} aria-hidden="true">
                        <Icon className='k-button-icon' icon={`chevron-${caretMap[position]["prev"]}`} />
                    </span>
                }
                {scrollable && scrollButtons === 'start' &&
                    <span className={classNames(
                        'k-tabstrip-next',
                        'k-button',
                        optionClassNames('k-button', {
                            size,
                            fillMode: FillMode.flat
                        }),
                        'k-icon-button',
                    )} aria-hidden="true">
                        <Icon className='k-button-icon' icon={`chevron-${caretMap[position]["next"]}`} />
                    </span>
                }
                <TabStripItems className={classNames({[`k-tabstrip-items-scroll`]: scrollable && scrollButtons === 'hidden'})}
                tabAlignment={tabAlignmentMap[tabAlignment]}
                orientation={orientationMap[position] as 'horizontal' | 'vertical'}
                {...(tabStripItemsId && { id: tabStripItemsId })}>
                    {tabStripItems}
                </TabStripItems>
                {scrollable && scrollButtons === 'end' &&
                    <span className={classNames(
                        'k-tabstrip-prev',
                        'k-button',
                        optionClassNames('k-button', {
                            size,
                            fillMode: FillMode.flat
                        }),
                        'k-icon-button',
                    )} aria-hidden="true">
                        <Icon className='k-button-icon' icon={`chevron-${caretMap[position]["prev"]}`} />
                    </span>
                }
                {scrollable &&
                    (scrollButtons === 'around' || scrollButtons === 'end') &&
                    <span className={classNames(
                        'k-tabstrip-next',
                        'k-button',
                        optionClassNames('k-button', {
                            size,
                            fillMode: FillMode.flat
                        }),
                        'k-icon-button',
                    )} aria-hidden="true">
                        <Icon className='k-button-icon' icon={`chevron-${caretMap[position]["next"]}`} />
                    </span>
                }
                {overflow &&
                    <div className="k-tabstrip-actions k-hstack">
                        <MenuButton
                            className="k-tabstrip-overflow-button"
                            icon="more-vertical"
                            fillMode="flat"
                            size={size}
                            showArrow={false}
                        />
                    </div>
                }
            </TabStripItemsWrapper>
            {position !== "bottom" && children}
        </div>
    );
};

TabStrip.states = states;
TabStrip.options = options;
TabStrip.className = TABSTRIP_CLASSNAME;
TabStrip.defaultOptions = defaultOptions;
TabStrip.moduleName = TABSTRIP_MODULE_NAME;
TabStrip.folderName = TABSTRIP_FOLDER_NAME;

/**
 * @keyboard {ArrowUp or ArrowDown} Activates the previous/next tab (vertical orientation). Navigation wraps — when end is reached the first tab is focused, when start is reached the last tab is focused.
 * @keyboard {ArrowLeft or ArrowRight} Activates the previous/next tab (horizontal orientation). Navigation wraps — when end is reached the first tab is focused, when start is reached the last tab is focused.
 * @keyboard {Tab} Moves focus to the content of the active tab. Roving tabindex — only the active tab has tabindex=0, remaining tabs have tabindex=-1.
 * @keyboard {Shift + Tab} Moves focus back to the active tab from the panel.
 * @keyboard {Enter} Activates the focused tab (when automatic selection is disabled).
 * @keyboard {Home} Moves focus to and activates the first tab.
 * @keyboard {End} Moves focus to and activates the last tab.
 * @keyboard {Delete or Backspace} Removes the focused tab from the tab list.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#tablist WAI-ARIA specification for tablist
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html WAI-ARIA practices: TabList example
 */

export default TabStrip;
