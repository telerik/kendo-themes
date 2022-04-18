import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface SwitchProps {
    className?: string;
    checked?: boolean;
    onLabel?: string;
    offLabel?: string;
    size?: null | 'small' | 'medium' | 'large';
    trackRounded?: null | 'small' | 'medium' | 'large' | 'full';
    thumbRounded?: null | 'small' | 'medium' | 'large' | 'full';
    hover?: boolean;
    focus?: boolean;
    disabled?: boolean;
}

export class Switch extends React.Component<SwitchProps> {

    static defaultProps = {
        size: 'medium',
        trackRounded: 'full',
        thumbRounded: 'full'
    };

    render() {
        const {
            className,
            checked,
            onLabel,
            offLabel,
            size,
            trackRounded,
            thumbRounded,
            hover,
            focus,
            disabled
        } = this.props;

        return (
            <span
                className={classNames(
                    className,
                    'k-switch',
                    {
                        [`k-switch-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                        'k-hover': hover,
                        'k-focus': focus,
                        'k-disabled': disabled,
                        'k-switch-on': checked,
                        'k-switch-off': !checked
                    },

                )}>
                <span
                    className={classNames(
                        'k-switch-track',
                        {
                            [`k-rounded-${kendoThemeMaps.roundedMap[trackRounded!] || trackRounded}`]: trackRounded
                        }
                    )}>
                    {onLabel && <span className="k-switch-label-on">{onLabel}</span>}
                    {offLabel && <span className="k-switch-label-off">{offLabel}</span>}
                </span>
                <span className="k-switch-thumb-wrap">
                    <span
                        className={classNames(
                            'k-switch-thumb',
                            {
                                [`k-rounded-${kendoThemeMaps.roundedMap[thumbRounded!] || thumbRounded}`]: thumbRounded
                            }
                        )}>
                    </span>
                </span>
            </span>
        );
    }
}
