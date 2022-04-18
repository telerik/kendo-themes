import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';
import { OrgchartNodeProps } from '../orgchart';
import { Button } from '../button';

export interface OrgchartGroupProps {
    children?: React.ReactElement<OrgchartNodeProps> | React.ReactElement<OrgchartNodeProps>[];
    className?: string;
    title?: string;
    subtitle?: string;
    line?: boolean;
    plus?: boolean,
    focus?: boolean,
    orientation: 'horizontal' | 'vertical';
}

export class OrgchartGroup extends React.Component<OrgchartGroupProps> {

    static defaultProps = {
        orientation: 'horizontal',
    };

    render() {
        const {
            children,
            className,
            title,
            subtitle,
            line,
            plus,
            focus,
            orientation,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    'k-orgchart-node-group',
                    'k-vstack',
                    'k-align-items-center',
                    className
                )}>

                <div
                    className={classNames(
                        'k-orgchart-node-group-container',
                        'k-vstack',
                        {
                            'k-focus': focus,
                        }
                    )}>

                    {title && <div className="k-orgchart-node-group-title">{title}</div>}
                    {subtitle && <div className="k-orgchart-node-group-subtitle">{subtitle}</div>}

                    <div
                        className={classNames(
                            'k-orgchart-node-container',
                            {
                                [`k-${kendoThemeMaps.orientationMap[orientation!] || orientation}`]: orientation,
                            }
                        )}>
                        {children}
                    </div>
                </div>
                {line && <div className="k-orgchart-line k-orgchart-line-v"></div> }
                {plus && <Button className="k-orgchart-button" icon="plus"></Button> }
            </div>
        );
    }
}
