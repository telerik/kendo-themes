import { Pager } from '../pager';
import { classNames, stateClassNames, States } from '../misc';

export const LISTVIEW_CLASSNAME = `k-listview`;

const states = [
    States.loading,
    States.disabled,
];

const options = {};

export type KendoListViewProps = {
    itemsCount?: number;
    hasItemsNumbers?: boolean;
    focusItem?: Array<number>;
    selectedItem?: Array<number>;
    header?: boolean;
    footer?: boolean;
    pageable?: boolean;
    pagerPosition?: 'top' | 'bottom';
    bordered?: boolean;
    layout?: 'flex' | 'grid';
    flexDirection?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    gridColumns?: number;
};

export type KendoListViewState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    pagerPosition: 'bottom'
};

export const ListView = (
    props: KendoListViewProps &
        KendoListViewState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        header,
        footer,
        pageable,
        pagerPosition = defaultOptions.pagerPosition,
        bordered,
        layout,
        flexDirection,
        flexWrap,
        gridColumns,
        loading,
        disabled,
        ...other
    } = props;

    const pager = <Pager className={`k-listview-pager k-listview-pager-${ pagerPosition }`} />;

    const loader = <>
        <div className="k-loading-mask k-opaque" style={{ height: '100%', width: '100%' }}>
            <span className="k-loading-text">Loading...</span>
            <div className="k-loading-image"></div>
            <div className="k-loading-color"></div>
        </div>
    </>;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                LISTVIEW_CLASSNAME,
                {
                    'k-listview-bordered': bordered
                },
                stateClassNames(LISTVIEW_CLASSNAME, {
                    disabled,
                    loading,
                })
            )}>
            {pageable && pagerPosition === "top" && pager}
            {header && <div className="k-listview-header">Header</div>}
            <div className={classNames(
                "k-listview-content",
                {
                    [`k-d-${layout}`]: layout,
                    [`k-flex-${flexDirection}`]: flexDirection,
                    [`k-flex-${flexWrap}`]: flexWrap,
                    [`k-grid-cols-${gridColumns}`]: gridColumns,
                }
            )}>
                { loading && loader }
                { props.children }
            </div>
            {footer && <div className="k-listview-footer">Footer</div>}
            {pageable && pagerPosition === "bottom" && pager}
        </div>
    );
};

ListView.states = states;
ListView.options = options;
ListView.className = LISTVIEW_CLASSNAME;
ListView.defaultOptions = defaultOptions;

export default ListView;
