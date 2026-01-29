import * as React from 'react';
import { PagerNormal } from '../pager';
import { classNames, stateClassNames, States } from '../misc';
import { ListViewItem, KendoListViewItemState } from './listview-item.spec';

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
    selectable?: boolean;
    layout?: 'flex' | 'grid';
    flexDirection?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    gridColumns?: number;
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
        itemsCount,
        header,
        footer,
        pageable,
        pagerPosition = defaultOptions.pagerPosition,
        bordered,
        selectable,
        layout,
        flexDirection,
        flexWrap,
        gridColumns,
        loading,
        disabled,
        ...other
    } = props;

    const isSelectable = Boolean(selectable) || (typeof props.className === 'string' && props.className.split(' ').includes('k-selectable'));
    const listViewItems = React.Children.toArray(props.children).filter(
        (child): child is React.ReactElement<KendoListViewItemState & React.HTMLAttributes<HTMLDivElement>> =>
            React.isValidElement(child) && child.type === ListViewItem
    );
    const totalItems = itemsCount ?? listViewItems.length;
    let currentItemIndex = 0;
    const childrenWithAria = React.Children.map(props.children, (child) => {
        if (!React.isValidElement(child) || child.type !== ListViewItem) {
            return child;
        }

        currentItemIndex += 1;
        return React.cloneElement(child, {
            role: isSelectable ? 'option' : 'listitem',
            'aria-setsize': totalItems,
            'aria-posinset': currentItemIndex,
            tabIndex: currentItemIndex === 1 ? 0 : undefined
        });
    });

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
                    'k-selectable': selectable
                },
                stateClassNames(LISTVIEW_CLASSNAME, {
                    disabled,
                    loading,
                })
            )}>
            {pageable && pagerPosition === "top" && pager}
            {header && <div className="k-listview-header">Header</div>}
            <div
                role={isSelectable ? 'listbox' : 'list'}
                className={classNames(
                "k-listview-content",
                {
                    [`k-d-${layout}`]: layout,
                    [`k-flex-${flexDirection}`]: flexDirection,
                    [`k-flex-${flexWrap}`]: flexWrap,
                    [`k-grid-cols-${gridColumns}`]: gridColumns,
                }
            )}
                aria-label={isSelectable ? 'ListView items' : undefined}>
                {childrenWithAria}
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

export default ListView;
