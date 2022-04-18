import * as React from 'react';

export interface InputInnerInputProps {
    className?: string;
    value?: string;
    type?: string;
    placeholder?: string;
    autocomplete?: string;
}

export class InputInnerInput extends React.Component<InputInnerInputProps> {

    static defaultProps = {
        type: 'text',
        autocomplete: 'off',
        value: '',
        placeholder: ''
    };

    render() {
        const {
            type,
            value,
            placeholder,
            autocomplete
        } = this.props;

        return (
            <input
                type={type}
                className="k-input-inner"
                placeholder={placeholder}
                autoComplete={autocomplete}
                defaultValue={value} />
        );
    }
}
