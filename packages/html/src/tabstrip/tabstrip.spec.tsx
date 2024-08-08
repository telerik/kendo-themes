import { Button, TabStripItems, TabStripItemsWrapper } from '..';
import { classNames } from '../misc';

export const TABSTRIP_CLASSNAME = `k-tabstrip`;

const states = [];

const options = {};

export type KendoTabStripProps = {
    position?: "top" | "bottom" | "left" | "right";
    tabStripItems?: React.JSX.Element | React.JSX.Element[];
    scrollable?: boolean;
    header?: boolean | null;
    dir?: "rtl" | "ltr";
};

const defaultOptions = {
    position: "top",
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
                {scrollable && <Button fillMode="flat" rounded={null} size={null} icon={`caret-alt-${caretMap[position]["prev"]}`} className="k-tabstrip-prev"></Button>}
                <TabStripItems>
                    {tabStripItems}
                </TabStripItems>
                {scrollable && <Button fillMode="flat" rounded={null} size={null} icon={`caret-alt-${caretMap[position]["next"]}`} className="k-tabstrip-next"></Button>}
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
