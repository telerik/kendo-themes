import * as React from 'react';
import { classNames } from '../utils';
import { FloatingLabel } from '../floating-label';
import { DateInput } from '../dateinput';
import { Button } from '../button';

export interface DateRangePickerProps {
    className?: string;
    size?: null | 'small' | 'medium' | 'large';
    rounded?: null | 'small' | 'medium' | 'large' | 'full';
    fillMode?: null | 'solid' | 'outline' | 'flat';
    swapButton?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
}

export class DateRangePicker extends React.Component<DateRangePickerProps> {

    render() {
        const {
            className,
            size,
            rounded,
            fillMode,
            swapButton,
            disabled,
            style
        } = this.props;

        return (
            <span
                style={style}
                className={classNames(
                    className,
                    'k-daterangepicker',
                    {
                        'k-disabled': disabled
                    },
                )}
            >
                <FloatingLabel label="Start">
                    <DateInput
                        showSpinButton={false}
                        size={size}
                        rounded={rounded}
                        fillMode={fillMode}
                    />
                </FloatingLabel>
                {swapButton && (
                    <Button
                        rounded={rounded}
                        size={size}
                        fillMode="flat"
                        icon="arrows-swap"
                        iconClassName="k-rotate-90"
                    />
                )}
                <FloatingLabel label="End">
                    <DateInput
                        showSpinButton={false}
                        size={size}
                        rounded={rounded}
                        fillMode={fillMode}
                    />
                </FloatingLabel>
            </span>
        );

    }
}
