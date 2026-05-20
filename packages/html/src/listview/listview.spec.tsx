import { PagerNormal } from '../pager';
import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
import { LISTVIEW_FOLDER_NAME, LISTVIEW_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
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
    /** @aria When true, renders with k-selectable class; content role=listbox, items role=option */
    selectable?: boolean;
    /** @aria Accessible name for the listview content element (required when selectable/role=listbox) */
    contentAriaLabel?: string;
};

export type KendoListViewState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    pagerPosition: 'bottom'
};

export const ListView: KendoComponent<KendoListViewProps & KendoListViewState & React.HTMLAttributes<HTMLDivElement>> = (
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
        selectable,
        contentAriaLabel,
        ...other
    } = props;

    const pager = <PagerNormal className={`k-listview-pager k-listview-pager-${ pagerPosition }`} />;

    const loader = <>
        <div className="k-loading-mask" style={{ height: '100%', width: '100%' }}>
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
                    'k-listview-bordered': bordered,
                    'k-selectable': selectable,
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
            )}
                role={selectable ? 'listbox' : 'list'}
                aria-label={contentAriaLabel}
            >
                { props.children }
            </div>
            { loading && loader }
            {footer && <div className="k-listview-footer">Footer</div>}
            {pageable && pagerPosition === "bottom" && pager}
        </div>
    );
};

ListView.states = states;
ListView.options = options;
ListView.className = LISTVIEW_CLASSNAME;
ListView.defaultOptions = defaultOptions;
ListView.moduleName = LISTVIEW_MODULE_NAME;
ListView.folderName = LISTVIEW_FOLDER_NAME;

ListView.ariaSpec = a11ySpec.ariaSpec;

export default ListView;
