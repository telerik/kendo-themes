import * as React from 'react';
import { classNames } from '../utils';

export interface InputSuffixProps {
    children?: React.ReactNode;
    className?: string;
}

export class InputSuffix extends React.Component<InputSuffixProps> {

    render() {
        const {
            className,
            children
        } = this.props;

        if (!children) {
            return <></>;
        }

        return (
            <span
                className={classNames(
                    className,
                    'k-input-suffix'
                )}>
                {children}
            </span>
        );
    }
}
