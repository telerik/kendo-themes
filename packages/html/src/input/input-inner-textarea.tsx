import * as React from 'react';
import { classNames } from '../utils';

export interface InputInnerTextareaProps {
    className?: string;
    value?: string;
    placeholder?: string;
    rows?: number;
}

export class InputInnerTextarea extends React.Component<InputInnerTextareaProps> {

    static defaultProps = {
        value: '',
        placeholder: ''
    };

    render() {
        const {
            value,
            className,
            placeholder,
            rows
        } = this.props;

        return (
            <textarea
                className={classNames( 'k-input-inner', className )}
                placeholder={placeholder}
                rows={rows}>
                {value}
            </textarea>
        );
    }
}
