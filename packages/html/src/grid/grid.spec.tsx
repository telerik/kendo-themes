import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
export const GRID_CLASSNAME = 'k-grid';

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

const GRID_VARIANTS = [] as const;

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
    /** @aria Total number of columns in the grid. */
    ariaColCount?: number;
    /** @aria Total number of rows in the grid (including header/footer). */
    ariaRowCount?: number;
    /** @aria ID for the .k-grid-aria-root element, used by aria-controls on toolbar/grouping header. */
    ariaRootId?: string;
    /** @aria Role for the .k-grid-aria-root element. Defaults to "grid", overridden to "treegrid" for TreeList. */
    ariaRole?: string;
};

const defaultOptions = {
    pagerPosition: 'bottom'
};

export const Grid: KendoComponent<KendoGridProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGridProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        pagerPosition = defaultOptions.pagerPosition,
        toolbar,
        pager,
        groupingHeader,
        gridSelectionAggregates,
        _renderAriaRoot,
        resizable,
        ariaColCount,
        ariaRowCount,
        ariaRootId,
        ariaRole = 'grid',
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
                <div className="k-grid-aria-root" role={ariaRole}
                    id={ariaRootId}
                    aria-colcount={ariaColCount}
                    aria-rowcount={ariaRowCount}
                >{props.children}</div> : props.children
            }
            {gridSelectionAggregates}
            {pagerPosition === 'bottom' && pager}
        </div>
    );
};

Grid.states = states;
Grid.options = options;
Grid.variants = GRID_VARIANTS;
Grid.className = GRID_CLASSNAME;
Grid.defaultOptions = defaultOptions;
Grid.moduleName = GRID_MODULE_NAME;
Grid.folderName = GRID_FOLDER_NAME;

Grid.ariaSpec = a11ySpec.ariaSpec;

export default Grid;
