import { classNames, optionClassNames, Size } from '../misc';

export const GRID_CLASSNAME = 'k-grid';

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoGridOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoGridProps = KendoGridOptions & {
    toolbar?: React.JSX.Element;
    pager?: React.JSX.Element;
    pagerPosition?: 'top' | 'bottom';
    groupingHeader?: React.JSX.Element;
    gridSelectionAggregates?: React.JSX.Element;
    _renderAriaRoot?: boolean;
    resizable?: boolean;
};

const defaultOptions = {
    size: Size.medium,
    pagerPosition: 'bottom'
};

export const Grid = (
    props: KendoGridProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        pagerPosition = defaultOptions.pagerPosition,
        toolbar,
        pager,
        groupingHeader,
        gridSelectionAggregates,
        _renderAriaRoot,
        resizable,
        ...other
    } = props;


    return (
        <div
            {...other}
            className={classNames(
                props.className,
                GRID_CLASSNAME,
                {
                    [`${GRID_CLASSNAME}-resizable`]: resizable,
                },
                optionClassNames(GRID_CLASSNAME, { size })
            )}>
            {toolbar}
            {pagerPosition === 'top' && pager}
            {groupingHeader}
            { props.children && _renderAriaRoot ?
                <div className="k-grid-aria-root">{props.children}</div> : props.children
            }
            {gridSelectionAggregates}
            {pagerPosition === 'bottom' && pager}
        </div>
    );
};

Grid.states = states;
Grid.options = options;
Grid.className = GRID_CLASSNAME;
Grid.defaultOptions = defaultOptions;

export default Grid;
