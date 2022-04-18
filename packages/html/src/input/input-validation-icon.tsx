import * as React from 'react';
import { Icon } from '../icon';

export interface InputValidationIconProps {
    className?: string;
    valid?: boolean;
    invalid?: boolean;
    loading?: boolean;
    disabled?: boolean;
}

export class InputValidationIcon extends React.Component<InputValidationIconProps> {

    render() {
        const {
            valid,
            invalid,
            loading,
            disabled
        } = this.props;

        const iconName = invalid ? 'warning' : 'check';
        const renderValidationIcon = Boolean( valid || invalid );

        if (disabled || loading || !renderValidationIcon) {
            return <></>;
        }

        return (
            <Icon className="k-input-validation-icon" name={iconName} />
        );
    }
}
