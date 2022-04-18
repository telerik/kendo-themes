import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface RadioButtonProps {
    id?: string;
    className?: string;
    checked?: boolean;
    size?: null | 'small' | 'medium' | 'large';
    hover?: boolean;
    focus?: boolean;
    invalid?: boolean;
    required?: boolean;
    disabled?: boolean;
}

export class RadioButton extends React.Component<RadioButtonProps> {

    static defaultProps = {
        size: 'medium'
    };

    render() {
        const {
            className,
            id,
            checked,
            size,
            hover,
            focus,
            invalid,
            disabled,
            required
        } = this.props;

        return (
            <span className="k-radio-wrap">
                <input
                    type="radio"
                    id={id}
                    checked={checked}
                    required={required}
                    className={classNames(
                        className,
                        'k-radio',
                        {
                            [`k-radio-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                            'k-hover': hover,
                            'k-focus': focus,
                            'k-disabled': disabled,
                            'k-checked': checked,
                            'k-invalid': invalid
                        }
                    )}
                />
            </span>
        );
    }
}
