import { PagerNormal } from '../pager';
import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
import { LISTVIEW_FOLDER_NAME, LISTVIEW_MODULE_NAME } from './constants';
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

/**
 * @ariaSpec
 * ListView implements a list or listbox pattern.
 *
 * - Non-selectable: content role="list", items role="listitem"
 * - Selectable: content role="listbox", items role="option"
 * - Items have aria-setsize and aria-posinset
 * - First item has tabindex=0
 */
ListView.ariaSpec = {
    selector: '.k-listview',
    rules: [
        { selector: '.k-listview:not(.k-selectable) .k-listview-content', attribute: 'role=list', usage: 'Specifies the role of non selectable ListView content element.' },
        { selector: '.k-listview.k-selectable .k-listview-content', attribute: 'role=listbox', usage: 'Specifies the role of selectable ListView content element.' },
        { selector: '.k-listview:not(.k-selectable) .k-listview-item', attribute: 'role=listitem', usage: 'Specifies the role of each item in a non selectable ListView.' },
        { selector: '.k-listview.k-selectable .k-listview-item', attribute: 'role=option', usage: 'Specifies the role of each item in a selectable ListView.' },
        { selector: '.k-listview-item', attribute: 'aria-setsize', usage: 'Specifies the total number of items present in the ListView.' },
        { selector: '.k-listview-item', attribute: 'aria-posinset', usage: 'Specifies the position of the current item in the entire list.' },
        { selector: '.k-listview-item:nth-child(1)', attribute: 'tabindex=0', usage: 'The first item in the ListView must be focusable by default.' },
    ]
};

export default ListView;
