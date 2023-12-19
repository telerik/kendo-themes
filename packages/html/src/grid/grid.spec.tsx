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
    toolbar?: JSX.Element;
    pager?: JSX.Element;
    pagerPosition?: 'top' | 'bottom';
    groupingHeader?: JSX.Element;
    _renderAriaRoot?: boolean;
};

const defaultProps = {
    size: Size.medium,
    pagerPosition: 'bottom'
};

export const Grid = (
    props: KendoGridProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
        toolbar,
        pager,
        pagerPosition,
        groupingHeader,
        _renderAriaRoot,
        ...other
    } = props;


    return (
        <div
            {...other}
            className={classNames(
                props.className,
                GRID_CLASSNAME,
                optionClassNames(GRID_CLASSNAME, { size })
            )}>
            {toolbar}
            {pagerPosition === 'top' && pager}
            {groupingHeader}
            { props.children && _renderAriaRoot ?
                <div className="k-grid-aria-root">{props.children}</div> : props.children
            }
            {pagerPosition === 'bottom' && pager}
        </div>
    );
};

Grid.states = states;
Grid.options = options;
Grid.className = GRID_CLASSNAME;
Grid.defaultProps = defaultProps;

export default Grid;
