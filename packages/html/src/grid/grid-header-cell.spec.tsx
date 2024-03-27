import { classNames, States, stateClassNames } from "../misc";
import { TableTh, KendoTableThProps } from "../table/table-th";
import { Icon } from "../icon";

const className = `k-header`;

const states = [
    States.hover,
    States.focus,
    States.active
];

export type KendoGridHeaderCellProps = KendoTableThProps & {
    menu?: "filter" | "column";
    sortable?: boolean;
    filterable?: boolean;
    sticky?: boolean;
    resizable?: boolean;
    columnTitle?: string;
    scope?: string;
    sortIcon?: string;
    sortOrder?: number;
};

const defaultProps = {
    sortIcon: "sort-asc-small"
};

export type KendoGridHeaderCellState = { [K in (typeof states)[number]]?: boolean };

export const GridHeaderCell = (
    props: KendoGridHeaderCellProps &
        KendoGridHeaderCellState &
        React.HTMLAttributes<HTMLTableCellElement>
) => {
    const {
        menu,
        sortable,
        filterable,
        sticky,
        resizable,
        columnTitle,
        hover,
        focus,
        active,
        sortIcon = defaultProps.sortIcon,
        sortOrder,
        ...others
    } = props;

    return (
        <TableTh
            {...others}
            className={classNames(
                props.className,
                className,
                {
                    [`k-filterable`]: menu && filterable || menu === "filter",
                    [`k-sorted`]: sortable,
                    [`k-grid-header-sticky`]: sticky,
                    [`k-touch-action-none`]: resizable
                },
                stateClassNames(className, {
                    hover,
                    focus,
                    active
                })
            )}
        >
            {
                columnTitle && (
                    <span className="k-cell-inner">
                        <span className="k-link">
                            <span className="k-column-title">{columnTitle}</span>
                            {sortable && (
                                <span className="k-sort-icon">
                                    <Icon icon={sortIcon} />
                                </span>
                            )}
                            {sortOrder && (
                                <span className="k-sort-order">{sortOrder}</span>
                            )}
                        </span>
                        {menu && (
                            <a href="#" className={classNames(
                                'k-grid-header-menu',
                                {
                                    [`k-active`]: active,
                                    [`k-grid-filter-menu`]: menu === "filter",
                                    [`k-grid-column-menu`]: menu === "column"
                                }
                            )}>
                                <Icon icon={ menu === "filter" ? "filter" : "more-vertical" } />
                            </a>
                        )}
                    </span>
                )

            }
            {props.children}
            {resizable && ( <span className="k-column-resizer k-touch-action-none"></span> )}
        </TableTh>
    );
};

export default GridHeaderCell;
