import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';
import { Button } from '../button';

export interface SignatureProps {
    className?: string,
    size?: null | 'small' | 'medium' | 'large';
    rounded?: null | 'small' | 'medium' | 'large' | 'full';
    fillMode?: null | 'solid' | 'outline' | 'flat';
    hover?: boolean,
    focus?: boolean,
    valid?: boolean,
    invalid?: boolean,
    disabled?: boolean,
    maximized?: boolean
}

export class Signature extends React.Component<SignatureProps> {

    static defaultProps = {
        size: 'medium',
        rounded: 'medium',
        fillMode: 'solid'
    };

    render() {
        const {
            className,
            size,
            rounded,
            fillMode,
            hover,
            focus,
            valid,
            invalid,
            disabled,
            maximized
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-signature',
                    'k-input',
                    {
                        [`k-signature-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                        [`k-input-${fillMode}`]: fillMode,
                        [`k-rounded-${kendoThemeMaps.roundedMap[rounded!] || rounded}`]: rounded,
                        'k-hover': hover,
                        'k-focus': focus,
                        'k-valid': valid,
                        'k-invalid': invalid,
                        'k-disabled': disabled,
                        'k-signature-maximized': maximized
                    }
                )}>
                <div
                    className={classNames(
                        className,
                        'k-signature-actions',
                        'k-signature-actions-top'
                    )}>
                    <Button
                        className={classNames(
                            className,
                            'k-signature-action',
                            'k-signature-maximize',
                        )}
                        icon="window-maximize"
                        rounded={this.props.rounded}
                        size={this.props.size}
                        fillMode="flat"
                    />
                    <Button
                        className={classNames(
                            className,
                            'k-signature-action',
                            'k-signature-minimize',
                            'k-hidden'
                        )}
                        icon="window-minimize"
                        rounded={this.props.rounded}
                        size={this.props.size}
                        fillMode="flat"
                    />
                </div>
                <canvas className="k-signature-canvas"></canvas>
                <div className="k-signature-line"></div>
                <div
                    className={classNames(
                        className,
                        'k-signature-actions',
                        'k-signature-actions-bottom'
                    )}>
                    <Button
                        className={classNames(
                            className,
                            'k-signature-action',
                            'k-signature-clear',
                        )}
                        icon="close"
                        rounded={this.props.rounded}
                        size={this.props.size}
                        fillMode="flat"
                    />
                </div>
            </div>
        );
    }

}
