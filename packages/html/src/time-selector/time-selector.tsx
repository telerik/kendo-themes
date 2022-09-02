import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';
import { Button } from '../button';

export interface TimeSelectorProps {
    className?: string;
    value?: string;
    size?: null | 'small' | 'medium' | 'large';
    disabled?: boolean;
}

export class TimeSelector extends React.Component<TimeSelectorProps> {

    static defaultProps = {
        size: 'medium'
    };

    render() {

        const {
            className,
            size
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-timeselector',
                    {
                        [`k-timeselector-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                    }

                )}>
                <div className="k-time-part">
                    <div className="k-time-header">
                        <span className="k-title">10:00:00 AM</span>
                        <Button fillMode="flat" size={size} className="k-time-now">Now</Button>
                    </div>
                    <div className="k-time-list-container">
                        <span className="k-time-highlight"></span>
                        <div className="k-time-list-wrapper">
                            <span className="k-title">Hour</span>
                            <div className="k-time-list">
                                <div className="k-content k-scrollable k-time-container">
                                    <ul className="k-reset" style={{ transform: "translateY(97px)" }}>
                                        {[ ...Array(24).keys() ].map((hour) => <li key={hour} className="k-item"><span>{hour}</span></li>)}
                                    </ul>
                                    <div className="k-scrollable-placeholder"></div>
                                </div>
                            </div>
                        </div>
                        <div className="k-time-separator">:</div>
                        <div className="k-time-list-wrapper k-focus">
                            <span className="k-title">Minute</span>
                            <div className="k-time-list">
                                <div className="k-content k-scrollable k-time-container">
                                    <ul className="k-reset" style={{ transform: "translateY(97px)" }}>
                                        {[ ...Array(60).keys() ].map((minute) => <li key={minute} className="k-item"><span>{minute}</span></li>)}
                                    </ul>
                                    <div className="k-scrollable-placeholder"></div>
                                </div>
                            </div>
                        </div>
                        <div className="k-time-separator">:</div>
                        <div className="k-time-list-wrapper">
                            <span className="k-title">Second</span>
                            <div className="k-time-list">
                                <div className="k-content k-scrollable k-time-container">
                                    <ul className="k-reset" style={{ transform: "translateY(97px)" }}>
                                        {[ ...Array(60).keys() ].map((second) => <li key={second} className="k-item"><span>{second}</span></li>)}
                                    </ul>
                                    <div className="k-scrollable-placeholder"></div>
                                </div>
                            </div>
                        </div>
                        <div className="k-time-separator">:</div>
                        <div className="k-time-list-wrapper">
                            <span className="k-title">AM/PM</span>
                            <div className="k-time-list">
                                <div className="k-content k-scrollable k-time-container">
                                    <ul className="k-reset" style={{ transform: "translateY(97px)" }}>
                                        <li className="k-item">
                                            <span>AM</span>
                                        </li>
                                        <li className="k-item">
                                            <span>PM</span>
                                        </li>
                                    </ul>
                                    <div className="k-scrollable-placeholder"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
