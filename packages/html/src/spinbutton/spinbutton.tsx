import * as React from 'react';
import { Button } from '../button';
import { classNames } from '../utils';

export interface SpinButtonProps {
    className?: string;
    size?: null | 'small' | 'medium' | 'large';
    fillMode?: null | 'solid' | 'outline' | 'flat' | 'link' | 'clear';
}

export class SpinButton extends React.Component<SpinButtonProps> {

    render() {
        const {
            className,
            size,
            fillMode
        } = this.props;

        return (
            <span
                className={classNames(
                    className,
                    'k-spin-button'
                )}>
                <Button
                    className="k-spinner-increase"
                    icon="caret-alt-up"
                    rounded={null}
                    size={size}
                    fillMode={fillMode}>
                </Button>
                <Button
                    className="k-spinner-decrease"
                    icon="caret-alt-down"
                    rounded={null}
                    size={size}
                    fillMode={fillMode}>
                </Button>
            </span>
        );
    }
}
