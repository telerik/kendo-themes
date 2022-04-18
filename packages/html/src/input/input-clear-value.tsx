import * as React from 'react';
import { Icon } from '../icon';

export interface InputClearValueProps {
    className?: string;
    value?: string;
    readonly?: boolean;
    loading?: boolean;
    disabled?: boolean;
}

export class InputClearValue extends React.Component<InputClearValueProps> {

    render() {
        const {
            readonly,
            loading,
            disabled,
            value
        } = this.props;

        if (disabled || readonly || loading || !value ) {
            return <></>;
        }

        return (
            <span className="k-clear-value">
                <Icon name="x" />
            </span>
        );
    }
}
