import * as React from 'react';
import { classNames } from '../utils';

export interface ToolbarSeparatorProps {
    className?: string;
}

export class ToolbarSeparator extends React.Component<ToolbarSeparatorProps> {

    render() {
        const {
            className
        } = this.props;

        return (
            <div className={classNames(className, 'k-separator')}></div>
        );
    }
}
