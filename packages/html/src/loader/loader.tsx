import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface LoaderProps {
    className?: string;
    size?: null | 'small' | 'medium' | 'large';
    themeColor?: null | 'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse';
    animation?: 'pulsing' | 'infinite-spinner' | 'converging-spinner';
}

export const LoaderAnimationMap = {
    'pulsing': 'pulsing-2',
    'infinite-spinner': 'spinner-3',
    'converging-spinner': 'spinner-4'
};

export class Loader extends React.Component<LoaderProps> {

    static defaultProps = {
        size: 'medium',
        themeColor: 'primary',
        animation: 'pulsing'
    };

    render() {
        const {
            className,
            size,
            themeColor,
            animation
        } = this.props;

        const animationElement = <span className="k-loader-segment"></span>;

        return (
            <div className={classNames(className, 'k-loader',
                {
                    [`k-loader-${LoaderAnimationMap[animation!] || animation}`]: animation,
                    [`k-loader-${themeColor}`]: themeColor,
                    [`k-loader-${kendoThemeMaps.sizeMap[size!] || size}`]: size
                })}
            >
                <div className="k-loader-canvas">
                    {
                        animation === 'pulsing' &&
                        <>
                            {animationElement}
                            {animationElement}
                        </>
                    }
                    {
                        animation === 'infinite-spinner' &&
                        <>
                            {animationElement}
                            {animationElement}
                            {animationElement}
                        </>
                    }
                    {
                        animation === 'converging-spinner' &&
                        <>
                            {animationElement}
                            {animationElement}
                            {animationElement}
                            {animationElement}
                        </>
                    }
                </div>
            </div>
        );
    }
}
