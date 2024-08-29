import { Button, TabStripItems, TabStripItemsWrapper } from '..';
import { classNames } from '../misc';

export const TABSTRIP_CLASSNAME = `k-tabstrip`;

const states = [];

const options = {};

export type KendoTabStripProps = {
    position?: "top" | "bottom" | "left" | "right";
    tabAlignment?: "start" | "center" | "end" | "justify" | "stretched";
    tabStripItems?: React.JSX.Element | React.JSX.Element[];
    scrollable?: boolean;
    scrollButtonsPosition?: "around" | "start" | "end";
    header?: boolean | null;
    dir?: "rtl" | "ltr";
};

const defaultOptions = {
    position: "top",
    tabAlignment: "start",
    scrollButtonsPosition: "around",
    header: true
};

export const TabStrip = (
    props: KendoTabStripProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        scrollable,
        children,
        tabStripItems,
        position = defaultOptions.position,
        tabAlignment = defaultOptions.tabAlignment,
        scrollButtonsPosition = defaultOptions.scrollButtonsPosition,
        header = defaultOptions.header,
        dir,
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
                    ["k-header"]: header,
                },
            )}>
            {position === "bottom" && children}
            <TabStripItemsWrapper orientation={orientationMap[position]}>
                {scrollable &&
                    (scrollButtonsPosition === 'around' || scrollButtonsPosition === 'start') &&
                    <Button fillMode="flat" rounded={null} size="medium" icon={`caret-alt-${caretMap[position]["prev"]}`} className="k-tabstrip-prev"></Button>
                }
                {scrollable && scrollButtonsPosition === 'start' &&
                    <Button fillMode="flat" rounded={null} size="medium" icon={`caret-alt-${caretMap[position]["next"]}`} className="k-tabstrip-next"></Button>
                }
                <TabStripItems tabAlignment={tabAlignmentMap[tabAlignment]}>
                    {tabStripItems}
                </TabStripItems>
                {scrollable && scrollButtonsPosition === 'end' &&
                    <Button fillMode="flat" rounded={null} size="medium" icon={`caret-alt-${caretMap[position]["prev"]}`} className="k-tabstrip-prev"></Button>
                }
                {scrollable &&
                    (scrollButtonsPosition === 'around' || scrollButtonsPosition === 'end') &&
                    <Button fillMode="flat" rounded={null} size="medium" icon={`caret-alt-${caretMap[position]["next"]}`} className="k-tabstrip-next"></Button>
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

export default TabStrip;
