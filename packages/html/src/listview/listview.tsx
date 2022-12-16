import * as React from 'react';
import { classNames } from '../utils';
import { Pager } from '../pager';

export interface ListViewProps {
    className?: string;
    children?: any;
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
    loading?: boolean;
}
export class ListView extends React.Component<ListViewProps> {

    static defaultProps = {
        pagerPosition: 'bottom',
        layout: 'flex',
        flexDirection: 'row'
    };

    render() {
        const {
            className,
            children,
            header,
            footer,
            pageable,
            pagerPosition,
            bordered,
            layout,
            flexDirection,
            flexWrap,
            gridColumns,
            loading
        } = this.props;

        const pager = <Pager className={`k-listview-pager k-listview-pager-${ pagerPosition }`} />;

        const loader = <>
            <div className="k-loading-mask k-opaque" style={{ height: '100%', width: '100%' }}>
                <span className="k-loading-text">Loading...</span>
                <div className="k-loading-image"></div>
                <div className="k-loading-color"></div>
            </div>
        </>;

        return (
            <div className={classNames(
                className,
                "k-listview",
                {
                    'k-listview-bordered': bordered
                }
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
                    { children }
                </div>
                {footer && <div className="k-listview-footer">Footer</div>}
                {pageable && pagerPosition === "bottom" && pager}
            </div>
        );
    }
}
