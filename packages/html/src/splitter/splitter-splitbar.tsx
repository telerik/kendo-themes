import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

const SPLITTERSPLITBAR_CLASSNAME = 'k-splitbar';

const states = [
    States.hover,
    States.focus,
];

const options = {};

export type KendoSplitterSplitbarProps = {
    orientation?: "horizontal" | "vertical";
    draggable?: boolean,
    collapsePrev?: boolean;
    collapseNext?: boolean;
};

export type KendoSplitterSplitbarState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    orientation: "horizontal",
    draggable: true,
};

export const SplitterSplitbar = (
    props: KendoSplitterSplitbarProps &
        KendoSplitterSplitbarState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        hover,
        focus,
        orientation,
        draggable,
        collapsePrev,
        collapseNext,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                SPLITTERSPLITBAR_CLASSNAME,
                stateClassNames(SPLITTERSPLITBAR_CLASSNAME, {
                    hover,
                    focus,
                }),
                {
                    [`${SPLITTERSPLITBAR_CLASSNAME}-${orientation}`]: orientation,
                    [`${SPLITTERSPLITBAR_CLASSNAME}-draggable-${orientation}`]: draggable,
                    [`${SPLITTERSPLITBAR_CLASSNAME}-static-${orientation}`]: !draggable && !collapsePrev && !collapseNext,
                },
            )}>
            {collapsePrev &&
                <>
                    <div className="k-collapse-prev">
                        <Icon icon={`caret-alt-${orientation === "horizontal" ? 'left' : 'up'}`} size="xsmall"></Icon>
                    </div>
                </>
            }
            <div className="k-resize-handle"></div>
            {collapseNext &&
                <>
                    <div className="k-collapse-next">
                        <Icon icon={`caret-alt-${orientation === "horizontal" ? "right" : "down"}`} size="xsmall"></Icon>
                    </div>
                </>
            }
        </div>
    );
};

SplitterSplitbar.states = states;
SplitterSplitbar.options = options;
SplitterSplitbar.className = SPLITTERSPLITBAR_CLASSNAME;
SplitterSplitbar.defaultProps = defaultProps;

export default SplitterSplitbar;
