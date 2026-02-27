import { Icon } from '../icon';
import { MenuButton } from '../menu-button';
import { classNames, FillMode, optionClassNames, Roundness, Size } from '../misc';
import TabStripItems from './tabstrip-items';
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

export const TabStrip: KendoComponent<KendoTabStripProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoTabStripProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        scrollable,
        children,
        tabStripItems,
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
                            fillMode: FillMode.flat,
                            rounded: Roundness.none
                        }),
                        'k-icon-button',
                    )} aria-hidden="true">
                        <Icon className='k-button-icon' icon={`caret-alt-${caretMap[position]["prev"]}`} />
                    </span>
                }
                {scrollable && scrollButtons === 'start' &&
                    <span className={classNames(
                        'k-tabstrip-next',
                        'k-button',
                        optionClassNames('k-button', {
                            size,
                            fillMode: FillMode.flat,
                            rounded: Roundness.none
                        }),
                        'k-icon-button',
                    )} aria-hidden="true">
                        <Icon className='k-button-icon' icon={`caret-alt-${caretMap[position]["next"]}`} />
                    </span>
                }
                <TabStripItems className={classNames({[`k-tabstrip-items-scroll`]: scrollable && scrollButtons === 'hidden'})}
                tabAlignment={tabAlignmentMap[tabAlignment]}
                orientation={orientationMap[position] as 'horizontal' | 'vertical'}>
                    {tabStripItems}
                </TabStripItems>
                {scrollable && scrollButtons === 'end' &&
                    <span className={classNames(
                        'k-tabstrip-prev',
                        'k-button',
                        optionClassNames('k-button', {
                            size,
                            fillMode: FillMode.flat,
                            rounded: Roundness.none
                        }),
                        'k-icon-button',
                    )} aria-hidden="true">
                        <Icon className='k-button-icon' icon={`caret-alt-${caretMap[position]["prev"]}`} />
                    </span>
                }
                {scrollable &&
                    (scrollButtons === 'around' || scrollButtons === 'end') &&
                    <span className={classNames(
                        'k-tabstrip-next',
                        'k-button',
                        optionClassNames('k-button', {
                            size,
                            fillMode: FillMode.flat,
                            rounded: Roundness.none
                        }),
                        'k-icon-button',
                    )} aria-hidden="true">
                        <Icon className='k-button-icon' icon={`caret-alt-${caretMap[position]["next"]}`} />
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
 * @ariaSpec
 * TabStrip implements the WAI-ARIA tabs pattern.
 *
 * - TabList: role="tablist", aria-orientation="vertical" for left/right position
 * - Tab items: role="tab", aria-selected="true" for active tab
 * - Tab content: role="tabpanel"
 * - Scroll buttons: aria-hidden="true"
 */
TabStrip.ariaSpec = {
    selector: '.k-tabstrip',
    rules: [
        { selector: '.k-tabstrip-items', attribute: 'role=tablist', usage: 'Indicates the tablist role for the ul element.' },
        { selector: '.k-tabstrip.k-tabstrip-left .k-tabstrip-items,.k-tabstrip.k-tabstrip-right .k-tabstrip-items', attribute: 'aria-orientation=vertical', usage: 'Indicates the orientation when vertical.' },
        { selector: '.k-tabstrip-item', attribute: 'role=tab', usage: 'The tab li element.' },
        { selector: '.k-tabstrip .k-tabstrip-item.k-active', attribute: 'aria-selected=true', usage: 'Announces the selected state of the tab.' },
        { selector: '.k-tabstrip-content', attribute: 'role=tabpanel', usage: 'The content div of the tab.' },
        { selector: '.k-tabstrip .k-tabstrip-item.k-active[aria-controls]', attribute: 'aria-controls', usage: 'Announces the relation between the panel and active tab. Only present when tab controls a specific panel.' },
        { selector: '.k-tabstrip-content', attribute: 'aria-hidden=true (when not active)', usage: 'Only if the component implements a feature to control whether the content should be persisted.' },
        { selector: '.k-tabstrip-content[aria-labelledby]', attribute: 'aria-labelledby', usage: 'Refers to the tab element that controls the panel. Only present when panel has an associated tab.' },
        { selector: '.k-tabstrip-scrollable .k-button', attribute: 'aria-hidden=true', usage: 'Scroll buttons are hidden from assistive technologies.' },
    ]
};

export default TabStrip;
