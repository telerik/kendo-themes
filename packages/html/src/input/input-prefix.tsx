import * as React from 'react';
import { classNames } from '../utils';

export interface InputPrefixProps {
    children?: React.ReactNode;
    className?: string;
}

export class InputPrefix extends React.Component<InputPrefixProps> {

    render() {
        const {
            className,
            children,
        } = this.props;

        if (!children) {
            return <></>;
        }

        return (
            <span
                className={classNames(
                    className,
                    'k-input-prefix'
                )}>
                {children}
            </span>
        );
    }
}
