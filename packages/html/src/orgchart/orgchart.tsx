import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';
import { OrgchartNode, OrgchartNodeProps, OrgchartGroupProps } from '../orgchart';

export interface OrgchartProps {
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    width?: string,
    height?: string,
    orientation?: 'horizontal' | 'vertical',
    justifyContent?: null | 'start' | 'center' | 'end' | 'stretch' | 'around',
}

export class Orgchart extends React.Component<OrgchartProps> {

    static defaultProps = {
        width: '100%',
        height: '300px',
        orientation: 'horizontal',
    };

    render() {
        const {
            children,
            className,
            width,
            height,
            orientation,
            justifyContent,
            ...htmlAttributes
        } = this.props;

        const chartNodes : React.ReactElement<OrgchartNodeProps>[] = [];
        const chartGroups : React.ReactElement<OrgchartGroupProps>[] = [];

        if (children) {
            React.Children.map(children, (child) => {
                if (child.type === OrgchartNode) {
                    chartNodes.push( child );
                } else {
                    chartGroups.push( child );
                }
            });
        }

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    'k-orgchart',
                    className
                )}>

                <div className="k-orgchart-container" style={{ width: width, height: height }}>
                    <div
                        className={classNames(
                            'k-orgchart-group',
                            'k-pos-absolute',
                            {
                                [`k-${kendoThemeMaps.orientationMap[orientation!] || orientation}`]: orientation,
                                [`k-justify-content-${justifyContent}`]: justifyContent,
                            }
                        )}
                        style={{ width: '100%' }}>

                        {chartNodes.length > 0 &&
                                                <div
                                                    className={classNames(
                                                        'k-orgchart-node-container',
                                                        'k-justify-content-around',
                                                        {
                                                            [`k-${kendoThemeMaps.orientationMap[orientation!] || orientation}`]: orientation,
                                                        }
                                                    )}>
                                                    <>{chartNodes}</>
                                                </div>
                        }
                        <>{chartGroups}</>
                    </div>
                </div>
            </div>
        );
    }
}
