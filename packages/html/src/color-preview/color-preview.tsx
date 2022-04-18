import * as React from 'react';
import { Icon } from '../icon';
import { classNames } from '../utils';

export interface ColorPreviewProps {
    className?: string;
    color?: string;
    iconName?: string;
}

export class ColorPreview extends React.Component<ColorPreviewProps> {

    render() {
        const {
            className,
            color,
            iconName
        } = this.props;

        return (
            <span
                className={classNames(
                    'k-color-preview',
                    {
                        'k-icon-color-preview': iconName,
                        'k-no-color': !color
                    },
                    className
                )}
            >
                {iconName && (
                    <Icon name={iconName} className="k-color-preview-icon" />
                )}
                <span
                    className="k-color-preview-mask"
                    style={{ backgroundColor: color }}>
                </span>
            </span>
        );
    }
}
