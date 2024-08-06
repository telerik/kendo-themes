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
    _renderAriaRoot?: boolean;
};

export const Grid = (
    props: KendoGridProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = Size.medium,
        pagerPosition = 'bottom',
        toolbar,
        pager,
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

export default Grid;
