import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';
import { Button } from '../button';

export interface SplitButtonProps {
    children?: React.ReactNode;
    className?: string;
    text?: string;
    icon?: string;
    arrowIconName?: string;
    size?: null | 'small' | 'medium' | 'large';
    rounded: null | 'small' | 'medium' | 'large' | 'full';
    fillMode?: null | 'solid' | 'outline' | 'flat' | 'link' | 'clear';
    themeColor?: null | 'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse';
    hover?: boolean;
    focus?: boolean;
    active?: boolean;
    selected?: boolean;
    disabled?: boolean;
}

export class SplitButton extends React.Component<SplitButtonProps> {

    static defaultProps = {
        size: 'medium',
        rounded: 'medium',
        fillMode: 'solid',
        themeColor: 'base',
        arrowIconName: 'arrow-s'
    };

    render() {
        const {
            children,
            className,
            text,
            icon,
            arrowIconName,
            size,
            rounded,
            fillMode,
            themeColor,
            hover,
            focus,
            active,
            selected,
            disabled
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-split-button',
                    'k-button-group',
                    {
                        [`k-rounded-${kendoThemeMaps.roundedMap[rounded!] || rounded}`]: rounded
                    }
                )}>
                <Button
                    text={text}
                    icon={icon}
                    size={size}
                    rounded={rounded}
                    fillMode={fillMode}
                    themeColor={themeColor}
                    hover={hover}
                    focus={focus}
                    active={active}
                    selected={selected}
                    disabled={disabled}
                >
                    {children}
                </Button>
                <Button
                    className="k-split-button-arrow"
                    icon={arrowIconName}
                    size={size}
                    rounded={rounded}
                    fillMode={fillMode}
                    disabled={disabled}
                >
                </Button>
            </div>
        );
    }
}
