import * as React from 'react';
import { classNames } from '../utils';
import { Button } from '../button';


export interface MenuButtonProps {
    className?: string;
    dir?: string;
    text?: string;
    icon?: string;
    size?: null | 'small' | 'medium' | 'large';
    rounded: null | 'small' | 'medium' | 'large' | 'full';
    fillMode?: null | 'solid' | 'outline' | 'flat' | 'link' | 'clear';
    themeColor?: null | 'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse';
    hover?: boolean;
    focus?: boolean;
    active?: boolean;
    selected?: boolean;
    disabled?: boolean;
    showArrow?: boolean;
    arrowIconName?: string;
}

export class MenuButton extends React.Component<MenuButtonProps> {

    static defaultProps = {
        size: 'medium',
        rounded: 'medium',
        fillMode: 'solid',
        themeColor: 'base',
        showArrow: true,
        arrowIconName: 'arrow-s'
    };

    render() {
        const {
            className,
            text,
            icon,
            size,
            rounded,
            fillMode,
            themeColor,
            hover,
            focus,
            active,
            selected,
            disabled,
            showArrow,
            arrowIconName,
        } = this.props;

        return (
            <Button
                dir={this.props.dir}
                className={classNames(
                    className,
                    'k-menu-button'
                )}
                text={text}
                size={size}
                rounded={rounded}
                fillMode={fillMode}
                themeColor={themeColor}
                hover={hover}
                focus={focus}
                active={active}
                selected={selected}
                disabled={disabled}
                icon={icon}
                showArrow={showArrow}
                arrowIconName={arrowIconName}
            >
            </Button>
        );
    }
}
