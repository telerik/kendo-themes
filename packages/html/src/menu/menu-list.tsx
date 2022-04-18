import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';


export interface MenuListProps {
    className?: string;
    children?: React.ReactNode;
    size?: null | 'small' | 'medium' | 'large';
}

export class MenuList extends React.Component<MenuListProps> {

    static defaultProps = {
        size: 'medium',
    };

    render() {
        const {
            className,
            children,
            size,
        } = this.props;

        if (!children) {
            return <></>;
        }

        return (
            <ul
                className={classNames(
                    className,
                    'k-menu-group',
                    {
                        [`k-menu-group-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                    }
                )}>
                {children}
            </ul>
        );
    }
}
