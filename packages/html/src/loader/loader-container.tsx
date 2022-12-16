import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';
import { Loader, LoaderProps } from './loader';

export interface LoaderContainerProps {
    children?: React.ReactNode;
    className?: string;
    size?: LoaderProps["size"];
    themeColor?: LoaderProps["themeColor"];
    loaderType?: LoaderProps["animation"]
    position?: 'top' | 'end' | 'start';
    overlay?: 'dark' | 'light';
    panel?: boolean
}

export class LoaderContainer extends React.Component<LoaderContainerProps> {

    static defaultProps = {
        size: 'medium',
        themeColor: 'primary',
        loaderType: 'pulsing',
        position: 'top',
        overlay: 'dark',
        panel: false
    };

    render() {
        const {
            className,
            size,
            themeColor,
            position,
            overlay,
            panel,
            loaderType
        } = this.props;

        return (
            <div className={classNames(className, 'k-loader-container',
                {
                    [`k-loader-container-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                    [`k-loader-${position}`]: position,
                })}
            >
                <div className={`k-loader-container-overlay k-overlay-${overlay}`}></div>
                <div className={classNames(
                    'k-loader-container-inner',
                    {
                        [`k-loader-container-panel`]: panel
                    }
                )}>
                    <Loader size={size} themeColor={themeColor} animation={loaderType} />
                    <div className={`k-loader-container-label !k-text-${themeColor}`}>
                        Loading...
                    </div>
                </div>
            </div>
        );
    }
}
