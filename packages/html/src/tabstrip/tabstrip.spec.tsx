import { Icon } from '../icon';
import { classNames, FillMode, optionClassNames, Size, ThemeColor } from '../misc';
import TabStripItems from './tabstrip-items';
import TabStripItemsWrapper from './tabstrip-items-wrapper';

import { KendoComponent } from '../_types/component';
import { TABSTRIP_FOLDER_NAME, TABSTRIP_MODULE_NAME } from './constants';
export const TABSTRIP_CLASSNAME = `k-tabstrip`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
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
                            themeColor: ThemeColor.base,
                            rounded: null
                        }),
                        'k-icon-button',
                    )}>
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
                            themeColor: ThemeColor.base,
                            rounded: null
                        }),
                        'k-icon-button',
                    )}>
                        <Icon className='k-button-icon' icon={`caret-alt-${caretMap[position]["next"]}`} />
                    </span>
                }
                <TabStripItems className={classNames({[`k-tabstrip-items-scroll`]: scrollable && scrollButtons === 'hidden'})}
                tabAlignment={tabAlignmentMap[tabAlignment]}>
                    {tabStripItems}
                </TabStripItems>
                {scrollable && scrollButtons === 'end' &&
                    <span className={classNames(
                        'k-tabstrip-prev',
                        'k-button',
                        optionClassNames('k-button', {
                            size,
                            fillMode: FillMode.flat,
                            themeColor: ThemeColor.base,
                            rounded: null
                        }),
                        'k-icon-button',
                    )}>
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
                            themeColor: ThemeColor.base,
                            rounded: null
                        }),
                        'k-icon-button',
                    )}>
                        <Icon className='k-button-icon' icon={`caret-alt-${caretMap[position]["next"]}`} />
                    </span>
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

export default TabStrip;
