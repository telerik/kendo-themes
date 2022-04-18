import * as React from 'react';
import { Icon } from '../icon';

export interface InputLoadingIconProps {
    className?: string;
    loading?: boolean;
    disabled?: boolean;
}

export class InputLoadingIcon extends React.Component<InputLoadingIconProps> {

    render() {
        const {
            loading,
            disabled
        } = this.props;

        if (disabled || !loading) {
            return <></>;
        }

        return (
            <Icon className="k-input-loading-icon" name="loading" />
        );
    }
}
