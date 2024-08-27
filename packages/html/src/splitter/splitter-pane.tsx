import { classNames } from '../misc';

const SPLITTERPANE_CLASSNAME = 'k-pane';

const states = [];

const options = {};

export type KendoSplitterPaneProps = {
    collapsible?: boolean;
    scrollable?: boolean;
    resizable?: boolean;
    flexBasis?: string;
    flex?: boolean;
    pinned?: boolean;
    unpinned?: boolean;
    tabbed?: boolean;
};

export type KendoSplitterPaneState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    resizable: true,
    flex: false,
};

export const SplitterPane = (
    props: KendoSplitterPaneProps &
        KendoSplitterPaneState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        scrollable,
        flexBasis,
        flex = defaultOptions.flex,
        collapsible: _collapsible,
        resizable: _resizable = defaultOptions.resizable,
        pinned,
        unpinned,
        tabbed,
        ...other
    } = props;

    return (
        <div
            {...other}
            style={{ flexBasis, ...props.style }}
            className={classNames(
                props.className,
                SPLITTERPANE_CLASSNAME,
                {
                    [`${SPLITTERPANE_CLASSNAME}-static`]: flexBasis,
                    [`${SPLITTERPANE_CLASSNAME}-flex`]: flex,
                    [`k-scrollable`]: scrollable,
                    [`${SPLITTERPANE_CLASSNAME}-pinned`]: pinned,
                    [`${SPLITTERPANE_CLASSNAME}-unpinned`]: unpinned,
                    [`${SPLITTERPANE_CLASSNAME}-tabbed`]: tabbed,
                },
            )}>
            {props.children}
        </div>
    );
};

SplitterPane.states = states;
SplitterPane.options = options;
SplitterPane.className = SPLITTERPANE_CLASSNAME;
SplitterPane.defaultOptions = defaultOptions;

export default SplitterPane;
