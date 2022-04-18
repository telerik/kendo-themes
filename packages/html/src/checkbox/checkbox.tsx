import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface CheckboxProps {
    id?: string;
    className?: string;
    checked?: boolean;
    indeterminate?: boolean;
    size?: null | 'small' | 'medium' | 'large';
    rounded?: null | 'small' | 'medium' | 'large';
    hover?: boolean;
    focus?: boolean;
    invalid?: boolean;
    required?: boolean;
    disabled?: boolean;
}

export class Checkbox extends React.Component<CheckboxProps> {

    static defaultProps = {
        size: 'medium',
        rounded: 'medium'
    };

    render() {
        const {
            id,
            className,
            checked,
            indeterminate,
            size,
            rounded,
            hover,
            focus,
            invalid,
            disabled,
            required
        } = this.props;

        return (
            <span className="k-checkbox-wrap">
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    required={required}
                    className={classNames(
                        className,
                        'k-checkbox',
                        {
                            [`k-checkbox-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                            [`k-rounded-${kendoThemeMaps.roundedMap[rounded!] || rounded}`]: rounded,
                            'k-hover': hover,
                            'k-focus': focus,
                            'k-disabled': disabled,
                            'k-checked': checked,
                            'k-invalid': invalid,
                            'k-indeterminate': !checked && indeterminate
                        }
                    )}
                />
            </span>
        );
    }
}
