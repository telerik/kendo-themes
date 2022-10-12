import * as React from 'react';
import { classNames } from '../utils';

export interface ToolbarItemProps {
    children?: React.ReactNode;
    className?: string;
    focus?: boolean;
}

export class ToolbarItem extends React.Component<ToolbarItemProps> {

    render() {
        const {
            children,
            className,
            focus
        } = this.props;

        return (
            <div className={classNames(
                className,
                'k-toolbar-item',
                {
                    'k-focus': focus
                }
            )}>
                {children}
            </div>
        );
    }
}
