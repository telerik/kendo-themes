import * as React from 'react';
import { classNames } from '../utils';

export interface ProgressBarProps {
    className?: string;
    dir?: 'ltr' | 'rtl';
    disabled?: boolean;
    height?: string;
    indeterminate?: boolean;
    label?: boolean;
    labelPosition?: 'start' | 'center' | 'end';
    orientation?: 'horizontal' | 'vertical';
    reverse?: boolean;
    value?: string;
    width?: string;
}

export class ProgressBar extends React.Component<ProgressBarProps> {

    static defaultProps = {
        indeterminate: false,
        label: true,
        labelPosition: 'start',
        orientation: 'horizontal',
        reverse: false,
        value: "0"
    };

    render() {

        const {
            className,
            disabled,
            height,
            indeterminate,
            label,
            orientation,
            reverse,
            value,
            width,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-progressbar',
                    {
                        [`k-progressbar-${orientation}`]: orientation,
                        'k-progressbar-indeterminate': indeterminate,
                        'k-progressbar-reverse': reverse,
                        'k-disabled': disabled
                    },
                )} style={ orientation === "horizontal" ? { "--kendo-progressbar-progress": value, height: height } as React.CSSProperties : { "--kendo-progressbar-progress": value, width: width } as React.CSSProperties } >
                <span className={classNames(
                    'k-progress-status-wrap',
                    {
                        [`k-progress-${this.props.labelPosition}`]: this.props.labelPosition && !indeterminate
                    }
                )}>
                    {label && <span className="k-progress-status">{this.props.value}%</span>}
                </span>
                {!indeterminate &&
                <div className="k-selected">
                    <span className={classNames(
                        'k-progress-status-wrap',
                        {
                            [`k-progress-${this.props.labelPosition}`]: this.props.labelPosition
                        }
                    )}>
                        {label && <span className="k-progress-status">{this.props.value}%</span>}
                    </span>
                </div>
                }
            </div>
        );
    }
}
