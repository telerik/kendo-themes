import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface LayoutProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    type?: null | 'stack' | 'flex' | 'grid';
    orientation?: null | 'horizontal' | 'vertical';
    alignItems?: null | 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: null | 'start' | 'center' | 'end' | 'stretch';
    justifyItems?: null | 'start' | 'center' | 'end' | 'stretch';
    wrap?: boolean,
}

export class Layout extends React.Component<LayoutProps> {

    static defaultProps = {
        children: [],
        type: null,
        orientation: null,
        alignItems: null,
        justifyContent: null,
        justifyItems: null,
        wrap: false,
    };

    render() {
        const {
            children,
            className,
            type,
            orientation,
            alignItems,
            justifyContent,
            justifyItems,
            wrap,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                style={this.props.style}
                {...htmlAttributes}
                className={classNames(
                    {
                        [`k-${type}-layout`]: type,
                        [`k-${kendoThemeMaps.orientationMap[orientation!] || orientation}`]: orientation,
                        [`k-align-items-${alignItems}`]: alignItems,
                        [`k-justify-content-${justifyContent}`]: justifyContent,
                        [`k-justify-items-${justifyItems}`]: justifyItems,
                        [`k-flex-wrap`]: wrap
                    },
                    className
                )}>
                {children}
            </div>
        );
    }
}
